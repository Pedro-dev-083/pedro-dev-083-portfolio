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
