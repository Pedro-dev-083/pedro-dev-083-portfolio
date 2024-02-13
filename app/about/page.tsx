"use client";
import Image from "next/image";
import {
   AboutContainer,
   MainContainer,
   PhotoContainer,
   StacksContainer,
   SummaryContainer,
} from "./styled";
import StackModal from "./StackModal/StackModal";
import SubStoryContainer from "./SubStoryContainer/SubStoryContainer";

export default function About() {
   return (
      <MainContainer>
         <SummaryContainer>
            <h1>Who I am</h1>
            <div>
               <PhotoContainer>
                  <Image
                     src={
                        "https://avatars.githubusercontent.com/u/60190590?v=4"
                     }
                     alt={"Image of the developer"}
                     width={250}
                     height={250}
                     style={{ borderRadius: "50%" }}
                  />
               </PhotoContainer>
               <AboutContainer>
                  <p>
                     I am a young dev graduated in Information Systems and
                     specializing in Software Engineering. FullStack Developer
                     in Javascript and C#, but open to work on other
                     technologies too. Besides coding, I like to play indie and
                     retro games.
                     <a
                        href={
                           "https://portifolio-pedro-dev-083-bucket.s3.sa-east-1.amazonaws.com/Curriculos/Pedro+Souza+de+Azevedo+-+Curriculum.pdf"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Click here to see a Resume about me.
                     </a>
                  </p>
               </AboutContainer>
            </div>
         </SummaryContainer>
         <SubStoryContainer title="How I became a Dev">
            <p>I always love to use a computer to </p>
         </SubStoryContainer>
         <SubStoryContainer title="Plans to go on" isReverse>
            <p>Where I live now and where I wish to go</p>
         </SubStoryContainer>
         {/* <SubStoryContainer title="Besides coding, who I am">
            <p>Tell other stuff about me without code</p>
            <p>Tell about games that I like</p>
            <p>Youtube, cannot forget</p>
            <p>Edit videos</p>
         </SubStoryContainer> */}
         <StacksContainer>
            {/* TODO: In a technology that I click, I can show I project that I used that technology */}
            <StackModal iconName="SiJavascript" />
            <StackModal iconName="SiNodedotjs" />
            <StackModal iconName="SiTypescript" />
            <StackModal iconName="SiDotnet" />
         </StacksContainer>
      </MainContainer>
   );
}
