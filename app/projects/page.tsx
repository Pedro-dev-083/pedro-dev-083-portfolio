"use client";
import { SiPython } from "react-icons/si";
import {
   PaginationContainer,
   Container,
   NumberBox,
   ProjectContainer,
   StackContainer,
   NumberContainer,
} from "./styled";
import { useState } from "react";

export default function Projects() {
   const [page, setPage] = useState(1);
   const numbers = Array.from({ length: 6 }, (_, index) => index + 1);

   const showLeftArrow = page > 1;
   const showRightArrow = page < numbers.length - 1;

   const handleClickLeft = () => {
      setPage((prevPage) => (prevPage - 1 < 0 ? 0 : prevPage - 1));
   };

   const handleClickRight = () => {
      setPage((prevPage) => prevPage + 1);
   };
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
            <PaginationContainer>
               <NumberContainer>
                  <div>
                     {showLeftArrow && (
                        <button onClick={handleClickLeft}>{"<"}</button>
                     )}
                  </div>
                  {page <= 1 || page == numbers.length ? (
                     <>
                        <NumberBox>{numbers[0]}</NumberBox>
                        <NumberBox>{numbers[1]}</NumberBox>
                     </>
                  ) : (
                     numbers
                        .slice(page - 1, page + 2)
                        .map((number) => (
                           <NumberBox key={number}>{number}</NumberBox>
                        ))
                  )}
               </NumberContainer>
               <div>
                  {showRightArrow && (
                     <button onClick={handleClickRight}>{">"}</button>
                  )}
               </div>
            </PaginationContainer>
         </div>
      </Container>
   );
}
