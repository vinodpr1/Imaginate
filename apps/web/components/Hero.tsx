import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="grid-background pt-32 pb-20 px-4 rounded-2xl border ">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Transform Your Ideas Into
          <span className="text-primary"> Stunning Images</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 ">
          Create beautiful, unique images in seconds with our advanced AI image
          generator. Perfect for artists, designers, and creators.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gap-2 default-button">
            Start Creating <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="ghost-button">
            View Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
