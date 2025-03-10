import { Clock, Shield, Zap } from "lucide-react";
import React from "react";

const Feature = () => {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Imaginate?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            title="Lightning Fast"
            description="Generate high-quality images in seconds with our optimized AI engine."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8" />}
            title="Secure & Private"
            description="Your creations are protected with enterprise-grade security."
          />
          <FeatureCard
            icon={<Clock className="h-8 w-8" />}
            title="24/7 Generation"
            description="Create unlimited images anytime, anywhere with our reliable platform."
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="p-6 rounded-xl bg-background border">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
