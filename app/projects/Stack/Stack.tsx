import { SiPython } from "react-icons/si";
import { Container } from "./styled";
import { useEffect, useState } from "react";
import IconComponent from "../../components/IconComponent/IconComponent";

interface StackProps {
   stack: string;
   setStack: React.Dispatch<React.SetStateAction<string>>;
   iconName: string;
}

export default function Stack({ stack, setStack, iconName }: StackProps) {
   const [itsMe, setItsMe] = useState(false);
   useEffect(() => {
      stack === iconName ? setItsMe(true) : setItsMe(false);
   }, [stack, iconName]);
   return (
      <Container
         $itsMe={itsMe}
         onClick={() => {
            stack === iconName ? setStack("") : setStack(iconName);
         }}
      >
         <IconComponent iconName={iconName} />
      </Container>
   );
}
