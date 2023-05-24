'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  useIntegrationsContext,
  IntegrationsCtxState,
  Integration,
} from '@/context/integrationsContext';

import { SocialProfile } from '@/data/mockProfileData';
import Input from '@/components/ui/Input';
import ProfileCard from '@/components/integrations/ProfileCard';
import { useSnackbar } from '@/components/ui/Snackbar';

const NewConnectionPage: React.FC = () => {
  const router = useRouter();
  const { integrations, newIntegration, update } = useIntegrationsContext();
  const { openSnackbar } = useSnackbar();
  const [label, setLabel] = useState<string>('');
  const [error, setError] = useState<null | string>(null);

  const data = newIntegration as Integration & SocialProfile;

  const onAddConnection = () => {
    if (!label.trim()) {
      setError('Label should not be empty');
      return;
    }
    const newIntegration = {
      id: data.type + '-' + data.username.replace('@', ''),
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
    openSnackbar(`Integration added: ${newIntegration.label}`);
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
      <ProfileCard data={data} />
      <div className="w-1/2 mt-4">
        <h1 className="text-xl my-4">Connection Name</h1>
        <Input
          placeholder="Main Instagram, My Secondary YouTube Channel..."
          onChange={(v) => setLabel(v)}
          error={error}
        />
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            className="w-5 h-5"
          />
          <label className="my-2 ml-2 text-sm">Automatic repost on Komon</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5"
          />
          <label className="my-2 ml-2 text-sm">Only for members</label>
        </div>
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
