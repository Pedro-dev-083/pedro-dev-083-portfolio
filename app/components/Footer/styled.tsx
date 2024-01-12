import styled from "styled-components";

export const FooterMain = styled.footer`
   background-color: #070606;
   height: 280px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Container = styled.div`
   width: 30%;
   height: 100%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(2, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 0px;
`;

export const LogoContainer = styled.div`
   height: 100%;
   width: 100%;
   color: white;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   grid-area: 1 / 1 / 2 / 2;
`;

export const ContactContainer = styled.div`
   height: 100%;
   width: 100%;
   color: white;
   grid-area: 1 / 2 / 2 / 3;
`;

export const RightsContainer = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   grid-area: 2 / 1 / 3 / 3;
`;
