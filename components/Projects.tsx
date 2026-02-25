"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    id: 1,
    title: "Playwright Tests",
    description: "Playwright test automation suite built against SauceDemo. It demonstrates production-style test architecture and practical QA workflows.",
    tech: ["Playwright", "JavaScript", "TypeScript"],
    github: "https://github.com/mikeandersonwwt/playwright-saucelabs",
    demo: "https://mikeandersonwwt.github.io/playwright-saucelabs/",
    image: "https://raw.githubusercontent.com/mikeandersonwwt/portfolio/main/public/playwright-logo.svg",
  },
  {
    id: 2,
    title: "Cypress Tests",
    description: "Collection of Cypress test examples and experiments demonstrating various testing patterns and integrations with SauceLabs.",
    tech: ["Cypress", "JavaScript"],
    github: "https://github.com/mikeandersonwwt/cypress-saucelabs",
    demo: "",
    image: "https://raw.githubusercontent.com/mikeandersonwwt/portfolio/main/public/cypress-logo.png",
  },
  {
    id: 3,
    title: "Puzzle Games",
    description: "A collection of classic and modern puzzle games built with pure HTML, CSS, and JavaScript. All games can run entirely in your browser with no backend needed! The games were also built with responsive design to allow for use on mobile.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mikeandersonwwt/puzzle-games",
    demo: "https://mikeandersonwwt.github.io/puzzle-games/",
    demoButtonText: "Play",
    image: "🧩",
  },
  {
    id: 4,
    title: "Yahtzee Game",
    description: "A web-based implementation of the classic Yahtzee dice game, built with React, TypeScript, and Vite. This project showcases full-stack development skills, AI opponent implementation, and automated CI/CD deployment using GitHub Actions.",
    tech: ["React", "TypeScript", "GitHub Actions"],
    github: "https://github.com/mikeandersonwwt/yahtzee-game",
    demo: "https://mikeandersonwwt.github.io/yahtzee-game/",
    demoButtonText: "Play",
    image: "🎲",
  },
  {
    id: 5,
    title: "The Odin Project Exercises",
    description: "Web development learning projects from The Odin Project curriculum. Hands-on exercises covering HTML, CSS, JavaScript, and modern web development practices.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mikeandersonwwt/my-odin-project",
    demo: "https://mikeandersonwwt.github.io/my-odin-project/",
    demoButtonText: "View Work",
    image: "https://raw.githubusercontent.com/mikeandersonwwt/portfolio/main/public/odin-logo.png",
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {projects.slice(0, 2).map((project) => (
            <Card key={project.id} className="flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/50 group">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4 p-8 overflow-hidden">
                  {project.image.startsWith('/') || project.image.startsWith('http') ? (
                    <img
                      src={project.image}
                      alt={`${project.title} logo`}
                      className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-9xl transition-transform duration-300 group-hover:scale-110">
                      {project.image}
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1 active:scale-95 transition-all hover:bg-primary/10 hover:text-primary hover:border-primary/50 group cursor-pointer">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <Github className="h-4 w-4 mr-2 transition-all group-hover:rotate-12 group-hover:text-primary" />
                    View Code
                  </a>
                </Button>
                {project.demo && (
                  <Button size="sm" asChild className="flex-1 active:scale-95 transition-all group cursor-pointer">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <ExternalLink className="h-4 w-4 mr-2 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-foreground" />
                      {project.demoButtonText || "Demo"}
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(2).map((project) => (
            <Card key={project.id} className="flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/50 group">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4 p-8 overflow-hidden">
                  {project.image.startsWith('/') || project.image.startsWith('http') ? (
                    <img
                      src={project.image}
                      alt={`${project.title} logo`}
                      className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-9xl transition-transform duration-300 group-hover:scale-110">
                      {project.image}
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1 active:scale-95 transition-all hover:bg-primary/10 hover:text-primary hover:border-primary/50 group cursor-pointer">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <Github className="h-4 w-4 mr-2 transition-all group-hover:rotate-12 group-hover:text-primary" />
                    View Code
                  </a>
                </Button>
                {project.demo && (
                  <Button size="sm" asChild className="flex-1 active:scale-95 transition-all group cursor-pointer">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <ExternalLink className="h-4 w-4 mr-2 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-foreground" />
                      {project.demoButtonText || "Demo"}
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
