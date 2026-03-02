"use client";

import { Bot, Code2, Database, Smartphone, Terminal, Workflow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { name: "AI & Tools", icon: Bot, description: "Windsurf, MS Copilot, ChatGPT" },
  { name: "Automation Tools", icon: Workflow, description: "Playwright, Cypress, BrowserStack" },
  { name: "API Tools", icon: Terminal, description: "Postman, Swagger, Mockoon" },
  { name: "Mobile Testing", icon: Smartphone, description: "iOS, Android, POS Systems" },
  { name: "Languages (novice)", icon: Code2, description: "JavaScript, TypeScript, Python" },
  { name: "Other", icon: Database, description: "Git, SQL, HTML/CSS" },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-background">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="mb-16">
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a QA Engineer with over 10 years of experience, mostly in hands-on roles.
              I’ve worked across web, mobile, API, and backend systems focusing on functional and exploratory testing of user flows and supporting that work with automation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What I enjoy most is being close to the product – writing tests, finding edge cases, and working with engineers to help drive quality. 
              I especially enjoy being in the weeds with the team, digging through logs, data, and test runs to uncover issues and help drive them to resolution.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center tracking-tight">
            Skills & <span className="text-primary">Technologies</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <Card key={skill.name} className="transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/50 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <skill.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
