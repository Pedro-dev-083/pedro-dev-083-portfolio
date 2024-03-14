import { SiPython } from "react-icons/si";
import { Container } from "./styled";
import { useEffect, useState } from "react";

interface StackProps {
   stack: string;
   setStack: React.Dispatch<React.SetStateAction<string>>;
}

export default function Stack({ stack, setStack }: StackProps) {
   const [itsMe, setItsMe] = useState(false);
   useEffect(() => {
      stack === "SiPython" ? setItsMe(true) : setItsMe(false);
   }, [stack]);
   return (
      <Container $itsMe={itsMe} onClick={() => {
         stack === "SiPython" ? setStack("") : setStack("SiPython");
      }}>
         <SiPython size={25} />
      </Container>
   );
}
