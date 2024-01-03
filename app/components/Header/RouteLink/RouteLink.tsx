import Link from "next/link";

interface LinkProps {
   children: React.ReactNode;
   href: string;
}
export default function RouteLink({ children, href, ...props }: LinkProps) {
   return (
      <Link href={href} {...props}>
         {children}
      </Link>
   );
}
