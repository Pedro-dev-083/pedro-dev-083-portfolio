import styled from "styled-components";

export const ModalContainer = styled.div<{ $animation: boolean }>`
   background-color: rgba(60, 60, 60, 0.9);
   height: 100%;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   opacity: ${(props) => (props.$animation ? "1" : "0")};
   z-index: ${(props) => (props.$animation ? "1" : "-1")};
   transition: 0.65s ease;
`;

export const Container = styled.div<{
   height: number;
   width: number;
   $animation: boolean;
}>`
   transform: translateY(${(props) => (props.$animation ? "0" : "-85vh")});
   transition: 0.65s ease;
   background-color: #fdfdfd;
   border-radius: 10px;
   height: ${(props) => props.height}px;
   width: ${(props) => props.width}px;
   z-index: 5;
   #iconExitContainer {
      position: relative;
      width: 95%;
   }
   #iconExit {
      position: absolute;
      font-size: 25px;
      right: 0;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
         color: red;
      }
   }
`;
