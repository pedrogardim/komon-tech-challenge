'use client';
import { useRouter } from 'next/navigation';
import useFetchConnectionData from '@/hooks/useFetchConnectionData';
import Spinner from '@/components/ui/Spinner';
import ProfileCard from '@/components/integrations/ProfileCard';
import PostCard from '@/components/integrations/PostCard';

const IntegrationPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const router = useRouter();
  const { profileData, PostCards, isLoading, connectionInfo } =
    useFetchConnectionData(params.id);

  if (isLoading) return <Spinner size={64} />;
  if (!profileData) return null;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{connectionInfo?.label}</h1>
      <ProfileCard
        data={{ ...profileData, ...connectionInfo }}
        compact
      />
      <h2 className="text-xl mt-6">Last posts</h2>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {PostCards?.map((post) => (
          <PostCard
            data={post}
            key={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default IntegrationPage;
