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
   justify-content: space-evenly;
   align-items: center;
`;

export const PhotoContainer = styled.div`
   padding: 5px;
   margin: 5px;
   position: relative;
   overflow: "hidden";
   height: 250px;
   width: 250px;
   border-radius: 50%;
   border: "5px solid #F00";
`;

export const AboutContainer = styled.div`
   background-color: yellow;
`;

export const HelloText = styled.h1`
   font-size: 20px;
   b {
      background-color: #3dff3d;
   }
`;

export const AboutText = styled.p`
   font-size: 18px;
`;

export const GithubText = styled.p`
   font-size: 16px;
`;
