import { Box } from "./styled";

interface NumberBoxProps {
   onClick: () => void;
   page: number;
   children: React.ReactNode;
}

export default function NumberBox({ onClick, page, children }: NumberBoxProps) {
   const isSelected = page === children;
   return (
      <Box onClick={onClick} $isSelected={isSelected}>
         {children}
      </Box>
   );
}
