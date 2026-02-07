import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/aziz_ben_arfa/", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/benArfaproduction", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@azizbenarfa", label: "YouTube" },
];

const contactInfo = [
  { icon: Mail, text: "contact@azizbenarfa.com", href: "mailto:contact@azizbenarfa.com" },
  { icon: Phone, text: "(+216) 22 588 479", href: "tel:+21622588479" },
  { icon: Instagram, text: "@benarfa.production", href: "https://www.instagram.com/aziz_ben_arfa/" },
  { icon: MapPin, text: "Rue Moncef Bey, La Marsa 2070, Tunisia", href: "https://maps.google.com/?q=Rue+Moncef+Bey,+La+Marsa+2070,+Tunisia" },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4 block font-body">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Let's Create Together
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Have a project in mind? I'd love to hear about it. Reach out and let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-body">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-body">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 font-body">
                  Subject
                </label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Wedding Photography Inquiry"
                  required
                  className="bg-card border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-body">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="bg-card border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-12"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors font-body"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-foreground font-body">{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Follow My Work
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-soft"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Studio Info */}
            <div className="mt-12 p-6 bg-card rounded-lg border border-border shadow-soft">
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                Benarfa Production
              </h4>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Professional photography studio specializing in weddings, portraits, 
                fashion, and commercial advertising. Based in La Marsa, Tunisia, serving clients 
                worldwide.
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8 rounded-lg overflow-hidden border border-border shadow-soft">
              <iframe
                title="Benarfa Production Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5!2d10.3247!3d36.8789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRue+Moncef+Bey%2C+La+Marsa+2070!5e0!3m2!1sen!2stn!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
