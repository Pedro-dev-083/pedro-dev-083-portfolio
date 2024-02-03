import styled from "styled-components";

export const Container = styled.div`
   background-color: #eaeaea;
   height: 210px;
   width: 300px;
   border-radius: 15px;
   margin: 30px;
   padding: 10px;
`;

export const ContainerSkill = styled.div.attrs(() => ({
   "aria-hidden": true,
}))`
   background-color: red;
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
`;

export const ContainerIconLevel = styled.div.attrs(() => ({
   "aria-hidden": true,
}))`
   display: flex;
   height: 15px;
`;

export const IconLevel = styled.div.attrs(() => ({
   "aria-hidden": true,
}))`
   margin-left: 10px;
   width: 30px;
   height: 10px;
   background-color: green;
   transform: skew(-20deg);
`;
