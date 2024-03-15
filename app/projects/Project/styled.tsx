import styled from "styled-components";

export const ProjectContainer = styled.div`
   background-color: #eaeaea;
   height: 210px;
   width: 300px;
   border-radius: 15px;
   margin: 30px;
   padding: 10px;
   -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.47);
   -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.47);
   box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.47);
   transition: transform 0.3s ease;
   cursor: pointer;

   &:hover {
      transform: scale(1.1);
   }
`;

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
