'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useIntegrationsContext } from '@/context/integrationsContext';

const IntegrationsPage: React.FC = () => {
  const { integrations } = useIntegrationsContext();

  return (
    <>
      {integrations?.length === 0 && (
        <>
          <Image
            src="/illustrations/undraw_organize_photos_re_ogcy.svg"
            alt="Illustration"
            width={192}
            height={192}
          />
          <p className="m-8">
            Connect your social networks and access your content!
          </p>
        </>
      )}
      <Link
        className="text-lg uppercase font-bold text-white bg-black py-2 px-4 rounded-xl hover:shadow-xl duration-150 flex justify-center self-center"
        href="/integrations/new"
      >
        Add an integration
      </Link>
    </>
  );
};

export default IntegrationsPage;
