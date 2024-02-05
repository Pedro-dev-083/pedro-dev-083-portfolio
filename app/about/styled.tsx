import styled from "styled-components";

export const SummaryContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
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
   border: "5px solid #F00";
`;

export const AboutContainer = styled.div`
   width: 50%;
`;

export const StacksContainer = styled.div`
   background-color: green;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;
