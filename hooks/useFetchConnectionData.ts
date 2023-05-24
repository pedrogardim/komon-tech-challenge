import { useEffect, useState, useCallback } from 'react';
import { mockPostsData } from '@/data/mockPostsData';
import { SocialProfile } from '@/data/mockProfileData';
import { useIntegrationsContext } from '@/context/integrationsContext';
import { useSnackbar } from '@/components/ui/Snackbar';

import { fetchPosts, fetchProfileData } from '@/services/mockFetch';
import {
  repostPost,
  setPostAsProfilePicture,
  createPool,
} from '@/services/integrations';

const useFetchConnectionData = (connectionId: string, searchValue: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [arePostsLoading, setArePostsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [profileData, setProfileData] = useState<SocialProfile>();
  const [posts, setPosts] = useState<typeof mockPostsData>();

  const { openSnackbar } = useSnackbar();
  const { integrations } = useIntegrationsContext();

  const connectionInfo = integrations.find((e) => e.id === connectionId);
  const { type } = connectionInfo || {};

  const onCreatePool = async (selection: number[]) => {
    try {
      const res = await createPool(selection);
      openSnackbar(`Pool created with ${selection.length} posts`);
    } catch (e) {
      let error = e as Error;
      setError(error.message);
      openSnackbar(error.message);
    }
  };

  const onRepost = async (id: number) => {
    try {
      const res = await repostPost(id);
      openSnackbar('Reposted on Komon');
    } catch (e) {
      let error = e as Error;
      setError(error.message);
      openSnackbar(error.message);
    }
  };

  const onSetAsProfilePic = async (id: number) => {
    try {
      const res = await setPostAsProfilePicture(id);
      openSnackbar('Post picture set as profile pic!');
    } catch (e) {
      let error = e as Error;
      setError(error.message);
      openSnackbar(error.message);
    }
  };

  const fetchConnectionData: () => Promise<void> = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const profileData = await fetchProfileData(type);
      setProfileData(profileData);
    } catch (e) {
      let error = e as Error;
      setError(error.message);
      openSnackbar(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [type, openSnackbar]);

  useEffect(() => {
    setArePostsLoading(true);
    let debounceTimeout = setTimeout(async () => {
      const res = await fetchPosts({ searchValue });
      setPosts(res);
      setArePostsLoading(false);
    }, 500);
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchValue]);

  useEffect(() => {
    fetchConnectionData();
  }, [connectionInfo, fetchConnectionData]);

  return {
    profileData,
    posts,
    isLoading,
    connectionInfo,
    arePostsLoading,
    onRepost,
    onSetAsProfilePic,
    onCreatePool,
  };
};

export default useFetchConnectionData;
