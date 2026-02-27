"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, FileText, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground animate-slide-up">
            Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Mike Anderson</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium animate-slide-up animation-delay-100">
            Sr. QA Engineer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Senior Quality Assurance professional with over 10 years of experience testing in both manual and automated testing across web, mobile, and API platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6 animate-slide-up animation-delay-300">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("contact")}
              className="font-semibold hover:bg-primary/5 hover:text-primary hover:border-primary/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center gap-4 pt-6 animate-slide-up animation-delay-300">
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 active:scale-95 transition-all cursor-pointer">
              <a href="https://github.com/mikeandersonwwt" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="cursor-pointer">
                <Github className="h-5 w-5 transition-transform hover:scale-110 hover:text-primary" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 active:scale-95 transition-all cursor-pointer">
              <a href="/portfolio/resume.html" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="cursor-pointer">
                <FileText className="h-5 w-5 transition-transform hover:scale-110 hover:text-primary" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 active:scale-95 transition-all cursor-pointer">
              <a href="mailto:mike.anderson@wwt.com" aria-label="Email" className="cursor-pointer">
                <Mail className="h-5 w-5 transition-transform hover:scale-110 hover:text-primary" />
              </a>
            </Button>
          </div>

          <div className="pt-12">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-all animate-bounce cursor-pointer hover:scale-110"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-6 w-6 mx-auto transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
