import { useEffect, useState, useCallback } from 'react';
import { mockPostsData } from '@/data/mockPostsData';
import { SocialProfile } from '@/data/mockProfileData';
import { useIntegrationsContext } from '@/context/integrationsContext';
import { fetchPosts, fetchProfileData } from '@/services/mockFetch';

const useFetchConnectionData = (connectionId: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [profileData, setProfileData] = useState<SocialProfile>();
  const [PostCards, setPostCards] = useState<typeof mockPostsData>();
  const { integrations, update } = useIntegrationsContext();
  const connectionInfo = integrations.find((e) => e.id === connectionId);
  const { type } = connectionInfo || {};

  const fetchConnectionData: () => Promise<void> = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const profileResponse = await fetchProfileData(type);
      setProfileData(profileResponse);

      const itemsResponse = await fetchPosts({});

      setPostCards(itemsResponse);
    } catch (e) {
      let error = e as Error;
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [type]);

  useEffect(() => {
    fetchConnectionData();
  }, [connectionInfo, fetchConnectionData]);

  return { profileData, PostCards, isLoading, connectionInfo };
};

export default useFetchConnectionData;
