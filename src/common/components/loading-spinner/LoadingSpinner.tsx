// components/LoadingSpinner.js

export const LoadingSpinner = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
    </div>
  );
};
