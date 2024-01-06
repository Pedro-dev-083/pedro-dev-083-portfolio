import styled from "styled-components";

const HeaderMain = styled.header`
   background-color: black;
   height: 50px;
`;

const Container = styled.div`
   position: relative;
   background-color: red;
   display: flex;
   flex-flow: row;
   justify-content: space-between;
   align-items: center;
   width: 100%;
`;

const LogoContainer = styled.div`
   background-color: blue;
`;

const RoutesContainer = styled.div`
   background-color: yellow;
   display: flex;
   flex-flow: row;
   justify-content: space-between;
   align-items: center;
   width: 20%;
`;

export { Container, HeaderMain, LogoContainer, RoutesContainer };
