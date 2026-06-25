import React from 'react';

// Import your atomic layout components
import BannerHero from '../components/banner-hero';
import ProductGrid from '../components/product-grid';
import DynamicCollection from '../components/dynamic-collection';
import { ComponentType } from '@/types/campaign';

// The Registry: Maps string signatures to actual React Components
export const ComponentFactory: Record<string, React.FC<any>> = {
  [ComponentType.BANNER_HERO]: BannerHero,
  [ComponentType.PRODUCT_GRID]: ProductGrid,
  [ComponentType.DYNAMIC_COLLECTION]: DynamicCollection,
};