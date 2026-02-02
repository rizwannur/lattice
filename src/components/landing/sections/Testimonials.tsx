'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconQuote, IconStar } from '@tabler/icons-react';
import { Card, CardContent } from '@/components/ui/card';

type Testimonial = {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  rating: number;
};

type TestimonialsProps = {
  testimonials?: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  const hasTestimonials = testimonials && testimonials.length > 0;
  if (!hasTestimonials) return null;

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Partners Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from organizations making a real difference through our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-xl transition-all duration-300 border-border">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <IconQuote className="h-8 w-8 text-primary mr-3" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <IconStar
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? 'text-yellow-500 fill-current'
                              : 'text-muted-foreground/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.organization}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
