import React, {
   ComponentType,
   LazyExoticComponent,
   ReactElement,
   useState,
} from "react";
import Modal from "../../components/Modal/Modal";
import * as allIcons from "react-icons/si";
import { IconBaseProps } from "react-icons";
import { Container } from "./styled";

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
      <>
         <React.Suspense fallback={<p></p>}>
            <Container>
               <LazyIcon onClick={() => setStateModal(true)} />
               <p>{iconName}</p>
               <p>Skill: </p>
               <p>Level: 3 years</p>
            </Container>
         </React.Suspense>
         {/* TODO: Add the knowledge i have on this technology */}
         <Modal isCalled={stateModal} setIsCalled={setStateModal}>
            <p>{iconName}</p>
         </Modal>
      </>
   ) : null;
}
