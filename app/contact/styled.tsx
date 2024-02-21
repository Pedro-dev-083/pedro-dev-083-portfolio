import styled from "styled-components";

export const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   padding: 15%;
`;

export const IconContainer = styled.div<{ $IconColor: string }>`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 15%;
   svg {
      color: black;
      transition: 0.3s ease-in-out;
      &:hover {
         color: ${(props) => props.$IconColor};
      }
   }
`;
