'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useFetchConnectionData from '@/hooks/useFetchConnectionData';
import Spinner from '@/components/ui/Spinner';
import ProfileCard from '@/components/integrations/ProfileCard';
import PostCard from '@/components/integrations/PostCard';
import Input from '@/components/ui/Input';

const IntegrationPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const { profileData, postCards, isLoading, connectionInfo, arePostsLoading } =
    useFetchConnectionData(params.id, searchValue);

  if (isLoading) return <Spinner size={64} />;
  if (!profileData) return null;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{connectionInfo?.label}</h1>
      <ProfileCard
        data={{ ...profileData, ...connectionInfo }}
        compact
      />
      <div className="flex items-center mt-5">
        <span className="text-xl mb-4 mr-2">Last posts</span>
        <Input
          onChange={(v) => setSearchValue(v)}
          value={searchValue}
          placeholder="Search..."
        />
      </div>
      <div className="w-full">
        {arePostsLoading ? (
          <Spinner />
        ) : postCards?.length === 0 ? (
          <p className="mx-auto text-center">No posts found</p>
        ) : (
          <div className="grid grid-cols-4 gap-2 mt-4 w-full">
            {postCards?.map((post) => (
              <PostCard
                data={post}
                key={post.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IntegrationPage;
