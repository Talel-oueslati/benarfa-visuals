import { motion } from "framer-motion";
import { Camera, Palette, Sparkles, Award } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Professional Photography",
    description: "High-quality photography for weddings, portraits, and commercial projects.",
  },
  {
    icon: Palette,
    title: "Photo Montage & Retouching",
    description: "Expert post-processing and artistic retouching to perfect every image.",
  },
  {
    icon: Sparkles,
    title: "Visual Advertising",
    description: "Creative advertising campaigns and commercial photography for brands.",
  },
  {
    icon: Award,
    title: "Brand Photography",
    description: "Building visual identities that resonate with your target audience.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4 block font-body">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Aziz Ben Arfa
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-body leading-relaxed">
              Based in Tunisia, I am a professional photographer with a passion for capturing 
              the extraordinary in ordinary moments. Through <strong className="text-foreground">Benarfa Production</strong>, 
              I offer comprehensive photography and visual advertising services that help brands 
              and individuals tell their unique stories.
            </p>
            <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
              My approach combines technical excellence with artistic vision, ensuring every 
              project reflects the highest standards of creativity and professionalism. From 
              intimate weddings to high-fashion editorials, I bring dedication and artistry 
              to every frame.
            </p>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image / Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                alt="Professional photographer at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
