"use client";
import { SiPython } from "react-icons/si";
import { Container, StackContainer } from "./styled";

export default function Projects() {
   return (
      <Container>
         <p>Projects Page</p>
         <div>
            <h1>Stacks</h1>
            <StackContainer>
               <SiPython size={25} />
            </StackContainer>
         </div>
         <div>
            <h1>Projects</h1>
         </div>
      </Container>
   );
}
