"use client";
import Image from "next/image";
import {
   AboutContainer,
   Container,
   MainContainer,
   PhotoContainer,
} from "./styled";

export default function Page() {
   return (
      <MainContainer>
         <Container>
            <PhotoContainer>
               <Image
                  src={"https://avatars.githubusercontent.com/u/60190590?v=4"}
                  alt={"Image of the developer"}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "50%" }}
               />
            </PhotoContainer>
            <AboutContainer>About Container</AboutContainer>
         </Container>
      </MainContainer>
   );
}
