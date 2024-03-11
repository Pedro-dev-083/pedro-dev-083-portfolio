import styled from "styled-components";

export const Container = styled.div``;

export const ProjectsContainer = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;

export const StacksContainer = styled.div`
   display: flex;
   flex-wrap: nowrap;
   overflow-x: hidden;
   -webkit-overflow-scrolling: touch;
   scroll-behavior: smooth;
   cursor: grab;
   user-select: none;
   width: 400px;

   &:active {
      cursor: grabbing;
   }
`;
