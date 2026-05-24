export const bedsData = [
  // 1. Single Wooden Bed
  {
    id: 'bed-001',
    sku: 'WH-BED-SGL-WOD',
    title: 'Single Wooden Bed',
    slug: 'single-wooden-bed',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'guest-room', 'kids-room'],
      mainCategory: 'furniture',
      productType: 'sleeping',
      category: 'bed',
      subCategory: 'single-bed',
      subType: 'platform-bed',
      style: 'modern',
    },
    specifications: {
      material: 'Solid Sheesham Wood',
      finish: 'Honey Oak Finish',
      bedSize: 'single',
      storage: 'None',
      dimensions: { length: 190, width: 90, height: 45, unit: 'cm' },
      weight: { value: 25, unit: 'kg' },
    },
    pricing: {
      mrp: 15999,
      sellingPrice: 12999,
      currency: 'INR',
      discount: { value: 19, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Solid Wood Durability', icon: 'shield-check' },
      { id: 'f2', title: 'Compact Design', icon: 'maximize' },
      { id: 'f3', title: 'Easy Assembly', icon: 'tool' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Single Size - No Storage',
        price: 12999,
        inventoryCount: 15,
        availability: 'in_stock',
      },
      {
        variantId: 'v2',
        name: 'Single Size - With Storage',
        price: 14999,
        inventoryCount: 8,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.3,
      reviewCount: 72,
      tags: ['new', 'solid-wood'],
      isFeatured: false,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1688383454669-9f5cc5991778?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Single Wooden Bed',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Teak', hex: '#87441F' },
        { name: 'Walnut', hex: '#5C4033' },
      ],
    },
    seo: {
      metaTitle: 'Buy Solid Wood Single Bed | Urban Home',
      metaDescription: 'Premium solid wood single bed with modern design.',
      keywords: ['wooden bed', 'single bed', 'furniture'],
    },
    description:
      'Experience a peaceful sleep with our modern single wooden bed crafted from high-quality solid wood.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 2. Queen Size Wooden Bed
  {
    id: 'bed-002',
    sku: 'WH-BED-QUN-WOD',
    title: 'Queen Size Wooden Bed',
    slug: 'queen-size-wooden-bed',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'guest-room'],
      mainCategory: 'furniture',
      productType: 'sleeping',
      category: 'bed',
      subCategory: 'queen-bed',
      subType: 'platform-bed',
      style: 'contemporary',
    },
    specifications: {
      material: 'Engineered Wood / Teak Wood',
      finish: 'Walnut Finish',
      bedSize: 'Queen Size',
      storage: 'None',
      dimensions: { length: 200, width: 160, height: 50, unit: 'cm' },
      weight: { value: 40, unit: 'kg' },
    },

    pricing: {
      mrp: 28999,
      sellingPrice: 24999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Spacious Queen Size', icon: 'expand' },
      { id: 'f2', title: 'Premium Walnut Finish', icon: 'palette' },
      { id: 'f3', title: 'Anti-Termite Wood', icon: 'bug-stop' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Queen Size - No Storage',
        price: 24999,
        inventoryCount: 10,
        availability: 'in_stock',
      },
      {
        variantId: 'v2',
        name: 'Queen Size - With Storage',
        price: 27999,
        inventoryCount: 5,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.5,
      reviewCount: 85,
      tags: ['best-seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2017/06/17/10/58/furniture-2411853_1280.jpg',
          alt: 'Queen Wooden Bed',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Walnut', hex: '#5C4033' },
        { name: 'Honey', hex: '#E29141' },
      ],
    },
    seo: {
      metaTitle: 'Buy Queen Size Wooden Bed | Urban Home',
      metaDescription: 'Elegant queen size wooden bed crafted with premium wood.',
      keywords: ['queen bed', 'wooden furniture', 'bedroom furniture'],
    },
    description: 'Elegant Queen Size bed with modern finish for a luxurious sleep experience.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 3. King Size Wooden Bed
  {
    id: 'bed-003',
    sku: 'WH-BED-KNG-WOD',
    title: 'King Size Wooden Bed',
    slug: 'king-size-wooden-bed',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'master-bedroom'],
      mainCategory: 'furniture',
      productType: 'sleeping',
      category: 'bed',
      subCategory: 'king-bed',
      subType: 'panel-bed',
      style: 'modern',
    },
    specifications: {
      material: 'Solid Sheesham / Teak Wood',
      finish: 'Honey Oak / Teak Finish',
      bedSize: 'King',
      storage: 'None',
      dimensions: { length: 210, width: 180, height: 55, unit: 'cm' },
      weight: { value: 50, unit: 'kg' },
    },
    pricing: {
      mrp: 38999,
      sellingPrice: 33999,
      currency: 'INR',
      discount: { value: 13, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Extra Large Master Bed', icon: 'crown' },
      { id: 'f2', title: 'Luxury Build', icon: 'star' },
      { id: 'f3', title: 'Heavy Duty Wood', icon: 'anchor' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'King Size - Standard',
        price: 33999,
        inventoryCount: 8,
        availability: 'in_stock',
      },
      {
        variantId: 'v2',
        name: 'King Size - Deluxe',
        price: 38999,
        inventoryCount: 4,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.8,
      reviewCount: 120,
      tags: ['config-item'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg',
          alt: 'King Wooden Bed',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Honey', hex: '#E29141' },
        { name: 'Walnut', hex: '#5C4033' },
      ],
    },
    seo: {
      metaTitle: 'Buy King Size Wooden Bed | Urban Home',
      metaDescription: 'Spacious king size wooden bed for ultimate comfort and style.',
      keywords: ['king bed', 'wooden furniture', 'master bedroom'],
    },
    description: 'Spacious King Size bed for ultimate comfort and premium aesthetics.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 4. Single Comfort Bed
  {
    id: 'bed-004',
    sku: 'WH-BED-SGL-CFG',
    title: 'Single Comfort Bed',
    slug: 'single-comfort-bed',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'guest-room'],
      mainCategory: 'furniture',
      productType: 'sleeping',
      category: 'bed',
      subCategory: 'single-bed',
      subType: 'upholstered-bed',
      style: 'Minimalist',
    },
    specifications: {
      material: 'Solid Wood & Premium Fabric',
      bedSize: 'single',
      storage: 'None',
      dimensions: { length: 190, width: 90, height: 45, unit: 'cm' },
      weight: { value: 22, unit: 'kg' },
    },
    pricing: {
      mrp: 18999,
      sellingPrice: 14999,
      currency: 'INR',
      discount: { value: 21, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Ergonomic Frame', icon: 'activity' },
      { id: 'f2', title: 'Sturdy Legs', icon: 'base-fill' },
      { id: 'f3', title: 'Space Saver', icon: 'house-heart' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Single Comfort Standard',
        price: 14999,
        inventoryCount: 10,
        availability: 'in_stock',
      },
    ],
    status: { rating: 4.3, reviewCount: 45, tags: ['compact'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1582068019386-a943ee9287ae?q=80&w=387&auto=format&fit=crop',
          alt: 'Single Comfort Bed',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak', hex: '#87441F' }],
    },
    seo: {
      metaTitle: 'Buy Single Comfort Bed | Urban Home',
      metaDescription: 'Simple and sturdy single bed for compact spaces.',
      keywords: ['single bed', 'compact furniture', 'bedroom'],
    },
    description: 'Simple and sturdy single bed for compact spaces.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 5. Queen Luxury Upholstered Bed (Extra added for 5th object)
  {
    id: 'bed-005',
    sku: 'WH-BED-QUN-LUX',
    title: 'Queen Luxury Upholstered Bed',
    slug: 'queen-luxury-bed',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'sleeping',
      category: 'bed',
      subCategory: 'queen-bed',
      subType: 'upholstered-bed',
      style: 'Luxury',
    },
    specifications: {
      material: 'Engineered Wood & Premium Velvet',
      bedSize: 'queen',
      storage: 'None',
      dimensions: { length: 205, width: 165, height: 120, unit: 'cm' },
      weight: { value: 65, unit: 'kg' },
    },
    pricing: {
      mrp: 34999,
      sellingPrice: 29999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Velvet Headboard', icon: 'layers' },
      { id: 'f2', title: 'Hydraulic Storage', icon: 'arrow-up-circle' },
      { id: 'f3', title: 'Reinforced Metal Frame', icon: 'shield-check' },
    ],

    variants: [
      { variantId: 'v1', name: 'Charcoal Gray', price: 29999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      rating: 4.7,
      reviewCount: 28,
      tags: ['luxury', 'storage'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1733253870497-e9118f4b575e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Upholstered Bed',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Charcoal', hex: '#36454F' }],
    },
    seo: {
      metaTitle: 'Luxury Queen Bed with Storage | Urban Home',
      metaDescription: 'Premium velvet upholstered queen bed with hydraulic storage.',
      keywords: ['luxury bed', 'storage bed', 'queen bed velvet'],
    },
    description:
      'A masterpiece of comfort and style. This upholstered bed features a plush headboard and hidden hydraulic storage.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 6. Storage Bed with Drawers
  {
    id: 'bed-006',
    sku: 'WH-BED-STR-DRW',
    title: 'Storage Bed with Drawers',
    slug: 'storage-bed-with-drawers',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'sleeping',
      category: 'bed',
      subCategory: 'storage-bed',
      subType: 'drawer-storage-bed',
      style: 'Contemporary',
    },
    specifications: {
      material: 'Solid Wood & Engineered Wood Panels',
      bedSize: 'Double',
      storageType: 'Drawer Storage',
      numberOfDrawers: 4,
      drawerMechanism: 'Telescopic Channels',
      dimensions: { length: 205, width: 155, height: 50, unit: 'cm' },
      weight: { value: 45, unit: 'kg' },
    },
    pricing: {
      mrp: 39999,
      sellingPrice: 32999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Drawer Storage', icon: 'archive' },
      { id: 'f2', title: 'Solid Wood Build', icon: 'shield-check' },
      { id: 'f3', title: 'Contemporary Design', icon: 'palette' },
    ],

    variants: [],
    status: {
      rating: 4.4,
      reviewCount: 75,
      tags: ['Storage Solution'],
      isFeatured: false,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2023/12/04/01/27/bedroom-8428516_1280.jpg',
          alt: 'Storage Bed with Drawers',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Buy Storage Bed with Drawers | Urban Home',
      metaDescription:
        'Elegant design meets functionality. This solid wood bed features side drawers for extra storage.',
      keywords: ['storage bed', 'drawer bed', 'bedroom furniture'],
    },
    description:
      'Elegant design meets functionality. This bed features side drawers for extra storage space, crafted from premium solid wood.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 7. King Size Luxury Bed
  {
    id: 'bed-007',
    sku: 'WH-BED-KNG-CFG',
    title: 'King Size Luxury Bed',
    slug: 'king-size-beds',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'sleeping',
      category: 'bed',
      subCategory: 'king-bed',
      subType: 'upholstered-king-bed',
      style: 'Modern',
    },
    specifications: {
      material: 'Solid Teak Wood & Italian Fabric',
      bedSize: 'king',
      headboardHeight: '135 cm',
      storage: 'Hydraulic Storage',
      dimensions: { length: 210, width: 180, height: 55, unit: 'cm' },
      weight: { value: 55, unit: 'kg' },
    },
    pricing: {
      mrp: 45999,
      sellingPrice: 38999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Extra Spacious', icon: 'maximize' },
      { id: 'f2', title: 'Luxury Comfort', icon: 'star' },
      { id: 'f3', title: 'Premium Finish', icon: 'sparkles' },
    ],

    variants: [],
    status: {
      rating: 4.8,
      reviewCount: 120,
      tags: ['Luxury'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2018/09/15/09/05/home-3678956_1280.jpg',
          alt: 'King Size Luxury Bed',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Honey', hex: '#E29141' }],
    },
    seo: {
      metaTitle: 'King Size Luxury Bed | Master Bedroom | Urban Home',
      metaDescription: 'Upgrade to a king size luxury bed for ultimate space and comfort.',
      keywords: ['king size bed', 'luxury bed', 'wooden king bed'],
    },
    description: 'Spacious King Size bed designed for ultimate comfort and a grand master bedroom look.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 8. Queen Size Premium Bed
  {
    id: 'bed-008',
    sku: 'WH-BED-QUN-CFG',
    title: 'Queen Size Premium Bed',
    slug: 'queen-size-beds',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'sleeping',
      category: 'bed',
      subCategory: 'queen-bed',
      subType: 'platform-bed',
      style: 'contemporary',
    },
    specifications: {
      material: 'Engineered Wood',
      finish: 'Matte Oak Finish',
      bedSize: 'queen',
      storage: 'None',
      dimensions: { length: 200, width: 160, height: 50, unit: 'cm' },
      weight: { value: 38, unit: 'kg' },
    },
    pricing: {
      mrp: 34999,
      sellingPrice: 28999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Perfect for Couples', icon: 'users' },
      { id: 'f2', title: 'Sleek Modern Finish', icon: 'palette' },
      { id: 'f3', title: 'Durable Build', icon: 'shield' },
    ],

    variants: [],
    status: {
      rating: 4.5,
      reviewCount: 85,
      tags: ['Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2015/08/29/13/26/bed-913051_1280.jpg',
          alt: 'Queen Size Premium Bed',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Queen Size Premium Bed Online | Urban Home',
      metaDescription: 'Elegant Queen Size bed with a modern finish, perfect for contemporary bedrooms.',
      keywords: ['queen bed', 'premium furniture', 'modern bed'],
    },
    description:
      'Elegant Queen Size bed with a modern finish, crafted for durability and style in mid-sized rooms.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 9. Modern Single Wood Bed
  {
    id: 'bed-009',
    sku: 'WH-BED-SNG-MOD',
    title: 'Modern Single Wood Bed',
    slug: 'modern-single-wood-bed',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'guest-room'],
      mainCategory: 'furniture',
      productType: 'sleeping',
      category: 'bed',
      subCategory: 'single-bed',
      subType: 'low-profile-bed',
      style: 'modern',
    },
    specifications: {
      material: 'Solid Wood',
      finish: 'Natural Teak Finish',
      bedSize: 'single',
      storage: 'None',
      dimensions: { length: 190, width: 90, height: 40, unit: 'cm' },
      weight: { value: 24, unit: 'kg' },
    },
    pricing: {
      mrp: 18999,
      sellingPrice: 15499,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Minimalist Design', icon: 'minus' },
      { id: 'f2', title: 'Space Efficient', icon: 'minimize' },
      { id: 'f3', title: 'Solid Wood Frame', icon: 'shield-check' },
    ],

    variants: [],
    status: {
      rating: 4.2,
      reviewCount: 56,
      tags: ['New Arrival'],
      isFeatured: false,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1661698951100-064e4ae229fd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern Single Wood Bed',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Natural Teak', hex: '#AF6E4D' }],
    },
    seo: {
      metaTitle: 'Buy Modern Single Wood Bed | Urban Home',
      metaDescription: 'Sleek and minimalist single wood bed, perfect for small bedrooms and guest rooms.',
      keywords: ['single bed', 'modern bed', 'wooden furniture'],
    },
    description:
      'A sleek, minimalist single bed designed for modern living. Space-efficient and made from durable solid wood.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },
]
