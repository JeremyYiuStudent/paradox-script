
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Join", href: "#signup" }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-6 lg:px-10 py-4",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="relative z-10 flex items-center"
          onClick={closeMenu}
        >
          <img 
            src="/lovable-uploads/dee94213-24b2-4618-af5b-6bc2c7f9b2f8.png" 
            alt="Paradox Script Logo" 
            className="h-10 mr-3"
          />
          <span className="text-xl font-semibold text-gray-900 dark:text-white">
            Paradox Script
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <Button className="font-medium">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-10 p-2 -mr-2 text-gray-700 dark:text-gray-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <MenuIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ScrollArea className="h-full w-full p-6 pt-20">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/dee94213-24b2-4618-af5b-6bc2c7f9b2f8.png" 
              alt="Paradox Script Logo" 
              className="h-16"
            />
          </div>
          <nav className="flex flex-col space-y-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-gray-900 dark:text-gray-100"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full" onClick={closeMenu}>
              Get Started
            </Button>
          </nav>
        </ScrollArea>
      </div>
    </header>
  );
};

export default Navbar;
