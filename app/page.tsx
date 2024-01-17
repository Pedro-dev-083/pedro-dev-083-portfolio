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
                  width={250}
                  height={250}
                  style={{ borderRadius: "50%" }}
               />
            </PhotoContainer>
            <AboutContainer>
               {/* TODO: Make a animation on Hello World, and the "I am Pedro" move to About Page */}
               <p>Hello World, I am Pedro</p>
               {/* TODO: Make some animation or icons about coffees and codes */}
               <p>
                  I am just a guy who loves to drink code and develop coffee.
                  Here is my little space where you can find my projects and
                  more about me.
               </p>
               {/* TODO: Make a link to go on the repo */}
               <p>
                  If you liked this portfolio, don&apos;t forget to leave a star
                  on the github repo.
               </p>
            </AboutContainer>
         </Container>
      </MainContainer>
   );
}
