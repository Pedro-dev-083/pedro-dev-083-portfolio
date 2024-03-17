import React, {
   ComponentType,
   LazyExoticComponent,
   ReactElement,
   useState,
} from "react";
import Modal from "../../components/Modal/Modal";
import * as allIcons from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { IconBaseProps } from "react-icons";
import {
   Container,
   ContainerContent,
   ContainerIconLevel,
   ContainerSkill,
   IconLevel,
   PhotoContainer,
   SummaryContainer,
   TitleContainer,
} from "./styled";
import Link from "next/link";
import Image from "next/image";
import Project from "../../components/Project/Project";

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

   const skill = 3;

   //TODO: Make a fake component which will be the copy of Lazy
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
         <Container onClick={() => setStateModal(true)}>
            <React.Suspense fallback={<SiJavascript />}>
               <LazyIcon />
            </React.Suspense>
            <p>{iconName}</p>
            <ContainerSkill>
               <p>Skill:</p>
               <ContainerIconLevel>
                  {Array.from({ length: skill }, (_, index) => (
                     <IconLevel key={index} />
                  ))}
               </ContainerIconLevel>
            </ContainerSkill>
            <p>Level: 3 years</p>
         </Container>
         <Project visible={stateModal} setVisible={setStateModal} />
      </>
   ) : null;
}
