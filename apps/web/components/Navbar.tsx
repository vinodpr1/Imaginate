"use client";
import React, { useState } from "react";
import { Logo } from "./ui/logo";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll events for header visibility
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    });
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        <div className="flex items-center space-x-2">
          <Link className="flex items-center space-x-2" href={"/"}>
            <Logo size="md" />
            <span className="text-xl font-bold">Imaginate</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#examples"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Examples
          </a>
          <a
            href="#pricing"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Pricing
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="ghost-button">
            Log in
          </Button>
          <Button className="default-button">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
