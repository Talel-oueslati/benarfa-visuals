 import { useState } from "react";
 import { motion } from "framer-motion";
 import { Play, Youtube, X } from "lucide-react";
import { Button } from "@/components/ui/button";
 import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
 } from "@/components/ui/dialog";

const videos = [
  {
    id: "1",
    title: "Behind the Scenes",
    description: "A glimpse into the creative process",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video IDs
  },
  {
    id: "2",
    title: "Wedding Highlights",
    description: "Capturing love stories",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Fashion Shoot",
    description: "Editorial session walkthrough",
    thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export const VideoSection = () => {
   const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
 
  return (
    <section id="videos" className="py-24 lg:py-32 bg-background">
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
            Behind the Lens
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Video & Live Sessions
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Experience the artistry through motion. Behind-the-scenes content, live shoots, and creative sessions.
          </p>
        </motion.div>

       {/* Recent Header with View All */}
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         className="flex items-center justify-between mb-8"
       >
         <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium font-body">
           Recent
         </span>
         <Button variant="ghost" size="sm" asChild>
           <a
             href="https://www.youtube.com/@azizbenarfa"
             target="_blank"
             rel="noopener noreferrer"
             className="text-primary hover:text-primary/80"
           >
             View All
           </a>
         </Button>
       </motion.div>
 
        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
             <button
               onClick={() => setSelectedVideo(video)}
               className="block w-full text-left"
              >
                <div className="relative aspect-video overflow-hidden rounded-lg shadow-card bg-muted">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/50 transition-colors duration-300" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-elevated">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 font-body">
                    {video.description}
                  </p>
                </div>
             </button>
            </motion.div>
          ))}
        </div>

       {/* Video Popup Dialog */}
       <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
         <DialogContent className="max-w-4xl p-0 bg-background border-border overflow-hidden">
           <DialogHeader className="p-4 pb-0">
             <DialogTitle className="font-display text-xl">
               {selectedVideo?.title}
             </DialogTitle>
           </DialogHeader>
           <div className="aspect-video w-full">
             {selectedVideo && (
               <iframe
                 src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                 title={selectedVideo.title}
                 className="w-full h-full"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
               />
             )}
           </div>
           <p className="px-4 pb-4 text-muted-foreground text-sm font-body">
             {selectedVideo?.description}
           </p>
         </DialogContent>
       </Dialog>
 
        {/* YouTube Channel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.youtube.com/@azizbenarfa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Youtube className="w-5 h-5" />
              Subscribe to Channel
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
