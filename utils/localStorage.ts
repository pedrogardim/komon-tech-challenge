import { Integration } from '@/context/integrationsContext';

export const getStoredIntegrations = () => {
  let stored = localStorage.getItem('integrations');
  return stored ? JSON.parse(stored) : [];
};

export const writeLocalIntegrations = (arr: Integration[]) => {
  localStorage.setItem('integrations', JSON.stringify(arr));
};
