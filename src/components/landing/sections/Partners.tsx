'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconMapPin, IconShield, IconStar } from '@tabler/icons-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/format';

type FeaturedNgo = {
  ngo: {
    id: string;
    name: string;
    state: string;
    is_verified?: boolean;
    short_description: string;
    focus_areas: string[];
  };
  total_raised: number;
  donor_count: number;
  impact_score: number;
};

type PartnersProps = {
  featuredNgos?: FeaturedNgo[];
};

export function Partners({ featuredNgos }: PartnersProps) {
  const hasNgos = featuredNgos && featuredNgos.length > 0;

  return (
    <section id="partners" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Impact Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover verified organizations making a real difference in communities worldwide
          </p>
        </div>

        {hasNgos && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Top-Performing NGOs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredNgos.slice(0, 6).map((featuredNgo, index) => (
                <motion.div
                  key={featuredNgo.ngo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-border group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {featuredNgo.ngo.name}
                          </CardTitle>
                          <div className="flex items-center mt-2">
                            <IconMapPin className="h-4 w-4 text-muted-foreground mr-1" />
                            <span className="text-sm text-muted-foreground">{featuredNgo.ngo.state}</span>
                            {featuredNgo.ngo.is_verified && (
                              <IconShield className="h-4 w-4 text-primary ml-2" />
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">
                            {formatCurrency(featuredNgo.total_raised, 'USD').replace('.00', '')}
                          </div>
                          <div className="text-xs text-muted-foreground">raised</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {featuredNgo.ngo.short_description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {featuredNgo.ngo.focus_areas?.slice(0, 2).map((area: string) => (
                          <span
                            key={area}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{featuredNgo.donor_count} donors</span>
                        <span className="flex items-center">
                          <IconStar className="h-4 w-4 text-yellow-500 mr-1" />
                          {featuredNgo.impact_score}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
