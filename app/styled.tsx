import styled from "styled-components";

export const MainContainer = styled.main`
   /* background-color: red; */
   display: flex;
   margin: 0;
`;

export const Container = styled.div`
   /* background-color: blue; */
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
   /* background-color: yellow; */
   width: 50%;
   a {
      position: relative;
      color: black;
      text-decoration: none;
   }

   a::before {
      content: "";
      display: block;
      position: absolute;
      inset: 0 0 0 0;
      background-color: #3dff3d;
      z-index: -1;
      transform: scaleX(0);
      transform-origin: bottom left;
      transition: transform 0.95s ease-in-out;
   }

   a:hover::before {
      transform: scaleX(1);
      transform-origin: bottom left;
   }
`;

export const HelloText = styled.h1<{ $shouldAnimate: boolean }>`
   font-size: 80px;
   b {
      position: relative;
   }
   b::before {
      content: "";
      display: block;
      position: absolute;
      inset: 0 0 0 0;
      background-color: #3dff3d;
      z-index: -1;
      transition: transform 0.95s ease-in-out;
   }

   ${(props) =>
      props.$shouldAnimate
         ? `
      b:before {
         transform: scaleX(1);
         transform-origin: bottom left;
      }
         `
         : `
      b:before {
         transform: scaleX(0);
         transform-origin: bottom right;
      }
   `}
`;

export const AboutText = styled.p`
   font-size: 30px;
`;

export const GithubText = styled.p`
   font-size: 16px;
`;
