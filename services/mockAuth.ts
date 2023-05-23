import { mockProfileData } from '@/data/mockProfileData';

const {
  instagram: IGData,
  youtube: YTData,
  facebook: FBData,
  tiktok: TKData,
  twitter: TWData,
  linkedin: LIData,
} = mockProfileData;

export const auth = {
  signInWithInstagram: async () => {
    return new Promise<typeof IGData>((resolve) => {
      setTimeout(() => {
        let userData = IGData;
        resolve(userData);
      }, 2000);
    });
  },
  signInWithYouTube: async () => {
    return new Promise<typeof YTData>((resolve) => {
      setTimeout(() => {
        let userData = YTData;
        resolve(userData);
      }, 2000);
    });
  },
  signInWithFacebook: async () => {
    return new Promise<typeof FBData>((resolve) => {
      setTimeout(() => {
        let userData = FBData;
        resolve(userData);
      }, 2000);
    });
  },
  signInWithTikTok: async () => {
    return new Promise<typeof TKData>((resolve) => {
      setTimeout(() => {
        let userData = TKData;
        resolve(userData);
      }, 2000);
    });
  },
  signInWithTwitter: async () => {
    return new Promise<typeof TWData>((resolve) => {
      setTimeout(() => {
        let userData = TWData;
        resolve(userData);
      }, 2000);
    });
  },
  signInWithLinkedIn: async () => {
    return new Promise<typeof LIData>((resolve) => {
      setTimeout(() => {
        let userData = LIData;
        resolve(userData);
      }, 2000);
    });
  },
};
