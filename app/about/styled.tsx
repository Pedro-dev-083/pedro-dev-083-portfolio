import styled from "styled-components";

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

export const StacksContainer = styled.div`
   background-color: green;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(3, 1fr);
   grid-column-gap: 0px;
   grid-row-gap: 0px;
`;
