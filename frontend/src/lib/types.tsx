export type Disease = {
  id: number;
  name: string;
  description: string;
  slug: string;
  subcategories: Disease[];
};

export type Category = {
  id: number;
  name: string;
  description: string;
  slug: string;
  subcategories: Category[];
};

export type Herbset = {
  id: number;
  name: string;
  description: string;
  slug: string;
  subsets: Herbset[];
};

export type Branch = {
  id: number;
  name: string;
  slug: string;
  categories: Category[];
  herbsets: Herbset[];
};

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  role: string;
};

export type VendorOwner = User & {
  shop: Vendor;
};

export type Vendor = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  slug: string;
  website: string;
  owner: number;
};

export type Product = {};

export type Variant = {
  id: number;
  name: string;
  description: string | null;
  slug: string | null;
  url: string;
  image_url: string;
  quantity: number;
  price: number;
  product?: Product | null;
  vendor: Vendor;
};

export type Menu = {
  diseases?: Disease[];
  branches?: Branch[];
};

export type CartItem = {
  product: Variant;
  qty: number;
};
