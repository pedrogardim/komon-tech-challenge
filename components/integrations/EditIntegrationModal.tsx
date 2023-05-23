import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  useIntegrationsContext,
  IntegrationsCtxState,
} from '@/context/integrationsContext';
import Modal from '../ui/Modal';
import Input from '../ui/Input';

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

  useEffect(() => {
    setData(integrations[itemIndex]);
  }, [integrations, itemIndex]);

  const saveItem = () => {
    if (!data.label.trim()) {
      setError('Label should not be empty');
      return;
    }
    update((prev: IntegrationsCtxState) => {
      const newState = { ...prev };
      newState.integrations[itemIndex] = { ...data };
    });
    onClose();
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
        <Input
          value={data.label}
          onChange={(v) => updateValue('label', v)}
          placeholder="Main Instagram, My Secondary YouTube Channel..."
          label="Label"
          error={error}
        />
      </div>
    </Modal>
  );
};

export default EditIntegrationModal;
