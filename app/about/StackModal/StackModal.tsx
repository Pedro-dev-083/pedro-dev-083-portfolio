import { useState } from "react";
import {
   Container,
   ContainerIconLevel,
   ContainerSkill,
   IconLevel,
} from "./styled";
import Project from "../../components/Project/Project";
import IconComponent from "../../components/IconComponent/IconComponent";

interface StackModalProps {
   iconName: string;
}

export default function StackModal({ iconName }: StackModalProps) {
   const [stateModal, setStateModal] = useState<boolean>(false);

   const skill = 3;
   return (
      <>
         <Container onClick={() => setStateModal(true)}>
            <IconComponent iconName={iconName} />
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
   );
}
