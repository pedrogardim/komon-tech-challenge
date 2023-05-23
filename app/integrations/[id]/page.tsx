'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/ui/Spinner';
import useFetchConnectionData from '@/hooks/useFetchConnectionData';
import ProfileCard from '@/components/integrations/ProfileCard';

const IntegrationPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const router = useRouter();
  const { profileData, isLoading, connectionInfo } = useFetchConnectionData(
    params.id
  );

  if (isLoading) return <Spinner size={64} />;
  if (!profileData) return null;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{connectionInfo?.label}</h1>
      <ProfileCard
        data={{ ...profileData, ...connectionInfo }}
        compact
      />
    </div>
  );
};

export default IntegrationPage;
