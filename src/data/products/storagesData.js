export const storageData = [
  // 001. Modern Wooden TV Unit
  {
    id: 'str-001',
    sku: 'WH-STR-TVU-MOD',
    title: 'Modern Wooden TV Unit',
    slug: 'modern-wooden-tv-unit',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Logical function: organizing media/gadgets
      category: 'storage', // Singular standard
      subCategory: 'tv-unit', // Singular standard
      subType: 'entertainment-center',
      style: 'modern',
    },
    specifications: {
      material: 'Engineered Wood',
      mountingType: 'Floor Mounted',
      dimensions: { length: 150, width: 40, height: 45, unit: 'cm' },
      weight: { value: 18, unit: 'kg' },
    },
    pricing: {
      mrp: 18999,
      sellingPrice: 15999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Ample Storage', icon: 'archive' },
      { id: 'f2', title: 'Wire Management', icon: 'zap' },
      { id: 'f3', title: 'Walnut Finish', icon: 'palette' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Standard Walnut',
        price: 15999,
        inventoryCount: 15,
        availability: 'in_stock',
      },
      {
        variantId: 'v2',
        name: 'Large Walnut (180cm)',
        price: 18499,
        inventoryCount: 8,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.5,
      reviewCount: 134,
      tags: ['New', 'Best Seller'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2025/05/19/08/21/real-estate-9608775_1280.jpg',
          alt: 'Modern TV Unit',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut Brown', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Modern Wooden TV Unit | Walnut Finish',
      metaDescription: 'Upgrade your living room with our Modern Wooden TV Unit.',
      keywords: ['wooden tv unit', 'walnut tv stand'],
    },
    description: 'Sleek walnut brown TV unit designed for functionality.',
    createdAt: '2025-01-10T10:00:00Z',
    updatedAt: '2025-01-10T10:00:00Z',
  },

  // 002. Wall Mounted TV Unit
  {
    id: 'str-002',
    sku: 'WH-STR-TVU-WAL',
    title: 'Wall Mounted TV Unit',
    slug: 'wall-mounted-tv-unit',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: organizing devices/media
      category: 'storage', // Singular
      subCategory: 'tv-unit', // Singular
      subType: 'floating-unit',
      style: 'minimal',
    },
    specifications: {
      material: 'Engineered Wood',
      mountingType: 'Wall Mount',
      dimensions: { length: 120, width: 30, height: 25, unit: 'cm' },
      weight: { value: 12, unit: 'kg' },
    },
    pricing: {
      mrp: 16999,
      sellingPrice: 13999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Floor Space Saving', icon: 'maximize' },
      { id: 'f2', title: 'Minimalist Design', icon: 'feather' },
      { id: 'f3', title: 'Easy Wall Mount', icon: 'anchor' },
    ],

    variants: [
      { variantId: 'v1', name: 'Frosty White', price: 13999, inventoryCount: 20, availability: 'in_stock' },
    ],
    status: { rating: 4.3, reviewCount: 88, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg',
          alt: 'Wall Mounted TV Unit',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Wall Mounted TV Unit | Floating Console',
      metaDescription: 'Save floor space with our minimalist unit.',
      keywords: ['wall mounted tv unit'],
    },
    description: 'Minimalist wall-mounted unit for modern bedrooms.',
    createdAt: '2025-01-11T10:00:00Z',
    updatedAt: '2025-01-11T10:00:00Z',
  },

  // 003. Classic Solid Wood TV Unit
  {
    id: 'str-003',
    sku: 'WH-STR-TVU-CLS',
    title: 'Classic Solid Wood TV Unit',
    slug: 'classic-solid-wood-tv-unit',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room'],
      mainCategory: 'furniture',
      productType: 'organization', // Functional purpose: storage and organization
      category: 'storage', // Singular
      subCategory: 'tv-unit', // Singular
      subType: 'media-console',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood (Sheesham)',
      mountingType: 'Floor Mounted',
      dimensions: { length: 160, width: 45, height: 50, unit: 'cm' },
      weight: { value: 32, unit: 'kg' },
    },
    pricing: {
      mrp: 25999,
      sellingPrice: 21999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Pure Sheesham Wood', icon: 'tree' },
      { id: 'f2', title: 'Traditional Carving', icon: 'star' },
      { id: 'f3', title: 'Lifetime Durability', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Honey Finish', price: 21999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 101,
      tags: ['Best Seller'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1661779760365-a44d80161cee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Classic Wood TV Unit',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Honey Wood', hex: '#A0522D' }],
    },
    seo: {
      metaTitle: 'Classic Solid Wood TV Unit | Sheesham Wood',
      metaDescription: 'Timeless solid sheesham wood TV unit.',
      keywords: ['solid wood tv unit'],
    },
    description: 'Timeless solid wood unit for a traditional look.',
    createdAt: '2025-01-12T10:00:00Z',
    updatedAt: '2025-01-12T10:00:00Z',
  },

  // 004. Luxury Marble Finish TV Unit
  {
    id: 'str-004',
    sku: 'WH-STR-TVU-LUX',
    title: 'Luxury Marble Finish TV Unit',
    slug: 'luxury-marble-tv-unit',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room'],
      mainCategory: 'furniture',
      productType: 'organization',
      category: 'storage',
      subCategory: 'tv-unit',
      subType: 'luxury-console',
      style: 'luxury',
    },
    specifications: {
      material: 'Engineered Wood & Natural Marble Top',
      mountingType: 'Floor Mounted',
      dimensions: { length: 200, width: 40, height: 40, unit: 'cm' },
      weight: { value: 45, unit: 'kg' },
    },
    pricing: {
      mrp: 32999,
      sellingPrice: 28999,
      currency: 'INR',
      discount: { value: 12, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Marble Top Surface', icon: 'layers' },
      { id: 'f2', title: 'Gold Accents', icon: 'award' },
      { id: 'f3', title: 'Premium Aesthetics', icon: 'heart' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'White Marble / Gold',
        price: 28999,
        inventoryCount: 3,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.7,
      reviewCount: 142,
      tags: ['New', 'Best Seller'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg',
          alt: 'Luxury TV Unit',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White Marble', hex: '#F2F2F2' }],
    },
    seo: {
      metaTitle: 'Luxury Marble TV Unit | Premium Console',
      metaDescription: 'Sophisticated marble top TV unit with gold accents.',
      keywords: ['marble tv unit'],
    },
    description: 'Premium marble top unit for high-end living spaces.',
    createdAt: '2025-01-13T10:00:00Z',
    updatedAt: '2025-01-13T10:00:00Z',
  },

  // 005. Compact Urban TV Unit
  {
    id: 'str-005',
    sku: 'WH-STR-TVU-URB',
    title: 'Compact Urban TV Unit',
    slug: 'compact-urban-tv-unit',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'living-room'],
      mainCategory: 'furniture',
      productType: 'organization', // Logical function: Organizing small spaces
      category: 'storage', // Singular
      subCategory: 'tv-unit', // Singular
      subType: 'compact-console',
      style: 'urban',
    },
    specifications: {
      material: 'Engineered Wood',
      mountingType: 'Floor Mounted',
      dimensions: { length: 100, width: 35, height: 40, unit: 'cm' },
      weight: { value: 14, unit: 'kg' },
    },
    pricing: {
      mrp: 13999,
      sellingPrice: 11999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Lightweight', icon: 'feather' },
      { id: 'f2', title: 'Multi-Utility Shelves', icon: 'grid' },
      { id: 'f3', title: 'Space Saving', icon: 'minimize' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Natural Wood',
        price: 11999,
        inventoryCount: 0,
        availability: 'out_of_stock',
      },
    ],
    status: { rating: 4.1, reviewCount: 56, tags: [], availability: 'out_of_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1661779632194-6cf32a9b5325?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Compact TV Unit',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Natural Oak', hex: '#DEB887' }],
    },
    seo: {
      metaTitle: 'Compact Urban TV Unit | Small Space Stand',
      metaDescription: 'Functional TV unit perfect for studio apartments.',
      keywords: ['compact tv unit'],
    },
    description: 'A compact and functional TV unit for smaller spaces.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 006. 2-Door Bedroom Wardrobe
  {
    id: 'storage-006',
    sku: 'WH-STR-WRD-2DR',
    title: '2-Door Bedroom Wardrobe',
    slug: '2-door-bedroom-wardrobe',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Closet/Clothing organization
      category: 'storage', // Singular
      subCategory: 'wardrobe', // Singular
      subType: 'hinged-wardrobe',
      style: 'modern',
    },
    specifications: {
      material: 'Engineered Wood with Melamine Finish',
      doorType: 'Hinged',
      dimensions: { length: 80, width: 50, height: 180, unit: 'cm' },
      weight: { value: 45, unit: 'kg' },
    },
    pricing: {
      mrp: 29999,
      sellingPrice: 24999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Hanging Rods', icon: 'align-justify' },
      { id: 'f2', title: 'Adjustable Shelves', icon: 'layers' },
      { id: 'f3', title: 'Lockable Doors', icon: 'lock' },
    ],

    variants: [
      { variantId: 'v1', name: 'Classic White', price: 24999, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: { rating: 4.4, reviewCount: 95, tags: ['New'], availability: 'in_stock', isFeatured: true },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1723257123040-3b4a9f5c0f04?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: '2-Door Wardrobe',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Matte White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: '2-Door Wardrobe | Modern Almirah',
      metaDescription: 'Organize your clothes with our 2-door wardrobe.',
      keywords: ['2 door wardrobe'],
    },
    description: 'Spacious wardrobe with hanging rods and adjustable shelves.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 007. Modern Bookshelf
  {
    id: 'storage-007',
    sku: 'WH-STR-BSK-MOD',
    title: 'Modern Bookshelf',
    slug: 'modern-bookshelf',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Book and document organization
      category: 'storage', // Singular
      subCategory: 'bookshelf', // Singular
      subType: 'ladder-shelf',
      style: 'industrial',
    },
    specifications: {
      material: 'Powder-coated Metal & MDF Wood',
      mountingType: 'Floor Standing',
      dimensions: { length: 60, width: 30, height: 150, unit: 'cm' },
      weight: { value: 12, unit: 'kg' },
    },
    pricing: {
      mrp: 10999,
      sellingPrice: 8999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Open Shelving', icon: 'box' },
      { id: 'f2', title: 'Industrial Frame', icon: 'tool' },
      { id: 'f3', title: 'Sturdy Metal Base', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Finish', price: 8999, inventoryCount: 20, availability: 'in_stock' },
    ],
    status: { rating: 4.5, reviewCount: 67, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1747928272448-49524fcb5cfb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern Bookshelf',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut & Black', hex: '#634439' }],
    },
    seo: {
      metaTitle: 'Modern Bookshelf | Industrial Rack',
      metaDescription: 'Display your collection with our Modern Bookshelf.',
      keywords: ['modern bookshelf'],
    },
    description: 'Multi-tier bookshelf for organizing your favorite reads.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 008. Glass Display Cabinet
  {
    id: 'storage-008',
    sku: 'WH-STR-CAB-GLS',
    title: 'Glass Display Cabinet',
    slug: 'glass-display-cabinet',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'dining-room'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Organized display of items
      category: 'storage', // Singular
      subCategory: 'cabinet', // Singular
      subType: 'curio-cabinet',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood & Tempered Glass',
      shelfCount: 3,
      dimensions: { length: 90, width: 40, height: 120, unit: 'cm' },
      weight: { value: 38, unit: 'kg' },
    },
    pricing: {
      mrp: 21999,
      sellingPrice: 18999,
      currency: 'INR',
      discount: { value: 13, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Tempered Glass', icon: 'shield' },
      { id: 'f2', title: 'Internal Lighting', icon: 'sun' },
      { id: 'f3', title: 'Chrome Accents', icon: 'star' },
    ],

    variants: [
      { variantId: 'v1', name: 'Cherry Wood', price: 18999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: { rating: 4.3, reviewCount: 42, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1739350938315-6f2082cf88bf?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Glass Display Cabinet',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Cherry', hex: '#8B0000' }],
    },
    seo: {
      metaTitle: 'Glass Display Cabinet | Crockery Showcase',
      metaDescription: 'Elegant cabinet for your dining room.',
      keywords: ['glass cabinet'],
    },
    description: 'Elegant glass cabinet for displaying crockery.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 009. Wooden Sideboard Cabinet
  {
    id: 'storage-009',
    sku: 'WH-STR-SDB-WOD',
    title: 'Wooden Sideboard Cabinet',
    slug: 'wooden-sideboard-cabinet',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'living-room'],
      mainCategory: 'furniture',
      productType: 'organization', // Functional Purpose
      category: 'storage', // Singular
      subCategory: 'sideboard', // Singular
      subType: 'buffet-server',
      style: 'rustic',
    },
    specifications: {
      material: 'Solid Acacia Wood',
      finish: 'Distressed Natural',
      dimensions: { length: 120, width: 45, height: 85, unit: 'cm' },
      weight: { value: 32, unit: 'kg' },
    },
    pricing: {
      mrp: 19499,
      sellingPrice: 16499,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Solid Wood Build', icon: 'anchor' },
      { id: 'f2', title: 'Wide Storage', icon: 'maximize' },
      { id: 'f3', title: 'Rustic Finish', icon: 'palette' },
    ],

    variants: [
      { variantId: 'v1', name: 'Rustic Teak', price: 16499, inventoryCount: 8, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 78,
      tags: ['Best Seller'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1762280237740-5a9292e527ab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Wooden Sideboard',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak', hex: '#A0522D' }],
    },
    seo: {
      metaTitle: 'Wooden Sideboard Cabinet | Rustic Storage',
      metaDescription: 'Solid wood sideboard for dining room storage.',
      keywords: ['wooden sideboard'],
    },
    description: 'Versatile sideboard crafted from solid wood.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 010. 3-Drawer Bedside Table
  {
    id: 'storage-010',
    sku: 'WH-STR-BST-3DR',
    title: '3-Drawer Side Table',
    slug: '3-drawer-side-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Nightstand/Personal item organization
      category: 'storage', // Singular
      subCategory: 'side-table', // Singular
      subType: 'nightstand',
      style: 'minimal',
    },
    specifications: {
      material: 'Engineered Wood',
      drawerCount: 3,
      dimensions: { length: 40, width: 35, height: 55, unit: 'cm' },
      weight: { value: 8, unit: 'kg' },
    },
    pricing: {
      mrp: 6499,
      sellingPrice: 5499,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Compact Design', icon: 'minimize' },
      { id: 'f2', title: 'Smooth Gliding Drawers', icon: 'mouse-pointer' },
      { id: 'f3', title: 'Nightstand Top', icon: 'monitor' },
    ],

    variants: [
      { variantId: 'v1', name: 'Oak Finish', price: 5499, inventoryCount: 25, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 31, tags: ['New'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Bedside Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Oak', hex: '#DEB887' }],
    },
    seo: {
      metaTitle: '3-Drawer Bedside Table | Nightstand',
      metaDescription: 'Keep your essentials handy with our bedside table.',
      keywords: ['bedside table'],
    },
    description: 'Compact bedside storage with three drawers.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
  /* ================= SHOE RACKS (011 - 015) ================= */

  // 011. Modern Wooden Shoe Rack
  {
    id: 'storage-011',
    sku: 'WH-STR-SHR-MOD',
    title: 'Modern Wooden Shoe Rack',
    slug: 'modern-wooden-shoe-rack',
    brand: 'Urban Home',
    taxonomy: {
      room: ['hallway', 'entryway'], // Optimized rooms
      mainCategory: 'furniture',
      productType: 'organization', // Function: Footwear organization
      category: 'storage', // Singular
      subCategory: 'shoe-rack', // Singular
      subType: 'closed-cabinet',
      style: 'modern',
    },
    specifications: {
      material: 'Engineered Wood',
      capacity: '12-15 Pairs',
      dimensions: { length: 80, width: 35, height: 90, unit: 'cm' },
      weight: { value: 15, unit: 'kg' },
    },
    pricing: {
      mrp: 8499,
      sellingPrice: 6999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Multi-Tier Storage', icon: 'layers' },
      { id: 'f2', title: 'Sleek Design', icon: 'sidebar' },
      { id: 'f3', title: 'Anti-Scratch Base', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Brown', price: 6999, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 59, tags: ['New'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1674815329032-421d305ad589?q=80&w=819&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern Shoe Rack',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut Brown', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Modern Wooden Shoe Rack | Entryway Organizer',
      metaDescription: 'Keep your entryway tidy with our Modern Wooden Shoe Rack.',
      keywords: ['wooden shoe rack', 'entryway organizer'],
    },
    description: 'A sleek wooden shoe rack with multiple tiers for organized entryway.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 012. Compact Shoe Rack
  {
    id: 'storage-012',
    sku: 'WH-STR-SHR-COM',
    title: 'Compact Shoe Rack',
    slug: 'compact-shoe-rack',
    brand: 'Urban Home',
    taxonomy: {
      room: ['entryway', 'hallway'], // Targeted rooms for footwear
      mainCategory: 'furniture',
      productType: 'organization', // Function: Small space organization
      category: 'storage', // Singular
      subCategory: 'shoe-rack', // Singular
      subType: 'tiered-shelf',
      style: 'urban',
    },
    specifications: {
      material: 'Engineered Wood',
      capacity: '6-8 Pairs',
      dimensions: { length: 50, width: 30, height: 80, unit: 'cm' },
      weight: { value: 9, unit: 'kg' },
    },
    pricing: {
      mrp: 5999,
      sellingPrice: 4999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Space Saving', icon: 'minimize-2' },
      { id: 'f2', title: 'Lightweight', icon: 'feather' },
      { id: 'f3', title: 'Quick Assembly', icon: 'zap' },
    ],

    variants: [{ variantId: 'v1', name: 'Oak', price: 4999, inventoryCount: 25, availability: 'in_stock' }],
    status: { rating: 4.0, reviewCount: 41, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1672976596533-695f79868216?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Compact Shoe Rack',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Oak', hex: '#DEB887' }],
    },
    seo: {
      metaTitle: 'Compact Shoe Rack | Oak Organizer',
      metaDescription: 'Ideal for small apartments, our Compact Shoe Rack.',
      keywords: ['compact shoe rack'],
    },
    description: 'Small footprint, big utility. Fits perfectly in tight corners.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 013. Classic Closed Shoe Rack
  {
    id: 'storage-013',
    sku: 'WH-STR-SHR-CLS',
    title: 'Classic Closed Shoe Rack',
    slug: 'classic-closed-shoe-rack',
    brand: 'Urban Home',
    taxonomy: {
      room: ['entryway', 'hallway'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Concealed organization
      category: 'storage', // Singular
      subCategory: 'shoe-rack', // Singular
      subType: 'closed-cabinet',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood (Sheesham)',
      capacity: '18-20 Pairs',
      dimensions: { length: 90, width: 40, height: 100, unit: 'cm' },
      weight: { value: 28, unit: 'kg' },
    },
    pricing: {
      mrp: 10499,
      sellingPrice: 8999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Dust Protection', icon: 'shield' },
      { id: 'f2', title: 'Premium Solid Wood', icon: 'award' },
      { id: 'f3', title: 'Ventilation Slits', icon: 'wind' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Finish', price: 8999, inventoryCount: 8, availability: 'in_stock' },
    ],
    status: {
      rating: 4.5,
      reviewCount: 78,
      tags: ['Best Seller'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1559766084-38c917374a9a?q=80&w=1194&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Closed Shoe Rack',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak Finish', hex: '#964B00' }],
    },
    seo: {
      metaTitle: 'Classic Closed Shoe Rack | Solid Wood',
      metaDescription: 'Protect footwear with our classic teak shoe cabinet.',
      keywords: ['closed shoe rack'],
    },
    description: 'Traditional solid wood shoe cabinet with doors for dust-free storage.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 014. Minimal Open Shoe Rack
  {
    id: 'storage-014',
    sku: 'WH-STR-SHR-MIN',
    title: 'Minimal Open Shoe Rack',
    slug: 'minimal-open-shoe-rack',
    brand: 'Urban Home',
    taxonomy: {
      room: ['hallway', 'entryway', 'office'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Accessible footwear organization
      category: 'storage', // Singular
      subCategory: 'shoe-rack', // Singular
      subType: 'open-shelf',
      style: 'minimal',
    },
    specifications: {
      material: 'Engineered Wood',
      capacity: '8-10 Pairs',
      dimensions: { length: 70, width: 30, height: 60, unit: 'cm' },
      weight: { value: 7, unit: 'kg' },
    },
    pricing: {
      mrp: 5299,
      sellingPrice: 4499,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Easy Access', icon: 'unlock' },
      { id: 'f2', title: 'Breathable Design', icon: 'wind' },
      { id: 'f3', title: 'Minimal Aesthetic', icon: 'feather' },
    ],

    variants: [{ variantId: 'v1', name: 'White', price: 4499, inventoryCount: 30, availability: 'in_stock' }],
    status: { rating: 4.1, reviewCount: 36, tags: ['New'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2015/12/19/06/24/shoe-1099446_1280.jpg',
          alt: 'Open Shoe Rack',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Minimal Open Shoe Rack | White Stand',
      metaDescription: 'Simple open shoe rack for daily use.',
      keywords: ['open shoe rack'],
    },
    description: 'Clean, open-shelf design for easy access to daily footwear.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 015. Luxury Shoe Storage Cabinet
  {
    id: 'storage-015',
    sku: 'WH-STR-SHR-LUX',
    title: 'Luxury Shoe Storage Cabinet',
    slug: 'luxury-shoe-storage-cabinet',
    brand: 'Urban Home',
    taxonomy: {
      room: ['hallway', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'organization',
      category: 'storage',
      subCategory: 'shoe-rack',
      subType: 'luxury-cabinet',
      style: 'luxury',
    },
    specifications: {
      material: 'Premium Engineered Wood & Gold-finish Metal',
      capacity: '20-24 Pairs',
      dimensions: { length: 110, width: 40, height: 110, unit: 'cm' },
      weight: { value: 35, unit: 'kg' },
    },
    pricing: {
      mrp: 13999,
      sellingPrice: 11999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Metal Accents', icon: 'anchor' },
      { id: 'f2', title: 'Soft Close Doors', icon: 'activity' },
      { id: 'f3', title: 'High Gloss Finish', icon: 'star' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Premium Black',
        price: 11999,
        inventoryCount: 0,
        availability: 'out_of_stock',
      },
    ],
    status: {
      rating: 4.6,
      reviewCount: 95,
      tags: ['Best Seller'],
      availability: 'out_of_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1618236444721-4a8dba415c15?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Shoe Cabinet',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Black', hex: '#000000' }],
    },
    seo: {
      metaTitle: 'Luxury Shoe Cabinet | Black & Gold',
      metaDescription: 'Elevate your hallway with our Luxury Shoe Cabinet.',
      keywords: ['luxury shoe storage'],
    },
    description: 'High-end storage cabinet with metal accents and soft-close doors.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  /* ================= SHELVES (016 - 020) ================= */

  // 016. Modern Wall Mounted Shelf
  {
    id: 'storage-016',
    sku: 'WH-STR-SHL-WAL',
    title: 'Modern Wall Mounted Shelf',
    slug: 'modern-wall-mounted-shelf',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'office'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Vertical display organization
      category: 'storage', // Singular
      subCategory: 'wall-shelf', // Singular & Lowercase
      subType: 'floating-shelf',
      style: 'modern',
    },
    specifications: {
      material: 'Engineered Wood',
      mountingType: 'Wall Mounted (Floating)',
      dimensions: { length: 60, width: 20, height: 15, unit: 'cm' },
      weight: { value: 3.5, unit: 'kg' },
    },
    pricing: {
      mrp: 4999,
      sellingPrice: 3999,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Space Saving', icon: 'minimize' },
      { id: 'f2', title: 'Easy Installation', icon: 'tool' },
      { id: 'f3', title: 'Floating Design', icon: 'wind' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Brown', price: 3999, inventoryCount: 45, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 48, tags: ['New'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2017/08/22/06/02/wall-shelf-2667890_1280.jpg',
          alt: 'Wall Shelf',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut Brown', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Modern Wall Mounted Shelf | Floating Display',
      metaDescription: 'Maximize wall space with our minimalist shelf.',
      keywords: ['wall shelf'],
    },
    description: 'Minimalist wall shelf for books and decor, floating look.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 017. Classic Wooden Bookshelf
  {
    id: 'storage-017',
    sku: 'WH-STR-SHL-BSK',
    title: 'Classic Wooden Bookshelf',
    slug: 'classic-wooden-bookshelf',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Book/Media organization
      category: 'storage', // Singular
      subCategory: 'bookshelf', // Singular
      subType: 'open-bookshelf',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood (Teak Finish)',
      shelfCount: 4,
      dimensions: { length: 90, width: 30, height: 120, unit: 'cm' },
      weight: { value: 22, unit: 'kg' },
    },
    pricing: {
      mrp: 10999,
      sellingPrice: 8999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Reinforced Structure', icon: 'anchor' },
      { id: 'f2', title: 'High Capacity', icon: 'package' },
      { id: 'f3', title: 'Solid Wood Tiers', icon: 'layers' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Finish', price: 8999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 97,
      tags: ['Best Seller'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1720884611740-f5e807d7c77e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Wooden Bookshelf',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak Finish', hex: '#964B00' }],
    },
    seo: {
      metaTitle: 'Classic Wooden Bookshelf | Library Rack',
      metaDescription: 'Store your books in style with our classic bookshelf.',
      keywords: ['wooden bookshelf'],
    },
    description: 'Elegant solid wood bookshelf with rich teak finish.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 018. Minimal Open Display Shelf
  {
    id: 'storage-018',
    sku: 'WH-STR-SHL-MIN',
    title: 'Minimal Open Display Shelf',
    slug: 'minimal-open-display-shelf',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'office'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Multi-purpose organization
      category: 'storage', // Singular
      subCategory: 'bookshelf', // Singular
      subType: 'display-unit',
      style: 'minimal',
    },
    specifications: {
      material: 'Engineered Wood',
      finish: 'Matte Finish',
      dimensions: { length: 70, width: 25, height: 80, unit: 'cm' },
      weight: { value: 12, unit: 'kg' },
    },
    pricing: {
      mrp: 6499,
      sellingPrice: 5499,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Open View', icon: 'eye' },
      { id: 'f2', title: 'Scandi Style', icon: 'heart' },
      { id: 'f3', title: 'Lightweight', icon: 'feather' },
    ],

    variants: [
      { variantId: 'v1', name: 'Arctic White', price: 5499, inventoryCount: 32, availability: 'in_stock' },
    ],
    status: { rating: 4.1, reviewCount: 39, tags: ['New'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1586210836362-adc523490e42?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Open Display Shelf',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Minimal Open Display Shelf | White Rack',
      metaDescription: 'Clean and airy white open display shelf.',
      keywords: ['open display shelf'],
    },
    description: 'Ideal for showcasing curios, adds airy feel to spaces.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 019. Industrial Metal Wooden Shelf
  {
    id: 'storage-019',
    sku: 'WH-STR-SHL-IND',
    title: 'Industrial Metal Wooden Shelf',
    slug: 'industrial-metal-wooden-shelf',
    brand: 'Urban Home',
    taxonomy: {
      room: ['kitchen', 'office', 'dining-room'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Utility organization
      category: 'storage', // Singular
      subCategory: 'utility-shelf', // More versatile than 'dish-shelves'
      subType: 'open-rack',
      style: 'industrial',
    },
    specifications: {
      material: 'Powder-coated Iron & Solid Wood',
      mountingType: 'Floor Standing',
      dimensions: { length: 100, width: 35, height: 110, unit: 'cm' },
      weight: { value: 18, unit: 'kg' },
    },
    pricing: {
      mrp: 8999,
      sellingPrice: 7499,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Heavy Duty', icon: 'trending-up' },
      { id: 'f2', title: 'Water Resistant', icon: 'droplet' },
      { id: 'f3', title: 'Matte Metal Finish', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Rustic Brown', price: 7499, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: { rating: 4.4, reviewCount: 62, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2016/03/30/10/56/dish-shelf-1290426_1280.jpg',
          alt: 'Industrial Shelf',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Black', hex: '#000000' }],
    },
    seo: {
      metaTitle: 'Industrial Metal Wooden Shelf | Storage Rack',
      metaDescription: 'Rugged black metal with rustic solid wood.',
      keywords: ['industrial shelf'],
    },
    description: 'Rugged design, highly durable for home or office.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 020. Luxury Glass Display Shelf
  {
    id: 'storage-020',
    sku: 'WH-STR-SHL-LUX',
    title: 'Luxury Glass Display Shelf',
    slug: 'luxury-glass-display-shelf',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'dining-room'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Organized luxury display
      category: 'storage', // Singular
      subCategory: 'display-shelf', // Singular & more descriptive
      subType: 'curio-shelf',
      style: 'luxury',
    },
    specifications: {
      material: 'Tempered Glass & Premium Solid Wood',
      shelfCount: 5,
      dimensions: { length: 80, width: 40, height: 150, unit: 'cm' },
      weight: { value: 30, unit: 'kg' },
    },
    pricing: {
      mrp: 14999,
      sellingPrice: 12999,
      currency: 'INR',
      discount: { value: 13, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Tempered Glass', icon: 'shield' },
      { id: 'f2', title: 'Sophisticated Finish', icon: 'award' },
      { id: 'f3', title: 'Polished Edges', icon: 'star' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Premium Onyx',
        price: 12999,
        inventoryCount: 0,
        availability: 'out_of_stock',
      },
    ],
    status: {
      rating: 4.7,
      reviewCount: 84,
      tags: ['Best Seller'],
      availability: 'out_of_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1762875981629-c50bbeba5ef9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Glass Display Shelf',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Black', hex: '#000000' }],
    },
    seo: {
      metaTitle: 'Luxury Glass Display Shelf | Premium Showcase',
      metaDescription: 'Elevate your living room with our Luxury Glass Shelf.',
      keywords: ['luxury glass shelf'],
    },
    description: 'Premium glass and wood shelf for sophisticated displays.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
  /* ================= OFFICE STORAGE (021 - 025) ================= */

  // 021. Office Bookshelf
  {
    id: 'storage-021',
    sku: 'WH-STR-OFF-BSK',
    title: 'Office Bookshelf',
    slug: 'office-bookshelf',
    brand: 'Urban Home',
    taxonomy: {
      room: ['office', 'library'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Professional document organization
      category: 'storage', // Singular
      subCategory: 'bookshelf', // Singular
      subType: 'office-storage',
      style: 'modern', // Moved from specs
    },
    specifications: {
      material: 'High-Density Engineered Wood',
      shelfCount: 5,
      dimensions: { length: 90, width: 30, height: 180, unit: 'cm' },
      weight: { value: 32, unit: 'kg' },
    },
    pricing: {
      mrp: 17999,
      sellingPrice: 14999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Heavy Duty Shelves', icon: 'book-open' },
      { id: 'f2', title: 'Walnut Finish', icon: 'layers' },
      { id: 'f3', title: 'Anti-Tip Kit Included', icon: 'anchor' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Brown', price: 14999, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: { rating: 4.3, reviewCount: 88, tags: ['New'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1661947876256-b44c1bfc04d2?q=80&w=919&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Office Bookshelf',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Professional Office Bookshelf | Walnut Finish',
      metaDescription: 'Organize your professional library with our heavy-duty Office Bookshelf.',
      keywords: ['office bookshelf', 'professional book rack'],
    },
    description: 'A professional walnut bookshelf designed for an executive office look.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 022. Filing Cabinet
  {
    id: 'storage-022',
    sku: 'WH-STR-OFF-FIL',
    title: 'Filing Cabinet',
    slug: 'filing-cabinet',
    brand: 'Urban Home',
    taxonomy: {
      room: ['office'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Document organization
      category: 'storage', // Singular
      subCategory: 'filing-cabinet', // Singular
      subType: 'pedestal-cabinet',
      style: 'industrial', // Moved from specs
    },
    specifications: {
      material: 'Cold-rolled Steel',
      drawerCount: 4,
      lockingMechanism: true,
      dimensions: { length: 45, width: 62, height: 132, unit: 'cm' },
      weight: { value: 38, unit: 'kg' },
    },
    pricing: {
      mrp: 14999,
      sellingPrice: 11999,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Secure Locking', icon: 'lock' },
      { id: 'f2', title: 'Metal Frame', icon: 'shield' },
      { id: 'f3', title: 'Full Extension Drawers', icon: 'maximize' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Industrial Grey',
        price: 11999,
        inventoryCount: 10,
        availability: 'in_stock',
      },
    ],
    status: { rating: 4.2, reviewCount: 71, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1674165228942-058623c6d827?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Metal Filing Cabinet',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Grey', hex: '#808080' }],
    },
    seo: {
      metaTitle: 'Metal Filing Cabinet | Secure Document Storage',
      metaDescription: 'Keep sensitive documents safe with our Industrial Filing Cabinet.',
      keywords: ['filing cabinet', 'metal office storage'],
    },
    description: 'Heavy-duty industrial metal filing cabinet with secure locking.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 023. Drawer Storage Unit
  {
    id: 'storage-023',
    sku: 'WH-STR-OFF-DRW',
    title: 'Drawer Storage Unit',
    slug: 'drawer-storage-unit',
    brand: 'Urban Home',
    taxonomy: {
      room: ['office', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Stationery and personal item organization
      category: 'storage', // Singular
      subCategory: 'drawer-unit', // Singular
      subType: 'mobile-pedestal',
      style: 'minimal', // Moved from specs
    },
    specifications: {
      material: 'Engineered Wood',
      drawerCount: 3,
      features: ['Under-desk Fit', 'Smooth Gliders'],
      dimensions: { length: 40, width: 45, height: 60, unit: 'cm' },
      weight: { value: 14, unit: 'kg' },
    },
    pricing: {
      mrp: 11999,
      sellingPrice: 9999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Compact Fit', icon: 'minimize' },
      { id: 'f2', title: 'Smooth Glides', icon: 'mouse-pointer' },
      { id: 'f3', title: 'Caster Wheels', icon: 'move' },
    ],

    variants: [
      { variantId: 'v1', name: 'Pure White', price: 9999, inventoryCount: 18, availability: 'in_stock' },
    ],
    status: { rating: 4.1, reviewCount: 64, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2019/11/07/13/34/side-table-4608904_1280.png',
          alt: 'Drawer Unit',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'White Drawer Unit | Under Desk Cabinet',
      metaDescription: 'Versatile 3-drawer white storage unit for office or bedroom.',
      keywords: ['drawer storage', 'under desk unit'],
    },
    description: 'Versatile unit that fits under desks or as a bedside table.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 024. Wall Mounted Office Shelf
  {
    id: 'storage-024',
    sku: 'WH-STR-OFF-WAL',
    title: 'Wall Mounted Office Shelf',
    slug: 'wall-mounted-office-shelf',
    brand: 'Urban Home',
    taxonomy: {
      room: ['office', 'living-room'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Overhead document/decor organization
      category: 'storage', // Singular
      subCategory: 'wall-shelf', // Singular
      subType: 'office-organizer',
      style: 'modern', // Moved from specs
    },
    specifications: {
      material: 'High-Grade Engineered Wood',
      mountingType: 'Wall Mounted (Concealed Brackets)',
      dimensions: { length: 100, width: 20, height: 25, unit: 'cm' },
      weight: { value: 6, unit: 'kg' },
    },
    pricing: {
      mrp: 8499,
      sellingPrice: 6999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Sleek Mounting', icon: 'plus' },
      { id: 'f2', title: 'Stationery Organizer', icon: 'edit' },
      { id: 'f3', title: 'Natural Oak Texture', icon: 'feather' },
    ],

    variants: [
      { variantId: 'v1', name: 'Natural Oak', price: 6999, inventoryCount: 20, availability: 'in_stock' },
    ],
    status: { rating: 4.4, reviewCount: 79, tags: ['New'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2018/07/27/17/46/storage-3566495_1280.jpg',
          alt: 'Wall Office Shelf',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Oak', hex: '#DEB887' }],
    },
    seo: {
      metaTitle: 'Wall Office Shelf | Oak Stationery Rack',
      metaDescription: 'Clear your desk with our 100cm Wall Mounted Office Shelf.',
      keywords: ['wall office shelf', 'stationery rack'],
    },
    description: 'Minimalist wall-mounted shelf to keep stationery within reach.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 025. Office Credenza Cabinet
  {
    id: 'storage-025',
    sku: 'WH-STR-OFF-CRE',
    title: 'Office Credenza Cabinet',
    slug: 'office-credenza-cabinet',
    brand: 'Urban Home',
    taxonomy: {
      room: ['office', 'conference-room'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Executive storage and organization
      category: 'storage', // Singular
      subCategory: 'credenza', // Singular
      subType: 'side-cabinet',
      style: 'executive', // Moved from specs
    },
    specifications: {
      material: 'Premium Engineered Wood with Veneer Finish',
      doorCount: 3,
      shelfType: 'Adjustable Shelves',
      dimensions: { length: 150, width: 45, height: 75, unit: 'cm' },
      weight: { value: 48, unit: 'kg' },
    },
    pricing: {
      mrp: 29999,
      sellingPrice: 24999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Executive Storage', icon: 'briefcase' },
      { id: 'f2', title: 'Premium Hardware', icon: 'award' },
      { id: 'f3', title: 'Wire Management Ports', icon: 'zap' },
    ],

    variants: [
      { variantId: 'v1', name: 'Dark Walnut', price: 24999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      rating: 4.5,
      reviewCount: 128,
      tags: ['Best Seller'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1604062528260-81f48c656cd7?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Credenza Cabinet',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Dark Walnut', hex: '#3E2723' }],
    },
    seo: {
      metaTitle: 'Executive Office Credenza | Dark Walnut',
      metaDescription: 'Premium Dark Walnut Credenza for large offices.',
      keywords: ['office credenza', 'executive storage'],
    },
    description: 'Combines premium aesthetics with heavy storage capacity.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  /* ================= BEDROOM WARDROBES (026 - 029) ================= */

  // 026. Sliding Door Wardrobe
  {
    id: 'storage-026',
    sku: 'WH-WRD-SLD-WHT',
    title: 'Sliding Door Wardrobe',
    slug: 'sliding-door-wardrobe',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Personal attire organization
      category: 'storage', // Singular
      subCategory: 'wardrobe', // Singular
      subType: 'sliding-closet',
      style: 'modern', // Moved from specs
    },
    specifications: {
      material: 'High-Grade Engineered Wood',
      numberOfDoors: 2,
      doorType: 'Sliding',
      internalFeatures: ['Hanging Rail', 'Shelves', 'Internal Drawer'],
      dimensions: { length: 120, width: 60, height: 210, unit: 'cm' },
      weight: { value: 85, unit: 'kg' },
    },
    pricing: {
      mrp: 29999,
      sellingPrice: 24999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Space Saving Slider', icon: 'maximize' },
      { id: 'f2', title: 'Premium Finish', icon: 'star' },
      { id: 'f3', title: 'Internal Hanging Rail', icon: 'minus' },
    ],

    variants: [
      { variantId: 'v1', name: 'Frost White', price: 24999, inventoryCount: 8, availability: 'in_stock' },
    ],
    status: {
      rating: 4.5,
      reviewCount: 92,
      tags: ['New', 'Best Seller'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2021/02/01/09/55/wardrobe-5969982_1280.jpg',
          alt: 'Sliding Wardrobe',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Sliding Door Wardrobe | White Almirah',
      metaDescription: 'Modern space-saving sliding wardrobe for apartments.',
      keywords: ['sliding wardrobe', 'white almirah'],
    },
    description: 'Perfect for contemporary bedrooms where floor space is premium.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 027. Hinged Door Wardrobe
  {
    id: 'storage-027',
    sku: 'WH-WRD-HNG-TEK',
    title: 'Hinged Door Wardrobe',
    slug: 'hinged-door-wardrobe',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Traditional attire organization
      category: 'storage', // Singular
      subCategory: 'wardrobe', // Singular
      subType: 'hinged-closet',
      style: 'classic', // Moved from specs
    },
    specifications: {
      material: 'Solid Wood (Sheesham/Teak)',
      numberOfDoors: 2,
      doorType: 'Hinged',
      finish: 'Honey Oak / Teak Finish',
      dimensions: { length: 90, width: 55, height: 195, unit: 'cm' },
      weight: { value: 95, unit: 'kg' },
    },
    pricing: {
      mrp: 24999,
      sellingPrice: 19999,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Classic Hinges', icon: 'unlock' },
      { id: 'f2', title: 'Durable Build', icon: 'shield' },
      { id: 'f3', title: 'Full Access Opening', icon: 'maximize-2' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Finish', price: 19999, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 78, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1722349674028-a148f4364e43?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Hinged Wardrobe',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak', hex: '#87441F' }],
    },
    seo: {
      metaTitle: 'Classic Hinged Wardrobe | Solid Wood Teak',
      metaDescription: 'Timeless 2-door hinged wardrobe crafted from solid wood.',
      keywords: ['hinged wardrobe', 'solid wood almirah'],
    },
    description: 'Elegant teak finish that lasts for years, offering full access.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 028. 3-Door Sliding Wardrobe
  {
    id: 'storage-028',
    sku: 'WH-WRD-3SL-BRN',
    title: '3-Door Sliding Wardrobe',
    slug: '3-door-sliding-wardrobe',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Large-scale attire organization
      category: 'storage', // Singular
      subCategory: 'wardrobe', // Singular
      subType: 'sliding-closet',
      style: 'contemporary', // Moved from specs
    },
    specifications: {
      material: 'Solid Wood & Premium Hardware',
      numberOfDoors: 3,
      doorType: 'Sliding',
      internalFeatures: ['Twin Hanging Rails', 'Integrated Drawers', 'Vault Compartment'],
      dimensions: { length: 180, width: 60, height: 210, unit: 'cm' },
      weight: { value: 140, unit: 'kg' },
    },
    pricing: {
      mrp: 34999,
      sellingPrice: 29999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Triple Storage', icon: 'columns' },
      { id: 'f2', title: 'Quiet Sliders', icon: 'volume-x' },
      { id: 'f3', title: 'Extra Depth', icon: 'arrow-right' },
    ],

    variants: [
      { variantId: 'v1', name: 'Deep Brown', price: 29999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 115,
      tags: ['New', 'Best Seller'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1562008088-e8fe0711f7e8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: '3-Door Wardrobe',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Brown', hex: '#A52A2A' }],
    },
    seo: {
      metaTitle: '3-Door Sliding Wardrobe | Master Bedroom',
      metaDescription: 'Maximize your storage with our 180cm 3-door Sliding Wardrobe.',
      keywords: ['3 door sliding wardrobe', 'large almirah'],
    },
    description: 'Extra large wardrobe for maximum storage with quiet sliders.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 029. Classic Hinged Wardrobe
  {
    id: 'storage-029',
    sku: 'WH-WRD-CLH-WAL',
    title: 'Classic Hinged Wardrobe',
    slug: 'classic-hinged-wardrobe',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Structured closet organization
      category: 'storage', // Singular
      subCategory: 'wardrobe', // Singular
      subType: 'hinged-closet',
      style: 'classic', // Moved from specs
    },
    specifications: {
      material: 'Solid Wood (Sheesham)',
      numberOfDoors: 2,
      doorType: 'Hinged',
      finish: 'Walnut Finish',
      dimensions: { length: 100, width: 55, height: 200, unit: 'cm' },
      weight: { value: 90, unit: 'kg' },
    },
    pricing: {
      mrp: 25999,
      sellingPrice: 21999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Timeless Style', icon: 'clock' },
      { id: 'f2', title: 'Sturdy Frame', icon: 'box' },
      { id: 'f3', title: 'Solid Walnut Vibe', icon: 'layers' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Finish', price: 21999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: { rating: 4.3, reviewCount: 83, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1676823571655-3f91e29e226f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Classic Walnut Wardrobe',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Classic Walnut Wardrobe | 2-Door Storage',
      metaDescription: 'Sturdy solid wood wardrobe in a timeless walnut finish.',
      keywords: ['walnut wardrobe', 'classic almirah'],
    },
    description: 'Solid wood hinged wardrobe with optimized vertical storage.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 030. Premium Sliding Wardrobe
  {
    id: 'storage-030',
    sku: 'WH-WRD-PSL-WHT',
    title: 'Premium Sliding Wardrobe',
    slug: 'premium-sliding-wardrobe',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: High-capacity attire organization
      category: 'storage', // Singular
      subCategory: 'wardrobe', // Singular
      subType: 'sliding-closet',
      style: 'luxury', // Moved from specs
    },
    specifications: {
      material: 'High-Density Engineered Wood with High-Gloss Finish',
      numberOfDoors: 2,
      doorType: 'Sliding',
      features: ['Soft-close Mechanism', 'Full-length Mirror Panel'],
      dimensions: { length: 150, width: 65, height: 220, unit: 'cm' },
      weight: { value: 110, unit: 'kg' },
    },
    pricing: {
      mrp: 39999,
      sellingPrice: 34999,
      currency: 'INR',
      discount: { value: 13, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'High-Gloss Finish', icon: 'sun' },
      { id: 'f2', title: 'Soft Close', icon: 'arrow-down-circle' },
      { id: 'f3', title: 'Integrated Mirror', icon: 'image' },
    ],

    variants: [
      { variantId: 'v1', name: 'Luxe White', price: 34999, inventoryCount: 3, availability: 'in_stock' },
    ],
    status: {
      rating: 4.7,
      reviewCount: 101,
      tags: ['New', 'Best Seller'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1722942432154-067a239bc58d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Premium Wardrobe',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Luxury High-Gloss Sliding Wardrobe | Premium Luxe Almirah',
      metaDescription:
        'Experience luxury with our High-Gloss Premium Sliding Wardrobe. Featuring soft-close doors and a massive 220cm height for ultimate bedroom storage.',
      keywords: [
        'luxury sliding wardrobe',
        'high gloss almirah',
        'premium bedroom furniture',
        'soft close wardrobe',
      ],
    },
    description:
      'Luxury sliding wardrobe with a stunning high-gloss finish and premium soft-close hardware. Designed for those who seek elegance and functionality.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
  // ======================== Bedroom Storage ================================= //
  // 031. Bedside Table
  {
    id: 'storage-031',
    sku: 'WH-STG-BST-WAL',
    title: 'Bedside Table',
    slug: 'bedside-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Small-item bedroom organization
      category: 'storage', // Singular
      subCategory: 'bedside-table', // Singular
      subType: 'nightstand',
      style: 'modern', // Moved from specs
    },
    specifications: {
      material: 'Solid Wood (Mango Wood)',
      numberOfDrawers: 2,
      finish: 'Walnut Finish',
      dimensions: { length: 45, width: 40, height: 50, unit: 'cm' },
      weight: { value: 8, unit: 'kg' },
    },
    pricing: {
      mrp: 5999,
      sellingPrice: 4999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Dual Drawers', icon: 'columns' },
      { id: 'f2', title: 'Compact Top', icon: 'square' },
      { id: 'f3', title: 'Solid Wood Legs', icon: 'anchor' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Finish', price: 4999, inventoryCount: 20, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 54, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2020/04/18/08/07/furniture-5058155_1280.jpg',
          alt: 'Bedside Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Modern Bedside Table | Walnut Nightstand with 2 Drawers',
      metaDescription:
        'Complete your bedroom with our Walnut Bedside Table. Featuring dual drawers for nighttime essentials and a compact modern design.',
      keywords: ['bedside table', 'nightstand', 'bedroom storage', 'walnut side table'],
    },
    description:
      'Elegant walnut finish bedside table. Features dual drawers for your nighttime essentials and a sturdy solid wood construction.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 032. Chest of Drawers
  {
    id: 'storage-032',
    sku: 'WH-STG-CHST-TEK',
    title: 'Chest of Drawers',
    slug: 'chest-of-drawers',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'guest-room'],
      mainCategory: 'furniture',
      productType: 'organization',
      category: 'storage',
      subCategory: 'drawer-unit',
      subType: 'tallboy',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood (Teak)',
      numberOfDrawers: 4,
      drawerType: 'Full-extension Glides',
      dimensions: { length: 80, width: 45, height: 90, unit: 'cm' },
      weight: { value: 25, unit: 'kg' },
    },
    pricing: {
      mrp: 11999,
      sellingPrice: 9999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: '4-Tier Storage', icon: 'layers' },
      { id: 'f2', title: 'Anti-Tip Kit', icon: 'shield' },
      { id: 'f3', title: 'Ergonomic Handles', icon: 'hand' },
    ],

    variants: [
      { variantId: 'v1', name: 'Classic Teak', price: 9999, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: { rating: 4.4, reviewCount: 62, tags: ['New'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1683138626515-78da206c11d3?q=80&w=891&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Chest of Drawers',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak', hex: '#87441F' }],
    },
    seo: {
      metaTitle: 'Classic Teak Chest of Drawers | 4-Drawer Storage Unit',
      metaDescription:
        'Organize your clothing with our 4-tier Chest of Drawers. Crafted from solid wood with a classic teak finish.',
      keywords: ['chest of drawers', 'bedroom dresser', 'teak storage unit', '4 drawer chest'],
    },
    description:
      'Classic teak wood chest of drawers with four spacious compartments. Ideal for organizing folded clothes and linens.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 033. Dresser Cabinet
  {
    id: 'storage-033',
    sku: 'WH-STG-DRS-WHT',
    title: 'Dresser Cabinet',
    slug: 'dresser-cabinet',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Personal grooming organization
      category: 'storage', // Singular
      subCategory: 'dresser', // Singular
      subType: 'vanity-storage',
      style: 'minimal', // Moved from specs
    },
    specifications: {
      material: 'Engineered Wood',
      numberOfDrawers: 3,
      finish: 'Matte White',
      dimensions: { length: 70, width: 40, height: 85, unit: 'cm' },
      weight: { value: 18, unit: 'kg' },
    },
    pricing: {
      mrp: 9999,
      sellingPrice: 7999,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Sleek Minimal Design', icon: 'minus' },
      { id: 'f2', title: 'Silent Runners', icon: 'volume-x' },
      { id: 'f3', title: 'Stain Resistant', icon: 'droplet' },
    ],

    variants: [
      { variantId: 'v1', name: 'Frost White', price: 7999, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: { rating: 4.1, reviewCount: 48, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2017/08/04/10/59/rocking-horse-2579799_1280.jpg',
          alt: 'Dresser Cabinet',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Minimalist White Dresser Cabinet | 3-Drawer Bedroom Unit',
      metaDescription:
        'A clean, modern white dresser cabinet with 3 silent-running drawers. Perfect for contemporary bedroom storage.',
      keywords: ['white dresser', 'minimalist cabinet', 'bedroom drawers', 'engineered wood dresser'],
    },
    description:
      'Minimalist white dresser cabinet. Sleek design for modern bedroom interiors with smooth, silent drawer runners.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 034. Under Bed Storage
  {
    id: 'storage-034',
    sku: 'WH-STG-UBD-WAL',
    title: 'Under Bed Storage',
    slug: 'under-bed-storage',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Hidden space organization
      category: 'storage', // Singular
      subCategory: 'drawer-unit', // Singular (standardized from 'drawers')
      subType: 'under-bed-drawer',
      style: 'contemporary', // Moved from specs
    },
    specifications: {
      material: 'Solid Wood (Sheesham)',
      numberOfDrawers: 1,
      features: ['Wheels for mobility', 'Dust-proof lid'],
      dimensions: { length: 100, width: 60, height: 25, unit: 'cm' },
      weight: { value: 10, unit: 'kg' },
    },
    pricing: {
      mrp: 8499,
      sellingPrice: 6999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Heavy Duty Rollers', icon: 'move' },
      { id: 'f2', title: 'Dust Seal', icon: 'lock' },
      { id: 'f3', title: 'Low Profile Design', icon: 'arrow-down' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Finish', price: 6999, inventoryCount: 25, availability: 'in_stock' },
    ],
    status: { rating: 4.3, reviewCount: 39, tags: ['New'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2018/04/05/16/38/furniture-3293321_1280.jpg',
          alt: 'Under Bed Storage',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Under Bed Storage Drawer | Solid Wood Rolling Storage',
      metaDescription:
        'Maximize your bedroom space with our Under Bed Storage. Features heavy-duty rollers and a dust seal.',
      keywords: ['under bed storage', 'rolling drawer', 'bedroom space saver', 'walnut storage drawer'],
    },
    description:
      'Utilize hidden space with our under-bed storage drawer. Equipped with smooth rollers and a dust seal for clean, accessible storage.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 035. Wardrobe Storage Organizer
  {
    id: 'storage-035',
    sku: 'WH-STG-ORG-WHT',
    title: 'Wardrobe Storage Organizer',
    slug: 'wardrobe-storage-organizer',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'closet'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Modular internal organization
      category: 'storage', // Singular
      subCategory: 'organizer', // Singular
      subType: 'drawer-divider',
      style: 'utility', // Moved from specs
    },
    specifications: {
      material: 'BPA-Free Plastic',
      tierCount: 4,
      features: ['Stackable', 'Moisture Resistant'],
      dimensions: { length: 50, width: 35, height: 100, unit: 'cm' },
      weight: { value: 2, unit: 'kg' },
    },
    pricing: {
      mrp: 7499,
      sellingPrice: 5999,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Easy Assembly', icon: 'tool' },
      { id: 'f2', title: 'Washable Material', icon: 'droplet' },
      { id: 'f3', title: 'Space Maximizer', icon: 'maximize' },
    ],

    variants: [
      { variantId: 'v1', name: 'Opaque White', price: 5999, inventoryCount: 50, availability: 'in_stock' },
    ],
    status: {
      rating: 4.0,
      reviewCount: 33,
      tags: ['bestseller'],
      availability: 'in_stock',
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2025/05/12/01/21/real-estate-9594286_1280.jpg',
          alt: 'Wardrobe Organizer',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Wardrobe Storage Organizer | Multi-Tier Closet Rack',
      metaDescription:
        'Keep your closet tidy with our Wardrobe Storage Organizer. Durable, washable, and designed to maximize vertical space.',
      keywords: ['wardrobe organizer', 'closet storage', 'plastic organizer', 'shelf divider'],
    },
    description:
      'Versatile wardrobe organizer for keeping clothes and accessories neatly stacked. High utility for organized bedrooms.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
  // --- UPDATED DINING STORAGE (HYBRID USAGE) ---
  // 036. Dining Sideboard Cabinet
  {
    id: 'storage-036',
    sku: 'WH-STG-SDB-WAL',
    title: 'Dining Sideboard Cabinet',
    slug: 'dining-sideboard-cabinet',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'living-room'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Tableware and linen organization
      category: 'storage', // Singular
      subCategory: 'sideboard', // Singular
      subType: 'buffet-cabinet',
      style: 'modern', // Moved from specs
    },
    specifications: {
      material: 'Engineered Wood',
      compartmentCount: 4,
      doorType: 'Push-to-open',
      dimensions: { length: 150, width: 40, height: 85, unit: 'cm' },
      weight: { value: 45, unit: 'kg' },
    },
    pricing: {
      mrp: 34999,
      sellingPrice: 28999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Multi-Purpose Storage', icon: 'layout' },
      { id: 'f2', title: 'Modern Matte Finish', icon: 'palette' },
      { id: 'f3', title: 'Heavy Duty Top', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Dark Oak', price: 28999, inventoryCount: 15, availability: 'in_stock' },
      { variantId: 'v2', name: 'Walnut Finish', price: 29999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: { rating: 4.4, reviewCount: 98, tags: ['New'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2014/07/19/18/05/dining-room-397197_1280.jpg',
          alt: 'Dining Sideboard Cabinet',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Dark Oak', hex: '#4B3621' }],
    },
    seo: {
      metaTitle: 'Modern Dining Sideboard Cabinet | Multi-Purpose Buffet Table',
      metaDescription:
        'Upgrade your dining area with our 150cm Sideboard Cabinet. Perfect for storing dinnerware or as a stylish hallway console.',
      keywords: ['dining sideboard', 'buffet cabinet', 'modern credenza', 'hallway storage unit'],
    },
    description:
      'Stylish sideboard for dining essentials, hallway display, or living room media storage. Features a blend of open and closed storage for versatility.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 037. Solid Wood Crockery Unit
  {
    id: 'storage-037',
    sku: 'WH-STG-CRK-HON',
    title: 'Solid Wood Crockery Unit',
    slug: 'solid-wood-crockery-unit',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Delicate tableware organization
      category: 'storage', // Singular
      subCategory: 'crockery-unit', // Singular
      subType: 'display-cabinet',
      style: 'classic', // Moved from specs
    },
    specifications: {
      material: 'Solid Sheesham Wood',
      glassType: 'Tempered Glass',
      shelfCount: 4,
      finish: 'Honey Oak finish',
      dimensions: { length: 120, width: 45, height: 180, unit: 'cm' },
      weight: { value: 65, unit: 'kg' },
    },
    pricing: {
      mrp: 53999,
      sellingPrice: 45999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Premium Sheesham Wood', icon: 'tree' },
      { id: 'f2', title: 'Tempered Glass Display', icon: 'eye' },
      { id: 'f3', title: 'Anti-Toppling Kit', icon: 'anchor' },
    ],

    variants: [
      { variantId: 'v1', name: 'Honey Finish', price: 45999, inventoryCount: 8, availability: 'in_stock' },
      { variantId: 'v2', name: 'Teak Finish', price: 47999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 162,
      tags: ['Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2016/06/03/14/31/dinner-1433494_1280.jpg',
          alt: 'Solid Wood Crockery Unit',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Honey Finish', hex: '#DAA520' }],
    },
    seo: {
      metaTitle: 'Sheesham Wood Crockery Unit | Premium Glass Display Cabinet',
      metaDescription:
        'Showcase your fine china in our Solid Sheesham Wood Crockery Unit. Features tempered glass doors and a rich honey finish.',
      keywords: [
        'sheesham crockery unit',
        'glass display cabinet',
        'solid wood kitchen storage',
        'honey finish almirah',
      ],
    },
    description:
      'Traditional Sheesham wood unit designed to showcase your premium dinnerware. Crafted with longevity in mind and featuring elegant tempered glass panels.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 038. Compact Dining Cabinet
  {
    id: 'storage-038',
    sku: 'WH-STG-CAB-WHT',
    title: 'Compact Dining Cabinet',
    slug: 'compact-dining-cabinet',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'kitchen'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Utility and kitchen organization
      category: 'storage', // Singular
      subCategory: 'cabinet', // Singular
      subType: 'utility-storage',
      style: 'minimal', // Moved from specs
    },
    specifications: {
      material: 'Engineered Wood',
      shelfCount: 3,
      finish: 'Matte White',
      dimensions: { length: 80, width: 35, height: 110, unit: 'cm' },
      weight: { value: 28, unit: 'kg' },
    },
    pricing: {
      mrp: 25999,
      sellingPrice: 21999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Space Saving', icon: 'maximize' },
      { id: 'f2', title: 'Soft Close Doors', icon: 'mouse-pointer' },
      { id: 'f3', title: 'Push-to-open Tech', icon: 'hand' },
    ],

    variants: [
      { variantId: 'v1', name: 'White & Wood', price: 21999, inventoryCount: 20, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 64, tags: ['Compact'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2023/12/04/01/19/kitchen-8428433_1280.jpg',
          alt: 'Compact Dining Cabinet',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White & Wood', hex: '#F5F5F5' }],
    },
    seo: {
      metaTitle: 'Compact White Dining Cabinet | Small Kitchen Storage Unit',
      metaDescription:
        'Perfect for modern apartments, our Compact Dining Cabinet offers high utility for kitchenware with a minimalist design.',
      keywords: ['compact cabinet', 'kitchen storage unit', 'white storage cabinet', 'small dining storage'],
    },
    description:
      'Minimalist cabinet designed for small spaces. High utility for kitchenware with a clean aesthetic that blends into any modern home.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 039. Wall Mounted Crockery Shelf
  {
    id: 'storage-039',
    sku: 'WH-STG-WSH-WAL',
    title: 'Wall Mounted Crockery Shelf',
    slug: 'wall-mounted-crockery-shelf',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'kitchen'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Vertical tableware organization
      category: 'storage', // Singular
      subCategory: 'wall-shelf', // Singular
      subType: 'crockery-organizer',
      style: 'modern-floating', // Moved from specs
    },
    specifications: {
      material: 'Moisture-Resistant Engineered Wood',
      tierCount: 2,
      mountingType: 'Wall Mounted (Heavy-duty Brackets)',
      dimensions: { length: 100, width: 25, height: 60, unit: 'cm' },
      weight: { value: 12, unit: 'kg' },
    },
    pricing: {
      mrp: 15999,
      sellingPrice: 12999,
      currency: 'INR',
      discount: { value: 19, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Zero Floor Space', icon: 'arrow-up' },
      { id: 'f2', title: 'Easy Installation', icon: 'tool' },
      { id: 'f3', title: 'Reinforced Mounts', icon: 'box' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Finish', price: 12999, inventoryCount: 30, availability: 'in_stock' },
      { variantId: 'v2', name: 'Oak Finish', price: 12999, inventoryCount: 25, availability: 'in_stock' },
    ],
    status: { rating: 4.1, reviewCount: 48, tags: ['New'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2018/07/12/09/58/closet-3532936_1280.jpg',
          alt: 'Wall Mounted Shelf',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Floating Wall Crockery Shelf | Modern Walnut Kitchen Rack',
      metaDescription:
        'Save floor space with our Wall Mounted Crockery Shelf. Ideal for jars, spices, or decor items.',
      keywords: ['floating shelf', 'wall mounted storage', 'crockery rack', 'walnut wall shelf'],
    },
    description:
      'Versatile wall-mounted floating shelf. Perfect for jars or decor, offering a zero-floor-space solution for organized rooms.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 040. Glass Door Display Unit
  {
    id: 'storage-040',
    sku: 'WH-STG-GDC-BLK',
    title: 'Glass Door Display Unit',
    slug: 'glass-door-display-unit',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'living-room', 'office'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Curated display and organization
      category: 'storage', // Singular
      subCategory: 'display-unit', // Singular
      subType: 'curio-cabinet',
      style: 'contemporary', // Moved from specs
    },
    specifications: {
      material: 'Solid Wood & Tempered Glass',
      shelfCount: 4,
      lighting: 'Built-in LED Spotlights', // Premium addition for display
      dimensions: { length: 90, width: 40, height: 160, unit: 'cm' },
      weight: { value: 55, unit: 'kg' },
    },
    pricing: {
      mrp: 39999,
      sellingPrice: 33999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Full Glass View', icon: 'square' },
      { id: 'f2', title: 'Dust-Proof Seal', icon: 'shield' },
      { id: 'f3', title: 'Sleek Metal Frame', icon: 'frame' },
    ],

    variants: [
      { variantId: 'v1', name: 'Black & Glass', price: 33999, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: { rating: 4.5, reviewCount: 119, tags: ['Luxury'], availability: 'in_stock', isFeatured: true },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1739350938315-6f2082cf88bf?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Glass Display Unit',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Black & Glass', hex: '#1A1A1A' }],
    },
    seo: {
      metaTitle: 'Modern Glass Door Display Unit | Luxury Showcase Cabinet',
      metaDescription:
        'Display your high-end decor with our Black Glass Display Unit. Contemporary design with dust-proof seals.',
      keywords: ['glass display unit', 'luxury showcase', 'contemporary cabinet', 'black display almirah'],
    },
    description:
      'Elegant display unit with clear glass panels for high-end decor. Keeps your valuables dust-free while offering a full 360-degree style impact.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  /* ================= CABINETS (5) ================= */
  // 041. Modern Storage Cabinet
  {
    id: 'storage-041',
    sku: 'WH-STR-CAB-MOD',
    title: 'Modern Storage Cabinet',
    slug: 'modern-storage-cabinet',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Multi-purpose utility organization
      category: 'storage', // Singular
      subCategory: 'cabinet', // Singular
      subType: 'utility-storage',
      style: 'modern', // Moved from specs
    },
    specifications: {
      material: 'Engineered Wood',
      shelfCount: 3,
      doorType: 'Hinged with Soft-close',
      finish: 'Matte Grey / Oak',
      dimensions: { length: 80, width: 40, height: 120, unit: 'cm' },
      weight: { value: 28, unit: 'kg' },
    },
    pricing: {
      mrp: 17999,
      sellingPrice: 14999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'File Organizer', icon: 'file-text' },
      { id: 'f2', title: 'Modern Finish', icon: 'star' },
      { id: 'f3', title: 'Adjustable Shelves', icon: 'sliders' },
    ],

    variants: [
      { variantId: 'v1', name: 'Grey Walnut', price: 14999, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: { rating: 4.4, reviewCount: 76, tags: ['New'], availability: 'in_stock', isFeatured: true },
    media: {
      images: [
        {
          url: 'https://woodencrest.com/cdn/shop/files/177.webp?v=1733320513',
          alt: 'Modern Cabinet',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Grey', hex: '#808080' },
        { name: 'Walnut', hex: '#773927' },
      ],
    },
    seo: {
      metaTitle: 'Modern Storage Cabinet | Grey Walnut Office & Home Almirah',
      metaDescription:
        'Organize your office files or bedroom essentials with our Modern Storage Cabinet. Sleek grey walnut finish.',
      keywords: ['storage cabinet', 'office file cabinet', 'modern almirah', 'grey walnut furniture'],
    },
    description:
      'Versatile storage solution with a grey-walnut finish. Perfect for organizing files, stationery, or clothes in a contemporary setting.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 042. Classic Solid Wood Cabinet
  {
    id: 'storage-042',
    sku: 'WH-STR-CAB-CLS',
    title: 'Classic Solid Wood Cabinet',
    slug: 'classic-solid-wood-cabinet',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'dining-room'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Durable household organization
      category: 'storage', // Singular
      subCategory: 'cabinet', // Singular
      subType: 'credenza',
      style: 'classic', // Moved from specs
    },
    specifications: {
      material: 'Solid Wood (Sheesham/Rosewood)',
      shelfCount: 2,
      doorType: 'Hinged with Brass Knobs',
      finish: 'Honey Oak / Natural Wood',
      dimensions: { length: 100, width: 45, height: 110, unit: 'cm' },
      weight: { value: 42, unit: 'kg' },
    },

    pricing: {
      mrp: 21999,
      sellingPrice: 18999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Solid Build', icon: 'anchor' },
      { id: 'f2', title: 'Antique Finish', icon: 'award' },
      { id: 'f3', title: 'Handcrafted Detail', icon: 'feather' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Finish', price: 18999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 93,
      tags: ['Best Seller'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://woodencrest.com/cdn/shop/files/149.webp?v=1733299454',
          alt: 'Solid Wood Cabinet',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak Finish', hex: '#964B00' }],
    },
    seo: {
      metaTitle: 'Classic Solid Wood Cabinet | Antique Teak Finish Storage',
      metaDescription:
        'Add a traditional touch to your home with our Classic Solid Wood Cabinet. Durable construction with a rich antique teak finish.',
      keywords: ['solid wood cabinet', 'antique furniture', 'teak storage unit', 'classic almirah'],
    },
    description:
      'Antique style solid wood cabinet with a rich teak finish. Adds a traditional touch and robust storage capacity to any living or dining room.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 043. Minimal White Cabinet
  {
    id: 'storage-043',
    sku: 'WH-STR-CAB-MIN',
    title: 'Minimal White Cabinet',
    slug: 'minimal-white-cabinet',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'living-room', 'kitchen'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Neutral multi-space organization
      category: 'storage', // Singular
      subCategory: 'cabinet', // Singular
      subType: 'utility-storage',
      style: 'minimal', // Moved from specs
    },
    specifications: {
      material: 'Engineered Wood (Laminated)',
      shelfCount: 2,
      doorType: 'Handle-less Push-to-open',
      finish: 'Matte White',
      dimensions: { length: 75, width: 35, height: 100, unit: 'cm' },
      weight: { value: 20, unit: 'kg' },
    },
    pricing: {
      mrp: 15499,
      sellingPrice: 12999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Minimalist Design', icon: 'minus' },
      { id: 'f2', title: 'Space Efficient', icon: 'maximize' },
      { id: 'f3', title: 'Easy Clean Surface', icon: 'refresh-cw' },
    ],

    variants: [
      { variantId: 'v1', name: 'Pure White', price: 12999, inventoryCount: 18, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 61, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2020/05/06/23/23/kitchen-5139611_1280.jpg',
          alt: 'White Cabinet',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Minimal White Storage Cabinet | Modern Kitchen & Bedroom Unit',
      metaDescription:
        'Clean and simple minimal white cabinet. Versatile enough for kitchen pantry use or bedroom storage.',
      keywords: ['white cabinet', 'minimalist storage', 'kitchen pantry cabinet', 'modern bedroom storage'],
    },
    description:
      'Clean, white minimal cabinet that blends seamlessly into modern bedrooms or kitchens. Designed for maximum utility in compact spaces.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 044. Luxury Glass Door Cabinet
  {
    id: 'storage-044',
    sku: 'WH-STR-CAB-GLS',
    title: 'Luxury Glass Door Cabinet',
    slug: 'luxury-glass-door-cabinet',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'living-room'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Premium display organization
      category: 'storage', // Singular
      subCategory: 'cabinet', // Singular
      subType: 'display-cabinet',
      style: 'luxury', // Moved from specs
    },
    specifications: {
      material: 'Solid Wood & Tempered Glass',
      shelfCount: 3,
      doorType: 'Glass Hinged with Gold-finish Handles',
      finish: 'Glossy Charcoal / Walnut',
      dimensions: { length: 110, width: 45, height: 130, unit: 'cm' },
      weight: { value: 50, unit: 'kg' },
    },
    pricing: {
      mrp: 27999,
      sellingPrice: 23999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Tempered Glass', icon: 'shield' },
      { id: 'f2', title: 'Premium Display', icon: 'eye' },
      { id: 'f3', title: 'Internal Lighting Kit', icon: 'sun' },
    ],

    variants: [
      { variantId: 'v1', name: 'Obsidian Black', price: 23999, inventoryCount: 4, availability: 'in_stock' },
    ],
    status: {
      rating: 4.7,
      reviewCount: 118,
      tags: ['New', 'Best Seller'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2017/07/12/02/16/back-2495602_1280.jpg',
          alt: 'Glass Cabinet',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Black', hex: '#000000' }],
    },
    seo: {
      metaTitle: 'Luxury Glass Door Cabinet | Obsidian Black Display Showcase',
      metaDescription:
        'Showcase your collectibles in our Luxury Glass Door Cabinet. Obsidian black finish with tempered glass.',
      keywords: ['glass cabinet', 'display showcase', 'luxury storage', 'black glass almirah'],
    },
    description:
      'Elegant glass-door cabinet to showcase your premium crockery and collectibles. Combines obsidian black aesthetics with tempered glass safety.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 045. Compact Urban Cabinet
  {
    id: 'storage-045',
    sku: 'WH-STR-CAB-URB',
    title: 'Compact Urban Cabinet',
    slug: 'compact-urban-cabinet',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'living-room', 'office'],
      mainCategory: 'furniture',
      productType: 'organization', // Function: Space-saving urban organization
      category: 'storage', // Singular
      subCategory: 'cabinet', // Singular
      subType: 'utility-storage',
      style: 'urban-modern', // Moved from specs & refined
    },
    specifications: {
      material: 'Engineered Wood (Particle Board)',
      shelfCount: 2,
      doorType: 'Standard Hinged',
      finish: 'Light Oak / Slate Finish',
      dimensions: { length: 60, width: 35, height: 90, unit: 'cm' },
      weight: { value: 18, unit: 'kg' },
    },
    pricing: {
      mrp: 12999,
      sellingPrice: 10999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Small Footprint', icon: 'map-pin' },
      { id: 'f2', title: 'Urban Design', icon: 'home' },
      { id: 'f3', title: 'Scratch Resistant', icon: 'edit-3' },
    ],

    variants: [
      { variantId: 'v1', name: 'Oak Brown', price: 10999, inventoryCount: 0, availability: 'out_of_stock' },
    ],
    status: { rating: 4.0, reviewCount: 44, tags: [], availability: 'out_of_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_1280.jpg',
          alt: 'Urban Cabinet',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Oak Brown', hex: '#804000' }],
    },
    seo: {
      metaTitle: 'Compact Urban Cabinet | Small Apartment Storage Solution',
      metaDescription:
        'Optimize small living spaces with our Compact Urban Cabinet. Oak brown finish with a space-saving design.',
      keywords: ['compact cabinet', 'small storage unit', 'urban apartment furniture', 'oak brown storage'],
    },
    description:
      'Perfect for small urban apartments, providing extra storage without taking much floor space. Features a durable oak brown finish.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
  {
    id: 'storage-046',
    sku: 'WH-STR-BST-PREM',
    title: 'Premium Solid Wood Bedside Table',
    slug: 'premium-solid-wood-bedside-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'organization',
      category: 'storage',
      subCategory: 'side-table',
      subType: 'nightstand',
      style: 'contemporary',
    },
    specifications: {
      material: 'Solid Sheesham Wood',
      drawerCount: 1,
      shelfCount: 1, // Open shelf for books/tablets
      dimensions: { length: 45, width: 40, height: 50, unit: 'cm' },
      weight: { value: 12, unit: 'kg' },
    },
    pricing: {
      mrp: 8999,
      sellingPrice: 7499,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Solid Wood Build', icon: 'shield' },
      { id: 'f2', title: 'Open Access Shelf', icon: 'book-open' },
      { id: 'f3', title: 'Anti-tip Hardware', icon: 'anchor' },
    ],
    variants: [
      { variantId: 'v1', name: 'Walnut Finish', price: 7499, inventoryCount: 15, availability: 'in_stock' },
      { variantId: 'v2', name: 'Honey Finish', price: 7499, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: { rating: 4.8, reviewCount: 12, tags: ['Premium'], availability: 'in_stock', isFeatured: true },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1658595149281-8d6bb3643eab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Premium Solid Wood Nightstand',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Walnut', hex: '#5D4037' },
        { name: 'Honey', hex: '#E1AD01' },
      ],
    },
    seo: {
      metaTitle: 'Premium Solid Wood Bedside Table | Urban Home',
      metaDescription: 'Handcrafted Sheesham wood nightstand with drawer and open shelf.',
      keywords: ['solid wood bedside table', 'nightstand with shelf', 'sheesham furniture'],
    },
    description:
      'A durable and elegant nightstand crafted from solid Sheesham wood, featuring a smooth-gliding drawer and an open shelf for easy access to your night-time reads.',
    createdAt: '2026-01-29T10:00:00Z',
    updatedAt: '2026-01-29T10:00:00Z',
  },
  {
    id: 'storage-047',
    sku: 'WH-STR-BST-MINI',
    title: 'Minimalist Bedside Pedestal',
    slug: 'minimalist-bedside-pedestal',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'organization',
      category: 'storage',
      subCategory: 'bedside-table',
      subType: 'nightstand',
      style: 'scandinavian',
    },
    specifications: {
      material: 'Engineered Wood with Solid Wood Legs',
      drawerCount: 2,
      dimensions: { length: 35, width: 35, height: 45, unit: 'cm' }, // Compact for small bedrooms
      weight: { value: 7, unit: 'kg' },
    },
    pricing: {
      mrp: 4499,
      sellingPrice: 3299,
      currency: 'INR',
      discount: { value: 27, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Tapered Solid Wood Legs', icon: 'triangle' },
      { id: 'f2', title: 'Cut-out Handle Design', icon: 'minus' },
      { id: 'f3', title: 'Floor Protectors', icon: 'shield' },
    ],
    variants: [
      { variantId: 'v1', name: 'White & Pine', price: 3299, inventoryCount: 50, availability: 'in_stock' },
    ],
    status: {
      rating: 4.4,
      reviewCount: 18,
      tags: ['Space Saver'],
      availability: 'in_stock',
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000&auto=format&fit=crop',
          alt: 'White Minimalist Bedside Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White/Pine', hex: '#F5F5F5' }],
    },
    seo: {
      metaTitle: 'Minimalist 2-Drawer Bedside Table | Urban Home',
      metaDescription: 'Small space bedside pedestal with 2 drawers and wooden legs.',
      keywords: ['small bedside table', 'white nightstand', 'compact bedroom storage'],
    },
    description:
      'A space-saving bedside companion featuring a clean white finish and sturdy pine wood legs. Ideal for modern, smaller bedrooms.',
    createdAt: '2026-01-29T12:00:00Z',
    updatedAt: '2026-01-29T12:00:00Z',
  },
  {
    id: 'storage-048',
    sku: 'WH-STR-BST-FLT',
    title: 'Modern Floating Bedside Table',
    slug: 'modern-floating-bedside-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom'],
      mainCategory: 'furniture',
      productType: 'organization',
      category: 'storage',
      subCategory: 'bedside-table',
      subType: 'wall-mounted-nightstand',
      style: 'minimalist',
    },
    specifications: {
      material: 'High-Grade Engineered Wood',
      drawerCount: 1,
      mountingType: 'Wall Mount (Floating)',
      dimensions: { length: 40, width: 30, height: 15, unit: 'cm' },
      weight: { value: 4, unit: 'kg' },
    },
    pricing: {
      mrp: 3499,
      sellingPrice: 2199,
      currency: 'INR',
      discount: { value: 37, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Space-Saving Floating Design', icon: 'upload-cloud' },
      { id: 'f2', title: 'Hidden Cable Management', icon: 'zap' },
      { id: 'f3', title: 'Easy Wall Installation', icon: 'tool' },
    ],
    variants: [
      { variantId: 'v1', name: 'Matte White', price: 2199, inventoryCount: 30, availability: 'in_stock' },
      { variantId: 'v2', name: 'Dark Walnut', price: 2399, inventoryCount: 20, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 45,
      tags: ['Trending', 'Small Space'],
      availability: 'in_stock',
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000&auto=format&fit=crop',
          alt: 'Floating White Bedside Table',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'White', hex: '#FFFFFF' },
        { name: 'Walnut', hex: '#3E2723' },
      ],
    },
    seo: {
      metaTitle: 'Floating Bedside Table with Drawer | Urban Home',
      metaDescription: 'Modern wall-mounted nightstand with storage drawer for a clean bedroom look.',
      keywords: ['floating bedside table', 'wall mounted nightstand', 'minimalist bedroom storage'],
    },
    description:
      'Elevate your bedroom decor with our Floating Bedside Table. Designed for modern living, this sleek unit mounts directly to your wall, keeping your floor clear and your essentials organized in its smooth-gliding drawer.',
    createdAt: '2026-01-29T14:30:00Z',
    updatedAt: '2026-01-29T14:30:00Z',
  },
]
