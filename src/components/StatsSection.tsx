 import { useEffect, useState, useRef } from "react";
 import { motion, useInView } from "framer-motion";
 
 interface StatItemProps {
   value: number;
   suffix: string;
   label: string;
   delay?: number;
   isInView: boolean;
 }
 
 const StatItem = ({ value, suffix, label, delay = 0, isInView }: StatItemProps) => {
   const [count, setCount] = useState(0);
 
   useEffect(() => {
     if (!isInView) return;
 
     const duration = 2000; // 2 seconds
     const steps = 60;
     const stepValue = value / steps;
     const stepDuration = duration / steps;
 
     let currentStep = 0;
     const timer = setTimeout(() => {
       const interval = setInterval(() => {
         currentStep++;
         setCount(Math.min(Math.round(stepValue * currentStep), value));
 
         if (currentStep >= steps) {
           clearInterval(interval);
         }
       }, stepDuration);
 
       return () => clearInterval(interval);
     }, delay);
 
     return () => clearTimeout(timer);
   }, [isInView, value, delay]);
 
   return (
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6, delay: delay / 1000 }}
       className="text-center"
     >
       <div className="flex items-baseline justify-center gap-1">
         <span className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-primary">
           {count}
         </span>
         <span className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
           {suffix}
         </span>
       </div>
       <p className="mt-2 text-muted-foreground font-body text-lg tracking-wide">
         {label}
       </p>
     </motion.div>
   );
 };
 
 const stats = [
   { value: 150, suffix: "+", label: "Happy Clients" },
   { value: 300, suffix: "+", label: "Projects Completed" },
   { value: 10, suffix: "+", label: "Years Experience" },
   { value: 5, suffix: "+", label: "Countries Served" },
 ];
 
 export const StatsSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section ref={ref} className="py-16 lg:py-24 bg-card">
       <div className="container mx-auto px-6 lg:px-12">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
           {stats.map((stat, index) => (
             <StatItem
               key={stat.label}
               value={stat.value}
               suffix={stat.suffix}
               label={stat.label}
               delay={index * 200}
               isInView={isInView}
             />
           ))}
         </div>
       </div>
     </section>
   );
 };