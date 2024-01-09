import styled from "styled-components";
import { LinkProps } from "./RouteLink";

const ContainerRouteLink = styled.div<Pick<LinkProps, "iamthecurrentlink">>`
   ${(props) =>
      props.iamthecurrentlink
         ? ""
         : `
      a::before {
         transform: scaleX(0);
      }
   
      a:hover::before {
         transform: scaleX(1);
      }
   `}

   a::before {
      content: "";
      display: block;
      position: absolute;
      inset: 0 0 0 0;
      border-bottom: 3px solid #fdfdfd;
      z-index: 1;
      transition: transform 0.65s ease-in-out;
   }

   a {
      position: relative;
      color: #fdfdfd;
      text-decoration: none;
      font-size: 1.75rem;
      ${(props) =>
         props.iamthecurrentlink &&
         `
         cursor: initial;
      `}
   }
`;

export { ContainerRouteLink };
