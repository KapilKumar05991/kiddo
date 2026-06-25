import { Campaign } from "@/types/campaign";

export const backToSchoolPayload: Campaign = {
  id: 'BACK_TO_SCHOOL',
  name: 'Back to School Mega-Sale',
  theme: {
    primary: '#FFC107',     // Bright School Yellow
    secondary: '#1565C0',   // Primary Blue
    background: '#FFFDE7',  // Soft Notebook Paper
    border: '#FFD54F',      // Warm Yellow Border
    surface: '#FFFFFF',     // Clean Card Surface
  },

  overlay: {
    type: 'FULL_SCREEN',
    animation_url: 'https://assets1.lottiefiles.com/packages/lf20_obhph3sh.json',
    duration: 4000,
    loop: false,
    opacity: 0.75,
  },

  blocks: [
    {
      id: 'banner_hero',
      type: 'BANNER_HERO',
      data: [
        {
          id: 'bts_hero_001',
          title: 'Back to School Sale',
          subtitle: 'Everything they need. Up to 40% off.',
          cta: 'Shop Now',
          image: {
            uri: 'https://plus.unsplash.com/premium_photo-1690479510844-6385aa431b76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Back to School Sale',
          },
          url: '/campaign/back-to-school'
        },
      ],
      action: 'DEEP_LINK'
    },
    {
      id: 'dynamic_collection',
      type: 'DYNAMIC_COLLECTION',
      title: 'Lunchboxes & Bags',
      data: [
        {
          id: 'p1',
          name: 'Dino Tiffin Box',
          price: 299,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Dino Tiffin Box'
          }
        },
        {
          id: 'p2',
          name: 'Superhero Backpack',
          price: 799,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Superhero Backpack',
          },
        },
        {
          id: 'p3',
          name: 'Insulated Water Bottle',
          price: 449,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Insulated Water Bottle',
          },
        },
        {
          id: 'p4',
          name: 'Pencil Pouch Set',
          price: 199,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Pencil Pouch Set'
          }
        },
        {
          id: 'p5',
          name: 'Art Supply Kit',
          price: 649,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Art Supply Kit'
          },
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
      id: 'product_grid',
      type: 'PRODUCT_GRID',
      title: 'Top Picks for School',
      data: [
        {
          id: 'p6',
          name: 'Crayola Crayon Set',
          price: 549,
          originalPrice: 749,
          discountLabel: '27% OFF',
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Crayola Crayon Set',
          }
        },
        {
          id: 'p7',
          name: 'Kids Geometry Box',
          price: 149,
          originalPrice: 199,
          discountLabel: '25% OFF',
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Kids Geometry Box'
          }
        },
        {
          id: 'p8',
          name: 'Magnetic Alphabet Board',
          price: 399,
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Magnetic Alphabet Board'
          },
        },
        {
          id: 'p9',
          name: 'Story Time Book Set (5 books)',
          price: 699,
          originalPrice: 999,
          discountLabel: '30% OFF',
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Story Time Book Set',
          },
        },
        {
          id: 'p10',
          name: 'Story Time Book Set (5 books)',
          price: 699,
          originalPrice: 999,
          discountLabel: '30% OFF',
          image: {
            uri: 'https://allforkiddo.com/assets/kiddo-wordmark-logo-9E_jOTPI.png',
            alt: 'Story Time Book Set'
          }
        },
      ],
      action: 'DEEP_LINK',
    },]

}