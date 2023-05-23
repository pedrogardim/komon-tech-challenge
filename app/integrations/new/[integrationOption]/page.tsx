'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { formatNumber } from '@/utils/format';
import StatsGrid from '@/components/integrations/StatsGrid';

import {
  useIntegrationsContext,
  Integration,
} from '@/context/integrationsContext';

const NewConnectionPage: React.FC = () => {
  const router = useRouter();
  const { newIntegration } = useIntegrationsContext();
  const data = newIntegration as Integration;

  useEffect(() => {
    if (!newIntegration) router.replace('/integrations/new');
  }, [newIntegration, router]);

  if (!newIntegration) return null;

  return (
    <div className="py-4 px-14">
      <h1 className="text-xl my-2">Integration Label</h1>
      <div className="border-b border-gray-300 w-1/3 mb-4 focus-within:border-gray-500">
        <input
          className="border-none p-2 px-4 text-sm border-b w-full focus:outline-0 rounded-xl"
          placeholder="Main Instagram, My Secondary YouTube Channel..."
        />
      </div>
      <h1 className="text-xl my-4 mt-6">Profile Info</h1>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="flex justify-center items-center">
          <Image
            className="h-48 w-48 object-cover rounded-full"
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
            <span className="">{data.bio}</span>
          </div>
        </div>
        <StatsGrid />
      </div>
      <h1 className="text-xl my-4 mt-6">Last posts</h1>
      <h1 className="text-md">[TODO]</h1>
      <div className="flex justify-end">
        <button className="text-lg py-2 px-4 rounded-xl hover:shadow duration-150 mr-2">
          Cancel
        </button>
        <button className="text-lg text-white bg-black py-2 px-4 rounded-xl hover:shadow-xl duration-150">
          Add connection
        </button>
      </div>
    </div>
  );
};

export default NewConnectionPage;
