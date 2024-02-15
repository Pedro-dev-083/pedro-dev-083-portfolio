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

export const Container = styled.div<{
   $isReverse?: boolean;
   $isVisible: boolean;
   $height: number;
}>`
   display: flex;
   flex-direction: ${(props) => (props.$isReverse ? "row-reverse" : "row")};
   justify-content: center;
   align-items: center;
   padding: 50px 0;
   margin: 30px 0;
   width: 90%;
   font-size: 16px;
   opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
   animation: ${({ $isVisible }) => ($isVisible ? fadeIn : fadeOut)} 0.5s
      ease-in-out;
   div {
      width: 40%;
   }
   .line {
      margin: 0 15px;
      width: 1px;
      height: ${(props) => props.$height}px;
      background-color: black;
   }
`;
