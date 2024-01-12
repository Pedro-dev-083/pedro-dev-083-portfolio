import { GrGithub, GrLinkedin } from "react-icons/gr";
import { useNotFound } from "../../NotFoundProvider";
import {
   ContactContainer,
   Container,
   FooterMain,
   LogoContainer,
   RightsContainer,
} from "./styled";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
   const { notFound } = useNotFound();

   const currentYear = () => {
      return new Date().getFullYear();
   };

   const iconSize = 30;
   const iconColor = "white";

   return (
      <>
         {!notFound && (
            <FooterMain>
               <Container>
                  <LogoContainer>
                     <p>Pedro Azevedo</p>
                  </LogoContainer>
                  <ContactContainer>
                     <a
                        href="https://www.linkedin.com/in/pedro-souza-de-azevedo/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <GrLinkedin color={iconColor} size={iconSize} />
                     </a>
                     <a
                        href="https://www.github.com/Pedro-dev-083"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <GrGithub color={iconColor} size={iconSize} />
                     </a>
                     <a
                        href="mailto:pedroazevedo83@hotmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <FaEnvelope color={iconColor} size={iconSize} />
                     </a>
                  </ContactContainer>
                  <RightsContainer>
                     <p>
                        © {currentYear()} Pedro Azevedo. All rights reserved.
                     </p>
                  </RightsContainer>
               </Container>
            </FooterMain>
         )}
      </>
   );
}
