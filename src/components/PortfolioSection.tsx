import { motion } from "framer-motion";
import { PortfolioCard } from "./PortfolioCard";
import weddingsImg from "@/assets/portfolio-weddings.jpg";
import portraitImg from "@/assets/portfolio-portrait.jpg";
import fashionImg from "@/assets/portfolio-fashion.jpg";

const portfolioItems = [
  {
    title: "Weddings",
    subtitle: "Love Stories",
    image: weddingsImg,
    link: "/portfolio/weddings",
  },
  {
    title: "Portrait",
    subtitle: "Personal Expression",
    image: portraitImg,
    link: "/portfolio/portrait",
  },
  {
    title: "Fashion",
    subtitle: "Editorial & Commercial",
    image: fashionImg,
    link: "/portfolio/fashion",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4 block font-body">
            Selected Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Portfolio
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            A curated collection of moments frozen in time, each telling its own unique story through the lens.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.title}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
