import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import portfolio images
import weddingsImg from "@/assets/portfolio-weddings.jpg";
import portraitImg from "@/assets/portfolio-portrait.jpg";
import fashionImg from "@/assets/portfolio-fashion.jpg";

// Gallery images per category (these would come from folder/storage in production)
const galleryData: Record<string, { title: string; subtitle: string; images: string[] }> = {
  weddings: {
    title: "Weddings",
    subtitle: "Love Stories Captured Forever",
    images: [
      weddingsImg,
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    ],
  },
  portrait: {
    title: "Portrait",
    subtitle: "Personal Expression & Character",
    images: [
      portraitImg,
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    ],
  },
  fashion: {
    title: "Fashion",
    subtitle: "Editorial & Commercial Excellence",
    images: [
      fashionImg,
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    ],
  },
};

const categories = [
  { slug: "weddings", name: "Weddings" },
  { slug: "portrait", name: "Portrait" },
  { slug: "fashion", name: "Fashion" },
];

export default function PortfolioCategory() {
  const { category } = useParams<{ category: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const data = galleryData[category || "weddings"];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Category not found</p>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + data.images.length) % data.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/#portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4 block font-body">
              {data.subtitle}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8">
              {data.title}
            </h1>

            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <Link key={cat.slug} to={`/portfolio/${cat.slug}`}>
                  <Button
                    variant={cat.slug === category ? "default" : "outline"}
                    size="lg"
                  >
                    {cat.name}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {data.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-card">
                  <img
                    src={image}
                    alt={`${data.title} photography ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-secondary hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 text-secondary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 text-secondary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            {/* Image */}
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={data.images[currentImageIndex]}
              alt={`${data.title} ${currentImageIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-secondary font-body">
              {currentImageIndex + 1} / {data.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}