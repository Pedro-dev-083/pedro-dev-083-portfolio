import styled from "styled-components";

export const Box = styled.div<{ $isSelected?: boolean }>`
   background-color: ${({ $isSelected }) =>
      $isSelected ? "#2a2a2a " : "#f1f1f1"};
   color: ${({ $isSelected }) => ($isSelected ? "#f1f1f1 " : "#2a2a2a")};
   display: flex;
   justify-content: center;
   align-items: center;
   height: 40px;
   width: 40px;
   border-radius: 5px;
   margin: 0 10px;
   border: 1px solid rgba(0, 0, 0, 0.1);
   cursor: pointer;
`;
