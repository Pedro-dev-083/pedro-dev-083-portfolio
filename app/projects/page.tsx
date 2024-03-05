"use client";
import { SiPython } from "react-icons/si";
import { Container, ProjectContainer, StackContainer } from "./styled";
import { useState } from "react";
import Pagination from "../components/Pagination/Pagination";

export default function Projects() {
   const [page, setPage] = useState(1);

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
            <ProjectContainer>
               <p>Project</p>
            </ProjectContainer>
            <Pagination page={page} setPage={setPage} pagesLimit={6} />
         </div>
      </Container>
   );
}
