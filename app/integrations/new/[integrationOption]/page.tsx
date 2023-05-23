'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import StatsGrid from '@/components/integrations/StatsGrid';

import {
  useIntegrationsContext,
  IntegrationsCtxState,
  Integration,
} from '@/context/integrationsContext';

import { SocialProfile } from '@/data/mockProfileData';
import Input from '@/components/ui/Input';

const NewConnectionPage: React.FC = () => {
  const router = useRouter();
  const { integrations, newIntegration, update } = useIntegrationsContext();
  const [label, setLabel] = useState<string>('');
  const [error, setError] = useState<null | string>(null);

  const data = newIntegration as Integration & SocialProfile;

  const onAddConnection = () => {
    if (!label.trim()) {
      setError('Label should not be empty');
      return;
    }
    const newIntegration = {
      id: data.type + '-' + data.username,
      username: data.username,
      type: data.type,
      label,
    };
    if (integrations.find((int) => int.id === newIntegration.id)) {
      setError('This account is already connected');
      return;
    }
    //TODO: Mock PUT Endpoint
    update((prev: IntegrationsCtxState) => ({
      integrations: [...prev.integrations, newIntegration],
      newIntegration: null,
    }));
    router.replace('/integrations');
  };

  const onCancel = () => {
    update({ newIntegration: null });
    router.replace('/integrations');
  };

  useEffect(() => {
    setError(null);
  }, [label]);

  useEffect(() => {
    if (!newIntegration) router.replace('/integrations');
  }, [newIntegration, router]);

  if (!newIntegration) return null;

  return (
    <div className="p-4">
      <h1 className="text-xl my-4">Profile Info</h1>
      <div className="grid grid-cols-4 gap-4 mt-4 p-8 border shadow">
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
      <div className="w-1/2 mt-4">
        <Input
          placeholder="Main Instagram, My Secondary YouTube Channel..."
          onChange={(v) => setLabel(v)}
          label="Integration Label"
          error={error}
        />
      </div>
      <div className="flex justify-end mt-8">
        <button
          onClick={onCancel}
          className="text-lg py-2 px-4 rounded-xl hover:shadow duration-150 mr-2"
        >
          Cancel
        </button>
        <button
          onClick={onAddConnection}
          className="text-lg text-white bg-black py-2 px-4 rounded-xl hover:shadow-xl duration-150"
        >
          Add connection
        </button>
      </div>
    </div>
  );
};

export default NewConnectionPage;
