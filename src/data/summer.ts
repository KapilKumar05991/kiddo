import { Campaign } from "@/types/campaign";

export const summerPlayhousePayload: Campaign = {
  id: 'SUMMER_PLAYHOUSE',
  name: 'Summer Playhouse Festival',
  theme: {
    primary: '#00B8D4',     // Ocean Blue
    secondary: '#0288D1',   // Deep Water Blue
    background: '#E1F5FE',  // Sky / Water Mist
    border: '#81D4FA',      // Soft Aqua Border
    surface: '#FFFFFF',     // Floating Card Surface
  },

  overlay: {
    type: 'FULL_SCREEN',
    animation_url: 'https://assets1.lottiefiles.com/packages/lf20_obhph3sh.json',
    duration: 3500,
    loop: false,
    opacity: 0.8,
  },

  blocks: [
    {
      id: 'banner_hero',
      type: 'BANNER_HERO',
      data: [
        {
          id: 'summer_hero_001',
          title: 'Summer Playhouse Festival',
          subtitle: 'Beat the heat. Double the fun.',
          cta: 'Explore Activities',
          image: {
            uri: 'https://media.istockphoto.com/id/1409465048/photo/studio-portrait-of-boy-dressed-as-comic-book-superhero-against-yellow-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=FAStkMNu1_EXvnmwiMkNACJSz58SQ6co0gPFHh3Y6NU=',
            alt: 'Summer Playhouse Festival — Beat the heat with fun!',
          },
          url: '/campaign/summer-playhouse',
        },
      ],
      action: 'DEEP_LINK',
    },
    {
      id: 'dynamic_collection',
      type: 'DYNAMIC_COLLECTION',
      title: 'Petting Zoo & Events',
      data: [
        {
          id: 'evt_001',
          name: 'Petting Zoo — Pune',
          price: 50,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Petting Zoo at Pune',
          },
        },
        {
          id: 'evt_002',
          name: 'Beach Ball Carnival',
          price: 150,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Beach Ball Carnival',
          },
        },
        {
          id: 'evt_003',
          name: 'Water Splash Park',
          price: 120,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Water Splash Park',
          },
        },
        {
          id: 'evt_004',
          name: 'Art & Craft Workshop',
          price: 60,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Art and Craft Workshop',
          },
        },
      ],
      action: 'DEEP_LINK',
    },
    {
      id: 'product_grid',
      type: 'PRODUCT_GRID',
      title: 'Summer Essentials',
      data: [
        {
          id: 'sum_001',
          name: 'Kids Sunscreen SPF 50+',
          price: 99,
          originalPrice: 199,
          discountLabel: '50% OFF',
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Kids Sunscreen SPF 50+',
          },
        },
        {
          id: 'sum_002',
          name: 'Inflatable Pool Float',
          price: 599,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Inflatable Pool Float',
          },
        },
        {
          id: 'sum_003',
          name: 'UV Protection Swimsuit',
          price: 799,
          originalPrice: 1099,
          discountLabel: '27% OFF',
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'UV Protection Swimsuit',
          },
        },
        {
          id: 'sum_004',
          name: 'Beach Sand Toy Set',
          price: 299,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Beach Sand Toy Set',
          },
        },
      ],
      action: 'ADD_TO_CART',
    },
  ],
};
