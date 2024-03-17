import {
   ContainerContent,
   PhotoContainer,
   SummaryContainer,
   TitleContainer,
} from "../../components/Project/styled";
import Image from "next/image";
import Modal from "../Modal/Modal";

interface ProjectProps {
   visible: boolean;
   setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Project({ visible, setVisible }: ProjectProps) {
   return (
      <Modal isCalled={visible} setIsCalled={setVisible}>
         <ContainerContent>
            <p>Last project I worked on:</p>
            <SummaryContainer>
               <TitleContainer>
                  <p>Name: Tag Creator Api</p>
                  <a
                     href={"https://github.com/Pedro-dev-083/tag-creator-api"}
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
   );
}
