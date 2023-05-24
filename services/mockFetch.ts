import { mockPostsData } from '@/data/mockPostsData';
import { SocialProfile, mockProfileData } from '@/data/mockProfileData';

export const fetchProfileData = async (type: string) =>
  new Promise<SocialProfile>((resolve, reject) => {
    setTimeout(() => {
      resolve(mockProfileData[type]);
    }, 1000);
  });

export const fetchPosts = async ({
  startAfter = 0,
  items = 10,
  searchQuery = '',
}) =>
  new Promise<typeof mockPostsData>((resolve, reject) => {
    setTimeout(() => {
      let result = [...mockPostsData];
      if (searchQuery.trim().length > 0) {
        result = result.filter((post) =>
          post.caption.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      result = result.slice(startAfter, startAfter + items);
      resolve(result);
    }, 1000);
  });
