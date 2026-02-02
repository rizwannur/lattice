'use client';

import React from 'react';
import { IconExternalLink } from '@tabler/icons-react';
import { SiteLogo } from '@/components/site-logo';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-footer-bg text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <SiteLogo className="h-10 w-10" />
              <span className="text-xl font-bold">Lattice</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              A multi-tenant platform connecting small businesses to bigger ones.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-background/70 hover:text-background">
                <IconExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#impact" className="hover:text-background transition-colors">Impact</a></li>
              <li><a href="#partners" className="hover:text-background transition-colors">Partners</a></li>
              <li><a href="/register" className="hover:text-background transition-colors">Get Started</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="/help" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="/contact" className="hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2026 Lattice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
