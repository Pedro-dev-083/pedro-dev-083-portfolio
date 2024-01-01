"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
   const router = usePathname();

   const currentPath = router;
   return (
      <div>
         <p>This is a header</p>
         <p>You are in {currentPath}</p>
         {router === "/" ? <p>Home</p> : <Link href={"/"}>Home</Link>}
         <br />
         <Link href={"/about"}>About</Link>
         <br />
         <Link href={"/contact"}>About</Link>
      </div>
   );
}
