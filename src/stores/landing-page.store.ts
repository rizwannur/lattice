import { create } from 'zustand';
import type { LandingData, HeroStats, Testimonial } from '@/types/landing-page.types';

const defaultHeroStats: HeroStats = {
  total_users: 1250,
  total_ngos: 500,
  total_amount_raised: 2500000,
  lives_impacted: 50000,
  communities_served: 150,
  projects_completed: 320,
  partnerships_formed: 180,
};

type LandingPageState = {
  landingData: LandingData | null;
  heroStats: HeroStats | null;
  testimonials: Testimonial[];
  mobileMenuOpen: boolean;
  setLandingData: (data: LandingData | null) => void;
  setHeroStats: (stats: HeroStats | null) => void;
  setTestimonials: (items: Testimonial[]) => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
};

export const useLandingPageStore = create<LandingPageState>((set) => ({
  landingData: null,
  heroStats: defaultHeroStats,
  testimonials: [],
  mobileMenuOpen: false,
  setLandingData: (data) => set({ landingData: data }),
  setHeroStats: (stats) => set({ heroStats: stats }),
  setTestimonials: (items) => set({ testimonials: items }),
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
}));
