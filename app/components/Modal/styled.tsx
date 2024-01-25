import styled from "styled-components";

export const ModalContainer = styled.div`
   background-color: rgba(60, 60, 60, 0.9);
   height: 100%;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1;
`;

export const Container = styled.div`
   background-color: #fdfdfd;
   height: 400px;
   width: 700px;
`;