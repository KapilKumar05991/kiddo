import { Campaign } from "@/types/campaign";

export const mysteryGiftCarnivalPayload: Campaign = {
  id: 'MYSTERY_GIFT_CARNIVAL',
  name: 'Mystery Gift Carnival',
  theme: {
    primary: '#E53935',     // Carnival Red
    secondary: '#FFB300',   // Golden Accent
    background: '#FFF3F3',  // Light Celebration Background
    border: '#FFCDD2',      // Soft Red Border
    surface: '#FFFFFF',     // Card Surface
  },

  overlay: {
    type: 'FULL_SCREEN',
    animation_url: 'https://assets1.lottiefiles.com/packages/lf20_obhph3sh.json',
    duration: 5000,
    loop: false,
    opacity: 0.85,
  },

  blocks: [
    {
      id: 'banner_hero',
      type: 'BANNER_HERO',
      data: [
        {
          id: 'carnival_hero_001',
          title: 'Mystery Gift Carnival',
          subtitle: 'Every purchase hides a surprise. Unwrap yours.',
          cta: 'Reveal My Gift',
          image: {
            uri: 'https://plus.unsplash.com/premium_photo-1695802468726-eb6a92720904?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Mystery Gift Carnival — Unwrap the surprise!',
          },
          url: '/campaign/mystery-gift-carnival',
        },
        {
          id: 'carnival_mid_banner_001',
          title: 'Your Gift Is Waiting',
          subtitle: 'Use code MYSTGIFT2025 at checkout',
          cta: 'Apply Now',
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Use code MYSTGIFT2025 for a surprise gift',
          },
          url: '/campaign/mystery-gift-carnival',
        },
      ],
      action: 'DEEP_LINK',
    },
    {
      id: "new_component",
      type: "NEW_COMPONENT",
      action: "DEEP_LINK",
      data: {
        message: "Check out our new arrivals for the school season!",
      }
    },
    {
      id: 'dynamic_collection',
      type: 'DYNAMIC_COLLECTION',
      title: 'Mystery Gift Picks',
      data: [
        {
          id: 'myst_001',
          name: 'Surprise Toy Box',
          price: 499,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Surprise Toy Box',
          },
        },
        {
          id: 'myst_002',
          name: 'Carnival Gift Hamper',
          price: 799,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Carnival Gift Hamper',
          },
        },
        {
          id: 'myst_003',
          name: 'Lucky Dip Bag',
          price: 299,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Lucky Dip Bag',
          },
        },
        {
          id: 'myst_004',
          name: 'Carnival Tote Bag',
          price: 399,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Carnival Tote Bag',
          },
        },
      ],
      action: 'GIFT_COUPON',
    },
    {
      id: 'product_grid',
      type: 'PRODUCT_GRID',
      title: 'Carnival Favourites',
      data: [
        {
          id: 'car_001',
          name: 'Mega Building Blocks (100 pcs)',
          price: 899,
          originalPrice: 1299,
          discountLabel: '31% OFF',
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Mega Building Blocks',
          },
        },
        {
          id: 'car_002',
          name: 'Soft Plush Elephant',
          price: 499,
          originalPrice: 699,
          discountLabel: '29% OFF',
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Soft Plush Elephant',
          },
        },
        {
          id: 'car_003',
          name: 'Remote Control Car',
          price: 1299,
          originalPrice: 1799,
          discountLabel: '28% OFF',
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Remote Control Car',
          },
        },
        {
          id: 'car_004',
          name: 'Play-Doh Activity Kit',
          price: 649,
          originalPrice: 849,
          discountLabel: '24% OFF',
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Play-Doh Activity Kit',
          },
        },
      ],
      action: 'ADD_TO_CART',
    },
  ],
};
