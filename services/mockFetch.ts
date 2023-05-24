import { mockPostsData } from '@/data/mockPostsData';
import { mockProfileData } from '@/data/mockProfileData';
import { SocialProfile, SocialMedia } from '@/types/integrations';

export const fetchProfileData = async (type: SocialMedia) =>
  new Promise<SocialProfile>((resolve, reject) => {
    setTimeout(() => {
      resolve(mockProfileData[type]);
    }, 500);
  });

//TODO: pagination / infinite scroll
export const fetchPosts = async ({
  startAfter = 0,
  items = 20,
  searchValue = '',
}) =>
  new Promise<typeof mockPostsData>((resolve, reject) => {
    setTimeout(() => {
      let result = [...mockPostsData];
      if (searchValue.trim().length > 0) {
        result = result.filter((post) =>
          post.caption.toLowerCase().includes(searchValue.trim().toLowerCase())
        );
      }
      result = result.slice(startAfter, startAfter + items);
      resolve(result);
    }, 500);
  });
