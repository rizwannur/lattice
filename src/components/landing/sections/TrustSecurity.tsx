'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconShield } from '@tabler/icons-react';
import { Card } from '@/components/ui/card';

type TrustSecurityProps = {
  heroStats?: { total_ngos?: number } | null;
};

export function TrustSecurity({ heroStats }: TrustSecurityProps) {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 border-border shadow-xl">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <IconShield className="h-12 w-12 text-primary mr-4" />
                <h3 className="text-3xl font-bold text-foreground">Trusted & Secure</h3>
              </div>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                All NGOs undergo comprehensive verification. Every donation is tracked transparently
                with detailed impact reporting and secure payment processing.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {heroStats?.total_ngos || '500+'}
                  </div>
                  <div className="text-sm text-muted-foreground">Verified NGOs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">256-bit</div>
                  <div className="text-sm text-muted-foreground">SSL Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
