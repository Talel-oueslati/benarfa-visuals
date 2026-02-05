 import { motion } from "framer-motion";
 import { cn } from "@/lib/utils";
 
 interface LightboxThumbnailsProps {
   images: string[];
   currentIndex: number;
   onSelect: (index: number) => void;
   title: string;
 }
 
 export const LightboxThumbnails = ({
   images,
   currentIndex,
   onSelect,
   title,
 }: LightboxThumbnailsProps) => {
   return (
     <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4">
       <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 scrollbar-hide">
         {images.map((image, index) => (
           <motion.button
             key={index}
             onClick={(e) => {
               e.stopPropagation();
               onSelect(index);
             }}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className={cn(
               "relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300",
               currentIndex === index
                 ? "ring-2 ring-primary ring-offset-2 ring-offset-foreground/95 opacity-100"
                 : "opacity-50 hover:opacity-80"
             )}
           >
             <img
               src={image}
               alt={`${title} thumbnail ${index + 1}`}
               className="w-full h-full object-cover"
             />
             {currentIndex === index && (
               <motion.div
                 layoutId="thumbnail-indicator"
                 className="absolute inset-0 border-2 border-primary rounded-lg"
               />
             )}
           </motion.button>
         ))}
       </div>
     </div>
   );
 };