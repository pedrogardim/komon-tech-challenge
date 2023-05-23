'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import StatsGrid from '@/components/integrations/StatsGrid';

import {
  useIntegrationsContext,
  IntegrationsCtxState,
  Integration,
} from '@/context/integrationsContext';

import { SocialProfile } from '@/data/mockProfileData';

const NewConnectionPage: React.FC = () => {
  const router = useRouter();
  const { newIntegration, update } = useIntegrationsContext();
  const data = newIntegration as Integration & SocialProfile;

  const addConnection = () => {
    const newIntegration = {};
    update((prev: IntegrationsCtxState) => ({
      integrations: [...prev.integrations, newIntegration],
      newIntegration: null,
    }));
    router.replace('/integrations');
  };

  const cancel = () => {
    update({ newIntegration: null });
    router.replace('/integrations');
  };

  useEffect(() => {
    if (!newIntegration) router.replace('/integrations');
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
            <span className="line-clamp-1">{data.bio}</span>
          </div>
        </div>
        <StatsGrid />
      </div>
      <div className="flex justify-end mt-8">
        <button
          onClick={cancel}
          className="text-lg py-2 px-4 rounded-xl hover:shadow duration-150 mr-2"
        >
          Cancel
        </button>
        <button
          onClick={addConnection}
          className="text-lg text-white bg-black py-2 px-4 rounded-xl hover:shadow-xl duration-150"
        >
          Add connection
        </button>
      </div>
    </div>
  );
};

export default NewConnectionPage;
