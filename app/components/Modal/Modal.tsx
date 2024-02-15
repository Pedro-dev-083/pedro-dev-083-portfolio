import { useEffect, useRef } from "react";
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
   isCalled = false,
   setIsCalled,
   height = 400,
   width = 700,
}: ModalProps) {
   const modalRef = useRef<HTMLDivElement | null>(null);
   useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
         if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setIsCalled(false);
         }
      };

      document.addEventListener("mousedown", handleOutsideClick);

      return () => {
         document.removeEventListener("mousedown", handleOutsideClick);
      };
   }, [setIsCalled]);

   useEffect(() => {
      if (isCalled) {
         document.body.style.overflow = "hidden";
         document.body.style.paddingRight = "8px";
      } else {
         document.body.style.overflow = "auto";
         document.body.style.paddingRight = "0";
      }

      return () => {
         document.body.style.overflow = "auto";
         document.body.style.paddingRight = "0";
      };
   }, [isCalled]);

   return (
      <ModalContainer $animation={isCalled}>
         <Container
            ref={modalRef}
            height={height}
            width={width}
            $animation={isCalled}
         >
            <div id="iconExitContainer">
               <p id="iconExit" onClick={() => setIsCalled(false)}>
                  X
               </p>
            </div>
            {children}
         </Container>
      </ModalContainer>
   );
}
