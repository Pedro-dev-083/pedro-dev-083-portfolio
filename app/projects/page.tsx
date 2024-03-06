"use client";
import { Container, ProjectContainer } from "./styled";
import { useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import StackContainer from "./StackContainer/StackContainer";

export default function Projects() {
   const [page, setPage] = useState(1);

   return (
      <Container>
         <p>Projects Page</p>
         <div>
            <h1>Stacks</h1>
            <StackContainer />
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
