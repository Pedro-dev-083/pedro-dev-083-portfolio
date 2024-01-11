import styled from "styled-components";

export const FooterMain = styled.footer`
   background-color: blue;
   height: 280px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Container = styled.div`
   background-color: red;
   width: 45%;
   height: 100%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 10px;
`;

export const LogoContainer = styled.div`
   background-color: yellow;
   height: 120px;
   width: 100px;
`;

export const ContactContainer = styled.div`
   background-color: purple;
   height: 120px;
   width: 100px;
`;

export const RightsContainer = styled.div`
   background-color: green;
   height: 120px;
   width: 100px;
   grid-column: span 2;
`;
