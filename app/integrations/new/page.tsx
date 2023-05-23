'use client';
import Image from 'next/image';
import useServiceLogin from '@/hooks/useServiceLogin';
import Modal from '@/components/ui/Modal';

const connectionOptions = [
  { label: 'Instagram', id: 'instagram', color: '#E1306C' },
  { label: 'YouTube', id: 'youtube', color: '#FF0000' },
  { label: 'Facebook', id: 'facebook', color: '#3B5998' },
  { label: 'TikTok', id: 'tiktok', color: '#69C9D0' },
  { label: 'Twitter', id: 'twitter', color: '#1DA1F2' },
  { label: 'LinkedIn', id: 'linkedin', color: '#0077B5' },
];

const NewIntegrationPage: React.FC = () => {
  const { loginWithService, isLoading } = useServiceLogin();

  const onServiceButtonClick = async (service: string) => {
    const response = await loginWithService(service);
    console.log(response);
  };

  return (
    <>
      <p className="m-8">Choose the service below to integrate:</p>
      <div className="grid gap-4 grid-cols-3 grid-rows-2">
        {connectionOptions.map((option) => (
          <button
            className={`text-lg text-white bg-black py-2 px-4 rounded-xl hover:shadow-xl duration-150 flex items-center hover:bg-[${option.color}]`}
            key={option.id}
            onClick={() => onServiceButtonClick(option.id)}
          >
            <Image
              src={`/icons/${option.id}.svg`}
              alt="Illustration"
              width={20}
              height={20}
              className="invert mr-2"
            />
            {option.label}
          </button>
        ))}
      </div>
      <Modal open={isLoading}>
        <p className="m-4 text-lg text-center">
          Please, follow the steps in the opened window to authenticate in the
          selected provider
        </p>
        <Image
          className="animate-spin h-10 w-10"
          src="/icons/loading.svg"
          alt="close"
          width={36}
          height={36}
        />
      </Modal>
    </>
  );
};

export default NewIntegrationPage;
