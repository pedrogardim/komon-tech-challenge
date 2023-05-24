import { useState } from 'react';
import { auth } from '@/services/mockAuth';
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
          return await auth.signInWithInstagram();
        case 'youtube':
          return await auth.signInWithYouTube();
        case 'facebook':
          return await auth.signInWithFacebook();
        case 'tiktok':
          return await auth.signInWithTikTok();
        case 'twitter':
          return await auth.signInWithTwitter();
        case 'linkedin':
          return await auth.signInWithLinkedIn();
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
