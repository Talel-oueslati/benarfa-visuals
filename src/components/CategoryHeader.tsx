 import { motion } from "framer-motion";
 import { Link } from "react-router-dom";
 import { ArrowLeft } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 // Cover images
 import coverWeddings from "@/assets/cover-weddings.jpg";
 import coverPortrait from "@/assets/cover-portrait.jpg";
 import coverFashion from "@/assets/cover-fashion.jpg";
 
 const coverImages: Record<string, string> = {
   weddings: coverWeddings,
   portrait: coverPortrait,
   fashion: coverFashion,
 };
 
 const categories = [
   { slug: "weddings", name: "Weddings" },
   { slug: "portrait", name: "Portrait" },
   { slug: "fashion", name: "Fashion" },
 ];
 
 interface CategoryHeaderProps {
   category: string;
   title: string;
   subtitle: string;
 }
 
 export const CategoryHeader = ({ category, title, subtitle }: CategoryHeaderProps) => {
   const coverImage = coverImages[category] || coverImages.weddings;
 
   return (
     <section className="relative pt-20 pb-16 min-h-[50vh] flex items-end overflow-hidden">
       {/* Cover Image Background */}
       <div className="absolute inset-0">
         <img
           src={coverImage}
           alt={`${title} cover`}
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
         <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
       </div>
 
       {/* Content */}
       <div className="relative z-10 container mx-auto px-6 lg:px-12">
         {/* Back Button */}
         <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.4 }}
         >
           <Link
             to="/#portfolio"
             className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors mb-8 font-body"
           >
             <ArrowLeft className="w-4 h-4" />
             Back to Portfolio
           </Link>
         </motion.div>
 
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center max-w-3xl mx-auto"
         >
           <span className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4 block font-body drop-shadow-sm">
             {subtitle}
           </span>
           <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 drop-shadow-sm">
             {title}
           </h1>
 
           {/* Category Navigation */}
           <div className="flex flex-wrap justify-center gap-4">
             {categories.map((cat) => (
               <Link key={cat.slug} to={`/portfolio/${cat.slug}`}>
                 <Button
                   variant={cat.slug === category ? "default" : "outline"}
                   size="lg"
                   className={cat.slug !== category ? "bg-background/80 backdrop-blur-sm" : ""}
                 >
                   {cat.name}
                 </Button>
               </Link>
             ))}
           </div>
         </motion.div>
       </div>
     </section>
   );
 };