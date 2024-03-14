import styled from "styled-components";

export const Container = styled.div<{ $itsMe?: boolean }>`
   background-color: ${({ $itsMe }) => ($itsMe ? "#2a2a2a " : "#eaeaea")};
   border-radius: 50px;
   margin: 30px;
   padding: 15px;
   transition: transform 0.3s ease;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   &:hover {
      transform: scale(1.1);
   }
   svg {
      color: ${({ $itsMe }) => ($itsMe ? "white" : "black")};
   }
`;
