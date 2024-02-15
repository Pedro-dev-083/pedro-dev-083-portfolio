"use client";
import Image from "next/image";
import {
   AboutContainer,
   AboutText,
   Container,
   GithubText,
   HelloText,
   MainContainer,
   PhotoContainer,
} from "./styled";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
   const [shouldAnimate, setShouldAnimate] = useState(false);

   useEffect(() => {
      setShouldAnimate(true);
   }, []);

   return (
      <MainContainer>
         <Container>
            {/* TODO: Change the photo for something about World */}
            <PhotoContainer>
               <Image
                  src={"https://avatars.githubusercontent.com/u/60190590?v=4"}
                  alt={"Image of the developer"}
                  width={250}
                  height={250}
                  style={{ borderRadius: "50%" }}
               />
            </PhotoContainer>
            <AboutContainer>
               <HelloText $shouldAnimate={shouldAnimate}>
                  <b>Hello World</b>, I am Pedro
               </HelloText>
               <AboutText>
                  Here is my little space where you can find my{" "}
                  <Link href={"/projects"}>projects</Link> and more{" "}
                  <Link href={"/about"}> about me.</Link>
               </AboutText>
               {/* TODO: Make a link to go on the repo */}
               <GithubText>
                  If you liked this portfolio, don&apos;t forget to leave a star
                  on the{" "}
                  <a
                     href={
                        "https://github.com/Pedro-dev-083/pedro-dev-083-portfolio"
                     }
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     github repo.
                  </a>
               </GithubText>
            </AboutContainer>
         </Container>
      </MainContainer>
   );
}
