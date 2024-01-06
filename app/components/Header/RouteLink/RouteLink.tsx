import Link from "next/link";

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
      <Link href={href} {...props}>
         {children}
      </Link>
   );
}
