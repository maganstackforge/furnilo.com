export const decorData = [
  // 1. Modern LED Ceiling Light
  {
    id: 'decor-001',
    sku: 'WH-LGT-CEL-MOD',
    title: 'Modern LED Ceiling Light',
    slug: 'modern-led-ceiling-light',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'office'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'ceiling-light',
      subType: 'surface-mount', // Installation style based logic
      style: 'modern',
    },
    specifications: {
      material: 'Metal & LED',
      bulbType: 'Integrated LED',
      dimensions: { length: 30, width: 30, height: 5, unit: 'cm' },
      weight: { value: 1.2, unit: 'kg' },
    },
    pricing: {
      mrp: 3599,
      sellingPrice: 2999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: '3-Color Modes', icon: 'palette' },
      { id: 'f2', title: 'Energy Efficient', icon: 'zap' },
      { id: 'f3', title: 'Ultra-Slim Design', icon: 'layers' },
    ],

    variants: [
      { variantId: 'v1', name: 'Warm White', price: 2999, inventoryCount: 20, availability: 'in_stock' },
      { variantId: 'v2', name: 'Cool Day Light', price: 2999, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: {
      rating: 4.8,
      reviewCount: 156,
      tags: ['Bestseller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2016/11/29/05/01/lights-1867437_1280.jpg',
          alt: 'Modern LED Ceiling Light',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Modern LED Ceiling Light | Urban Home',
      metaDescription: 'Energy-efficient LED ceiling light with 3 color modes.',
      keywords: ['led light', 'ceiling light', 'modern lighting'],
    },
    description:
      'Elevate your space with this ultra-slim Modern LED Ceiling Light. Featuring three adjustable color modes (Warm, Neutral, and Cool White), it allows you to set the perfect ambiance for any mood. Its energy-efficient design ensures bright illumination while keeping power consumption low.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 2. Vintage Pendant Light
  {
    id: 'decor-002',
    sku: 'WH-LGT-PEN-VIN',
    title: 'Vintage Industrial Pendant Light',
    slug: 'vintage-industrial-pendant-light',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'kitchen', 'cafe'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'ceiling-light',
      subType: 'pendant', // Hanging style logic
      style: 'industrial',
    },
    specifications: {
      material: 'Iron',
      bulbType: 'E27 (Not Included)',
      dimensions: { length: 20, width: 20, height: 25, unit: 'cm' },
      weight: { value: 0.9, unit: 'kg' },
    },
    pricing: {
      mrp: 2499,
      sellingPrice: 1899,
      currency: 'INR',
      discount: { value: 24, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Adjustable Cable', icon: 'arrow-up-down' },
      { id: 'f2', title: 'Matte Black Finish', icon: 'droplet' },
      { id: 'f3', title: 'E27 Holder', icon: 'circle' },
    ],

    variants: [
      { variantId: 'v1', name: 'Single Pack', price: 1899, inventoryCount: 30, availability: 'in_stock' },
    ],
    status: { rating: 4.5, reviewCount: 89, tags: ['Trending'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1623791687101-1ccdab403169?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Vintage Pendant Light',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Black', hex: '#000000' }],
    },
    seo: {
      metaTitle: 'Vintage Pendant Light | Urban Home',
      metaDescription: 'Industrial style hanging pendant light for dining rooms.',
      keywords: ['pendant light', 'hanging light', 'industrial lamp'],
    },
    description:
      'Add a touch of raw industrial charm to your interiors with this Vintage Pendant Light. Crafted from high-quality iron with a matte black finish, it features an adjustable cable for customized hanging heights. Perfect for dining areas, kitchen islands, or cafes.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 3. Crystal Chandelier
  {
    id: 'decor-003',
    sku: 'WH-LGT-CHA-CRY',
    title: 'Grand Crystal Chandelier',
    slug: 'grand-crystal-chandelier',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'hallway'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'ceiling-light',
      subType: 'chandelier', // Premium category logic
      style: 'luxury',
    },
    specifications: {
      material: 'Stainless Steel & Crystal',
      bulbType: 'G9 LED',
      dimensions: { length: 50, width: 50, height: 40, unit: 'cm' },
      weight: { value: 5.5, unit: 'kg' },
    },
    pricing: {
      mrp: 15999,
      sellingPrice: 12499,
      currency: 'INR',
      discount: { value: 22, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Real K9 Crystals', icon: 'gem' },
      { id: 'f2', title: 'Chrome Finish', icon: 'sparkles' },
      { id: 'f3', title: 'Dimmable Support', icon: 'sun' },
    ],

    variants: [
      { variantId: 'v1', name: 'Gold Finish', price: 13499, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: { rating: 4.9, reviewCount: 45, tags: ['Luxury'], isFeatured: true, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2018/07/10/22/14/salon-3529826_1280.jpg',
          alt: 'Grand Crystal Chandelier',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Silver', hex: '#C0C0C0' }],
    },
    seo: {
      metaTitle: 'Crystal Chandelier for Living Room | Urban Home',
      metaDescription: 'Premium K9 crystal chandelier for a luxury home feel.',
      keywords: ['chandelier', 'jhoomar', 'luxury lighting'],
    },
    description:
      'Transform your living room into a palace with the Grand Crystal Chandelier. Made with genuine K9 crystals and a polished chrome frame, this chandelier reflects light beautifully, creating a mesmerizing shimmer throughout the room. A true statement piece for luxury homes.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 4. Nordic Flush Mount Light
  {
    id: 'decor-004',
    sku: 'WH-LGT-FLS-NOR',
    title: 'Nordic Wooden Flush Mount',
    slug: 'nordic-wooden-flush-mount',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'study-room'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'ceiling-light',
      subType: 'flush-mount', // Installation-based logic
      style: 'minimalist',
    },
    specifications: {
      material: 'Wood & Acrylic',
      bulbType: 'Built-in LED',
      dimensions: { length: 25, width: 25, height: 6, unit: 'cm' },
      weight: { value: 0.8, unit: 'kg' },
    },
    pricing: {
      mrp: 2199,
      sellingPrice: 1699,
      currency: 'INR',
      discount: { value: 23, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Natural Oak Wood', icon: 'tree' },
      { id: 'f2', title: 'Eye Care Diffuser', icon: 'eye' },
      { id: 'f3', title: 'Easy Install', icon: 'hammer' },
    ],

    variants: [{ variantId: 'v1', name: 'Small', price: 1699, inventoryCount: 15, availability: 'in_stock' }],
    status: {
      rating: 4.4,
      reviewCount: 67,
      tags: ['Eco-friendly'],
      isFeatured: false,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1549554871-ebafb4478beb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Nordic Flush Mount Light',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Oak Wood', hex: '#DEB887' }],
    },
    seo: {
      metaTitle: 'Nordic Wooden Ceiling Light | Urban Home',
      metaDescription: 'Minimalist wooden ceiling light for bedroom and study.',
      keywords: ['wooden light', 'nordic lamp', 'flush mount'],
    },
    description:
      'Embrace Scandinavian minimalism with our Nordic Wooden Flush Mount Light. Crafted from natural oak wood and fitted with an eye-care acrylic diffuser, it provides soft, flicker-free illumination that is perfect for bedrooms and study rooms.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 5. Smart WiFi Ceiling Panel
  {
    id: 'decor-005',
    sku: 'WH-LGT-SMA-WIF',
    title: 'Smart WiFi LED Panel',
    slug: 'smart-wifi-led-panel',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'living-room', 'office'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'ceiling-light',
      subType: 'smart-panel', // Tech-based sub-type
      style: 'smart',
    },
    specifications: {
      material: 'Aluminum & Polycarbonate',
      bulbType: 'Smart LED',
      dimensions: { length: 60, width: 60, height: 2, unit: 'cm' },
      weight: { value: 2.1, unit: 'kg' },
    },
    pricing: {
      mrp: 4999,
      sellingPrice: 3899,
      currency: 'INR',
      discount: { value: 22, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'App & Voice Control', icon: 'mic' },
      { id: 'f2', title: '16 Million Colors', icon: 'palette' },
      { id: 'f3', title: 'Music Sync', icon: 'music' },
    ],

    variants: [
      { variantId: 'v1', name: '60x60 Panel', price: 3899, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: {
      rating: 4.7,
      reviewCount: 112,
      tags: ['Smart Home'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1637665802693-73c7b9f1e167?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Smart WiFi LED Panel',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'RGB Multicolor', hex: 'linear-gradient(to right, red, green, blue)' }],
    },
    seo: {
      metaTitle: 'Smart WiFi LED Panel Light | Urban Home',
      metaDescription: 'Control your lighting with Alexa and Google Home.',
      keywords: ['smart light', 'wifi led panel', 'voice control light'],
    },
    description:
      'Upgrade to a smarter home with this Smart WiFi LED Panel. Compatible with Alexa and Google Home, you can change between 16 million colors or sync your lights to your favorite music via a dedicated app. Slim, stylish, and highly functional.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 6. Gold and Red Pendant Lamps
  {
    id: 'decor-006',
    sku: 'WH-LGT-PEN-GRD', // Unique SKU for Gold-Red Pendant
    title: 'Gold and Red Pendant Lamps',
    slug: 'gold-and-red-pendant-lamps',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'dining-room', 'bedroom', 'office'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'ceiling-light',
      subType: 'pendant',
      style: 'modern',
    },
    specifications: {
      material: 'Metal & LED',
      bulbType: 'Integrated LED',
      powerSource: 'Corded Electric',
      dimensions: { length: 30, width: 30, height: 5, unit: 'cm' },
      weight: { value: 1.2, unit: 'kg' },
    },
    pricing: {
      mrp: 3599,
      sellingPrice: 2999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: '3-Color Modes', icon: 'palette' },
      { id: 'f2', title: 'Energy Efficient', icon: 'zap' },
      { id: 'f3', title: 'Ultra-Slim Design', icon: 'layers' },
      { id: 'f4', title: '2 Year Warranty', icon: 'shield-check' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Warm White (3000K)',
        price: 2999,
        inventoryCount: 20,
        availability: 'in_stock',
      },
      {
        variantId: 'v2',
        name: 'Cool Day Light (6500K)',
        price: 2999,
        inventoryCount: 15,
        availability: 'in_stock',
      },
      { variantId: 'v3', name: 'Smart RGB', price: 3999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      rating: 4.8,
      reviewCount: 156,
      tags: ['bestseller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1606170033648-5d55a3edf314?q=80&w=774&auto=format&fit=crop',
          alt: 'Gold and red pendant lamps',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Gold and Red Pendant Lamps | Urban Home',
      metaDescription: 'Shop energy-efficient pendant lamps.',
      keywords: ['led ceiling light', 'pendant lamp'],
    },
    description:
      'A striking blend of bold colors and metallic elegance, these Gold and Red Pendant Lamps are designed to be the centerpiece of any room. Whether hanging over a dining table or in a modern office, they provide focused lighting with a sophisticated aesthetic.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 7. Classic Wooden Ceiling Light
  {
    id: 'decor-007',
    sku: 'WH-LGT-CEL-WOD',
    title: 'Classic Wooden Ceiling Light',
    slug: 'classic-wooden-ceiling-light',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'dining-room'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'ceiling-light',
      subType: 'flush-mount',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood & Frosted Glass',
      bulbType: 'E27',
      dimensions: { length: 35, width: 35, height: 12, unit: 'cm' },
      weight: { value: 2.5, unit: 'kg' },
    },
    pricing: {
      mrp: 2999,
      sellingPrice: 2499,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Authentic Teak Wood', icon: 'tree' },
      { id: 'f2', title: 'Frosted Glass Shade', icon: 'droplet' },
      { id: 'f3', title: 'Handcrafted Finish', icon: 'tool' },
    ],

    variants: [
      { variantId: 'v1', name: 'Honey Oak', price: 2499, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: { availability: 'in_stock', rating: 4.5, reviewCount: 89, tags: ['rustic'], isFeatured: false },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1758639351463-d345439f6850?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Classic Wooden Light View',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Honey', hex: '#D2691E' }],
    },
    seo: {
      metaTitle: 'Classic Wooden Ceiling Lamp | Urban Home',
      metaDescription: 'Add a rustic charm with wooden ceiling light.',
      keywords: ['wooden lamp', 'rustic light'],
    },
    description:
      'Bring the warmth of nature indoors with our Classic Wooden Ceiling Light. Handcrafted from authentic teak wood and paired with a frosted glass shade, it diffuses light softly to create a cozy, rustic atmosphere in your living or dining space.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 8. Minimal Flush Mount Ceiling Light
  {
    id: 'decor-008',
    sku: 'WH-LGT-CEL-MIN',
    title: 'Minimal Flush Mount Ceiling Light',
    slug: 'minimal-flush-ceiling-light',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'office', 'kitchen'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'ceiling-light',
      subType: 'flush-mount',
      style: 'minimal',
    },
    specifications: {
      material: 'Aluminium & Acrylic',
      bulbType: 'Integrated LED',
      dimensions: { length: 22, width: 22, height: 4, unit: 'cm' },
      weight: { value: 0.8, unit: 'kg' },
    },
    pricing: {
      mrp: 2399,
      sellingPrice: 1999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Ultra-Slim Profile', icon: 'minus' },
      { id: 'f2', title: 'Dust-Proof Seal', icon: 'shield' },
      { id: 'f3', title: 'Easy Install', icon: 'settings' },
    ],

    variants: [
      { variantId: 'v1', name: 'Midnight Black', price: 1999, inventoryCount: 30, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      rating: 4.3,
      reviewCount: 45,
      tags: ['minimalist'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2014/05/02/12/45/ceiling-lamp-335975_1280.jpg',
          alt: 'Minimal Flush Mount Light',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Black', hex: '#000000' }],
    },
    seo: {
      metaTitle: 'Minimal Flush Mount LED Light | Urban Home',
      metaDescription: 'Slim ceiling lighting for modern spaces.',
      keywords: ['flush mount', 'slim led'],
    },
    description:
      'Perfect for low ceilings and clean interiors, this Minimal Flush Mount Ceiling Light offers a sleek, non-intrusive design. Its dust-proof seal ensures long-lasting performance, while the integrated LED provides bright, even light for kitchens and home offices.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 9. Luxury Crystal Ceiling Light
  {
    id: 'decor-009',
    sku: 'WH-LGT-CEL-LUX',
    title: 'Luxury Crystal Ceiling Light',
    slug: 'luxury-crystal-ceiling-light',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'dining-room'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'ceiling-light',
      subType: 'semi-flush-mount', // Specific for taller ceiling fixtures
      style: 'luxury',
    },
    specifications: {
      material: 'K9 Crystal & Stainless Steel',
      bulbType: 'G9 LED',
      dimensions: { length: 40, width: 40, height: 25, unit: 'cm' },
      weight: { value: 5.2, unit: 'kg' },
    },
    pricing: {
      mrp: 6499,
      sellingPrice: 5499,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'K9 Premium Crystals', icon: 'gem' },
      { id: 'f2', title: 'Gold Plated Frame', icon: 'award' },
      { id: 'f3', title: 'Rainbow Reflection', icon: 'sparkles' },
    ],

    variants: [
      { variantId: 'v1', name: 'Champagne Gold', price: 5499, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      rating: 4.9,
      reviewCount: 210,
      tags: ['bestseller', 'luxury'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2015/11/08/13/52/chandelier-1033602_1280.jpg',
          alt: 'Luxury Crystal Light',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Gold', hex: '#FFD700' }],
    },
    seo: {
      metaTitle: 'Luxury Crystal Chandelier | Urban Home',
      metaDescription: 'Transform home with K9 crystals.',
      keywords: ['crystal chandelier', 'luxury lighting'],
    },
    description:
      'Add a touch of opulence to your home with our Luxury Crystal Ceiling Light. Featuring premium K9 crystals set within a stunning gold-plated frame, this light creates a beautiful rainbow reflection effect, instantly elevating the elegance of your living or dining room.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 10. Contemporary Ring LED Ceiling Light
  {
    id: 'decor-010',
    sku: 'WH-LGT-CEL-RNG',
    title: 'Contemporary Ring LED Ceiling Light',
    slug: 'ring-led-ceiling-light',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'ceiling-light',
      subType: 'flush-mount',
      style: 'contemporary',
    },
    specifications: {
      material: 'Aluminium & Acrylic',
      bulbType: 'Integrated LED',
      dimensions: { length: 45, width: 45, height: 10, unit: 'cm' },
      weight: { value: 1.6, unit: 'kg' },
    },
    pricing: {
      mrp: 4499,
      sellingPrice: 3799,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Shadowless Lighting', icon: 'sun' },
      { id: 'f2', title: 'Anti-Glare Diffuser', icon: 'eye' },
      { id: 'f3', title: 'Lightweight Design', icon: 'feather' },
    ],

    variants: [
      { variantId: 'v1', name: 'Single Ring', price: 3799, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      rating: 4.6,
      reviewCount: 78,
      tags: ['modern', 'unique'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2013/02/10/15/50/rope-80214_1280.jpg',
          alt: 'Ring LED Ceiling Light',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Modern Ring LED Ceiling Light | Urban Home',
      metaDescription: 'Contemporary ring-shaped LED lights.',
      keywords: ['ring led', 'nordic lighting'],
    },
    description:
      'The Contemporary Ring LED Ceiling Light is a masterpiece of modern design. Its unique halo shape provides shadowless, 360-degree lighting, while the anti-glare diffuser protects your eyes. A lightweight and stylish addition to any modern living room or bedroom.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  /* =================  wall-lights(5) ================= */

  // 11. Modern Wall Sconce Light
  {
    id: 'decor-011',
    sku: 'WH-LGT-WAL-MOD',
    title: 'Modern Wall Sconce Light',
    slug: 'modern-wall-sconce-light',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'hallway', 'bathroom'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'wall-light',
      subType: 'sconce',
      style: 'modern',
    },
    specifications: {
      material: 'Powder Coated Metal & Clear Glass',
      bulbType: 'E27 (Standard)',
      powerSource: 'Corded Electric',
      dimensions: { length: 15, width: 12, height: 25, unit: 'cm' },
      weight: { value: 0.9, unit: 'kg' },
    },
    pricing: {
      mrp: 1799,
      sellingPrice: 1499,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Matte Black Finish', icon: 'droplet' },
      { id: 'f2', title: 'Durable Metal Body', icon: 'shield' },
      { id: 'f3', title: 'Easy Wall Mount', icon: 'tool' },
    ],

    variants: [
      { variantId: 'v1', name: 'Single Unit', price: 1499, inventoryCount: 35, availability: 'in_stock' },
      { variantId: 'v2', name: 'Pack of 2', price: 2699, inventoryCount: 20, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      rating: 4.4,
      reviewCount: 92,
      tags: ['new', 'industrial'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1574238919966-5cb3d9693a4b?q=80&w=870&auto=format&fit=crop',
          alt: 'Modern Wall Sconce Main View',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Matte Black', hex: '#1A1A1B' }],
    },
    seo: {
      metaTitle: 'Modern Wall Sconce Light | Urban Home',
      metaDescription: 'Upgrade your hallway with our modern black wall sconce.',
      keywords: ['wall sconce', 'black wall light'],
    },
    description:
      'Add a touch of contemporary flair to your walls with this Modern Wall Sconce. Featuring a sleek matte black finish and a clear glass shade, it creates a perfect balance of industrial and modern design. Ideal for hallways, bedrooms, or as a bedside reading light.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 12. Classic Brass Wall Light
  {
    id: 'decor-012',
    sku: 'WH-LGT-WAL-BRS',
    title: 'Classic Brass Wall Light',
    slug: 'classic-brass-wall-light',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'dining-room', 'entrance'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'wall-light',
      subType: 'sconce',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Brass & Etched Glass',
      bulbType: 'E14',
      dimensions: { length: 18, width: 22, height: 30, unit: 'cm' },
      weight: { value: 1.6, unit: 'kg' },
    },
    pricing: {
      mrp: 1999,
      sellingPrice: 1699,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Antique Brass Polish', icon: 'award' },
      { id: 'f2', title: 'Vintage Etched Glass', icon: 'star' },
      { id: 'f3', title: 'Rust Proof Body', icon: 'shield-check' },
    ],

    variants: [
      { variantId: 'v1', name: 'Antique Gold', price: 1699, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      rating: 4.7,
      reviewCount: 65,
      tags: ['bestseller', 'vintage'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1585056050604-f5cd7f56902d?q=80&w=870&auto=format&fit=crop',
          alt: 'Classic Brass Wall Light',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Antique Brass', hex: '#B8860B' }],
    },
    seo: {
      metaTitle: 'Classic Brass Wall Light | Urban Home',
      metaDescription: 'Bring a royal touch to your walls with antique brass lights.',
      keywords: ['brass wall light', 'antique lamp'],
    },
    description:
      'Elevate your home decor with the timeless elegance of our Classic Brass Wall Light. Crafted from solid brass with an antique finish and etched glass, this fixture brings a royal, vintage charm to any entrance or dining area.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 13. Minimal LED Wall Light
  {
    id: 'decor-013',
    sku: 'WH-LGT-WAL-MIN',
    title: 'Minimal LED Wall Light',
    slug: 'minimal-led-wall-light',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'office', 'study'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'wall-light',
      subType: 'linear-sconce', // Design-based sub-type
      style: 'minimal',
    },
    specifications: {
      material: 'Aluminium Body',
      bulbType: 'Integrated LED',
      dimensions: { length: 50, width: 5, height: 5, unit: 'cm' },
      weight: { value: 0.7, unit: 'kg' },
    },
    pricing: {
      mrp: 1499,
      sellingPrice: 1299,
      currency: 'INR',
      discount: { value: 13, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Soft Ambient Glow', icon: 'sun' },
      { id: 'f2', title: 'Minimalist Line Art', icon: 'edit-3' },
      { id: 'f3', title: 'Energy Saver', icon: 'zap' },
    ],

    variants: [
      { variantId: 'v1', name: 'Warm White', price: 1299, inventoryCount: 30, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      rating: 4.2,
      reviewCount: 48,
      tags: ['modern', 'eco-friendly'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1713664061425-2e37bc246d89?q=80&w=870&auto=format&fit=crop',
          alt: 'Minimal Linear LED Wall Light',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Minimalist Linear LED Wall Light | Urban Home',
      metaDescription: 'Sleek linear LED lights for modern bedrooms.',
      keywords: ['linear wall light', 'nordic lamp'],
    },
    description:
      'The Minimal LED Wall Light is a sleek, linear fixture that provides a soft ambient glow without taking up visual space. Its minimalist aluminium design makes it a perfect choice for modern bedrooms and home offices seeking a clean, Nordic look.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 14. Luxury Crystal Wall Light
  {
    id: 'decor-014',
    sku: 'WH-LGT-WAL-CRY',
    title: 'Luxury Crystal Wall Light',
    slug: 'luxury-crystal-wall-light',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'wall-light',
      subType: 'crystal-sconce', // Premium classification
      style: 'luxury',
    },
    specifications: {
      material: 'Genuine K9 Crystal',
      bulbType: 'G9 LED',
      dimensions: { length: 22, width: 15, height: 35, unit: 'cm' },
      weight: { value: 2.8, unit: 'kg' },
    },
    pricing: {
      mrp: 3499,
      sellingPrice: 2999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'K9 Premium Crystals', icon: 'gem' },
      { id: 'f2', title: 'Golden Metal Accents', icon: 'award' },
      { id: 'f3', title: 'Brilliant Reflections', icon: 'sparkles' },
    ],

    variants: [
      { variantId: 'v1', name: 'Gold Base', price: 2999, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      rating: 4.8,
      reviewCount: 115,
      tags: ['featured', 'premium'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1752335643968-1c60209ab433?q=80&w=871&auto=format&fit=crop',
          alt: 'Luxury Crystal Wall Sconce',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Gold', hex: '#FFD700' }],
    },
    seo: {
      metaTitle: 'Luxury K9 Crystal Wall Light | Urban Home',
      metaDescription: 'Elevate your bedroom with brilliant crystal reflections.',
      keywords: ['crystal wall light', 'luxury sconce'],
    },
    description:
      'Transform your walls into a display of shimmering light with our Luxury Crystal Wall Sconce. Using high-grade K9 crystals and golden metal accents, it creates brilliant reflections that add a premium feel to any living room or master bedroom.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 15. Wooden Accent Wall Light
  {
    id: 'decor-015',
    sku: 'WH-LGT-WAL-WOD',
    title: 'Wooden Accent Wall Light',
    slug: 'wooden-accent-wall-light',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'study'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'wall-light',
      subType: 'sconce',
      style: 'contemporary',
    },
    specifications: {
      material: 'Solid Wood & Glass',
      bulbType: 'E27 LED',
      dimensions: { length: 20, width: 18, height: 22, unit: 'cm' },
      weight: { value: 1.3, unit: 'kg' },
    },
    pricing: {
      mrp: 2199,
      sellingPrice: 1899,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Sheesham Wood', icon: 'tree' },
      { id: 'f2', title: 'Warm Glass Diffuser', icon: 'coffee' },
      { id: 'f3', title: 'Natural Grain', icon: 'layers' },
    ],

    variants: [
      { variantId: 'v1', name: 'Natural Oak', price: 1899, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      rating: 4.5,
      reviewCount: 52,
      tags: ['warm-decor', 'sustainable'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2016/05/20/21/11/light-1405974_1280.jpg',
          alt: 'Wooden Accent Wall Lamp',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Brown', hex: '#8B4513' }],
    },
    seo: {
      metaTitle: 'Wooden Accent Wall Light | Urban Home',
      metaDescription: 'Contemporary wall lamp with a solid wood base.',
      keywords: ['wooden wall light', 'cozy lights'],
    },
    description:
      'Perfect for creating a cozy reading nook, the Wooden Accent Wall Light features a solid Sheesham wood base and a warm glass diffuser. The natural wood grain ensures that each piece is unique, adding a sustainable and earthy touch to your home decor.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 16. Modern Floor Lamp
  {
    id: 'decor-016',
    sku: 'WH-LGT-FLR-MOD',
    title: 'Modern Floor Lamp',
    slug: 'modern-floor-lamp',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'office'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'floor-lamp',
      subType: 'standing-lamp',
      style: 'modern',
    },
    specifications: {
      material: 'Powder Coated Metal & Premium Fabric',
      bulbType: 'E27 LED Compatible',
      powerSource: 'Corded Electric',
      dimensions: { length: 40, width: 40, height: 155, unit: 'cm' },
      weight: { value: 4.5, unit: 'kg' },
    },
    pricing: {
      mrp: 2999,
      sellingPrice: 2499,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Tall Elegant Design', icon: 'arrow-up' },
      { id: 'f2', title: 'Soft Fabric Shade', icon: 'layers' },
      { id: 'f3', title: 'Sturdy Metal Base', icon: 'anchor' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Standard (155cm)',
        price: 2499,
        inventoryCount: 15,
        availability: 'in_stock',
      },
      {
        variantId: 'v2',
        name: 'Premium XL (175cm)',
        price: 3199,
        inventoryCount: 8,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.3,
      reviewCount: 48,
      tags: ['New', 'Trending'],
      isFeatured: false,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern Floor Lamp View',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Matte Black', hex: '#1A1A1B' }],
    },
    seo: {
      metaTitle: 'Modern Floor Lamp | Urban Home',
      metaDescription: 'Upgrade your living room with this tall, elegant floor lamp.',
      keywords: ['floor lamp', 'standing lamp'],
    },
    description:
      'Elevate your living room aesthetics with this tall and elegant Modern Floor Lamp. Featuring a premium fabric shade that diffuses light beautifully and a sturdy metal base, it provides the perfect lighting for a cozy evening or a professional office setting.',
    createdAt: '2026-01-16T10:00:00Z',
    updatedAt: '2026-01-16T10:00:00Z',
  },

  // 17. Classic Wooden Floor Lamp
  {
    id: 'decor-017',
    sku: 'WH-LGT-FLR-WOD',
    title: 'Classic Wooden Floor Lamp',
    slug: 'classic-wooden-floor-lamp',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'study'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'floor-lamp',
      subType: 'standing-lamp',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood & Linen',
      bulbType: 'B22 LED Holder',
      dimensions: { length: 35, width: 35, height: 150, unit: 'cm' },
      weight: { value: 3.8, unit: 'kg' },
    },
    pricing: {
      mrp: 2599,
      sellingPrice: 2199,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Tripod Style Base', icon: 'triangle' },
      { id: 'f2', title: 'Natural Wood Grain', icon: 'tree' },
      { id: 'f3', title: 'Hand-Finished Texture', icon: 'tool' },
    ],

    variants: [
      { variantId: 'v1', name: 'Natural Oak', price: 2199, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: {
      rating: 4.2,
      reviewCount: 41,
      tags: ['Rustic', 'Handcrafted'],
      isFeatured: false,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2017/08/06/22/19/house-2596975_1280.jpg',
          alt: 'Wooden Tripod Floor Lamp',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Natural Oak', hex: '#D2B48C' }],
    },
    seo: {
      metaTitle: 'Classic Wooden Floor Lamp | Urban Home',
      metaDescription: 'Natural wood tripod floor lamp for rustic interiors.',
      keywords: ['wooden lamp', 'tripod lamp'],
    },
    description:
      'Add a touch of rustic charm with our Classic Wooden Floor Lamp. Its tripod-style base is crafted from natural oak, showcasing beautiful wood grains. Paired with a linen shade, it’s a handcrafted masterpiece perfect for cozying up your study or bedroom.',
    createdAt: '2026-01-16T10:00:00Z',
    updatedAt: '2026-01-16T10:00:00Z',
  },

  // 18. Minimal Metal Floor Lamp
  {
    id: 'decor-018',
    sku: 'WH-LGT-FLR-MIN',
    title: 'Minimal Metal Floor Lamp',
    slug: 'minimal-metal-floor-lamp',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'floor-lamp',
      subType: 'linear-floor-lamp',
      style: 'minimal',
    },
    specifications: {
      material: 'Carbon Steel',
      bulbType: 'Integrated LED',
      dimensions: { length: 25, width: 25, height: 145, unit: 'cm' },
      weight: { value: 2.5, unit: 'kg' },
    },
    pricing: {
      mrp: 2299,
      sellingPrice: 1999,
      currency: 'INR',
      discount: { value: 13, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Slim Profile', icon: 'minus' },
      { id: 'f2', title: 'Space Saver', icon: 'maximize' },
      { id: 'f3', title: 'Adjustable Head', icon: 'settings' },
    ],

    variants: [
      { variantId: 'v1', name: 'Matte Black', price: 1999, inventoryCount: 20, availability: 'in_stock' },
    ],
    status: {
      rating: 4.1,
      reviewCount: 32,
      tags: ['Compact', 'Modern'],
      isFeatured: false,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_1280.jpg',
          alt: 'Minimalist Metal Floor Lamp',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Matte Black', hex: '#000000' }],
    },
    seo: {
      metaTitle: 'Minimalist Metal Floor Lamp | Urban Home',
      metaDescription: 'Sleek metal design built for modern urban spaces.',
      keywords: ['minimalist lamp', 'slim standing light'],
    },
    description:
      'Designed for the urban dweller, the Minimal Metal Floor Lamp features a sleek carbon steel body with a very small footprint. Its adjustable head allows you to direct light exactly where you need it, making it ideal for reading corners or minimalist offices.',
    createdAt: '2026-01-16T10:00:00Z',
    updatedAt: '2026-01-16T10:00:00Z',
  },

  // 19. Luxury Crystal Floor Lamp
  {
    id: 'decor-019',
    sku: 'WH-LGT-FLR-LUX',
    title: 'Luxury Crystal Floor Lamp',
    slug: 'luxury-crystal-floor-lamp',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'entrance'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'floor-lamp',
      subType: 'crystal-floor-lamp',
      style: 'luxury',
    },
    specifications: {
      material: 'K9 Crystal & Brass Frame',
      bulbType: 'E14 LED',
      dimensions: { length: 45, width: 45, height: 165, unit: 'cm' },
      weight: { value: 6.2, unit: 'kg' },
    },
    pricing: {
      mrp: 3999,
      sellingPrice: 3499,
      currency: 'INR',
      discount: { value: 13, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Gold Plated Stand', icon: 'award' },
      { id: 'f2', title: 'Premium K9 Crystals', icon: 'gem' },
      { id: 'f3', title: 'Glamorous Statement', icon: 'crown' },
    ],

    variants: [
      { variantId: 'v1', name: 'Gold / 3-Tier', price: 3499, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      rating: 4.5,
      reviewCount: 57,
      tags: ['Bestseller', 'Luxury'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1759978257038-ff90be507a3d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Crystal Floor Lamp',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Luxury Gold', hex: '#FFD700' }],
    },
    seo: {
      metaTitle: 'Luxury Crystal Floor Lamp | Urban Home',
      metaDescription: 'Make a grand statement with gold-plated crystal lamp.',
      keywords: ['crystal floor lamp', 'gold lamp'],
    },
    description:
      'Make a grand statement with our Luxury Crystal Floor Lamp. Featuring high-quality K9 crystals arranged in a stunning tiered design on a gold-plated brass frame, this lamp adds a glamorous touch of light and sophistication to any hallway or luxury living space.',
    createdAt: '2026-01-16T10:00:00Z',
    updatedAt: '2026-01-16T10:00:00Z',
  },

  // 20. Compact LED Floor Lamp
  {
    id: 'decor-020',
    sku: 'WH-LGT-FLR-LED',
    title: 'Compact LED Floor Lamp',
    slug: 'compact-led-floor-lamp',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'study'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'floor-lamp',
      subType: 'reading-lamp',
      style: 'modern',
    },
    specifications: {
      material: 'Lightweight Metal & Acrylic',
      bulbType: 'Integrated LED',
      dimensions: { length: 20, width: 20, height: 140, unit: 'cm' },
      weight: { value: 2.1, unit: 'kg' },
    },
    pricing: {
      mrp: 1599,
      sellingPrice: 1299,
      currency: 'INR',
      discount: { value: 19, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Dimmable LED Control', icon: 'sun' },
      { id: 'f2', title: 'Energy Saving', icon: 'zap' },
      { id: 'f3', title: 'Touch Sensitive', icon: 'mouse' },
    ],

    variants: [
      { variantId: 'v1', name: 'Warm White', price: 1299, inventoryCount: 30, availability: 'in_stock' },
    ],
    status: {
      rating: 4.0,
      reviewCount: 27,
      tags: ['Eco-Friendly', 'Smart'],
      isFeatured: false,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2014/06/05/08/12/hotel-lobby-362568_1280.jpg',
          alt: 'Compact LED Floor Lamp View',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Sleek White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Compact LED Floor Lamp | Urban Home',
      metaDescription: 'Energy-efficient lighting for reading corners.',
      keywords: ['led lamp', 'reading light'],
    },
    description:
      'Perfect for small apartments and modern bedrooms, the Compact LED Floor Lamp offers touch-sensitive controls and dimmable settings. Its energy-efficient integrated LED provides bright, flicker-free light, ideal for late-night reading or focused work.',
    createdAt: '2026-01-16T10:00:00Z',
    updatedAt: '2026-01-16T10:00:00Z',
  },
  /* ================= TABLE LAMPS (5) ================= */

  // 21. Modern Table Lamp with Shade
  {
    id: 'decor-021',
    sku: 'WH-LGT-TBL-SHD',
    title: 'Modern Table Lamp with Shade',
    slug: 'modern-table-lamp-shade',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'office', 'study'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'table-lamp',
      subType: 'bedside-lamp',
      style: 'modern',
    },
    specifications: {
      material: 'Metal & Fabric',
      bulbType: 'E27 (LED Compatible)',
      powerSource: 'Corded Electric',
      dimensions: { length: 25, width: 25, height: 45, unit: 'cm' },
      weight: { value: 1.2, unit: 'kg' },
    },
    pricing: {
      mrp: 1599,
      sellingPrice: 1299,
      currency: 'INR',
      discount: { value: 19, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'LED Compatible', icon: 'zap' },
      { id: 'f2', title: 'Premium Fabric Shade', icon: 'layers' },
      { id: 'f3', title: '6 Months Warranty', icon: 'shield-check' },
    ],

    variants: [
      { variantId: 'v1', name: 'Without Bulb', price: 1299, inventoryCount: 40, availability: 'in_stock' },
      {
        variantId: 'v2',
        name: 'With 9W LED Bulb',
        price: 1449,
        inventoryCount: 25,
        availability: 'in_stock',
      },
    ],
    status: { rating: 4.4, reviewCount: 62, tags: ['New'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2015/03/12/14/31/family-room-670270_1280.jpg',
          alt: 'Modern Table Lamp Front',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Black', hex: '#000000' },
        { name: 'White', hex: '#FFFFFF' },
      ],
    },
    seo: {
      metaTitle: 'Buy Modern Table Lamp | Urban Home',
      metaDescription: 'Sleek modern table lamp with a premium fabric shade.',
      keywords: ['table lamp', 'modern lighting', 'bedroom lamp'],
    },
    description:
      'Sleek modern table lamp with a premium fabric shade. Ideal for creating a warm ambiance and adding a touch of sophistication to your bedside or office desk.',
    createdAt: '2026-01-16T10:00:00Z',
    updatedAt: '2026-01-16T10:00:00Z',
  },

  // 22. Classic Wooden Table Lamp
  {
    id: 'decor-022',
    sku: 'WH-LGT-TBL-WOD',
    title: 'Classic Wooden Table Lamp',
    slug: 'classic-wooden-table-lamp',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'study'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'table-lamp',
      subType: 'accent-lamp',
      style: 'classic',
    },
    specifications: {
      material: 'Wood & Fabric',
      bulbType: 'B22 LED',
      powerSource: 'Corded Electric',
      dimensions: { length: 20, width: 20, height: 40, unit: 'cm' },
      weight: { value: 1.5, unit: 'kg' },
    },
    pricing: {
      mrp: 1299,
      sellingPrice: 1099,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Handcrafted Wood', icon: 'brush' },
      { id: 'f2', title: 'Neutral Beige Shade', icon: 'palette' },
      { id: 'f3', title: 'Eco-Friendly Base', icon: 'leaf' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Finish', price: 1099, inventoryCount: 15, availability: 'in_stock' },
      { variantId: 'v2', name: 'Rosewood Finish', price: 1199, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 45, tags: [], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1749468221373-b71ff1bf9d8c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Classic Wooden Lamp',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Brown', hex: '#8B4513' },
        { name: 'Beige', hex: '#F5F5DC' },
      ],
    },
    seo: {
      metaTitle: 'Buy Classic Wooden Lamp | Urban Home',
      metaDescription: 'Handcrafted wooden base paired with a neutral beige shade.',
      keywords: ['wooden lamp', 'classic lighting', 'home decor'],
    },
    description:
      'Handcrafted wooden base paired with a neutral beige shade. Brings elegance to your home with its organic textures and timeless design.',
    createdAt: '2026-01-16T10:00:00Z',
    updatedAt: '2026-01-16T10:00:00Z',
  },

  // 23. Minimal Metal Table Lamp
  {
    id: 'decor-023',
    sku: 'WH-LGT-TBL-MIN',
    title: 'Minimal Metal Table Lamp',
    slug: 'minimal-metal-table-lamp',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office', 'study'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'table-lamp',
      subType: 'desk-lamp',
      style: 'minimal',
    },
    specifications: {
      material: 'Metal',
      bulbType: 'Integrated LED',
      powerSource: 'Corded Electric',
      dimensions: { length: 15, width: 15, height: 35, unit: 'cm' },
      weight: { value: 0.8, unit: 'kg' },
    },
    pricing: {
      mrp: 1199,
      sellingPrice: 999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Integrated LED', icon: 'lightbulb' },
      { id: 'f2', title: 'Space Saver Design', icon: 'maximize' },
      { id: 'f3', title: 'Sleek Finish', icon: 'star' },
    ],

    variants: [
      { variantId: 'v1', name: 'Matte Black', price: 999, inventoryCount: 30, availability: 'in_stock' },
      { variantId: 'v2', name: 'Brushed Silver', price: 1149, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: { rating: 4.1, reviewCount: 33, tags: ['New'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1765608262875-2b97700ec852?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Minimalist Office Lamp',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Black', hex: '#000000' }],
    },
    seo: {
      metaTitle: 'Buy Minimal Metal Lamp | Urban Home',
      metaDescription: 'A minimalist metal lamp for focused tasks and compact workspaces.',
      keywords: ['office lamp', 'minimalist light', 'desk lamp'],
    },
    description:
      'A minimalist metal lamp for focused tasks. Its small footprint and clean lines make it perfect for compact workspaces and modern study areas.',
    createdAt: '2026-01-16T10:00:00Z',
    updatedAt: '2026-01-16T10:00:00Z',
  },

  // 24. Luxury Crystal Table Lamp
  {
    id: 'decor-024',
    sku: 'WH-LGT-TBL-CRY',
    title: 'Luxury Crystal Table Lamp',
    slug: 'luxury-crystal-table-lamp',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'study'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'table-lamp',
      subType: 'crystal-lamp',
      style: 'luxury',
    },
    specifications: {
      material: 'K9 Crystal & Metal',
      bulbType: 'E14 LED',
      powerSource: 'Corded Electric',
      dimensions: { length: 30, width: 30, height: 55, unit: 'cm' },
      weight: { value: 2.5, unit: 'kg' },
    },
    pricing: {
      mrp: 3499,
      sellingPrice: 2999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Crystal Reflection', icon: 'gem' },
      { id: 'f2', title: 'Premium Metal Accents', icon: 'star' },
      { id: 'f3', title: 'Luxury Aesthetics', icon: 'crown' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Clear Crystal / Gold',
        price: 2999,
        inventoryCount: 8,
        availability: 'in_stock',
      },
      {
        variantId: 'v2',
        name: 'Smoky Crystal / Silver',
        price: 3299,
        inventoryCount: 5,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.6,
      reviewCount: 51,
      tags: ['New', 'Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1655147999706-91d0f00e7754?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Crystal Lamp Detail',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Transparent', hex: '#F0F8FF' },
        { name: 'Gold', hex: '#FFD700' },
      ],
    },
    seo: {
      metaTitle: 'Buy Luxury Crystal Lamp | Urban Home',
      metaDescription: 'Exquisite crystal base that reflects light beautifully.',
      keywords: ['crystal lamp', 'luxury lighting', 'glamorous decor'],
    },
    description:
      'Exquisite crystal base that reflects light beautifully. This statement piece adds a glamorous sparkle and high-end feel to any room.',
    createdAt: '2026-01-16T10:00:00Z',
    updatedAt: '2026-01-16T10:00:00Z',
  },

  // 25. Compact LED Table Lamp
  {
    id: 'decor-025',
    sku: 'WH-LGT-TBL-LED',
    title: 'Compact LED Table Lamp',
    slug: 'compact-led-table-lamp',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'office', 'study'],
      mainCategory: 'decor',
      productType: 'illumination-decor',
      category: 'lighting',
      subCategory: 'table-lamp',
      subType: 'portable-lamp',
      style: 'modern',
    },
    specifications: {
      material: 'Metal & Acrylic',
      bulbType: 'Integrated LED (Dimmable)',
      powerSource: 'USB / Battery',
      dimensions: { length: 12, width: 12, height: 25, unit: 'cm' },
      weight: { value: 0.5, unit: 'kg' },
    },
    pricing: {
      mrp: 999,
      sellingPrice: 799,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Portable (USB/Battery)', icon: 'battery' },
      { id: 'f2', title: 'Dimmable Light', icon: 'sun' },
      { id: 'f3', title: 'Energy Efficient', icon: 'activity' },
    ],

    variants: [
      { variantId: 'v1', name: 'Battery Powered', price: 799, inventoryCount: 50, availability: 'in_stock' },
      { variantId: 'v2', name: 'Rechargeable USB', price: 999, inventoryCount: 35, availability: 'in_stock' },
    ],
    status: { rating: 4.0, reviewCount: 29, tags: [], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1754606581526-053f58888053?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Compact LED Lamp',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Buy Compact LED Lamp | Urban Home',
      metaDescription: 'Portable and energy-efficient LED lamp for reading.',
      keywords: ['led lamp', 'portable light', 'reading lamp'],
    },
    description:
      'Portable and energy-efficient, this compact LED lamp is designed for versatility. Ideal for bedside reading or as a portable light source for study sessions.',
    createdAt: '2026-01-16T10:00:00Z',
    updatedAt: '2026-01-16T10:00:00Z',
  },

  /* ================= wall-art (5) ================= */

  // 26. Abstract Canvas Wall Art
  {
    id: 'decor-026',
    sku: 'WH-DEC-ART-ABS',
    title: 'Abstract Canvas Wall Art',
    slug: 'abstract-canvas-wall-art',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'office', 'study'],
      mainCategory: 'decor',
      productType: 'visual-decor',
      category: 'wall-art',
      subCategory: 'canvas-art',
      subType: 'abstract-print',
      style: 'modern',
    },
    specifications: {
      material: 'Canvas & Wood',
      mountingType: 'Wall Mount',
      orientation: 'Landscape',
      dimensions: { length: 90, width: 3, height: 60, unit: 'cm' },
      weight: { value: 1.5, unit: 'kg' },
    },
    pricing: {
      mrp: 2999,
      sellingPrice: 2499,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Premium Canvas Print', icon: 'image' },
      { id: 'f2', title: 'Fade Resistant Ink', icon: 'sun' },
      { id: 'f3', title: 'Ready to Hang', icon: 'hammer' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Medium (60x40cm)',
        price: 2499,
        inventoryCount: 20,
        availability: 'in_stock',
      },
      { variantId: 'v2', name: 'Large (90x60cm)', price: 3499, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: {
      rating: 4.5,
      reviewCount: 72,
      tags: ['New', 'Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2018/04/12/21/24/art-3314849_1280.jpg',
          alt: 'Abstract Canvas Wall Art',
          isPrimary: true,
        },
      ],
      colors: [
        {
          name: 'Multicolor',
          hex: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
        },
      ],
    },
    seo: {
      metaTitle: 'Buy Abstract Canvas Wall Art | Urban Home',
      metaDescription: 'Vibrant abstract canvas wall art to bring life to your bare walls.',
      keywords: ['wall art', 'canvas painting', 'abstract decor'],
    },
    description:
      'Vibrant abstract canvas wall art to bring life to your bare walls. High-quality print on premium canvas.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 27. Classic Framed Wall Art
  {
    id: 'decor-029',
    sku: 'WH-DEC-ART-LUX',
    title: 'Luxury Gold Ginkgo Leaf Wall Sculpture',
    slug: 'luxury-gold-ginkgo-wall-sculpture',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'entrance', 'dining-room'],
      mainCategory: 'decor',
      productType: 'visual-decor',
      category: 'wall-art',
      subCategory: 'metal-art',
      subType: 'wall-sculpture',
      style: 'luxury',
    },
    specifications: {
      material: 'Iron with Gold Foil Finish',
      mountingType: 'Wall Mount',
      orientation: 'Landscape',
      dimensions: { length: 120, width: 5, height: 70, unit: 'cm' },
      weight: { value: 3.5, unit: 'kg' },
    },
    pricing: {
      mrp: 2499,
      sellingPrice: 1999,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Solid Wood Frame', icon: 'square' },
      { id: 'f2', title: 'Dust Proof Glass', icon: 'shield' },
      { id: 'f3', title: 'Timeless Design', icon: 'clock' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Frame', price: 1999, inventoryCount: 12, availability: 'in_stock' },
      { variantId: 'v2', name: 'Black Frame', price: 1999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 54, tags: [], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1683221756071-3fad9b10619f?q=80&w=957&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Classic Framed Wall Art',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Brown', hex: '#A52A2A' },
        { name: 'Beige', hex: '#F5F5DC' },
      ],
    },
    seo: {
      metaTitle: 'Buy Classic Framed Wall Art | Urban Home',
      metaDescription: 'Timeless framed wall art featuring classic motifs.',
      keywords: ['framed art', 'classic decor', 'wall hanging'],
    },
    description: 'Timeless framed wall art featuring classic motifs. Comes with a high-quality wooden frame.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 28. Minimal Geometric Wall Art
  {
    id: 'decor-028',
    sku: 'WH-DEC-ART-MIN',
    title: 'Minimal Geometric Wall Art',
    slug: 'minimal-geometric-wall-art',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'office', 'study'],
      mainCategory: 'decor',
      productType: 'visual-decor',
      category: 'wall-art',
      subCategory: 'geometric-art',
      subType: 'geometric-sculpture',
      style: 'minimal',
    },
    specifications: {
      material: 'Metal & Canvas',
      mountingType: 'Wall Mount',
      orientation: 'Square',
      dimensions: { length: 50, width: 1.5, height: 50, unit: 'cm' },
      weight: { value: 1.2, unit: 'kg' },
    },
    pricing: {
      mrp: 1999,
      sellingPrice: 1599,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Minimalist Aesthetics', icon: 'minus' },
      { id: 'f2', title: 'Lightweight Build', icon: 'feather' },
      { id: 'f3', title: 'Geometric Precision', icon: 'triangle' },
    ],

    variants: [
      { variantId: 'v1', name: 'Single Panel', price: 1599, inventoryCount: 25, availability: 'in_stock' },
      { variantId: 'v2', name: 'Set of 3', price: 4299, inventoryCount: 8, availability: 'in_stock' },
    ],
    status: { rating: 4.0, reviewCount: 38, tags: ['New'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2018/09/24/01/49/ganesh-3698942_1280.jpg',
          alt: 'Minimal Geometric Wall Art',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Black', hex: '#000000' },
        { name: 'Gold', hex: '#FFD700' },
      ],
    },
    seo: {
      metaTitle: 'Buy Minimal Geometric Wall Art | Urban Home',
      metaDescription: 'Sophisticated minimal geometric patterns for modern offices.',
      keywords: ['minimal art', 'geometric wall decor', 'modern office art'],
    },
    description:
      'Sophisticated minimal geometric patterns. Perfect for a modern office or a sleek living room.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 29. Luxury Acrylic Wall Panel
  {
    id: 'decor-029',
    sku: 'WH-DEC-ART-LUX',
    title: 'Luxury Gold Ginkgo Leaf Wall Sculpture',
    slug: 'luxury-gold-ginkgo-wall-sculpture',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'entrance', 'dining-room'],
      mainCategory: 'decor',
      productType: 'visual-decor',
      category: 'wall-art',
      subCategory: 'metal-art',
      subType: 'wall-sculpture',
      style: 'luxury',
    },
    specifications: {
      material: 'Iron with Gold Foil Finish',
      mountingType: 'Wall Mount',
      orientation: 'Landscape',
      dimensions: { length: 120, width: 5, height: 70, unit: 'cm' },
      weight: { value: 3.5, unit: 'kg' },
    },
    pricing: {
      mrp: 4599,
      sellingPrice: 3999,
      currency: 'INR',
      discount: { value: 13, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'High Gloss Acrylic', icon: 'sparkles' },
      { id: 'f2', title: 'Gold Accents', icon: 'gem' },
      { id: 'f3', title: '1 Year Warranty', icon: 'shield-check' },
    ],

    variants: [
      { variantId: 'v1', name: 'Standard Gold', price: 3999, inventoryCount: 5, availability: 'in_stock' },
      {
        variantId: 'v2',
        name: 'Rose Gold Edition',
        price: 4499,
        inventoryCount: 3,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.6,
      reviewCount: 65,
      tags: ['New', 'Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2021/04/07/16/48/houseoffanusta-6159632_1280.jpg',
          alt: 'Luxury Acrylic Wall Panel',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'White', hex: '#FFFFFF' },
        { name: 'Gold', hex: '#FFD700' },
      ],
    },
    seo: {
      metaTitle: 'Buy Luxury Acrylic Wall Panel | Urban Home',
      metaDescription: 'Premium acrylic wall panel with gold accents for luxury interiors.',
      keywords: ['luxury wall panel', 'acrylic art', 'premium home decor'],
    },
    description: 'Premium acrylic wall panel with gold accents. A statement piece for luxury home interiors.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 30. Nature Inspired Canvas Art
  {
    id: 'decor-030',
    sku: 'WH-DEC-ART-NAT',
    title: 'Nature Inspired Canvas Art',
    slug: 'nature-inspired-canvas-art',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'office', 'study'],
      mainCategory: 'decor',
      productType: 'visual-decor',
      category: 'wall-art',
      subCategory: 'canvas-art',
      subType: 'botanical-print',
      style: 'natural',
    },
    specifications: {
      material: 'Canvas & Wood',
      mountingType: 'Wall Mount',
      orientation: 'Landscape',
      dimensions: { length: 80, width: 2.5, height: 40, unit: 'cm' },
      weight: { value: 1.8, unit: 'kg' },
    },
    pricing: {
      mrp: 2199,
      sellingPrice: 1799,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Eco-Friendly Inks', icon: 'leaf' },
      { id: 'f2', title: 'Natural Wood Frame', icon: 'tree' },
      { id: 'f3', title: 'Calming Motifs', icon: 'wind' },
    ],

    variants: [
      { variantId: 'v1', name: 'Oak Frame', price: 1799, inventoryCount: 15, availability: 'in_stock' },
      { variantId: 'v2', name: 'Pine Frame', price: 1699, inventoryCount: 20, availability: 'in_stock' },
    ],
    status: { rating: 4.3, reviewCount: 48, tags: [], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2016/01/20/21/41/drunkards-1152424_1280.jpg',
          alt: 'Nature Inspired Canvas Art',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Green', hex: '#228B22' },
        { name: 'Brown', hex: '#8B4513' },
      ],
    },
    seo: {
      metaTitle: 'Buy Nature Inspired Canvas Art | Urban Home',
      metaDescription: 'Bring the outdoors in with this nature-inspired canvas painting.',
      keywords: ['nature art', 'landscape painting', 'eco-friendly decor'],
    },
    description:
      'Bring the outdoors in with this nature-inspired canvas painting. Perfect for creating a calm atmosphere.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  /* ================= VASES / SHOWPIECES (5) ================= */

  // 31. Modern Ceramic Vase
  {
    id: 'decor-031',
    sku: 'WH-DEC-VAS-CER',
    title: 'Modern Ceramic Vase',
    slug: 'modern-ceramic-vase',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'decor',
      productType: 'accent-decor',
      category: 'vase',
      subCategory: 'ceramic-vase',
      subType: 'table-vase',
      style: 'modern',
    },
    specifications: {
      material: 'Hand-finished Ceramic',
      usage: 'Tabletop / Indoor',
      dimensions: { length: 15, width: 15, height: 30, unit: 'cm' },
      weight: { value: 0.8, unit: 'kg' },
    },
    pricing: {
      mrp: 1099,
      sellingPrice: 899,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Smooth Ceramic Finish', icon: 'droplet' },
      { id: 'f2', title: 'Modern Silhouette', icon: 'feather' },
      { id: 'f3', title: 'Tabletop Friendly', icon: 'layout' },
    ],

    variants: [
      { variantId: 'v1', name: 'Small (20cm)', price: 699, inventoryCount: 25, availability: 'in_stock' },
      { variantId: 'v2', name: 'Standard (30cm)', price: 899, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: { rating: 4.3, reviewCount: 34, tags: ['New'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1644328986176-0d2d6af69314?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Ceramic Vase Front',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Buy Modern Ceramic Vase | Urban Home',
      metaDescription: 'Elegant white ceramic vase with a smooth finish. Perfect centerpiece.',
      keywords: ['ceramic vase', 'modern decor', 'table vase'],
    },
    description:
      'Elegant white ceramic vase with a smooth finish. Its modern silhouette makes it a perfect centerpiece.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 32. Classic Wooden Showpiece
  {
    id: 'decor-032',
    sku: 'WH-DEC-SHW-WOD',
    title: 'Classic Wooden Showpiece',
    slug: 'classic-wooden-showpiece',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office'],
      mainCategory: 'decor',
      productType: 'accent-decor',
      category: 'vase',
      subCategory: 'wooden-decor',
      subType: 'abstract-sculpture',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Mango Wood',
      usage: 'Shelf / Desk',
      dimensions: { length: 12, width: 12, height: 25, unit: 'cm' },
      weight: { value: 1.2, unit: 'kg' },
    },
    pricing: {
      mrp: 1499,
      sellingPrice: 1299,
      currency: 'INR',
      discount: { value: 13, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Hand-Carved Wood', icon: 'brush' },
      { id: 'f2', title: 'Vintage Appeal', icon: 'history' },
      { id: 'f3', title: 'Solid Wood Base', icon: 'box' },
    ],

    variants: [
      { variantId: 'v1', name: 'Mango Wood', price: 1299, inventoryCount: 10, availability: 'in_stock' },
      { variantId: 'v2', name: 'Sheesham Wood', price: 1799, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: { rating: 4.4, reviewCount: 41, tags: [], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2017/03/12/21/31/coffee-grinder-2138170_1280.jpg',
          alt: 'Wooden Showpiece Detail',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Brown', hex: '#8B4513' }],
    },
    seo: {
      metaTitle: 'Buy Classic Wooden Showpiece | Urban Home',
      metaDescription: 'Hand-carved wooden showpiece with vintage appeal for study desk.',
      keywords: ['wooden showpiece', 'vintage decor', 'handmade wood'],
    },
    description: 'Hand-carved wooden showpiece with vintage appeal. A timeless addition to your study desk.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 33. Metallic Modern Vase
  {
    id: 'decor-033',
    sku: 'WH-DEC-VAS-MET',
    title: 'Metallic Modern Vase',
    slug: 'metallic-modern-vase',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'decor',
      productType: 'accent-decor',
      category: 'vase',
      subCategory: 'metal-vase',
      subType: 'bud-vase',
      style: 'modern',
    },
    specifications: {
      material: 'Polished Iron with Nickel Finish',
      usage: 'Tabletop / Desktop',
      dimensions: { length: 10, width: 10, height: 28, unit: 'cm' },
      weight: { value: 0.6, unit: 'kg' },
    },
    pricing: {
      mrp: 1299,
      sellingPrice: 1099,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'High-Shine Finish', icon: 'sparkles' },
      { id: 'f2', title: 'Lightweight Metal', icon: 'feather' },
      { id: 'f3', title: 'Glamorous Decor', icon: 'star' },
    ],

    variants: [
      { variantId: 'v1', name: 'Brushed Silver', price: 1099, inventoryCount: 18, availability: 'in_stock' },
      { variantId: 'v2', name: 'Glossy Gold', price: 1249, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: { rating: 4.1, reviewCount: 29, tags: ['New'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2016/05/14/19/18/flowers-1392392_1280.jpg',
          alt: 'Metallic Vase View',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Gold', hex: '#FFD700' },
        { name: 'Silver', hex: '#C0C0C0' },
      ],
    },
    seo: {
      metaTitle: 'Buy Metallic Modern Vase | Urban Home',
      metaDescription: 'High-shine metallic vase that adds a touch of glamour to your home.',
      keywords: ['metal vase', 'gold vase', 'modern centerpiece'],
    },
    description: 'High-shine metallic vase that adds a touch of glamour. Perfect for holding dry flowers.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 34. Luxury Crystal Showpiece
  {
    id: 'decor-034',
    sku: 'WH-DEC-SHW-CRY',
    title: 'Luxury Crystal Showpiece',
    slug: 'luxury-crystal-showpiece',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'decor',
      productType: 'accent-decor',
      category: 'vase',
      subCategory: 'crystal-decor',
      subType: 'centerpiece',
      style: 'luxury',
    },
    specifications: {
      material: 'Hand-Cut K9 Crystal',
      usage: 'Tabletop / Centerpiece',
      dimensions: { length: 18, width: 18, height: 22, unit: 'cm' },
      weight: { value: 1.5, unit: 'kg' },
    },
    pricing: {
      mrp: 2099,
      sellingPrice: 1799,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Light Reflecting Crystal', icon: 'sun' },
      { id: 'f2', title: 'Exquisite Gift Item', icon: 'gift' },
      { id: 'f3', title: 'Premium Statement Piece', icon: 'crown' },
    ],

    variants: [
      { variantId: 'v1', name: 'Clear Crystal', price: 1799, inventoryCount: 10, availability: 'in_stock' },
      { variantId: 'v2', name: 'Rose Quartz Tint', price: 2199, inventoryCount: 4, availability: 'in_stock' },
    ],
    status: {
      rating: 4.5,
      reviewCount: 50,
      tags: ['New', 'Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2016/11/23/15/42/bouquet-1853622_1280.jpg',
          alt: 'Crystal Showpiece View',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Transparent', hex: '#F0F8FF' },
        { name: 'Gold', hex: '#FFD700' },
      ],
    },
    seo: {
      metaTitle: 'Buy Luxury Crystal Showpiece | Urban Home',
      metaDescription: 'Premium crystal showpiece that reflects light beautifully.',
      keywords: ['crystal showpiece', 'luxury gift', 'home accents'],
    },
    description: 'Premium crystal showpiece that reflects light beautifully. An exquisite statement piece.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 35. Compact Minimal Vase Set
  {
    id: 'decor-035',
    sku: 'WH-DEC-VAS-SET',
    title: 'Compact Minimal Vase Set',
    slug: 'compact-minimal-vase-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'office'],
      mainCategory: 'decor',
      productType: 'accent-decor',
      category: 'vase',
      subCategory: 'vase-set',
      subType: 'bud-vase-set',
      style: 'minimal',
    },
    specifications: {
      material: 'Matte Finished Ceramic',
      usage: 'Shelf / Desk',
      quantity: 'Set of 3 Vases',
      dimensions: { length: 8, width: 8, height: 15, unit: 'cm' },
      weight: { value: 0.9, unit: 'kg' },
    },
    pricing: {
      mrp: 849,
      sellingPrice: 699,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Set of 2 Vases', icon: 'copy' },
      { id: 'f2', title: 'Bedside Table Size', icon: 'moon' },
      { id: 'f3', title: 'Neutral Tones', icon: 'palette' },
    ],

    variants: [
      { variantId: 'v1', name: 'Set of 2', price: 699, inventoryCount: 30, availability: 'in_stock' },
      { variantId: 'v2', name: 'Set of 4', price: 1199, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: { rating: 4.0, reviewCount: 22, tags: [], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2019/03/20/21/21/cherry-blossoms-4069596_1280.jpg',
          alt: 'Minimal Vase Set',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'White', hex: '#FFFFFF' },
        { name: 'Grey', hex: '#808080' },
      ],
    },
    seo: {
      metaTitle: 'Buy Minimal Vase Set | Urban Home',
      metaDescription: 'Set of two minimal ceramic vases in neutral tones for compact spaces.',
      keywords: ['vase set', 'minimalist decor', 'small ceramic vase'],
    },
    description: 'A set of two minimal ceramic vases. Designed to fit into small spaces like bookshelves.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },
]
