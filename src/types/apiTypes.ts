export type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {
    id: number;
    title: string;
    count: number;
    percent: number;
  }[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
      image: null;
      year_end: null;
      year_start: null;
      games_count: number;
      image_background: string;
    };
    released_at: string;
    requirements_en: null;
    requirements_ru: null;
  }[];
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
  genres: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  stores: {
    id: number;
    store: {
      id: number;
      name: string;
      slug: string;
      domain: string;
      games_count: number;
      image_background: string;
    };
  }[];
  clip: null;
  tags: {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
  }[];
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  };
  short_screenshots: {
    id: number;
    image: string;
  }[];
};

export interface ApiResponse {
  results: Game[];
  count: number;
  next: string | null;
  previous: string | null;
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
  filters: {
    years: {
      from: number;
      to: number;
      filter: string;
      decade: number;
      years: {
        year: number;
        count: number;
        nofollow: boolean;
      }[];
      nofollow: boolean;
      count: number;
    }[];
  };
  nofollow_collections: string[];
}
