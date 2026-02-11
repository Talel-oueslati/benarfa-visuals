import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1 md:right-6"
      role="radiogroup"
      aria-label="Theme switcher"
    >
      <div className="relative flex flex-col items-center rounded-full bg-background/60 backdrop-blur-md border border-border/50 shadow-elevated p-1.5 gap-1">
        {/* Sliding indicator */}
        <motion.div
          className="absolute left-1.5 right-1.5 h-8 rounded-full bg-primary/20"
          animate={{ y: isDark ? 36 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />

        {/* Sun */}
        <button
          onClick={() => setTheme("light")}
          className={`relative z-10 p-1.5 rounded-full transition-colors duration-300 ${
            !isDark ? "text-primary" : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label="Light mode"
          aria-checked={!isDark}
          role="radio"
        >
          <Sun size={18} />
        </button>

        {/* Moon */}
        <button
          onClick={() => setTheme("dark")}
          className={`relative z-10 p-1.5 rounded-full transition-colors duration-300 ${
            isDark ? "text-primary" : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label="Dark mode"
          aria-checked={isDark}
          role="radio"
        >
          <Moon size={18} />
        </button>
      </div>
    </div>
  );
};
