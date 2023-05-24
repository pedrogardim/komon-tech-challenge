'use client';
import { useRouter } from 'next/navigation';
import useServiceLogin from '@/hooks/useServiceLogin';
import { useIntegrationsContext } from '@/context/integrationsContext';
import { Icon, Modal, Spinner } from '@/components/ui';

const connectionOptions = [
  { label: 'Instagram', id: 'instagram', color: '#E1306C' },
  { label: 'YouTube', id: 'youtube', color: '#FF0000' },
  { label: 'Facebook', id: 'facebook', color: '#3B5998' },
  { label: 'TikTok', id: 'tiktok', color: '#69C9D0' },
  { label: 'Twitter', id: 'twitter', color: '#1DA1F2' },
  { label: 'LinkedIn', id: 'linkedin', color: '#0077B5' },
];

const NewIntegrationPage: React.FC = () => {
  const router = useRouter();
  const { loginWithService, isLoading } = useServiceLogin();

  const { update } = useIntegrationsContext();

  const onServiceButtonClick = async (service: string) => {
    const userData = await loginWithService(service);
    update({ newIntegration: { ...userData, type: service } });
    router.push(`/integrations/new/${service}`);
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
            <Icon
              className="mr-2"
              icon={option.id}
              size={20}
              color="white"
            />
            {option.label}
          </button>
        ))}
      </div>
      <Modal open={isLoading}>
        <p className="m-4 text-lg text-center">Logging in...</p>
        <Spinner />
      </Modal>
    </>
  );
};

export default NewIntegrationPage;
