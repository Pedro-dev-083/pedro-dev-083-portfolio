"use client";
import { Container } from "./styled";
import { useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import Stack from "./Stack/Stack";
import Project from "./Project/Project";

export default function Projects() {
   const [page, setPage] = useState(1);

   return (
      <Container>
         <p>Projects Page</p>
         <div>
            <h1>Stacks</h1>
            <Stack />
         </div>
         <div>
            <h1>Projects</h1>
            <Project />
            <Pagination page={page} setPage={setPage} pagesLimit={6} />
         </div>
      </Container>
   );
}
