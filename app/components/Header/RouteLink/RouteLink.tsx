import Link from "next/link";
import { ContainerRouteLink } from "./styled";
import { StyleSheetManager } from "styled-components";

export interface LinkProps {
   children: React.ReactNode;
   href: string;
   iamthecurrentlink?: boolean;
}

//TODO: Solve the style-component + typescript problem
export default function RouteLink({
   children,
   href,
   iamthecurrentlink,
   ...props
}: LinkProps) {
   return (
      <ContainerRouteLink iamthecurrentlink={iamthecurrentlink}>
         <Link href={href} {...props}>
            {children}
         </Link>
      </ContainerRouteLink>
   );
}
