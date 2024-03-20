"use client";
import { Container, ProjectsContainer, StacksContainer } from "./styled";
import { useEffect, useRef, useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import Stack from "./Stack/Stack";
import ProjectModal from "./ProjectModal/ProjectModal";

export default function Projects() {
   const [page, setPage] = useState(1);
   const [stack, setStack] = useState("");

   const containerRef = useRef<HTMLDivElement>(null);
   const isDragging = useRef(false);
   const startX = useRef(0);
   const scrollLeft = useRef(0);

   useEffect(() => {
      if (!containerRef.current) return;

      const container = containerRef.current;

      const handleMouseDown = (e: MouseEvent) => {
         e.preventDefault();
         isDragging.current = true;
         startX.current = e.pageX - container.offsetLeft;
         scrollLeft.current = container.scrollLeft;
      };

      const handleMouseMove = (e: MouseEvent) => {
         if (!isDragging.current) return;
         e.preventDefault();
         const x = e.pageX - container.offsetLeft;
         const walk = (x - startX.current) * 2;
         container.scrollLeft = scrollLeft.current - walk;
      };

      const handleMouseUp = () => {
         isDragging.current = false;
      };

      container.addEventListener("mousedown", handleMouseDown);
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseup", handleMouseUp);

      return () => {
         container.removeEventListener("mousedown", handleMouseDown);
         container.removeEventListener("mousemove", handleMouseMove);
         container.removeEventListener("mouseup", handleMouseUp);
      };
   }, []);
   return (
      <Container>
         <p>Projects Page</p>
         <div>
            <h1>Stacks</h1>
            <StacksContainer ref={containerRef}>
               <Stack
                  stack={stack}
                  setStack={setStack}
                  iconName={"SiJavascript"}
               />
               <Stack
                  stack={stack}
                  setStack={setStack}
                  iconName={"SiNodedotjs"}
               />
               <Stack
                  stack={stack}
                  setStack={setStack}
                  iconName={"SiTypescript"}
               />
               <Stack stack={stack} setStack={setStack} iconName={"SiDotnet"} />
               <Stack stack={stack} setStack={setStack} iconName={"SiPython"} />
            </StacksContainer>
         </div>
         <div>
            <h1>Projects</h1>
            <ProjectsContainer>
               <ProjectModal />
               <ProjectModal />
               <ProjectModal />
               <ProjectModal />
               <ProjectModal />
            </ProjectsContainer>
            <Pagination page={page} setPage={setPage} pagesLimit={6} />
         </div>
      </Container>
   );
}
