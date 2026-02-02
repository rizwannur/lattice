'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { SiteLogo } from '@/components/site-logo';
import { Button } from '@/components/ui/button';

type NavbarProps = {
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
};

export function Navbar({ mobileMenuOpen, onMobileMenuToggle }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <SiteLogo className="h-10 w-10" />
            <span className="text-xl font-bold text-foreground">Lattice</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">
              Impact
            </a>
            <a href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">
              Partners
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={onMobileMenuToggle}
            >
              {mobileMenuOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 border-t border-border"
          >
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">
                Impact
              </a>
              <a href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">
                Partners
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
