'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconArrowRight } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

export function Cta() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join Lattice and connect your business to larger enterprises. Scale through partnerships on one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-card text-primary hover:bg-muted text-lg px-8 py-4 h-auto">
                Get Started Free
                <IconArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-transparent text-lg px-8 py-4 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
