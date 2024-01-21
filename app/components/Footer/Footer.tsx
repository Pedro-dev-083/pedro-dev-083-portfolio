import { GrGithub, GrLinkedin } from "react-icons/gr";
import { useNotFound } from "../../NotFoundProvider";
import {
   ContactContainer,
   Container,
   FooterMain,
   LogoContainer,
   RightsContainer,
} from "./styled";
import Image from "next/image";
import personPic from "../../public/images/LogoPerson.jpeg";

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
                     <Image
                        src={personPic}
                        alt="Image created by Bing Image Creator. 
                        Pixel art of a programmer typing on a laptop screen. 
                        The background is black, and the programmer has straight black hair, 
                        a scruffy black beard, and tan skin. He is wearing a black hoodie jacket 
                        and blue jeans, with his face illuminated by the laptop screen"
                        width={100}
                     />
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
