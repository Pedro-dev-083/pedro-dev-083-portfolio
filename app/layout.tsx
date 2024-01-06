"use client";
import Header from "./components/Header/Header";
import GlobalStyles from "./theme/GlobalStyles";
import NotFoundProvider from "./NotFoundProvider";

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="pt-br">
         <body>
            <NotFoundProvider>
               <GlobalStyles />
               <Header />
               {children}
            </NotFoundProvider>
         </body>
      </html>
   );
}
