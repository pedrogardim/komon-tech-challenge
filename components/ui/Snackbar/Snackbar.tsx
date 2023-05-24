'use client';
import { createContext, useState, useContext, useCallback } from 'react';
import Image from 'next/image';

export interface SnackbarState {
  openSnackbar: (message: string) => void;
}

const defaultSnackbarState = {
  openSnackbar: () => {},
};

const SnackbarContext = createContext<SnackbarState>(defaultSnackbarState);

const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [message, setMessage] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const openSnackbar = useCallback((input: string, timeout = 3000) => {
    setMessage(input);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, timeout);
  }, []);

  return (
    <SnackbarContext.Provider value={{ openSnackbar }}>
      <div
        className={`absolute top-4 right-4 z-50 shadow-lg p-10 border duration-300 bg-white ${
          open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
        }`}
      >
        <button onClick={() => setOpen(false)}>
          <Image
            className="absolute top-4 right-4"
            src="/icons/close.svg"
            alt="close"
            width={20}
            height={20}
          />
        </button>

        {message}
      </div>
      {children}
    </SnackbarContext.Provider>
  );
};

const useSnackbar = () => useContext(SnackbarContext);

export { SnackbarProvider, useSnackbar };
