import styled from "styled-components";

export const MainContainer = styled.div`
   padding: 12%;
   padding-top: 0;
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
   width: 50%;
   height: 35%;
`;

export const IconContainer = styled.div<{ $IconColor: string }>`
   font-size: 20px;
   div {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   width: 100%;
   svg,
   a {
      color: black;
      transition: 0.3s ease-in-out;
      text-decoration: none;
      &:hover {
         color: ${(props) => props.$IconColor};
      }
   }
`;
