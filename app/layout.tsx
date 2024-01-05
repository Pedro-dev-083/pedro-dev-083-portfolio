"use client";
import { usePathname } from "next/navigation";
import Header from "./components/Header/Header";
import GlobalStyles from "./theme/GlobalStyles";
import { useEffect, useState } from "react";
import NotFoundProvider from "./NotFoundProvider";

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const pathName = usePathname();
   const [is404Page, setIs404Page] = useState(false);

   useEffect(() => {
      setIs404Page(pathName === "/404");
   }, [pathName]);

   return (
      <html lang="pt-br">
         <body>
            <NotFoundProvider>
               <GlobalStyles />
               {!is404Page && <Header />}
               {children}
            </NotFoundProvider>
         </body>
      </html>
   );
}
