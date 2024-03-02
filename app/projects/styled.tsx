import styled from "styled-components";

export const Container = styled.div``;
export const StackContainer = styled.div`
   background-color: #eaeaea;
   height: 35px;
   width: 35px;
   border-radius: 50px;
   margin: 30px;
   padding: 10px;
   transition: transform 0.3s ease;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   &:hover {
      transform: scale(1.1);
   }
`;

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

export const NumberBox = styled.div`
   background-color: #f1f1f1;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 20px;
   width: 20px;
   border-radius: 5px;
   margin: 30px;
   padding: 10px;
   border: 1px solid rgba(0, 0, 0, 0.1);
   cursor: pointer;
`;
