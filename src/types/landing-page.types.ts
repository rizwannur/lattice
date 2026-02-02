export type LandingData = {
  featured_ngos?: Array<{
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
  }>;
  trending_data?: {
    trending_campaigns?: Array<{
      id: string;
      title: string;
      description: string;
      ngo_name: string;
      goal_amount: number;
      raised_amount: number;
      donors_count: number;
    }>;
  };
};

export type HeroStats = {
  total_users?: number;
  total_amount_raised?: number;
  lives_impacted?: number;
  total_ngos?: number;
  partnerships_formed?: number;
  communities_served?: number;
  projects_completed?: number;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  rating: number;
};
