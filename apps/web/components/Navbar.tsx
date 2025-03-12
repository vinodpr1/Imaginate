"use client";
import React, { useState } from "react";
import { Logo } from "./ui/logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll events for header visibility
  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", () => {
  //     const currentScrollY = window.scrollY;
  //     if (currentScrollY > lastScrollY) {
  //       setIsHeaderVisible(false);
  //     } else {
  //       setIsHeaderVisible(true);
  //     }
  //     setLastScrollY(currentScrollY);
  //   });
  // }

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-2 h-16 flex items-center justify-between max-w-6xl">
        <div className="flex items-center space-x-2">
          <Link className="flex items-center space-x-2" href={"/"}>
            <Logo size="md" />
            <span className="text-xl font-bold">Imaginate</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/dashboard/train"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Train Model
          </Link>
          <Link
            href="/dashboard/packs"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Packs
          </Link>
          <Link
            href="/dashboard/camera"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Camera
          </Link>
          <Link
            href="/dashboard/generate"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Generate image
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => signOut()}
            variant="ghost"
            className="ghost-button"
          >
            Log Out
          </Button>
          <Button variant="ghost" className="ghost-button">
            <Link href="/auth/signin">Log in</Link>
          </Button>
          <Button className="default-button">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
