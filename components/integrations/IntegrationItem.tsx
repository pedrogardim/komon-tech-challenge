import Image from 'next/image';
import { Integration } from '@/context/integrationsContext';

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
  return (
    <div
      key={data.label}
      className="h-24 border-b w-full flex items-center cursor-pointer hover:shadow-lg px-4 duration-150"
    >
      <Image
        src={`/icons/${data.type}.svg`}
        alt={`${data.type} icon`}
        width={40}
        height={40}
      />
      <div className="flex flex-col ml-4">
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
