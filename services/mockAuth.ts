import { mockProfileData } from '@/data/mockProfileData';

export const auth = {
  signInWithInstagram: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let userData = mockProfileData.instagram;
        resolve(userData);
      }, 2000);
    });
  },
  signInWithYouTube: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let userData = mockProfileData.youtube;
        resolve(userData);
      }, 2000);
    });
  },
  signInWithFacebook: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let userData = mockProfileData.facebook;
        resolve(userData);
      }, 2000);
    });
  },
  signInWithTikTok: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let userData = mockProfileData.tiktok;
        resolve(userData);
      }, 2000);
    });
  },
  signInWithTwitter: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let userData = mockProfileData.twitter;
        resolve(userData);
      }, 2000);
    });
  },
  signInWithLinkedIn: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let userData = mockProfileData.linkedin;
        resolve(userData);
      }, 2000);
    });
  },
};
