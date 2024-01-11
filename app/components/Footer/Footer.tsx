import { useNotFound } from "../../NotFoundProvider";
import {
   ContactContainer,
   Container,
   FooterMain,
   LogoContainer,
   RightsContainer,
} from "./styled";

export default function Footer() {
   const { notFound } = useNotFound();

   return (
      <>
         {!notFound && (
            <FooterMain>
               <Container>
                  <LogoContainer></LogoContainer>
                  <ContactContainer></ContactContainer>
                  <RightsContainer></RightsContainer>
               </Container>
            </FooterMain>
         )}
      </>
   );
}
