import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  index: number;
}

export const PortfolioCard = ({ title, subtitle, image, link, index }: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link to={link} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-card">
          {/* Image */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-xs tracking-[0.2em] uppercase text-secondary font-body mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {subtitle}
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-secondary mb-4">
                {title}
              </h3>
              <div className="flex items-center gap-2 text-secondary font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span>View Gallery</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Border accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </Link>
    </motion.div>
  );
};
