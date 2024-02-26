"use client";
import { GrLinkedin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import {
   IconContainer,
   MainContainer,
   Container,
   TitleContainer,
   ContactContainer,
} from "./styled";

export default function Contact() {
   const iconSize = 55;
   return (
      <MainContainer>
         <Container>
            <TitleContainer>
               <h1>Contact me:</h1>
            </TitleContainer>
            <ContactContainer>
               <IconContainer $IconColor="#DB4A39">
                  <div>
                     <a href="mailto:pedroazevedo83@hotmail.com">
                        <MdEmail size={iconSize} />
                     </a>
                     <a href="mailto:pedroazevedo83@hotmail.com">
                        pedroazevedo83@hotmail.com
                     </a>
                  </div>
               </IconContainer>
               <IconContainer $IconColor="#0E76A8">
                  <div>
                     <a
                        href="https://www.linkedin.com/in/pedro-souza-de-azevedo/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <GrLinkedin size={iconSize} />
                     </a>
                     <a
                        href="https://www.linkedin.com/in/pedro-souza-de-azevedo/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        https://www.linkedin.com/in/pedro-souza-de-azevedo/
                     </a>
                  </div>
               </IconContainer>
            </ContactContainer>
         </Container>
      </MainContainer>
   );
}
