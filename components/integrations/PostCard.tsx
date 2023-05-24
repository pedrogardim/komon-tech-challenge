'use client';
import { useState } from 'react';
import Image from 'next/image';
import { formatNumber } from '@/utils/format';
import { Post } from '@/data/mockPostsData';
import Modal from '../ui/Modal';

interface PostCardProps {
  data: Post;
  onRepost: () => void;
  onSetAsProfilePic: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  data,
  onRepost,
  onSetAsProfilePic,
}) => {
  const [confirmationModal, setConfirmationModal] = useState(false);
  return (
    <div
      key={data.id}
      className="relative shadow rounded-[20px] overflow-hidden aspect-square"
    >
      <Image
        className="object-cover h-full w-full"
        src={data.image_url}
        alt="Post Image"
        width={256}
        height={256}
      />
      <div className="text-white inset-x-0 bottom-0 h-4/6 w-full absolute bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] p-4 flex flex-col justify-end">
        <div className="flex">
          <div className="flex mr-4">
            <Image
              className="invert mr-2"
              src="/icons/heart.svg"
              alt="Like Icon"
              height={20}
              width={20}
            />
            <span>{formatNumber(data.likes, 1)}</span>
          </div>
          <div className="flex">
            <Image
              className="invert mr-2"
              src="/icons/comment.svg"
              alt="Like Icon"
              height={20}
              width={20}
            />
            <span>{formatNumber(data.comments, 1)}</span>
          </div>
        </div>
        <p className="line-clamp-2">{data.caption}</p>
        <div className="flex justify-around	p-4">
          <button onClick={() => setConfirmationModal(true)}>
            <Image
              className="invert mr-2"
              src="/icons/face-man-profile.svg"
              alt="Set as profile"
              height={28}
              width={28}
            />
          </button>
          <button onClick={() => onRepost(data.id)}>
            <Image
              className="invert mr-2"
              src="/icons/repeat.svg"
              alt="Repost"
              height={28}
              width={28}
            />
          </button>
        </div>
      </div>
      {confirmationModal && (
        <Modal
          open={confirmationModal}
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
