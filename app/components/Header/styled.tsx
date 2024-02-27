import styled from "styled-components";

const margin = "1.75em";

const HeaderMain = styled.header`
   background-color: #070606;
   height: 60px;
`;

const Container = styled.div`
   position: relative;
   display: flex;
   flex-flow: row;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 100%;
`;

const LogoContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-left: ${margin};
   text-decoration: none;
   p {
      margin: 0;
      color: #fdfdfd;
   }
`;

const RoutesContainer = styled.div`
   display: flex;
   margin-right: ${margin};
   justify-content: space-between;
   align-items: center;
   height: 100%;
   width: 30%;
`;

export { Container, HeaderMain, LogoContainer, RoutesContainer };
