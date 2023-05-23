'use client';
import React, { createContext, useMemo, useState, useContext } from 'react';
import { SocialProfile } from '@/data/mockProfileData';

export type Integration = SocialProfile & {
  type: string;
  label: string;
};

interface IntegrationsCtxState {
  integrations: Integration[];
  newIntegration: Integration | null;
}

interface IntegrationsCtxValue extends IntegrationsCtxState {
  update: (input: { [key: string]: any } | Function) => void;
}

const defaultCtxValue = {
  integrations: [],
  newIntegration: null,
  update: () => {},
};

const IntegrationsContext =
  createContext<IntegrationsCtxValue>(defaultCtxValue);

const IntegrationsContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<IntegrationsCtxState>({
    integrations: [],
    newIntegration: null,
  });

  //behaves similar to useState setter, also acceps a function in order to get previous state
  const update = (input: { [key: string]: any } | Function) =>
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
