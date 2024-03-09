import { NumberBox, NumberContainer, PaginationContainer } from "./styled";

interface PaginationProps {
   page: number;
   setPage: React.Dispatch<React.SetStateAction<number>>;
   pagesLimit?: number;
}

export default function Pagination({
   page,
   setPage,
   pagesLimit = 1,
}: PaginationProps) {
   const numbers = Array.from({ length: pagesLimit }, (_, index) => index + 1);

   const showLeftArrow = page > 1;
   const showRightArrow = page < numbers.length - 1;

   const handleClickLeft = () => {
      setPage((prevPage) => (prevPage - 1 < 0 ? 0 : prevPage - 1));
   };

   const handleClickRight = () => {
      setPage((prevPage) => prevPage + 1);
   };
   return (
      // TODO: A function where, if its the number is the same of the page, the button will be different
      <PaginationContainer>
         <NumberContainer>
            <div>
               {showLeftArrow && (
                  <button onClick={handleClickLeft}>{"<"}</button>
               )}
            </div>
            {page <= 1 || page == numbers.length ? (
               <>
                  <NumberBox>{numbers[0]}</NumberBox>
                  <NumberBox>{numbers[1]}</NumberBox>
               </>
            ) : (
               numbers
                  .slice(page - 1, page + 2)
                  .map((number) => <NumberBox key={number}>{number}</NumberBox>)
            )}
         </NumberContainer>
         <div>
            {showRightArrow && (
               <button onClick={handleClickRight}>{">"}</button>
            )}
         </div>
      </PaginationContainer>
   );
}
