import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="text-3xl font-bold mb-6">Ready to Create?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of creators using ImageAI to bring their ideas to life.
        </p>
        <Button size="lg" variant="secondary" className="ghost-button">
          Get Started Now <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Footer;
