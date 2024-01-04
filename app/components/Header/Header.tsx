"use client";
import { usePathname } from "next/navigation";
import { HeaderMain } from "./styled";
import RouteLink from "./RouteLink/RouteLink";

export default function Header() {
   const currentPath = usePathname();

   function isCurrentPath(path: string) {
      return path === currentPath;
   }

   return (
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
   );
}
