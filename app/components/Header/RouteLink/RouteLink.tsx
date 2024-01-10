import Link from "next/link";
import { ContainerRouteLink } from "./styled";

export interface LinkProps {
   children: React.ReactNode;
   href: string;
   iAmTheCurrentLink?: boolean;
}

export default function RouteLink({
   children,
   href,
   iAmTheCurrentLink = false,
   ...props
}: LinkProps) {
   return (
      <ContainerRouteLink $iAmTheCurrentLink={iAmTheCurrentLink}>
         <Link href={href} {...props}>
            {children}
         </Link>
      </ContainerRouteLink>
   );
}
