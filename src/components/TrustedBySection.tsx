import { motion } from "framer-motion";

import ooredooLogo from "@/assets/logos/ooredoo.png";
import orangeLogo from "@/assets/logos/orange.png";
import lasalleLogo from "@/assets/logos/lasalle.png";
import tunisieTelecomLogo from "@/assets/logos/tunisie-telecom.png";
import carrefourLogo from "@/assets/logos/carrefour.png";
import monoprixLogo from "@/assets/logos/monoprix.png";
import azizaLogo from "@/assets/logos/aziza.png";
import bhbankLogo from "@/assets/logos/bhbank.png";

const clients = [
  { name: "Ooredoo", logo: ooredooLogo },
  { name: "Orange", logo: orangeLogo },
  { name: "Collège LaSalle", logo: lasalleLogo },
  { name: "Tunisie Telecom", logo: tunisieTelecomLogo },
  { name: "Carrefour", logo: carrefourLogo },
  { name: "Monoprix", logo: monoprixLogo },
  { name: "Aziza", logo: azizaLogo },
  { name: "BH Bank", logo: bhbankLogo },
];

export const TrustedBySection = () => {
  // Quadruple the list for a truly seamless loop
  const repeatedClients = [...clients, ...clients, ...clients, ...clients];

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

      {/* Infinite scrolling logos with CSS animation */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />

        <div className="marquee-container">
          <div className="marquee-track">
            {repeatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 px-6"
              >
                <div className="flex items-center justify-center h-16 px-8 bg-background/50 rounded-lg border border-border/50 backdrop-blur-sm">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-10 w-auto max-w-[120px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
