"use client";
import { usePathname } from "next/navigation";
import { HeaderMain } from "./styled";
import RouteLink from "./RouteLink/RouteLink";

export default function Header() {
   const currentPath = usePathname();

   //TODO: Try to use as a provider for the current RouteLinks
   function isCurrentPath(path: string) {
      return path === currentPath ? "" : path;
   }

   return (
      <HeaderMain>
         <div>
            <RouteLink href={"/"}>Home</RouteLink>
            <br />
            <RouteLink href={"/about"}>About</RouteLink>
            <br />
            <RouteLink href={"/Contact"}>Contact</RouteLink>
         </div>
      </HeaderMain>
   );
}
