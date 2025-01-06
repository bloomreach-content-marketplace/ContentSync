import { useState, createContext, useEffect } from 'react';
import { Loader } from '@/components'

export const LoadingContext = createContext<LoadingContext>({} as LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState<LoadingState>({
    loading: false,
    message: 'Loading'
  });

  useEffect(() => {
    setLoading(loading);
  }, [loading])

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <Loader loading={loading} setLoading={setLoading} />
      {children}
    </LoadingContext.Provider>
  );
}
