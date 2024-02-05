"use client";
import Image from "next/image";
import {
   AboutContainer,
   PhotoContainer,
   StacksContainer,
   SummaryContainer,
} from "./styled";
import StackModal from "./StackModal/StackModal";

export default function About() {
   return (
      <div>
         <SummaryContainer>
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
               <p>
                  I am an information systems developer with experience
                  professional at TopDown Sistemas, where I was responsible for
                  legacy code migrations and new feature development for
                  healthcare management systems, using ASP.NET MVC, jQuery and
                  PL/SQL. Additionally, I created training videos for share
                  knowledge with co-workers and gained experience with Azure
                  DevOps, including Pull Requests, control of versioning,
                  deployments, sprints and management of tasks. Before that, I
                  worked as an intern at the same company, where I conducted the
                  migration of legacy code screens, carried out automated tests
                  and worked closely with the methodology Scrum, using Azure
                  DevOps and Git for project control. I also have experience as
                  an intern at COREN-RJ, where I developed a web application
                  full-stack and created tools for data compilation, and how
                  Young Apprentice in Administrative Operations at Supergasbras
                  - AMZ, where I worked with tax documents and acquired skills
                  essential for the corporate environment. My focus is on
                  continuous learning and development of skills in various areas
                  of technology. I am committed to contributing to challenging
                  projects and constantly evolving as information systems
                  developer.
               </p>
            </AboutContainer>
         </SummaryContainer>
         <p>Saying about my background as a dev</p>
         <p>Where I live now and where I wish to go</p>
         <div>
            <p>Tell other stuff about me without code</p>
            <p>Tell about games that I like</p>
            <p>Youtube, cannot forget</p>
            <p>Edit videos</p>
         </div>
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
      </div>
   );
}
