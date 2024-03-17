import { useState } from "react";
import { ProjectContainer } from "./styled";
import Project from "../../components/Project/Project";

export default function ProjectModal() {
   const [visible, setVisible] = useState(false);
   return (
      <>
         <ProjectContainer onClick={() => setVisible(true)}>
            <p>Project</p>
         </ProjectContainer>
         <Project visible={visible} setVisible={setVisible} />
      </>
   );
}
