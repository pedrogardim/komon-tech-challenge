'use client';
import React, { createContext, useMemo, useState, useContext } from 'react';

const IntegrationsContext = createContext();

const IntegrationsContextProvider = ({ children }) => {
  const [data, setData] = useState({ integrations: [] });

  const update = (obj) =>
    setData((prev) => {
      const objToUpdate = { ...obj };
      Object.keys(objToUpdate).forEach((key) => {
        if (typeof objToUpdate[key] === 'function')
          objToUpdate[key] = objToUpdate[key](prev[key]);
      });

      return { ...prev, ...objToUpdate };
    });

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
