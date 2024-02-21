import styled from "styled-components";

export const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   padding: 15%;
   div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 15%;
      svg {
         color: black;
         transition: 0.3s ease-in-out;
         &:hover {
            color: blue;
         }
      }
   }
`;
