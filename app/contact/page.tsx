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
   const iconSize = 50;
   return (
      <MainContainer>
         <Container>
            <TitleContainer>
               <h1>Contact me:</h1>
            </TitleContainer>
            <ContactContainer>
               <IconContainer $IconColor="#DB4A39">
                  <a href="mailto:pedroazevedo83@hotmail.com">
                     <MdEmail size={iconSize} />
                     <p>pedroazevedo83@hotmail.com</p>
                  </a>
               </IconContainer>
               <IconContainer $IconColor="#0E76A8">
                  <a
                     href="https://www.linkedin.com/in/pedro-souza-de-azevedo/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <GrLinkedin size={iconSize} />
                     <p>https://www.linkedin.com/in/pedro-souza-de-azevedo/</p>
                  </a>
               </IconContainer>
            </ContactContainer>
         </Container>
      </MainContainer>
   );
}
