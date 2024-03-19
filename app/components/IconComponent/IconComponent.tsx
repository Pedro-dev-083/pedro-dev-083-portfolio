import React, { ComponentType, LazyExoticComponent, ReactElement } from "react";
import { IconBaseProps } from "react-icons";
import { SiJavascript } from "react-icons/si";
import * as allIcons from "react-icons/si";

interface ImportIconResult {
   default: LazyExoticComponent<ComponentType<IconBaseProps>>;
}

interface IconComponentProps {
   iconName: string;
}

export default function IconComponent({
   iconName,
}: IconComponentProps): ReactElement | null {
   //TODO: Make a fake component which will be the copy of Lazy
   const importIcon = async (name: string): Promise<ImportIconResult> => {
      try {
         const uppercasedName = name.charAt(0).toUpperCase() + name.slice(1);
         const IconComponent = (allIcons as any)[uppercasedName];
         if (!IconComponent) {
            console.error(`Icon '${name}' not found.`);
            throw new Error(`Icon '${name}' not found.`);
         }
         return { default: IconComponent };
      } catch (error) {
         console.error(`Error on import Icon '${name}':`, error);
         throw error;
      }
   };
   const LazyIcon = React.lazy(() => importIcon(iconName));
   return LazyIcon ? (
      <>
         <React.Suspense fallback={<SiJavascript />}>
            <LazyIcon />
         </React.Suspense>
      </>
   ) : null;
}
