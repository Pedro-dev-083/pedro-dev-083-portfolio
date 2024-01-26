import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { SiJavascript } from "react-icons/si";

interface StackModalProps {
   iconName?: string;
}
export default function StackModal({ iconName }: StackModalProps) {
   const [stateModal, setStateModal] = useState<boolean>(false);

   return (
      <>
         <SiJavascript onClick={() => setStateModal(true)} />
         <Modal isCalled={stateModal} setIsCalled={setStateModal}>
            <p>Hello</p>
         </Modal>
      </>
   );
}
