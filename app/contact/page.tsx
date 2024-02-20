"use client";
import { GrLinkedin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { MainContainer } from "../styled";

export default function Contact() {
   const iconSize = 30;
   const iconColor = "black";
   return (
      <MainContainer>
         <a href="mailto:pedroazevedo83@hotmail.com">
            <MdEmail color={iconColor} size={iconSize} />
         </a>
         <a
            href="https://www.linkedin.com/in/pedro-souza-de-azevedo/"
            target="_blank"
            rel="noopener noreferrer"
         >
            <GrLinkedin color={iconColor} size={iconSize} />
         </a>
         {/* <p>Whatsapp</p>  */}
      </MainContainer>
   );
}
