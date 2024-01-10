import { createContext, useContext, useState } from "react";

interface NotFoundContextProps {
   notFound: boolean;
   setNotFound: (value: boolean) => void;
}
interface ProviderProps {
   children: React.ReactNode;
}

const NotFoundContext = createContext<NotFoundContextProps | undefined>(
   undefined,
);

export const useNotFound = () => {
   const context = useContext(NotFoundContext);
   if (!context) {
      throw new Error("useNotFound must be used within a NotFoundProvider");
   }
   return context;
};

function NotFoundProvider({ children }: ProviderProps) {
   const [notFound, setNotFound] = useState<boolean>(false);

   return (
      <NotFoundContext.Provider value={{ notFound, setNotFound }}>
         {children}
      </NotFoundContext.Provider>
   );
}

export default NotFoundProvider;
