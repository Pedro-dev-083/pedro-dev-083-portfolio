"use client";
import { usePathname } from "next/navigation";
import { HeaderMain } from "./styled";
import RouteLink from "./RouteLink/RouteLink";
import { useNotFound } from "../../NotFoundProvider";

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
               <div>
                  <RouteLink iAmTheCurrentLink={isCurrentPath("/")} href={"/"}>
                     Home
                  </RouteLink>
                  <br />
                  <RouteLink
                     iAmTheCurrentLink={isCurrentPath("/about")}
                     href={"/about"}
                  >
                     About
                  </RouteLink>
                  <br />
                  <RouteLink
                     iAmTheCurrentLink={isCurrentPath("/contact")}
                     href={"/contact"}
                  >
                     Contact
                  </RouteLink>
               </div>
            </HeaderMain>
         )}
      </>
   );
}
