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
                     I am an information systems developer with experience
                     professional at TopDown Sistemas, where I was responsible
                     for legacy code migrations and new feature development for
                     healthcare management systems, using ASP.NET MVC, jQuery
                     and PL/SQL.
                  </p>
               </AboutContainer>
            </div>
         </SummaryContainer>
         {/* TODO: A idea: make a component which is separated by a line and loads only when I scroll*/}
         <SubStoryContainer title="How I became a Dev">
            <p>Saying about my background as a dev</p>
         </SubStoryContainer>
         <SubStoryContainer title="Plans to go on" isReverse>
            <p>Where I live now and where I wish to go</p>
         </SubStoryContainer>
         <SubStoryContainer title="Besides coding, who I am">
            <p>Tell other stuff about me without code</p>
            <p>Tell about games that I like</p>
            <p>Youtube, cannot forget</p>
            <p>Edit videos</p>
         </SubStoryContainer>
         <StacksContainer>
            {/* TODO: In a technology that I click, I can show I project that I used that technology */}
            <StackModal iconName="SiJavascript" />
            <StackModal iconName="SiNodedotjs" />
            <StackModal iconName="SiTypescript" />
            <StackModal iconName="SiDotnet" />
            {/* <StackModal iconName="SiMongodb" /> */}
         </StacksContainer>
         <div>
            <p>Certifications</p>
            <a
               href={
                  "https://cursos.alura.com.br/user/pedroazevedo83/fullCertificate/92175fbee5c62bc0351c228158cd629f"
               }
               target="_blank"
               rel="noopener noreferrer"
            >
               Alura Certificate
            </a>

            <a
               href={
                  "https://portifolio-pedro-dev-083-bucket.s3.sa-east-1.amazonaws.com/Curriculos/Pedro+Souza+de+Azevedo+-+Curriculum.pdf"
               }
               target="_blank"
               rel="noopener noreferrer"
            >
               Resume
            </a>
         </div>
      </MainContainer>
   );
}
