import { Container, ModalContainer } from "./styled";

interface ModalProps {
   children: React.ReactNode;
   isCalled: boolean;
   setIsCalled: React.Dispatch<React.SetStateAction<boolean>>;
   height?: number;
   width?: number;
}

export default function Modal({
   children,
   isCalled,
   setIsCalled,
   height = 400,
   width = 700,
}: ModalProps) {
   return (
      <>
         {isCalled ? (
            <ModalContainer>
               <Container height={height} width={width}>
                  <p onClick={() => setIsCalled(false)}>X</p>
                  {children}
               </Container>
            </ModalContainer>
         ) : null}
      </>
   );
}
