'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  useIntegrationsContext,
  IntegrationsCtxState,
} from '@/context/integrationsContext';
import Modal from '@/components/ui/Modal';
import IntegrationItem from '@/components/integrations/IntegrationItem';
import EditIntegrationModal from '@/components/integrations/EditIntegrationModal';

const IntegrationsPage: React.FC = () => {
  const [deletingItem, setDeletingItem] = useState<null | string>(null);
  const [editingItem, setEditingItem] = useState<null | string>(null);
  const { integrations, update } = useIntegrationsContext();

  const deleteItem = () => {
    //TODO: Mock DELETE Endpoint, move everything to hook
    update((prev: IntegrationsCtxState) => ({
      integrations: prev.integrations.filter(
        (item) => item.id !== deletingItem
      ),
    }));
    setDeletingItem(null);
  };

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
        className="text-lg uppercase font-bold text-white bg-black py-2 px-4 rounded-xl hover:shadow-xl duration-150 self-center mb-8"
        href="/integrations/new"
      >
        Add an integration
      </Link>
      {integrations.map((integration) => (
        <IntegrationItem
          data={integration}
          onDelete={() => setDeletingItem(integration.id)}
          onEdit={() => setEditingItem(integration.id)}
          key={integration.id}
        />
      ))}
      <Modal
        open={!!deletingItem}
        onClose={() => setDeletingItem(null)}
        onConfirm={deleteItem}
        type="delete"
      >
        Are you sure you want to delete this connection?
      </Modal>
      <EditIntegrationModal
        open={!!editingItem}
        onClose={() => setEditingItem(null)}
        itemId={editingItem}
      />
    </>
  );
};

export default IntegrationsPage;
