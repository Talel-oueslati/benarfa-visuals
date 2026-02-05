 import { motion } from "framer-motion";
 
 // Client logos with text-based placeholders (these would be actual logos in production)
 const clients = [
   { name: "Ooredoo", display: "OOREDOO" },
   { name: "Orange", display: "ORANGE" },
   { name: "Collège LaSalle", display: "LA SALLE" },
   { name: "Tunisie Telecom", display: "TUNISIE TELECOM" },
   { name: "Carrefour", display: "CARREFOUR" },
   { name: "Monoprix", display: "MONOPRIX" },
   { name: "Aziza", display: "AZIZA" },
   { name: "BH Bank", display: "BH BANK" },
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
               <div className="flex items-center justify-center h-12 px-8 bg-background/50 rounded-lg border border-border/50 backdrop-blur-sm">
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