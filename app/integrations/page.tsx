'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIntegrationsContext } from '@/context/integrationsContext';
import { deleteIntegration } from '@/services/integrations';
import { IntegrationsCtxState } from '@/types/integrations';

import { Modal, Spinner, useSnackbar } from '@/components/ui';
import {
  IntegrationItem,
  EditIntegrationModal,
} from '@/components/integrations';

const IntegrationsPage: React.FC = () => {
  const [deletingItem, setDeletingItem] = useState<null | string>(null);
  const [editingItem, setEditingItem] = useState<null | string>(null);
  const { integrations, update, isLoading } = useIntegrationsContext();
  const { openSnackbar } = useSnackbar();

  const deleteItem = async () => {
    try {
      await deleteIntegration(deletingItem as string);
      update((prev: IntegrationsCtxState) => ({
        integrations: prev.integrations.filter(
          (item) => item.id !== deletingItem
        ),
      }));
      openSnackbar('Integration succefully deleted');
    } catch (e) {
      openSnackbar((e as Error).message);
    } finally {
      setDeletingItem(null);
    }
    //TODO: Mock DELETE Endpoint, move everything to hook
  };

  return (
    <>
      {(isLoading || !window) && <Spinner />}
      {integrations?.length === 0 && !isLoading && (
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
      <div
        className="w-full"
        id="integrations-list"
      >
        {integrations.map((integration) => (
          <IntegrationItem
            data={integration}
            onDelete={() => setDeletingItem(integration.id)}
            onEdit={() => setEditingItem(integration.id)}
            key={integration.id}
          />
        ))}
      </div>
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
