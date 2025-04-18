import { createContext, useRef } from 'react';

type ContextType = {
  alertInProgress: boolean;
};

export const AppStatusContext = createContext<ContextType>({
  alertInProgress: false,
});

export function AppStatusProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const alertInProgress = useRef(false).current;

  return (
    <AppStatusContext.Provider
      value={{
        alertInProgress,
      }}>
      {children}
    </AppStatusContext.Provider>
  );
}
