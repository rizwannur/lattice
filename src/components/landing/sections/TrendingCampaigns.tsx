'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconArrowRight } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/format';

type TrendingCampaign = {
  id: string;
  title: string;
  description: string;
  ngo_name: string;
  goal_amount: number;
  raised_amount: number;
  donors_count: number;
};

type TrendingCampaignsProps = {
  campaigns?: TrendingCampaign[];
};

export function TrendingCampaigns({ campaigns }: TrendingCampaignsProps) {
  const hasCampaigns = campaigns && campaigns.length > 0;
  if (!hasCampaigns) return null;

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trending Campaigns
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Support the most impactful campaigns making a difference right now
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-border group">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {campaign.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    by {campaign.ngo_name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {campaign.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Progress</span>
                      <span>{Math.round((campaign.raised_amount / campaign.goal_amount) * 100)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((campaign.raised_amount / campaign.goal_amount) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <div className="font-semibold text-foreground">
                        {formatCurrency(campaign.raised_amount, 'USD').replace('.00', '')}
                      </div>
                      <div className="text-muted-foreground">
                        of {formatCurrency(campaign.goal_amount, 'USD').replace('.00', '')}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-foreground">
                        {campaign.donors_count}
                      </div>
                      <div className="text-muted-foreground">donors</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/register">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View All Campaigns
              <IconArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
