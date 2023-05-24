'use client';
import { useState } from 'react';
import Link from 'next/link';
import useFetchConnectionData from '@/hooks/useFetchConnectionData';
import { Spinner, Input, Modal, Icon } from '@/components/ui';
import { ProfileCard, PostCard } from '@/components/integrations';

const IntegrationPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [searchValue, setSearchValue] = useState('');
  const [createPoolModal, setCreateModalPool] = useState(false);
  const [selection, setSelection] = useState<number[]>([]);
  const {
    profileData,
    posts,
    isLoading,
    connectionInfo,
    arePostsLoading,
    onRepost,
    onSetAsProfilePic,
    onCreatePool,
  } = useFetchConnectionData(params.id, searchValue);

  const onCreatePoolConfirm = () => {
    onCreatePool(selection);
    setSelection([]);
  };

  const onSelect = (newId: number) => {
    setSelection((prev) =>
      prev.includes(newId)
        ? prev.filter((id) => id !== newId)
        : [...prev, newId]
    );
  };
  if (isLoading) return <Spinner size={64} />;
  if (!profileData) return null;

  return (
    <div className="p-0">
      <div className="flex items-center">
        <Link href="/integrations">
          <Icon
            icon="arrow-left"
            size={36}
          />
        </Link>
        <span className="text-3xl font-bold ml-4">{connectionInfo?.label}</span>
      </div>
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
        <button
          className="text-lg mb-4 ml-auto rounded-xl bg-black text-white hover:shadow-xl duration-150 py-2 px-4 disabled:bg-gray-300 disabled:hover:shadow-none"
          disabled={selection.length === 0}
          onClick={() => setCreateModalPool(true)}
        >
          Create a pool
        </button>
      </div>
      <div className="w-full">
        {arePostsLoading ? (
          <Spinner />
        ) : posts?.length === 0 ? (
          <p className="mx-auto text-center">No posts found</p>
        ) : (
          <div
            className="grid gap-2 mt-4 w-full grid-cols-1  xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4"
            id="post-grid"
          >
            {posts?.map((post) => (
              <PostCard
                data={post}
                key={post.id}
                selected={selection.includes(post.id)}
                onRepost={onRepost}
                onSetAsProfilePic={onSetAsProfilePic}
                onSelect={onSelect}
              />
            ))}
          </div>
        )}
      </div>
      <Modal
        open={createPoolModal}
        onClose={() => setCreateModalPool(false)}
        onConfirm={onCreatePoolConfirm}
        type="confirm"
      >
        Create a pool with {selection.length} posts?
      </Modal>
    </div>
  );
};

export default IntegrationPage;
