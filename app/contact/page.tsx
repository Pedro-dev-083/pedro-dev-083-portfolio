"use client";
import { GrLinkedin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { IconContainer, MainContainer } from "./styled";

export default function Contact() {
   const iconSize = 30;
   return (
      <MainContainer>
         <div>
            <h1>Contact me:</h1>
         </div>
         <IconContainer $IconColor="#DB4A39">
            E-mail:
            <a href="mailto:pedroazevedo83@hotmail.com">
               <MdEmail size={iconSize} />
            </a>
         </IconContainer>
         <IconContainer $IconColor="#0E76A8">
            Linkedin:
            <a
               href="https://www.linkedin.com/in/pedro-souza-de-azevedo/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <GrLinkedin size={iconSize} />
            </a>
         </IconContainer>
      </MainContainer>
   );
}
