import { Integration } from '@/context/integrationsContext';
import {
  getStoredIntegrations,
  writeLocalIntegrations,
} from '@/utils/localStorage';

export const loadIntegrations = async () =>
  new Promise<Integration[]>((resolve, reject) => {
    //mock a endpoint call with localStorage
    setTimeout(() => {
      resolve(getStoredIntegrations());
    }, 500);
  });

export const addIntegration = async (integration: Integration) =>
  new Promise<boolean>((resolve, reject) => {
    //mock a endpoint call with localStorage
    setTimeout(() => {
      let items = getStoredIntegrations();
      items.push(integration);
      writeLocalIntegrations(items);
      resolve(true);
    }, 500);
  });

export const editIntegration = async (integration: Integration) =>
  new Promise<boolean>((resolve, reject) => {
    //mock a endpoint call with localStorage
    setTimeout(() => {
      let items = getStoredIntegrations();
      let itemIndex = items.findIndex(
        (item: Integration) => item.id === integration.id
      );
      items[itemIndex] = { ...integration };
      writeLocalIntegrations(items);
      resolve(true);
    }, 500);
  });

export const deleteIntegration = async (id: string) =>
  new Promise<boolean>((resolve, reject) => {
    //mock a endpoint call with localStorage
    setTimeout(() => {
      let items = getStoredIntegrations();
      items = items.filter((item: Integration) => item.id !== id);
      writeLocalIntegrations(items);
      resolve(true);
    }, 500);
  });

export const repostPost = async (id: number) =>
  new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });

export const setPostAsProfilePicture = async (id: number) =>
  new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });

export const createPool = async (selection: number[]) =>
  new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
