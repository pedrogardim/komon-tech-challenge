'use client';

import Image from 'next/image';
import { SocialProfile } from '@/data/mockProfileData';
import StatsGrid from './StatsGrid';
import { Integration } from '@/context/integrationsContext';

interface ProfileCardProps {
  data: Integration & SocialProfile;
  compact: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ data, compact }) => {
  return (
    <div
      className={`grid grid-cols-4 gap-4 mt-4 
      p-${compact ? 4 : 8} border shadow`}
    >
      <Image
        className="absolute"
        src={`/icons/${data.type}.svg`}
        alt={data.type}
        width={48}
        height={48}
      />
      <div className="flex justify-center items-center">
        <Image
          className={`h-48 w-48 object-cover rounded-full`}
          src={data.profile_pic}
          alt="close"
          width={256}
          height={256}
        />
      </div>
      <div className="grid grid-rows-3">
        <div className="flex flex-col">
          <span className="text-sm uppercase text-gray-500">Name</span>
          <span className="text-lg">{data.name}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm uppercase text-gray-500">Username</span>
          <span className="text-lg  text-slate-600">
            <u>{data.username}</u>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm uppercase text-gray-500">Bio</span>
          <span className="line-clamp-1">{data.bio}</span>
        </div>
      </div>
      <StatsGrid data={data} />
    </div>
  );
};

export default ProfileCard;
