"use client";
import Link from "next/link";
import { useNotFound } from "./NotFoundProvider";
import { useEffect } from "react";

export default function NotFound() {
   const { setNotFound } = useNotFound();

   useEffect(() => {
      setNotFound(true);
   }, [setNotFound]);

   return (
      <div>
         <h2>Not Found</h2>
         <p>Could not find requested resource</p>
         <Link onClick={() => setNotFound(false)} href="/">
            Return Home
         </Link>
      </div>
   );
}
