import { useEffect, useState } from 'react';

const useServiceLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const loginWithService = async (serviceName: string) => {
    setIsLoading(true);
    setError(null);
    try {
      switch (serviceName) {
        case 'instagram':
          // await auth.signInWithFacebook();
          break;
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
