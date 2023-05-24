'use client';
import React, {
  createContext,
  useMemo,
  useState,
  useContext,
  useEffect,
} from 'react';
import { SocialProfile } from '@/data/mockProfileData';

import { loadIntegrations } from '@/services/integrations';

export type Integration = {
  id: string;
  type: string;
  label: string;
  username: string;
};
export interface IntegrationsCtxState {
  integrations: Integration[];
  newIntegration: (Integration & SocialProfile) | null;
  isLoading: boolean;
}

interface IntegrationsCtxValue extends IntegrationsCtxState {
  update: (input: { [key: string]: any } | Function) => void;
}

const defaultCtxValue = {
  integrations: [],
  newIntegration: null,
  isLoading: true,
  update: () => {},
};

const IntegrationsContext =
  createContext<IntegrationsCtxValue>(defaultCtxValue);

const IntegrationsContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<IntegrationsCtxState>({
    isLoading: true,
    integrations: [],
    newIntegration: null,
  });

  //load user integrations on startup
  useEffect(() => {
    loadIntegrations().then((integrations: Integration[]) => {
      update({ integrations, isLoading: false });
    });
  }, []);

  //behaves similar to useState setter, also acceps a function in order to get previous state
  const update = (
    input: { [key: string]: any } | ((prev: IntegrationsCtxState) => void)
  ) =>
    setData((prev) => ({
      ...prev,
      ...(typeof input === 'function' ? input(prev) : { ...input }),
    }));

  const value = useMemo(
    () => ({
      ...data,
      update,
    }),
    [data]
  );

  return (
    <IntegrationsContext.Provider value={value}>
      {children}
    </IntegrationsContext.Provider>
  );
};

const useIntegrationsContext = () => useContext(IntegrationsContext);

export { IntegrationsContextProvider, useIntegrationsContext };
