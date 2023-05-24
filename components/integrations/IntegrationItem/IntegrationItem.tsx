import Image from 'next/image';
import { Integration } from '@/types/integrations';
import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';

interface IntegrationItemProps {
  data: Integration;
  onEdit: () => void;
  onDelete: () => void;
}

const IntegrationItem: React.FC<IntegrationItemProps> = ({
  data,
  onEdit,
  onDelete,
}) => {
  const router = useRouter();

  const handleItemClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if ((event.target as HTMLDivElement).id !== 'item-container') return;
    router.push('/integrations/' + data.id);
  };

  return (
    <div
      key={data.label}
      className="relative border-b h-24 w-full flex items-center px-4 z-20 hover:shadow-lg hover:bg-gray-100 cursor-pointer"
      onClick={handleItemClick}
      id="item-container"
    >
      <Image
        className="pointer-events-none"
        src={`/icons/${data.type}.svg`}
        alt={`${data.type} icon`}
        width={40}
        height={40}
      />
      <div className="flex flex-col ml-4 cursor-default pointer-events-none">
        <span className="text-lg">{data.label}</span>
        <span className="text-gray-500">
          <u>{data.username}</u>
        </span>
      </div>
      <button
        className="ml-auto rounded-full hover:bg-gray-200 p-2"
        onClick={onEdit}
      >
        <Image
          src={`/icons/pencil.svg`}
          alt="Close button"
          width={24}
          height={24}
        />
      </button>
      <button
        className="rounded-full hover:bg-gray-200 p-2"
        onClick={onDelete}
      >
        <Image
          src={`/icons/delete.svg`}
          alt="Close button"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default IntegrationItem;
