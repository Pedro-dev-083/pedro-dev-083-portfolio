"use client";
import { usePathname } from "next/navigation";
import {
   Container,
   HeaderMain,
   LogoContainer,
   RoutesContainer,
} from "./styled";
import RouteLink from "./RouteLink/RouteLink";
import { useNotFound } from "../../NotFoundProvider";
import { Stylish } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import logoP from "../../public/images/LogoP.jpeg";

const stylish = Stylish({
   subsets: ["latin"],
   weight: "400",
});
export default function Header() {
   const currentPath = usePathname();
   const { notFound } = useNotFound();
   function isCurrentPath(path: string) {
      return path === currentPath;
   }

   return (
      <>
         {!notFound && (
            <HeaderMain>
               <Container>
                  <Link style={{ textDecoration: "none" }} href={"/"}>
                     <LogoContainer>
                        <Image
                           src={logoP}
                           alt="Created by AI. Icon of the letter 'P' designed to resemble a computer circuit. The letter is in white, set against a black background."
                           width={50}
                        />
                     </LogoContainer>
                  </Link>
                  <RoutesContainer className={stylish.className}>
                     <RouteLink
                        iAmTheCurrentLink={isCurrentPath("/")}
                        href={"/"}
                     >
                        Home
                     </RouteLink>
                     <RouteLink
                        iAmTheCurrentLink={isCurrentPath("/about")}
                        href={"/about"}
                     >
                        About
                     </RouteLink>
                     <RouteLink
                        iAmTheCurrentLink={isCurrentPath("/contact")}
                        href={"/contact"}
                     >
                        Contact
                     </RouteLink>
                  </RoutesContainer>
               </Container>
            </HeaderMain>
         )}
      </>
   );
}
