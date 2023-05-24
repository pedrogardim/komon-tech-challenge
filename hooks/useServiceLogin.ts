import { useState } from 'react';
import {
  signInWithInstagram,
  signInWithYouTube,
  signInWithFacebook,
  signInWithTikTok,
  signInWithTwitter,
  signInWithLinkedIn,
} from '@/services/auth';

import { SocialProfile } from '@/types/integrations';

const useServiceLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const loginWithService: (
    serviceName: string
  ) => Promise<SocialProfile | undefined> = async (serviceName) => {
    setIsLoading(true);
    setError(null);
    try {
      switch (serviceName) {
        case 'instagram':
          return await signInWithInstagram();
        case 'youtube':
          return await signInWithYouTube();
        case 'facebook':
          return await signInWithFacebook();
        case 'tiktok':
          return await signInWithTikTok();
        case 'twitter':
          return await signInWithTwitter();
        case 'linkedin':
          return await signInWithLinkedIn();
        default:
          throw new Error(`Unsupported service: ${serviceName}`);
      }
    } catch (e) {
      let error = e as Error;
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { loginWithService, isLoading, error };
};

export default useServiceLogin;
