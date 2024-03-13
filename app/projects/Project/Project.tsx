import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { ProjectContainer } from "./styled";

export default function Project() {
   const [visible, setVisible] = useState(false);
   return (
      <>
         <ProjectContainer onClick={() => setVisible(true)}>
            <p>Project</p>
         </ProjectContainer>
         <Modal isCalled={visible} setIsCalled={setVisible}>
            test
         </Modal>
      </>
   );
}
