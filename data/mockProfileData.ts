import { SocialMedia, SocialProfile } from '@/types/integrations';

const commonData = {
  username: 'WanderlustAdventurer',
  name: 'Alex Thompson',
  bio: '✈️ Travel Enthusiast | 🌍 Exploring the World | 📸 Capturing Memories',
  location: 'New York City',
  profile_pic:
    'https://images.pexels.com/photos/15591667/pexels-photo-15591667/free-photo-of-man-sitting-on-a-rock-on-a-mountain-peak-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=1600',
};

export const mockProfileData: { [key in SocialMedia]: SocialProfile } = {
  instagram: {
    ...commonData,
    username: '@WanderlustAdventurer',
    followers: 47800,
    posts: 689,
    followed_by: ['National Geographic', 'Travel Channel', 'Lonely Planet'],
  },
  youtube: {
    ...commonData,
    username: 'WanderlustAdventurer',
    subscribers: 86200,
    videos: 112,
    most_popular_video: 'Epic Backpacking Adventure in Southeast Asia',
    views: 1800000,
  },
  facebook: {
    ...commonData,
    username: 'TheWanderlustAdventurer',
    followers: 23541,
    likes: 335000,
    page_category: 'Travel/Exploration',
    about:
      "Welcome to my official Facebook page! Get inspired by breathtaking destinations, travel tips, and captivating stories. Let's embark on unforgettable adventures together!",
  },
  tiktok: {
    ...commonData,
    username: '@WanderlustAdventurer',
    followers: 57300,
    likes: 2500000,
    videos: 164,
    trending_hashtags: ['#TravelVibes', '#ExploreTheWorld', '#WanderlustMode'],
  },
  twitter: {
    ...commonData,
    username: '@WanderlustAlex',
    followers: 18900,
    tweets: 2431,
    joined: 'April 2016',
    bio: "✈️ Sharing my travel tales and inspiring wanderlust | 📸 Photographer | 📍 Based in NYC | Let's connect and explore the world together!",
  },
  linkedin: {
    ...commonData,
    username: 'AlexThompsonWanderlust',
    connections: 2380,
    industry: 'Travel and Tourism',
    summary:
      "Passionate traveler and storyteller with a keen eye for capturing unforgettable moments. Experienced in global exploration, cultural immersion, and sustainable travel practices. Let's connect and create meaningful connections in the travel community!",
  },
};
