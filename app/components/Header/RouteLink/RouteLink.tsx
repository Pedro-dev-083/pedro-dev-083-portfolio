import Link from "next/link";
import { ContainerRouteLink } from "./styled";

interface LinkProps {
   children: React.ReactNode;
   href: string;
   iAmTheCurrentLink: boolean;
}
export default function RouteLink({
   children,
   href,
   iAmTheCurrentLink,
   ...props
}: LinkProps) {
   return (
      <ContainerRouteLink>
         <Link href={href} {...props}>
            {children}
         </Link>
      </ContainerRouteLink>
   );
}
