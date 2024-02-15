import React, { useEffect, useState } from "react";
import { Container } from "./styled";

interface SubStoryContainerProps {
   title: string;
   children: React.ReactNode;
   isReverse?: boolean;
   height?: number;
}

export default function SubStoryContainer({
   title,
   children,
   isReverse,
   height = 500,
}: SubStoryContainerProps) {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const windowHeight = window.innerHeight;
         const divPosition = containerRef.current?.getBoundingClientRect().top;

         if (divPosition && divPosition < windowHeight * 0.75) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const containerRef = React.useRef<HTMLDivElement>(null);

   return (
      <Container
         ref={containerRef}
         $isReverse={isReverse}
         $isVisible={isVisible}
         $height={height}
      >
         <div>
            <h1>{title}</h1>
         </div>
         <div className="line"></div>
         <div>{children}</div>
      </Container>
   );
}
