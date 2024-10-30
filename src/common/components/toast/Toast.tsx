import { useEffect } from 'react';

type ToastProps = {
  message: string;
  duration?: number;
  type?: 'error' | 'success'
  onClose: () => void;
};

export const Toast = ({ message, duration = 2000, onClose, type = 'error' }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const messageType = {
    error: 'bg-red-400',
    success: 'bg-green-600',
  }

  return (
    <div className={`${messageType[type]} fixed bottom-5 right-1/2 translate-x-1/2 z-50 text-gray-50  px-4 py-2 rounded-lg shadow-lg animate-slide-up`}>
      {message}
    </div>
  );
};
