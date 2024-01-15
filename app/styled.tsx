import styled from "styled-components";

export const MainContainer = styled.main`
   background-color: red;
   display: flex;
   margin: 0;
`;

export const Container = styled.div`
   background-color: blue;
   display: flex;
   width: 100%;
   justify-content: center;
   align-items: center;
`;

export const PhotoContainer = styled.div`
   padding: 5px;
   margin: 5px;
   position: relative;
   overflow: "hidden";
   height: 10rem;
   width: 10rem;
   border-radius: 50%;
   border: "5px solid #F00";
`;

export const AboutContainer = styled.div`
   background-color: yellow;
`;
