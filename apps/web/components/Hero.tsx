import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="rounded-2xl bg-linear-to-b/increasing from-white via-[#faefe2] to-[#faefe2] border">
      <section className="grid-background pt-36 pb-20 px-4 rounded-2xl">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-700">
            Transform Your Ideas Into
            <br />
            <span className="text-gray-700"> Stunning Images</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 ">
            Create beautiful images in seconds with advanced AI image generator.
            Perfect for artists, designers, and creators.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 default-button">
              <Link href="/dashboard" className="flex items-center gap-2">
                Start Creating <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="ghost-button">
              View Gallery
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
