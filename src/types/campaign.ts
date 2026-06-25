import { Theme } from "./theme";

export interface Image {
  uri: string;
  alt?: string;
}

export type ActionType = 'ADD_TO_CART' | 'DEEP_LINK' | 'GIFT_COUPON'

export interface UIBlock {
  id: string;
  type: string;
  title?: string
  data: any;
  action: ActionType;
}

export interface BannerItem {
  id: string;
  title: string;
  subtitle?: string;
  cta: string
  image: Image;
  url: string
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discountLabel?: string;
  image: Image;
}

export interface BannerHero extends UIBlock {
  id: 'banner_hero',
  type: 'BANNER_HERO'
  data: BannerItem[]
  action: ActionType
}

export interface ProductGrid extends UIBlock {
  id: 'product_grid'
  type: 'PRODUCT_GRID'
  data: Product[]
  action: ActionType
}


export interface DynamicCollection extends UIBlock {
  id: 'dynamic_collection'
  type: 'DYNAMIC_COLLECTION'
  data: Product[]
  action: ActionType
}

export interface Overlay {
  type: string
  duration: number
  loop: boolean
  opacity: number
  animation_url: string
}

export interface Campaign {
  id: string;
  name: string;
  theme: Theme ;
  overlay?: Overlay;
  blocks: UIBlock[]
}


export enum ComponentType {
  BANNER_HERO = 'BANNER_HERO',
  PRODUCT_GRID = 'PRODUCT_GRID',
  DYNAMIC_COLLECTION = 'DYNAMIC_COLLECTION'
}


