import React, {
   ComponentType,
   LazyExoticComponent,
   ReactElement,
   useState,
} from "react";
import Modal from "../../components/Modal/Modal";
import * as allIcons from "react-icons/si";
import { IconBaseProps } from "react-icons";

interface StackModalProps {
   iconName: string;
}

interface ImportIconResult {
   default: LazyExoticComponent<ComponentType<IconBaseProps>>;
}

export default function StackModal({
   iconName,
}: StackModalProps): ReactElement | null {
   const [stateModal, setStateModal] = useState<boolean>(false);

   const importIcon = async (name: string): Promise<ImportIconResult> => {
      try {
         const uppercasedName = name.charAt(0).toUpperCase() + name.slice(1);
         const IconComponent = (allIcons as any)[uppercasedName];
         if (!IconComponent) {
            console.error(`Icon '${name}' not found.`);
            throw new Error(`Icon '${name}' not found.`);
         }
         return { default: IconComponent };
      } catch (error) {
         console.error(`Error on import Icon '${name}':`, error);
         throw error;
      }
   };
   const LazyIcon = React.lazy(() => importIcon(iconName));
   return LazyIcon ? (
      <React.Suspense fallback={<div>Loading...</div>}>
         <LazyIcon onClick={() => setStateModal(true)} />
         <Modal isCalled={stateModal} setIsCalled={setStateModal}>
            <p>Hello</p>
         </Modal>
      </React.Suspense>
   ) : null;
}
