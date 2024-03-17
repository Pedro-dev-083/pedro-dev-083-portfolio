import styled from "styled-components";

export const ContainerContent = styled.div`
   height: 80%;
   overflow-y: scroll;
   margin: 55px;
`;

export const PhotoContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 40%;
   img {
      border: 1px solid #a2a2a2;
   }
`;

export const SummaryContainer = styled.div`
   display: flex;
   justify-content: center;
`;

export const TitleContainer = styled.div`
   width: 60%;
`;
