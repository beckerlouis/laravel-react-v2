import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type AppState = {
  modal: ReactNode;
  setModal: Dispatch<SetStateAction<ReactNode>>;
};

const AppStateContext = createContext<AppState | undefined>(undefined);

export const useAppState = function () {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error('useAppState must be used inside a `AppStateProvider`');
  }

  return context;
};

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [ modal, setModal ] = useState<ReactNode>();

  return (
    <AppStateContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
