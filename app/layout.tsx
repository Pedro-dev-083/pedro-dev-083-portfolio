"use client";
import Header from "./components/Header/Header";
import GlobalStyles from "./theme/GlobalStyles";
import NotFoundProvider from "./NotFoundProvider";
import { Playfair_Display } from "next/font/google";
import Footer from "./components/Footer/Footer";

const playfair_display = Playfair_Display({
   subsets: ["latin"],
});

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html className={playfair_display.className} lang="pt-br">
         <head>
            <title>Pedro Azevedo Portifolio</title>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link
               rel="icon"
               href="/icon?<generated>"
               type="image/<generated>"
               sizes="<generated>"
            />

            <link
               rel="apple-touch-icon"
               href="/apple-icon?<generated>"
               type="image/<generated>"
               sizes="<generated>"
            />
         </head>
         <body>
            <NotFoundProvider>
               <GlobalStyles />
               <Header />
               {children}
               <Footer />
            </NotFoundProvider>
         </body>
      </html>
   );
}
