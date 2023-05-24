import { useEffect, useState, useCallback } from 'react';
import { mockPostsData } from '@/data/mockPostsData';
import { SocialProfile } from '@/data/mockProfileData';
import { useIntegrationsContext } from '@/context/integrationsContext';
import { fetchPosts, fetchProfileData } from '@/services/mockFetch';

const useFetchConnectionData = (connectionId: string, searchValue: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [arePostsLoading, setArePostsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [profileData, setProfileData] = useState<SocialProfile>();
  const [postCards, setPostCards] = useState<typeof mockPostsData>();
  const { integrations, update } = useIntegrationsContext();
  const connectionInfo = integrations.find((e) => e.id === connectionId);
  const { type } = connectionInfo || {};

  const fetchConnectionData: () => Promise<void> = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const profileData = await fetchProfileData(type);
      setProfileData(profileData);
    } catch (e) {
      let error = e as Error;
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [type]);

  useEffect(() => {
    setArePostsLoading(true);
    let debounceTimeout = setTimeout(async () => {
      const res = await fetchPosts({ searchValue });
      setPostCards(res);
      setArePostsLoading(false);
    }, 500);
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchValue]);

  useEffect(() => {
    fetchConnectionData();
  }, [connectionInfo, fetchConnectionData]);

  return { profileData, postCards, isLoading, connectionInfo, arePostsLoading };
};

export default useFetchConnectionData;
