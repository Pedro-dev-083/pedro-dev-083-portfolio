import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   margin: 55px 0;
`;

export const SummaryContainer = styled.div<{ $shouldAnimate: boolean }>`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: 24px;
   opacity: ${({ $shouldAnimate }) => ($shouldAnimate ? 1 : 0)};
   animation: ${({ $shouldAnimate }) => ($shouldAnimate ? fadeIn : fadeOut)}
      0.5s ease-in-out;
   div {
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;

export const PhotoContainer = styled.div`
   padding: 5px;
   margin: 5px;
   position: relative;
   overflow: "hidden";
   height: 250px;
   width: 250px;
   border-radius: 50%;
`;

export const AboutContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   width: 50%;
`;

export const SkillsContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const StacksContainer = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;
