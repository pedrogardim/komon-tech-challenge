import Image from 'next/image';
import { createPortal } from 'react-dom';

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  children: React.ReactNode;
  type?: 'delete' | 'confirm';
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  onConfirm,
  children,
  type,
}) => {
  const handleModalConfirm = () => {
    (onConfirm as Function)();
    (onClose as Function)();
  };

  if (typeof window === 'undefined') return null;

  return createPortal(
    <div
      tabIndex={-1}
      className={`fixed flex top-0 left-0 right-0 z-50 p-4 h-screen w-screen bg-black bg-opacity-50 ${
        open ? '' : 'hidden'
      } `}
    >
      <div className="relative bg-white shadow rounded-[40px] px-6 py-8 max-w-2xl m-auto">
        <div className="flex items-start justify-between">
          <Image
            className="h-9 mx-auto"
            src="/komon.svg"
            alt="Komon Logo"
            width={159}
            height={36}
          />
          <button
            type="button"
            onClick={onClose}
          >
            <Image
              className="h-6 w-6"
              src="/icons/close.svg"
              alt="close"
              width={36}
              height={36}
            />
          </button>
        </div>
        <div className="p-8 flex flex-col items-center justify-center">
          {children}
        </div>
        {type && (
          <div className="flex flex-row justify-end w-full">
            <button
              className="text-lg py-2 px-4 rounded-xl hover:shadow duration-15 mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className={`text-lg text-white py-2 px-4 rounded-xl hover:shadow-xl duration-15 ${
                type === 'delete' ? 'bg-red-600' : 'bg-black'
              }`}
              onClick={handleModalConfirm}
            >
              {type === 'delete' ? 'Delete' : 'Ok'}
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
