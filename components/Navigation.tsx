"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (theme === "dark" || (!theme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ["hero", "about", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-shadow duration-300 ${
      isScrolled ? "shadow-lg shadow-primary/5" : ""
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Portfolio
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`relative text-foreground/80 hover:text-foreground transition-colors group cursor-pointer ${
                activeSection === "about" ? "text-foreground font-medium" : ""
              }`}
            >
              About
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                activeSection === "about" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`relative text-foreground/80 hover:text-foreground transition-colors group cursor-pointer ${
                activeSection === "projects" ? "text-foreground font-medium" : ""
              }`}
            >
              Projects
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                activeSection === "projects" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`relative text-foreground/80 hover:text-foreground transition-colors group cursor-pointer ${
                activeSection === "contact" ? "text-foreground font-medium" : ""
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                activeSection === "contact" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}></span>
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="active:scale-95 transition-all"
            >
              {isDark ? (
                <Sun className="h-5 w-5 transition-transform hover:rotate-180 duration-500" />
              ) : (
                <Moon className="h-5 w-5 transition-transform hover:-rotate-12 duration-300" />
              )}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="active:scale-95 transition-all"
            >
              {isDark ? (
                <Sun className="h-5 w-5 transition-transform hover:rotate-180 duration-500" />
              ) : (
                <Moon className="h-5 w-5 transition-transform hover:-rotate-12 duration-300" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="cursor-pointer active:scale-95 transition-transform"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform hover:rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform hover:scale-110" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all cursor-pointer active:scale-95"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-3 py-2 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all cursor-pointer active:scale-95"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all cursor-pointer active:scale-95"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
