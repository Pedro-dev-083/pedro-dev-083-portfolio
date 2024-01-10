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
                        <p> Pedro </p>
                        <p> Azevedo </p>
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
