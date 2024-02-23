import styled from "styled-components";

export const MainContainer = styled.div`
   padding: 7%;
`;

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   height: 400px;
`;

export const TitleContainer = styled.div`
   font-size: 35px;
   text-decoration: underline;
`;

export const ContactContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   width: 30%;
   height: 35%;
`;

export const IconContainer = styled.div<{ $IconColor: string }>`
   font-size: 20px;
   a {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   width: 100%;
   svg {
      color: black;
      transition: 0.3s ease-in-out;
      &:hover {
         color: ${(props) => props.$IconColor};
      }
   }
`;
