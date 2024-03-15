import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import {
   ContainerContent,
   PhotoContainer,
   ProjectContainer,
   SummaryContainer,
   TitleContainer,
} from "./styled";
import Image from "next/image";

export default function Project() {
   const [visible, setVisible] = useState(false);
   return (
      <>
         <ProjectContainer onClick={() => setVisible(true)}>
            <p>Project</p>
         </ProjectContainer>
         <Modal isCalled={visible} setIsCalled={setVisible}>
            <ContainerContent>
               <p>Last project I worked on:</p>
               <SummaryContainer>
                  <TitleContainer>
                     <p>Name: Tag Creator Api</p>
                     <a
                        href={
                           "https://github.com/Pedro-dev-083/tag-creator-api"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Repository: tag-creator-api
                     </a>
                     <p>
                        Description: An API, wrote in Python, that creates an
                        barcode like the commonly used on markets
                     </p>
                  </TitleContainer>
                  <PhotoContainer>
                     <Image
                        src={
                           "https://portifolio-pedro-dev-083-bucket.s3.sa-east-1.amazonaws.com/projects-images/4862756037.png"
                        }
                        alt={"An barcode"}
                        width={150}
                        height={150}
                     />
                     <p>This is a example of the barcode</p>
                  </PhotoContainer>
               </SummaryContainer>
            </ContainerContent>
         </Modal>
      </>
   );
}
