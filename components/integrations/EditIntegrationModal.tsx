import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  useIntegrationsContext,
  IntegrationsCtxState,
} from '@/context/integrationsContext';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import { editIntegration } from '@/services/integrations';
import { useSnackbar } from '../ui/Snackbar';

interface EditIntegrationModalProps {
  open: boolean;
  onClose: () => void;
  itemId: string | null;
}

const EditIntegrationModal: React.FC<EditIntegrationModalProps> = ({
  open,
  onClose,
  itemId,
}) => {
  const { integrations, update } = useIntegrationsContext();
  const itemIndex = integrations.findIndex((item) => item.id === itemId);
  const [data, setData] = useState(integrations[itemIndex]);
  const [error, setError] = useState<string | null>(null);

  const { openSnackbar } = useSnackbar();

  useEffect(() => {
    setData(integrations[itemIndex]);
  }, [integrations, itemIndex]);

  const saveItem = async () => {
    if (!data.label.trim()) {
      setError('Label should not be empty');
      return;
    }

    try {
      await editIntegration(data);
      update((prev: IntegrationsCtxState) => {
        const newState = { ...prev };
        newState.integrations[itemIndex] = { ...data };
      });
      openSnackbar('Integration successfully edited');
    } catch (e) {
      openSnackbar((e as Error).message);
    } finally {
      onClose();
    }
  };

  const updateValue = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    setError(null);
  }, [data]);

  if (!data) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      onConfirm={saveItem}
      type="confirm"
    >
      <div className="w-96">
        <div className="flex items-center border p-2 mb-4">
          <Image
            className="mr-2"
            src={`/icons/${data.type}.svg`}
            alt={`${data.type} icon`}
            width={32}
            height={32}
          />
          <span className="text-gray-500 ">
            <u>{data.username}</u>
          </span>
        </div>
        <Input
          value={data.label}
          onChange={(v) => updateValue('label', v)}
          placeholder="Main Instagram, My Secondary YouTube Channel..."
          label="Label"
          error={error}
        />
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            className="w-5 h-5"
          />
          <label className="my-2 ml-2 text-sm">Automatic repost on Komon</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5"
          />
          <label className="my-2 ml-2 text-sm">Only for members</label>
        </div>
      </div>
    </Modal>
  );
};

export default EditIntegrationModal;
