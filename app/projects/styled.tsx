import styled from "styled-components";

export const Container = styled.div``;
export const StackContainer = styled.div`
   background-color: #eaeaea;
   height: 35px;
   width: 35px;
   border-radius: 50px;
   margin: 30px;
   padding: 10px;
   transition: transform 0.3s ease;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   &:hover {
      transform: scale(1.1);
   }
`;
