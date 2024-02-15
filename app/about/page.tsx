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
import { useEffect, useState } from "react";

export default function About() {
   const [shouldAnimate, setShouldAnimate] = useState(false);

   useEffect(() => {
      setShouldAnimate(true);
   }, []);

   return (
      <MainContainer>
         <SummaryContainer $shouldAnimate={shouldAnimate}>
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
                  </p>
                  <a
                     href={
                        "https://portifolio-pedro-dev-083-bucket.s3.sa-east-1.amazonaws.com/Curriculos/Pedro+Souza+de+Azevedo+-+Curriculum.pdf"
                     }
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Click here to see a Resume about me.
                  </a>
               </AboutContainer>
            </div>
         </SummaryContainer>
         <SubStoryContainer title="My story as a Developer">
            <p>
               By 2019, after finishing high school, I decided to take an
               in-person programming logic course at Caelum, with the support of
               my family. In 2020, I started my undergraduate studies in
               Information Systems at Estácio de Sá.
            </p>
            <p>
               In 2022, I had the opportunity to intern at the Regional Nursing
               Council of Rio de Janeiro. There, I participated in the beginning
               of a project called Capacita Coren, I worked mainly on the
               front-end, using the React.js framework, but I also dabbled a bit
               in the back-end with Laravel and MySQL, in addition to being
               exposed to the agile methodology Scrum.
            </p>
            <p>
               At the end of 2022, I changed internships and went to another
               company, leaving the development of Capacita Coren. In early
               2023, I started interning at TopDown Sistemas, where I worked on
               the TopSaúde system. There, I had the opportunity to migrate
               legacy ASP Classic code to ASP.NET MVC, using C#, jQuery, and
               PLSQL. Additionally, I optimized the system, created new
               features, and conducted automated tests with the Orange Testing
               platform. I also deepened my knowledge of Scrum culture,
               participating in dailies and conducting sprints, among other
               activities.
            </p>
            <p>
               {" "}
               In July 2023, I was promoted to Junior Developer, starting to
               perform Code Reviews and create training videos about the
               technology used to disseminate knowledge within the company. At
               the end of 2023, I completed my undergraduate studies in
               Information Systems at Estácio. Now, in 2024, I am specializing
               in Software Engineering at PUC-Rio.
            </p>
         </SubStoryContainer>
         <SubStoryContainer title="Plans to go on" isReverse>
            <p>Where I live now and where I wish to go</p>
         </SubStoryContainer>
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
