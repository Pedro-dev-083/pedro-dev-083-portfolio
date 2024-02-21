"use client";
import { GrLinkedin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { MainContainer } from "./styled";

export default function Contact() {
   const iconSize = 30;
   return (
      <MainContainer>
         <div>
            E-mail:
            <a href="mailto:pedroazevedo83@hotmail.com">
               <MdEmail size={iconSize} />
            </a>
         </div>
         <div>
            Linkedin:
            <a
               href="https://www.linkedin.com/in/pedro-souza-de-azevedo/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <GrLinkedin size={iconSize} />
            </a>
         </div>
      </MainContainer>
   );
}
