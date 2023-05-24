'use client';
import { useState } from 'react';
import Image from 'next/image';
import { formatNumber } from '@/utils/format';
import { Post } from '@/types/integrations';
import Modal from '../../ui/Modal/Modal';
import { Icon } from '@/components/ui';

interface PostCardProps {
  data: Post;
  selected?: boolean;
  onRepost: (id: number) => void;
  onSetAsProfilePic: (id: number) => void;
  onSelect: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  data,
  selected,
  onRepost,
  onSetAsProfilePic,
  onSelect,
}) => {
  const [confirmationModal, setConfirmationModal] = useState(false);
  return (
    <div
      key={data.id}
      className="relative shadow rounded-[20px] overflow-hidden aspect-square"
    >
      <Image
        className={`object-cover h-full w-full 
        ${selected && 'brightness-50'} duration-150`}
        src={data.image_url}
        alt="Post Image"
        width={256}
        height={256}
      />
      <div className="text-white inset-x-0 bottom-0 h-4/6 w-full absolute bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] p-4 flex flex-col justify-end">
        <div className="flex">
          <div className="flex mr-4">
            <Icon
              className="mr-2"
              icon="heart"
              color="white"
            />
            <span>{formatNumber(data.likes, 1)}</span>
          </div>
          <div className="flex">
            <Icon
              className="mr-2"
              icon="comment"
              color="white"
            />
            <span>{formatNumber(data.comments, 1)}</span>
          </div>
        </div>
        <p className="line-clamp-2">{data.caption}</p>
        <div className="flex justify-around	p-4">
          <button onClick={() => setConfirmationModal(true)}>
            <Icon
              className="mr-2"
              icon="face-man-profile"
              size={28}
              color="white"
            />
          </button>
          <button onClick={() => onRepost(data.id)}>
            <Icon
              className="mr-2"
              icon="repeat"
              size={28}
              color="white"
            />
          </button>
          <button onClick={() => onSelect(data.id)}>
            <Icon
              icon={`checkbox-${selected ? 'marked' : 'blank'}`}
              size={28}
              color="white"
            />
          </button>
        </div>
      </div>
      {confirmationModal && (
        <Modal
          open={true}
          onClose={() => setConfirmationModal(false)}
          onConfirm={() => onSetAsProfilePic(data.id)}
          type="confirm"
        >
          Use post picture as profile picture?
        </Modal>
      )}
    </div>
  );
};

export default PostCard;
