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

   &:hover {
      transform: scale(1.1);
   }
`;
