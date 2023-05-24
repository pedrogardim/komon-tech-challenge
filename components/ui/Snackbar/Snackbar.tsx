'use client';
import { createContext, useState, useContext, useCallback } from 'react';
import Icon from '../Icon/Icon';

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
      setMessage('');
      setOpen(false);
    }, timeout);
  }, []);

  return (
    <SnackbarContext.Provider value={{ openSnackbar }}>
      <div
        className={`absolute top-4 right-4 z-50 shadow-lg p-10 border duration-300 bg-white ${
          open
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-24 pointer-events-none'
        }`}
        id="snackbar"
      >
        <button onClick={() => setOpen(false)}>
          <Icon
            className="absolute top-4 right-4"
            icon="close"
            size={20}
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
