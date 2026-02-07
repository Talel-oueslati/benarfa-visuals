 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { ArrowDown } from "lucide-react";
 import heroVideo from "@/assets/hero-video.mp4";

export const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Background Video */}
      <div className="absolute inset-0">
         <video
           autoPlay
           muted
           loop
           playsInline
           className="w-full h-full object-cover"
           poster=""
         >
           <source src={heroVideo} type="video/mp4" />
         </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4 font-body">
              Photography & Visual Advertising
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 leading-[1.1]"
          >
            Aziz Ben Arfa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-foreground/80 mb-4 font-display italic"
          >
            Founder — @benarfa.production
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-muted-foreground mb-10 max-w-xl font-body leading-relaxed"
          >
            A good picture keeps a moment from running away.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" onClick={scrollToPortfolio}>
              View Portfolio
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToContact}>
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToPortfolio}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-foreground/60 hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase mb-2 font-body">Scroll</span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};
