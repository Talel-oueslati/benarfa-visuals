 import { motion } from "framer-motion";
 import { 
   Wifi, 
   Citrus, 
   GraduationCap, 
   Phone, 
   ShoppingCart, 
   Store, 
   Sparkles, 
   Landmark 
 } from "lucide-react";
 
 // Client logos with icons
 const clients = [
   { name: "Ooredoo", display: "OOREDOO", icon: Wifi },
   { name: "Orange", display: "ORANGE", icon: Citrus },
   { name: "Collège LaSalle", display: "LA SALLE", icon: GraduationCap },
   { name: "Tunisie Telecom", display: "TUNISIE TELECOM", icon: Phone },
   { name: "Carrefour", display: "CARREFOUR", icon: ShoppingCart },
   { name: "Monoprix", display: "MONOPRIX", icon: Store },
   { name: "Aziza", display: "AZIZA", icon: Sparkles },
   { name: "BH Bank", display: "BH BANK", icon: Landmark },
 ];
 
 export const TrustedBySection = () => {
   // Duplicate the array for seamless infinite scroll
   const duplicatedClients = [...clients, ...clients];
 
   return (
     <section className="py-12 lg:py-16 bg-secondary/30 overflow-hidden">
       <div className="container mx-auto px-6 lg:px-12 mb-8">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center"
         >
           <span className="text-sm tracking-[0.3em] uppercase text-primary font-medium font-body">
             Trusted By Leading Brands
           </span>
         </motion.div>
       </div>
 
       {/* Infinite scrolling logos */}
       <div className="relative">
         {/* Gradient masks */}
         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
 
         <motion.div
           className="flex gap-12 items-center"
           animate={{
             x: [0, -50 * clients.length * 8],
           }}
           transition={{
             x: {
               repeat: Infinity,
               repeatType: "loop",
               duration: 30,
               ease: "linear",
             },
           }}
         >
           {duplicatedClients.map((client, index) => (
             <div
               key={`${client.name}-${index}`}
               className="flex-shrink-0 px-6"
             >
               <div className="flex items-center justify-center gap-3 h-12 px-8 bg-background/50 rounded-lg border border-border/50 backdrop-blur-sm">
                 <client.icon className="w-5 h-5 text-primary" />
                 <span className="font-display text-lg md:text-xl font-semibold text-muted-foreground/70 whitespace-nowrap tracking-wide">
                   {client.display}
                 </span>
               </div>
             </div>
           ))}
         </motion.div>
       </div>
     </section>
   );
 };