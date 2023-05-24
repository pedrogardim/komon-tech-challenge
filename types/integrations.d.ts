import { mockProfileData } from '@/data/mockProfileData';

export type SocialProfile =
  | typeof mockProfileData.instagram
  | typeof mockProfileData.youtube
  | typeof mockProfileData.facebook
  | typeof mockProfileData.tiktok
  | typeof mockProfileData.twitter
  | typeof mockProfileData.linkedin;

export type SocialMedia =
  | 'instagram'
  | 'youtube'
  | 'facebook'
  | 'tiktok'
  | 'twitter'
  | 'linkedin';

export type Integration = {
  id: string;
  type: SocialMedia;
  label: string;
  username: string;
};

export type NewIntegration = Integration & SocialProfile;

export interface IntegrationsCtxState {
  integrations: Integration[];
  newIntegration: NewIntegration | null;
  isLoading: boolean;
}

export type Post = {
  id: number;
  caption: string;
  image_url: string;
  likes: number;
  comments: number;
};
