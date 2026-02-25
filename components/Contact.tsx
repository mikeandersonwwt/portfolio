"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, FileText, Github, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSubmittedData(formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setIsSubmitted(false);
        setSubmittedData(null);
      }, 10000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">mike.anderson@wwt.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="p-2 bg-primary/10 rounded-lg transition-all group-hover:bg-primary/20">
                    <FileText className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">About Me</p>
                    <a href="https://mikeanderson12.github.io/Resume/index.html" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors cursor-pointer">
                      View Resume
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="p-2 bg-primary/10 rounded-lg transition-all group-hover:bg-primary/20">
                    <Github className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a href="https://github.com/mikeandersonwwt" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors cursor-pointer">
                      GitHub profile
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="p-2 bg-primary/10 rounded-lg transition-all group-hover:bg-primary/20">
                    <Linkedin className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a href="https://linkedin.com/in/mike-anderson-2284b4b/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors cursor-pointer">
                      LinkedIn profile
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full active:scale-95 transition-transform font-semibold cursor-pointer">
                  Send Message
                </Button>

                {isSubmitted && (
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/10 text-primary rounded-lg text-center">
                      Thank you! Your message has only been sent to the console for you to see 😀 
                    </div>
                    {submittedData && (
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="text-xs font-mono text-muted-foreground mb-2">Console Output (Demo):</p>
                        <pre className="text-xs font-mono text-foreground overflow-x-auto">
{JSON.stringify(submittedData, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
