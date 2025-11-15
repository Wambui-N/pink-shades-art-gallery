export interface Artwork {
  id: string;
  title: string;
  artist: string;
  artistBio?: string;
  price: number;
  medium: string;
  dimensions: {
    width: number;
    height: number;
    unit: "in" | "cm";
  };
  materials: string[];
  images: string[];
  description?: string;
  provenance?: string;
  year?: number;
  collection?: string;
  featured?: boolean;
  inStock: boolean;
  shippingETA?: string;
  createdAt: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  artworks: Artwork[];
  coverImage: string;
}

export interface CartItem {
  artwork: Artwork;
  quantity: number;
}

export interface FilterOptions {
  medium?: string;
  priceRange?: { min: number; max: number };
  sortBy?: "new" | "price-asc" | "price-desc" | "artist";
}
