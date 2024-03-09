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
   -webkit-overflow-scrolling: touch; /* suporte para scroll suave em dispositivos iOS */
   scroll-behavior: smooth; /* scroll suave em navegadores compatíveis */
   cursor: grab; /* cursor ao passar o mouse */
   user-select: none; /* evita seleção de texto ao arrastar */
   width: 400px;

   &:active {
      cursor: grabbing; /* cursor ao arrastar */
   }
`;
