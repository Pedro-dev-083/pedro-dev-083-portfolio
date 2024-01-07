import styled from "styled-components";

const ContainerRouteLink = styled.div`
   a::before {
      transform: scaleX(0);
      transform-origin: bottom right;
   }

   a:hover::before {
      transform: scaleX(1);
      transform-origin: bottom left;
   }

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
      color: white;
      text-decoration: none;
      font-size: 1.75rem;
   }
`;

export { ContainerRouteLink };
