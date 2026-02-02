'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  IconBuilding,
  IconHeart,
  IconChartBar,
  IconCircleCheck,
} from '@tabler/icons-react';
import { Card, CardContent } from '@/components/ui/card';

export function Features() {
  return (
    <section id="features" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powerful Features for Maximum Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create, manage, and measure your social impact initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:grid-rows-1 md:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="min-h-full flex"
          >
            <Card className="min-h-[400px] w-full flex flex-col text-center p-8 hover:shadow-xl transition-all duration-300 border-border group">
              <CardContent className="pt-6 flex-1 flex flex-col">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <IconBuilding className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">For Businesses</h3>
                <p className="text-muted-foreground mb-6">
                  Find verified NGO partners, manage CSR initiatives, and track your social impact with comprehensive analytics.
                </p>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <IconCircleCheck className="h-4 w-4 text-primary mr-2" />
                    Verified NGO directory
                  </li>
                  <li className="flex items-center">
                    <IconCircleCheck className="h-4 w-4 text-primary mr-2" />
                    Impact measurement tools
                  </li>
                  <li className="flex items-center">
                    <IconCircleCheck className="h-4 w-4 text-primary mr-2" />
                    CSR reporting dashboard
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="min-h-full flex items-center"
          >
            <Card className="min-h-[400px] w-full flex flex-col text-center p-8 shadow-2xl scale-105 z-10 hover:shadow-2xl transition-all duration-300 border-border group origin-bottom">
              <CardContent className="pt-6 flex-1 flex flex-col">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <IconHeart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">For NGOs</h3>
                <p className="text-muted-foreground mb-6">
                  Create compelling campaigns, connect with corporate sponsors, and receive transparent funding for your mission.
                </p>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <IconCircleCheck className="h-4 w-4 text-primary mr-2" />
                    Campaign builder tools
                  </li>
                  <li className="flex items-center">
                    <IconCircleCheck className="h-4 w-4 text-primary mr-2" />
                    Corporate partner matching
                  </li>
                  <li className="flex items-center">
                    <IconCircleCheck className="h-4 w-4 text-primary mr-2" />
                    Transparent fund tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="min-h-full flex"
          >
            <Card className="min-h-[400px] w-full flex flex-col text-center p-8 hover:shadow-xl transition-all duration-300 border-border group">
              <CardContent className="pt-6 flex-1 flex flex-col">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <IconChartBar className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Measurable Impact</h3>
                <p className="text-muted-foreground mb-6">
                  Track real-world outcomes with detailed reporting, impact metrics, and transparent fund allocation.
                </p>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <IconCircleCheck className="h-4 w-4 text-primary mr-2" />
                    Real-time analytics
                  </li>
                  <li className="flex items-center">
                    <IconCircleCheck className="h-4 w-4 text-primary mr-2" />
                    Impact visualization
                  </li>
                  <li className="flex items-center">
                    <IconCircleCheck className="h-4 w-4 text-primary mr-2" />
                    Automated reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
