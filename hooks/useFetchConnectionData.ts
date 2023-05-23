import { useEffect, useState, useCallback } from 'react';
import { auth } from '@/services/mockAuth';
import { SocialProfile, mockProfileData } from '@/data/mockProfileData';
import { useIntegrationsContext } from '@/context/integrationsContext';

const useFetchConnectionData = (connectionId: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [profileData, setProfileData] = useState<SocialProfile>();
  const [postItems, setPostItems] = useState<[]>();
  const { integrations, update } = useIntegrationsContext();
  const connectionInfo = integrations.find((e) => e.id === connectionId);
  const { type } = connectionInfo || {};

  const fetchConnectionData: () => Promise<void> = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const profileResponse = await new Promise<SocialProfile>(
        (resolve, reject) => {
          setTimeout(() => {
            resolve(mockProfileData[type]);
          }, 1000);
        }
      );
      setProfileData(profileResponse);

      //   const itemsResponse = await new Promise<[]>((resolve, reject) => {
      //     setTimeout(() => {
      //       resolve(mockProfileData[type]);
      //     }, 1000);
      //   });

      //   setPostItems(itemsResponse);
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

  return { profileData, postItems, isLoading, connectionInfo };
};

export default useFetchConnectionData;
