'use client'
import { Fragment, PropsWithChildren, useEffect } from "react";
import { useLoadingSpinnerStore } from "./stores/useLoadingSpinnerStore";

export const LoadingSpinner = ({ children }: PropsWithChildren) => {
  const { isLoading, setIsLoading } = useLoadingSpinnerStore()
  useEffect(() => { setIsLoading(false) }, [])
  return (
    <Fragment>
      {isLoading && <div className="absolute left-[calc(50%-32px)]  top-[calc(50%-32px)]  w-16 h-16 border-4 border-[#FB7D5B] border-dotted rounded-full animate-spin" />}
      {children}
    </Fragment>
  );
};
