import { useState } from "react";
import { ProjectContainer } from "./styled";
import Project from "../../components/Project/Project";
import Image from "next/image";

export default function ProjectModal() {
   const [visible, setVisible] = useState(false);
   return (
      <>
         <ProjectContainer onClick={() => setVisible(true)}>
            <Image
               src={
                  "https://portifolio-pedro-dev-083-bucket.s3.sa-east-1.amazonaws.com/projects-images/4862756037.png"
               }
               alt={"An barcode"}
               width={150}
               height={150}
            />
            <p>Name of the Project</p>
         </ProjectContainer>
         <Project visible={visible} setVisible={setVisible} />
      </>
   );
}
