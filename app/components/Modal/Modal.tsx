import { Container, ModalContainer } from "./styled";

interface ModalProps {
   children: React.ReactNode;
   isCalled: boolean;
   setIsCalled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ children, isCalled, setIsCalled }: ModalProps) {
   return (
      <>
         {isCalled ? (
            <ModalContainer>
               <p onClick={() => setIsCalled(false)}>X</p>
               <Container>{children}</Container>
            </ModalContainer>
         ) : null}
      </>
   );
}
