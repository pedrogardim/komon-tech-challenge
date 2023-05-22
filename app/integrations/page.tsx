'use client';
import Image from 'next/image';
import { useIntegrationsContext } from '../../context/integrationsContext';

export default function IntegrationsPage() {
  const { integrations } = useIntegrationsContext();

  return (
    <div className="flex flex-col w-full flex-1">
      <h1 className="text-4xl uppercase font-bold">Integrations</h1>
      <div className="flex flex-col flex-1 items-center w-full py-16">
        <Image
          src="/illustrations/undraw_organize_photos_re_ogcy.svg"
          alt="Illustration"
          width={192}
          height={192}
        />
        <p className="m-8">
          Connect your social networks and access your content!
        </p>
        <button className="text-lg uppercase font-bold text-white bg-black py-2 px-4 rounded-xl hover:shadow-xl duration-150 flex justify-center self-center">
          Add a integration
        </button>
      </div>
    </div>
  );
}
