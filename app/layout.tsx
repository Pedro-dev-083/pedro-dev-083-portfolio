import Header from "./components/Header/Header";
import GlobalStyles from "./theme/GlobalStyles";

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="pt-br">
         <body>
            <GlobalStyles />
            <Header />
            {children}
         </body>
      </html>
   );
}
