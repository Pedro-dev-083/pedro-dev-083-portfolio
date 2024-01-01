import Header from "./components/Header/Header";

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="pt-br">
         <body>
            <Header />
            {children}
         </body>
      </html>
   );
}
