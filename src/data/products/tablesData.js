export const tableData = [
  // 001. Modern Wooden Coffee Table
  {
    id: 'tab-001',
    sku: 'WH-TBL-MOD-WAL',
    title: 'Modern Wooden Coffee Table',
    slug: 'modern-wooden-coffee-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'utility', // Sofa structure ke hisaab se upar shift kiya
      category: 'table',
      subCategory: 'coffee-table',
      subType: 'round', // Added for consistency with 'l-shape' style
      style: 'modern',
    },
    specifications: {
      material: 'Engineered Wood',
      frameMaterial: 'Solid Wood', // Frame material key add ki sofa ki tarah
      tableType: 'coffee-table',
      dimensions: { length: 90, width: 50, height: 45, unit: 'cm' },
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
      { id: 'f1', title: 'Premium Walnut Finish', icon: 'palette' },
      { id: 'f2', title: 'Sturdy Build', icon: 'shield-check' },
      { id: 'f3', title: 'Scratch Resistant', icon: 'zap' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Standard (90x50 cm)',
        price: 8999,
        inventoryCount: 20,
        availability: 'in_stock',
      },
      {
        variantId: 'v2',
        name: 'Large (120x60 cm)',
        price: 10499,
        inventoryCount: 15,
        availability: 'in_stock',
      },
    ],
    status: { rating: 4.4, reviewCount: 92, tags: ['New'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2024/04/09/14/18/ai-generated-8686094_1280.jpg',
          alt: 'Modern Coffee Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut Brown', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Modern Wooden Coffee Table | Walnut Finish | Urban Home',
      metaDescription:
        'Buy modern wooden coffee table online. Premium walnut finish and sleek design, perfect for modern living rooms.',
      keywords: ['coffee table', 'wooden coffee table', 'modern furniture', 'walnut table'],
    },
    description:
      'Sleek and modern coffee table with a premium walnut finish for urban homes. Crafted for style and durability.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 002. Classic Solid Wood Coffee Table
  {
    id: 'tab-002',
    sku: 'WH-TBL-STG-031',
    title: 'Outdoor Coffee Table',
    slug: 'outdoor-coffee-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['outdoor', 'living-room', 'balcony'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'coffee-table',
      subType: 'round', // 'Gole' table ke liye
      style: 'modern', // Specifications se taxonomy mein move kiya
    },
    specifications: {
      material: 'Powder Coated Metal',
      frameMaterial: 'Iron/Steel', // Sofa structure ke saath match karne ke liye
      tableType: 'coffee-table',
      dimensions: {
        diameter: 60, // Gole table ke liye diameter behtar hai
        height: 45,
        unit: 'cm',
      },
      weight: { value: 12, unit: 'kg' },
    },
    pricing: {
      mrp: 11999,
      sellingPrice: 9999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Weather Resistant', icon: 'sun' },
      { id: 'f2', title: 'Rust Proof Finish', icon: 'shield' },
      { id: 'f3', title: 'Minimalist Design', icon: 'zap' },
    ],

    variants: [
      { variantId: 'v1', name: 'Black Metal', price: 9999, inventoryCount: 30, availability: 'in_stock' },
    ],
    status: { rating: 4.3, reviewCount: 64, tags: ['New'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2020/07/17/15/25/garden-5414441_1280.jpg',
          alt: 'Outdoor Coffee Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Black', hex: '#000000' }],
    },
    seo: {
      metaTitle: 'Outdoor Coffee Table | Weather-Resistant Garden Table',
      metaDescription:
        'Minimalist metal coffee table for gardens and balconies. Features a rust-proof finish and durable build for all-weather use.',
      keywords: ['outdoor coffee table', 'garden table', 'balcony furniture', 'metal outdoor table'],
    },
    description:
      'Minimalist metal coffee table for your garden or balcony. Built to last outdoors with a specialized rust-proof coating.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 003. Minimal Glass Top Coffee Table
  {
    id: 'tab-003',
    sku: 'WH-TBL-MIN-GLS',
    title: 'Minimal Glass Top Coffee Table',
    slug: 'minimal-glass-coffee-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office'],
      mainCategory: 'furniture',
      productType: 'utility', // Order updated as per sofa pattern
      category: 'table',
      subCategory: 'coffee-table',
      subType: 'round', // Gole table specification
      style: 'minimalist', // Taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Tempered Glass',
      frameMaterial: 'Metal', // Sofa structure consistency ke liye
      tableType: 'coffee-table',
      dimensions: {
        diameter: 80, // Gole table ke liye diameter best hai
        height: 40,
        unit: 'cm',
      },
      weight: { value: 15, unit: 'kg' },
    },
    pricing: {
      mrp: 12499,
      sellingPrice: 9999,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Tempered Glass', icon: 'layers' },
      { id: 'f2', title: 'Industrial Legs', icon: 'box' },
      { id: 'f3', title: 'Easy Maintenance', icon: 'sparkles' },
    ],

    variants: [
      { variantId: 'v1', name: 'Black Legs', price: 9999, inventoryCount: 30, availability: 'in_stock' },
      { variantId: 'v2', name: 'Chrome Legs', price: 10999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 76, tags: [], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1676823570977-18ee08fea6c5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Glass Table',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Black', hex: '#000000' },
        { name: 'Chrome', hex: '#C0C0C0' },
      ],
    },
    seo: {
      metaTitle: 'Minimalist Glass Coffee Table | Modern Office Design | Urban Home',
      metaDescription:
        'Sleek glass top coffee table with a metal frame. Perfect for a clean, minimalist look in your home.',
      keywords: ['glass table', 'minimalist coffee table', 'modern office furniture', 'glass furniture'],
    },
    description:
      'Minimalist glass coffee table with a sturdy metal frame, ideal for contemporary living spaces and offices.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 004. Luxury Marble Finish Coffee Table
  {
    id: 'tab-004',
    sku: 'WH-TBL-LUX-MAR',
    title: 'Luxury Marble Finish Coffee Table',
    slug: 'luxury-marble-coffee-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'coffee-table',
      subType: 'round', // Gole design ke liye
      style: 'luxury', // Specifications se taxonomy mein move kiya
    },
    specifications: {
      material: 'Marble Top',
      frameMaterial: 'Gold-Finished Metal', // Luxury feel ke liye frame detail
      tableType: 'coffee-table',
      dimensions: {
        diameter: 90, // Gole table ke liye diameter ka use
        height: 45,
        unit: 'cm',
      },
      weight: { value: 25, unit: 'kg' },
    },
    pricing: {
      mrp: 22999,
      sellingPrice: 18999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Marble Top Texture', icon: 'layers' },
      { id: 'f2', title: 'Gold PVD Coating', icon: 'award' },
      { id: 'f3', title: 'Heat Resistant', icon: 'thermometer' },
    ],

    variants: [
      { variantId: 'v1', name: 'White Carrara', price: 18999, inventoryCount: 8, availability: 'in_stock' },
      { variantId: 'v2', name: 'Black Marquina', price: 19999, inventoryCount: 4, availability: 'in_stock' },
    ],
    status: {
      rating: 4.7,
      reviewCount: 164,
      tags: ['New', 'Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1643558544531-bff73bbffc28?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Marble Table',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'White Marble', hex: '#F2F2F2' },
        { name: 'Gold', hex: '#D4AF37' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Marble Finish Coffee Table | Premium Furniture | Urban Home',
      metaDescription:
        'Elevate your living room with our luxury marble finish coffee table. Stunning aesthetics with gold frame.',
      keywords: ['marble finish table', 'luxury coffee table', 'premium furniture', 'marble gold table'],
    },
    description:
      'Elegant marble top coffee table with sophisticated gold accents, designed for premium homes.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 005. Compact Urban Coffee Table
  {
    id: 'tab-005',
    sku: 'WH-TBL-CPT-OAK',
    title: 'Compact Urban Coffee Table',
    slug: 'compact-urban-coffee-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'coffee-table',
      subType: 'rectangular', // Dimension ke hisaab se rectangular rakha hai
      style: 'urban', // Specs se taxonomy mein move kiya gaya
    },
    specifications: {
      material: 'Engineered Wood (Oak Finish)',
      frameMaterial: 'Engineered Wood',
      tableType: 'coffee-table',
      dimensions: { length: 70, width: 45, height: 40, unit: 'cm' },
      weight: { value: 8, unit: 'kg' },
    },
    pricing: {
      mrp: 8999,
      sellingPrice: 7499,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Space Saver Design', icon: 'minimize' },
      { id: 'f2', title: 'Easy to Clean', icon: 'sparkles' },
      { id: 'f3', title: 'Lightweight', icon: 'feather' },
    ],

    variants: [
      { variantId: 'v1', name: 'Oak Brown', price: 7499, inventoryCount: 0, availability: 'out_of_stock' },
      { variantId: 'v2', name: 'Grey Ash', price: 7499, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: { rating: 4.1, reviewCount: 58, tags: [], isFeatured: false, availability: 'out_of_stock' },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1767363592711-1cda1502284d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Urban Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Oak Brown', hex: '#8B5A2B' }],
    },
    seo: {
      metaTitle: 'Compact Coffee Table for Small Living Rooms | Urban Home',
      metaDescription:
        'Space-saving coffee table designed for modern apartments and small living spaces. Stylish oak finish.',
      keywords: ['compact table', 'small space furniture', 'apartment table', 'urban furniture'],
    },
    description: 'Smartly designed space-saving coffee table for modern apartments and urban living.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // side Tables
  // 006. Modern Wooden Side Table
  {
    id: 'tab-006',
    sku: 'WH-TBL-SID-MOD',
    title: 'Modern Wooden Side Table',
    slug: 'modern-wooden-side-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'side-table',
      subType: 'rectangular', // $40 \times 40$ ke liye gole design use kiya gaya hai
      style: 'modern', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Engineered Wood',
      frameMaterial: 'Solid Wood Legs', // Sofa style consistency
      tableType: 'bedside-table',
      dimensions: {
        diameter: 40, // Gole table ke liye diameter best hai
        height: 50,
        unit: 'cm',
      },
      weight: { value: 5, unit: 'kg' },
    },
    pricing: {
      mrp: 4999,
      sellingPrice: 3999,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Compact Design', icon: 'minimize' },
      { id: 'f2', title: 'Walnut Texture', icon: 'palette' },
      { id: 'f3', title: 'Multi-purpose Use', icon: 'layers' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Brown', price: 3999, inventoryCount: 30, availability: 'in_stock' },
      { variantId: 'v2', name: 'Dark Oak', price: 4299, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: { rating: 4.3, reviewCount: 64, tags: ['New'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_1280.jpg',
          alt: 'Modern Side Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut Brown', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Modern Wooden Side Table | Bedside Stand | Urban Home',
      metaDescription:
        'Functional side table that works perfectly as a bedside stand in the bedroom or living room.',
      keywords: ['side table', 'bedside stand', 'wooden end table'],
    },
    description:
      'Functional side table that works perfectly as a bedside stand in the bedroom. Crafted for utility and style.',
    createdAt: '2024-11-06T10:00:00Z',
    updatedAt: '2024-11-06T10:00:00Z',
  },

  // 007. Minimal Metal Frame Side Table
  {
    id: 'tab-007',
    sku: 'WH-TBL-SID-MTL',
    title: 'Minimal Metal Frame Side Table',
    slug: 'minimal-metal-side-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'side-table',
      subType: 'round', // Gole format follow kiya gaya hai
      style: 'minimal', // Specs se taxonomy mein move kiya gaya
    },
    specifications: {
      material: 'Solid Wood Top',
      frameMaterial: 'Powder Coated Metal', // Structure ko detailed rakha hai
      tableType: 'side-table',
      dimensions: {
        diameter: 35, // Round table ke liye diameter ka use
        height: 55,
        unit: 'cm',
      },
      weight: { value: 4, unit: 'kg' },
    },
    pricing: {
      mrp: 4299,
      sellingPrice: 3499,
      currency: 'INR',
      discount: { value: 19, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Industrial Frame', icon: 'activity' },
      { id: 'f2', title: 'Sleek Top', icon: 'minus' },
      { id: 'f3', title: 'Easy Assembly', icon: 'tool' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Black & Natural Wood',
        price: 3499,
        inventoryCount: 25,
        availability: 'in_stock',
      },
      { variantId: 'v2', name: 'All Black', price: 3499, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: { rating: 4.1, reviewCount: 52, tags: [], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2023/09/27/21/39/furniture-8280352_1280.jpg',
          alt: 'Metal Side Table',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Black', hex: '#000000' },
        { name: 'Natural Wood', hex: '#D2B48C' },
      ],
    },
    seo: {
      metaTitle: 'Minimal Metal Side Table | Industrial End Table | Urban Home',
      metaDescription: 'Industrial-style side table with a minimal metal frame for a clean modern aesthetic.',
      keywords: ['metal side table', 'industrial furniture', 'minimalist table'],
    },
    description:
      'Industrial-style side table with a minimal metal frame for a clean aesthetic. Perfect for modern offices or living spaces.',
    createdAt: '2024-11-07T10:00:00Z',
    updatedAt: '2024-11-07T10:00:00Z',
  },

  // 008. Classic Solid Wood Side Table
  {
    id: 'tab-008',
    sku: 'WH-TBL-SID-SLD',
    title: 'Classic Solid Wood Side Table',
    slug: 'classic-solid-wood-side-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'side-table',
      subType: 'round', // Gole format consistency ke liye
      style: 'classic', // Taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Solid Wood (Sheesham/Teak)',
      frameMaterial: 'Solid Wood', // Full wood construction
      tableType: 'side-table',
      dimensions: {
        diameter: 45,
        height: 45,
        unit: 'cm',
      },
      weight: { value: 7, unit: 'kg' },
    },
    pricing: {
      mrp: 6499,
      sellingPrice: 5499,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Premium Solid Wood', icon: 'tree' },
      { id: 'f2', title: 'Durable Finish', icon: 'shield-check' },
      { id: 'f3', title: 'Traditional Craft', icon: 'hammer' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Finish', price: 5499, inventoryCount: 12, availability: 'in_stock' },
      { variantId: 'v2', name: 'Walnut Finish', price: 5699, inventoryCount: 8, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 88,
      tags: ['Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1681223965635-bdb526bc4989?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Solid Wood Side Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak Finish', hex: '#87441F' }],
    },
    seo: {
      metaTitle: 'Classic Solid Wood Side Table | Luxury End Table | Urban Home',
      metaDescription: 'Elegant solid wood side table crafted for durability and timeless appeal.',
      keywords: ['solid wood end table', 'teak furniture', 'classic side table'],
    },
    description:
      'Elegant solid wood side table crafted for durability and timeless appeal. Each piece features unique grain patterns.',
    createdAt: '2024-11-08T10:00:00Z',
    updatedAt: '2024-11-08T10:00:00Z',
  },

  // 009. Luxury Marble Top Side Table
  {
    id: 'tab-009',
    sku: 'WH-TBL-SID-MAR',
    title: 'Luxury Marble Top Side Table',
    slug: 'luxury-marble-side-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'luxury'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'dresser',
      subType: 'rectangular',
      style: 'luxury',
    },
    specifications: {
      material: 'Italian Marble Top',
      frameMaterial: 'PVD Coated Stainless Steel', // Luxury look ke liye frame detail
      tableType: 'bedside-table',
      dimensions: {
        diameter: 50, // Square dimensions ko diameter mein convert kiya
        height: 60,
        unit: 'cm',
      },
      weight: { value: 12, unit: 'kg' },
    },
    pricing: {
      mrp: 9499,
      sellingPrice: 7999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Genuine Marble Top', icon: 'star' },
      { id: 'f2', title: 'Gold Plated Frame', icon: 'award' },
      { id: 'f3', title: 'Stain Resistant', icon: 'droplet' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'White Marble / Gold',
        price: 7999,
        inventoryCount: 10,
        availability: 'in_stock',
      },
      {
        variantId: 'v2',
        name: 'Black Marble / Gold',
        price: 8499,
        inventoryCount: 5,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.7,
      reviewCount: 102,
      tags: ['New', 'Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2019/09/27/11/36/lounge-4508291_1280.jpg',
          alt: 'Luxury Marble Side Table',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'White Marble', hex: '#F2F2F2' },
        { name: 'Gold', hex: '#D4AF37' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Marble Top Side Table | Gold Accent Table | Urban Home',
      metaDescription:
        'Premium marble top side table with gold accents, perfect for high-end luxury interiors.',
      keywords: ['marble side table', 'gold furniture', 'luxury home decor'],
    },
    description:
      'Premium marble top side table with gold accents, perfect for luxury interiors and modern living rooms.',
    createdAt: '2024-11-09T10:00:00Z',
    updatedAt: '2024-11-09T10:00:00Z',
  },

  // 010. Compact Urban Side Table
  {
    id: 'tab-010',
    sku: 'WH-TBL-SID-CPT',
    title: 'Compact Urban Side Table',
    slug: 'compact-urban-side-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'side-table',
      subType: 'round', // Gole design format
      style: 'urban', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Engineered Wood',
      frameMaterial: 'Powder Coated Metal Legs', // Urban style ke liye behtar look
      tableType: 'side-table',
      dimensions: {
        diameter: 30, // Square dimension ko diameter mein convert kiya
        height: 45,
        unit: 'cm',
      },
      weight: { value: 3, unit: 'kg' },
    },
    pricing: {
      mrp: 3599,
      sellingPrice: 2999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Space Efficient', icon: 'layout' },
      { id: 'f2', title: 'Lightweight Build', icon: 'feather' },
      { id: 'f3', title: 'Affordable Style', icon: 'trending-up' },
    ],

    variants: [
      { variantId: 'v1', name: 'Oak Brown', price: 2999, inventoryCount: 0, availability: 'out_of_stock' },
    ],
    status: { rating: 4.0, reviewCount: 41, tags: [], isFeatured: false, availability: 'out_of_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497_1280.jpg',
          alt: 'Compact Side Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Oak Brown', hex: '#8B5A2B' }],
    },
    seo: {
      metaTitle: 'Compact Urban Side Table | Small Space Solution | Urban Home',
      metaDescription: 'Small space solution for modern homes, works well as an accent or side table.',
      keywords: ['small side table', 'compact furniture', 'apartment decor'],
    },
    description:
      'Small space solution for modern homes, works well as an accent or side table in studio apartments.',
    createdAt: '2024-11-10T10:00:00Z',
    updatedAt: '2024-11-10T10:00:00Z',
  },

  // Nested Tables
  // 011. Modern Wooden Nested Tables Set
  {
    id: 'tab-011',
    sku: 'WH-TBL-NST-MOD',
    title: 'Modern Wooden Nested Tables Set',
    slug: 'modern-wooden-nested-tables',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'nested-table',
      subType: 'round', // Gole format ke liye
      style: 'modern',
    },
    specifications: {
      material: 'Engineered Wood',
      tableType: 'nested-table',
      dimensions: {
        diameter: 50, // Diameter based on your 50x50 dimensions
        height: 55,
        unit: 'cm',
      },
      weight: { value: 12, unit: 'kg' },
    },
    pricing: {
      mrp: 8499,
      sellingPrice: 6999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Space Saving Set', icon: 'minimize' },
      { id: 'f2', title: 'Walnut Finish', icon: 'palette' },
      { id: 'f3', title: 'Stackable Design', icon: 'layers' },
    ],

    variants: [
      { variantId: 'v1', name: 'Set of 2', price: 6999, inventoryCount: 15, availability: 'in_stock' },
      { variantId: 'v2', name: 'Set of 3', price: 8999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: { rating: 4.4, reviewCount: 73, tags: ['New'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://woodencrest.com/cdn/shop/files/294.webp?v=1733330880',
          alt: 'Modern Nested Tables',
          isPrimary: true,
        },
        { url: 'https://woodencrest.com/cdn/shop/files/294_1.webp', alt: 'Side View', isPrimary: false },
      ],
      colors: [{ name: 'Walnut Brown', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Modern Wooden Nested Tables Set | Urban Home',
      metaDescription: 'Versatile set of nested tables in walnut finish, perfect for compact storage.',
      keywords: ['nested tables', 'nesting tables', 'wooden set'],
    },
    description:
      'Versatile set of nested tables in walnut finish, perfect for compact storage in living or bedrooms.',
    createdAt: '2024-11-11T10:00:00Z',
    updatedAt: '2024-11-11T10:00:00Z',
  },

  // 012. Minimal Metal Frame Nested Tables
  {
    id: 'tab-012',
    sku: 'WH-TBL-NST-MTL',
    title: 'Minimal Metal Frame Nested Tables',
    slug: 'minimal-metal-nested-tables',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'nested-table',
      subType: 'round', // Gole format follow kiya gaya hai
      style: 'minimal', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Metal & Wood',
      tableType: 'nested-table',
      dimensions: {
        diameter: 45, // Square dimensions ko diameter mein badla gaya
        height: 50,
        unit: 'cm',
      },
      weight: { value: 9, unit: 'kg' },
    },
    pricing: {
      mrp: 7899,
      sellingPrice: 6499,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Industrial Look', icon: 'activity' },
      { id: 'f2', title: 'Sturdy Metal Base', icon: 'shield' },
      { id: 'f3', title: 'Lightweight', icon: 'feather' },
    ],

    variants: [
      { variantId: 'v1', name: 'Black & Natural', price: 6499, inventoryCount: 20, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 58, tags: [], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://woodencrest.com/cdn/shop/files/81B6SCkXamL._SX522.jpg?v=1740739917',
          alt: 'Metal Nested Tables',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Black', hex: '#000000' },
        { name: 'Natural Wood', hex: '#D2B48C' },
      ],
    },
    seo: {
      metaTitle: 'Minimal Metal Nested Tables | Industrial Design | Urban Home',
      metaDescription:
        'Shop industrial-style nesting tables with a sturdy metal frame and wood top. Space-saving minimal design for modern homes.',
      keywords: ['nested tables', 'metal nesting tables', 'industrial furniture', 'minimalist tables'],
    },
    description:
      'Industrial-style nesting tables with a sturdy metal frame and natural wood top. Perfect for modern living or office spaces.',
    createdAt: '2024-11-12T10:00:00Z',
    updatedAt: '2024-11-12T10:00:00Z',
  },

  // 013. Classic Solid Wood Nested Tables
  {
    id: 'tab-013',
    sku: 'WH-TBL-NST-SLD',
    title: 'Classic Solid Wood Nested Tables',
    slug: 'classic-solid-wood-nested-tables',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'dining'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'nested-table',
      subType: 'round', // Gole format consistency ke liye
      style: 'classic', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Solid Wood',
      tableType: 'nested-table',
      dimensions: {
        diameter: 55, // Square dimensions ko diameter mein convert kiya
        height: 60,
        unit: 'cm',
      },
      weight: { value: 15, unit: 'kg' },
    },
    pricing: {
      mrp: 10499,
      sellingPrice: 8999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Premium Sheesham Wood', icon: 'tree' },
      { id: 'f2', title: 'Guest Serving Ready', icon: 'users' },
      { id: 'f3', title: 'Durable Construction', icon: 'anchor' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Finish Set', price: 8999, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 91,
      tags: ['Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://woodencrest.com/cdn/shop/files/11.webp?v=1733148987',
          alt: 'Solid Wood Nested Tables',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak Finish', hex: '#87441F' }],
    },
    seo: {
      metaTitle: 'Classic Solid Wood Nested Tables | Sheesham Wood | Urban Home',
      metaDescription:
        'Premium sheesham wood nested tables for serving guests. Elegant teak finish with durable handcrafted construction.',
      keywords: ['solid wood nested tables', 'sheesham furniture', 'serving tables', 'classic wood tables'],
    },
    description:
      'Premium solid wood nested tables, ideal for serving guests in dining or living areas. Crafted for durability and elegance.',
    createdAt: '2024-11-13T10:00:00Z',
    updatedAt: '2024-11-13T10:00:00Z',
  },

  // 014. Luxury Marble Top Nested Tables
  {
    id: 'tab-014',
    sku: 'WH-TBL-NST-MAR',
    title: 'Luxury Marble Top Nested Tables',
    slug: 'luxury-marble-nested-tables',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'luxury', 'dining'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'nested-table',
      subType: 'round', // Gole format consistency ke liye
      style: 'luxury', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Marble & Metal',
      tableType: 'nested-table',
      dimensions: {
        diameter: 50, // Square dimensions ko diameter mein convert kiya
        height: 50,
        unit: 'cm',
      },
      weight: { value: 18, unit: 'kg' },
    },
    pricing: {
      mrp: 13999,
      sellingPrice: 11999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Real Marble Surface', icon: 'star' },
      { id: 'f2', title: 'Gold Plated Legs', icon: 'award' },
      { id: 'f3', title: 'Modern Chic', icon: 'trending-up' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'White Marble / Gold',
        price: 11999,
        inventoryCount: 8,
        availability: 'in_stock',
      },
      {
        variantId: 'v2',
        name: 'Black Marble / Gold',
        price: 12499,
        inventoryCount: 4,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.7,
      reviewCount: 116,
      tags: ['New', 'Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://woodencrest.com/cdn/shop/files/Untitleddesign_1973ad53-a694-4c83-b738-fcfacdd7b0de.webp?v=1733324136',
          alt: 'Marble Nested Tables',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'White Marble', hex: '#F2F2F2' },
        { name: 'Gold', hex: '#D4AF37' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Marble Top Nested Tables | Gold Finish | Urban Home',
      metaDescription:
        'Sophisticated marble-top nesting tables with gold metal legs. Add a luxury touch to your premium living room setup.',
      keywords: ['marble nested table', 'gold nesting table', 'luxury furniture', 'marble top table'],
    },
    description:
      'Sophisticated marble-top nesting tables with gold metal legs, adding a luxury touch to any premium interior.',
    createdAt: '2024-11-14T10:00:00Z',
    updatedAt: '2024-11-14T10:00:00Z',
  },

  // 015. Compact Urban Nested Tables
  {
    id: 'tab-015',
    sku: 'WH-TBL-NST-CPT',
    title: 'Compact Urban Nested Tables',
    slug: 'compact-urban-nested-tables',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'nested-table',
      subType: 'round', // Gole format consistency ke liye
      style: 'urban', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Engineered Wood',
      tableType: 'nested-table',
      dimensions: {
        diameter: 40, // Square dimensions ko diameter mein convert kiya
        height: 45,
        unit: 'cm',
      },
      weight: { value: 7, unit: 'kg' },
    },
    pricing: {
      mrp: 7199,
      sellingPrice: 5999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Studio Friendly', icon: 'home' },
      { id: 'f2', title: 'Easy Storage', icon: 'archive' },
      { id: 'f3', title: 'Oak Finish', icon: 'box' },
    ],

    variants: [
      { variantId: 'v1', name: 'Oak Brown', price: 5999, inventoryCount: 0, availability: 'out_of_stock' },
    ],
    status: { rating: 4.1, reviewCount: 46, tags: [], isFeatured: false, availability: 'out_of_stock' },
    media: {
      images: [
        {
          url: 'https://woodencrest.com/cdn/shop/files/344.webp?v=1733052681',
          alt: 'Compact Nested Tables',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Oak Brown', hex: '#8B5A2B' }],
    },
    seo: {
      metaTitle: 'Compact Urban Nested Tables | Space Saving Furniture | Urban Home',
      metaDescription:
        'Smart space-saving nested tables for urban living. Tucks away easily, perfect for studio apartments and small rooms.',
      keywords: [
        'compact nested table',
        'space saving furniture',
        'studio apartment furniture',
        'urban decor',
      ],
    },
    description:
      'Smart space-saving nested tables for urban living, easily tucked away when not in use. Stylish and functional.',
    createdAt: '2024-11-15T10:00:00Z',
    updatedAt: '2024-11-15T10:00:00Z',
  },

  // Console Tables

  // 016. Modern Wooden Console Table
  {
    id: 'tab-016',
    sku: 'WH-TBL-CON-MOD',
    title: 'Modern Wooden Console Table',
    slug: 'modern-wooden-console-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'entryway', 'dining-room'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'console-table',
      subType: 'rectangular', // Console tables rectangular hoti hain
      style: 'modern', // Taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Engineered Wood',
      tableType: 'console-table',
      dimensions: { length: 110, width: 35, height: 75, unit: 'cm' },
      weight: { value: 14, unit: 'kg' },
    },
    pricing: {
      mrp: 10999,
      sellingPrice: 8999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Sleek Modern Profile', icon: 'zap' },
      { id: 'f2', title: 'Entryway Accent', icon: 'home' },
      { id: 'f3', title: 'Easy Assembly', icon: 'tool' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Brown', price: 8999, inventoryCount: 25, availability: 'in_stock' },
    ],
    status: { rating: 4.4, reviewCount: 69, tags: ['New'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://woodencrest.com/cdn/shop/files/140.webp?v=1733298870',
          alt: 'Modern Console Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut Brown', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Modern Wooden Console Table | Entryway Decor | Urban Home',
      metaDescription:
        'Elegant and sleek wooden console table for hallways and entryways. Premium walnut finish for a modern look.',
      keywords: ['console table', 'entryway table', 'hallway table', 'wooden furniture'],
    },
    description:
      'Sleek modern console table, ideal for entryways or as a stylish accent in dining rooms. Crafted for utility and elegance.',
    createdAt: '2024-11-16T10:00:00Z',
    updatedAt: '2024-11-16T10:00:00Z',
  },

  // 017. Minimal Metal Frame Console Table
  {
    id: 'tab-017',
    sku: 'WH-TBL-CON-MTL',
    title: 'Minimal Metal Frame Console Table',
    slug: 'minimal-metal-console-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office', 'hallway'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'console-table',
      subType: 'rectangular',
      style: 'minimal', // Taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Metal & Wood',
      tableType: 'console-table',
      dimensions: { length: 100, width: 30, height: 80, unit: 'cm' },
      weight: { value: 10, unit: 'kg' },
    },
    pricing: {
      mrp: 9499,
      sellingPrice: 7999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Slim Profile Design', icon: 'minimize-2' },
      { id: 'f2', title: 'Industrial Metal Frame', icon: 'shield' },
      { id: 'f3', title: 'Multi-Room Utility', icon: 'layers' },
    ],

    variants: [
      { variantId: 'v1', name: 'Black & Natural', price: 7999, inventoryCount: 18, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 54, tags: [], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://woodencrest.com/cdn/shop/files/209.webp?v=1733322815',
          alt: 'Metal Console Table',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Black', hex: '#000000' },
        { name: 'Natural Wood', hex: '#D2B48C' },
      ],
    },
    seo: {
      metaTitle: 'Minimal Metal Frame Console Table | Industrial Style | Urban Home',
      metaDescription:
        'Industrial-style console table with a slim profile. Ideal for modern hallways and minimal office spaces.',
      keywords: ['metal console table', 'industrial hallway table', 'slim entry table', 'minimal furniture'],
    },
    description:
      'Industrial-style console table with a slim profile, perfect for modern hallways and compact entryways.',
    createdAt: '2024-11-17T10:00:00Z',
    updatedAt: '2024-11-17T10:00:00Z',
  },

  // 018. Classic Solid Wood Console Table
  {
    id: 'tab-018',
    sku: 'WH-TBL-CON-SLD',
    title: 'Classic Solid Wood Console Table',
    slug: 'classic-solid-wood-console-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'dining-room', 'entryway'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'console-table',
      subType: 'round',
      style: 'classic', // Specs se taxonomy mein move kiya gaya
    },
    specifications: {
      material: 'Solid Wood',
      tableType: 'console-table',
      dimensions: { length: 120, width: 40, height: 76, unit: 'cm' },
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
      { id: 'f1', title: 'Premium Teak Wood', icon: 'tree' },
      { id: 'f2', title: 'Timeless Classic Look', icon: 'award' },
      { id: 'f3', title: 'Heirloom Quality', icon: 'anchor' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Finish', price: 12999, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 97,
      tags: ['Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://woodencrest.com/cdn/shop/files/199.webp?v=1733321864',
          alt: 'Solid Wood Console Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak Finish', hex: '#87441F' }],
    },
    seo: {
      metaTitle: 'Classic Solid Wood Console Table | Teak Finish | Urban Home',
      metaDescription:
        'Exquisite solid wood console table with a rich teak finish. A timeless statement piece for luxury homes.',
      keywords: ['solid wood console', 'teak furniture', 'classic entry table', 'wooden console'],
    },
    description:
      'Premium solid wood console table with a rich teak finish, designed to create a grand entrance for your home.',
    createdAt: '2024-11-18T10:00:00Z',
    updatedAt: '2024-11-18T10:00:00Z',
  },

  // 019. Luxury Marble Top Console Table
  {
    id: 'tab-019',
    sku: 'WH-TBL-CON-MAR',
    title: 'Luxury Marble Top Console Table',
    slug: 'luxury-marble-console-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'luxury', 'dining-room'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'console-table',
      subType: 'rectangular',
      style: 'luxury', // Specifications se taxonomy mein move kiya gaya
    },
    specifications: {
      material: 'Marble & Metal',
      tableType: 'console-table',
      dimensions: { length: 120, width: 35, height: 80, unit: 'cm' },
      weight: { value: 28, unit: 'kg' },
    },
    pricing: {
      mrp: 20999,
      sellingPrice: 17999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Carrara Marble Top', icon: 'star' },
      { id: 'f2', title: 'Gold PVD Accents', icon: 'award' },
      { id: 'f3', title: 'Luxury Statement', icon: 'trending-up' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'White Marble / Gold',
        price: 17999,
        inventoryCount: 5,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.7,
      reviewCount: 121,
      tags: ['New', 'Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://woodencrest.com/cdn/shop/files/Untitleddesign_1973ad53-a694-4c83-b738-fcfacdd7b0de.webp?v=1733324136',
          alt: 'Marble Console Table',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'White Marble', hex: '#F2F2F2' },
        { name: 'Gold', hex: '#D4AF37' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Marble Top Console Table | Gold Accent | Urban Home',
      metaDescription:
        'Sophisticated marble-top console with elegant gold accents. The perfect statement piece for high-end interiors.',
      keywords: ['marble console table', 'luxury hallway decor', 'gold entry table', 'marble top furniture'],
    },
    description:
      'Exquisite marble-top console with gold accents, a statement piece for luxury homes and grand interiors.',
    createdAt: '2024-11-19T10:00:00Z',
    updatedAt: '2024-11-19T10:00:00Z',
  },

  // 020. Compact Urban Console Table
  {
    id: 'tab-020',
    sku: 'WH-TBL-CON-CPT',
    title: 'Compact Urban Console Table',
    slug: 'compact-urban-console-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'console-table',
      subType: 'rectangular',
      style: 'urban', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Engineered Wood',
      tableType: 'console-table',
      dimensions: { length: 80, width: 25, height: 75, unit: 'cm' },
      weight: { value: 9, unit: 'kg' },
    },
    pricing: {
      mrp: 8499,
      sellingPrice: 6999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Space-Saving Design', icon: 'minimize' },
      { id: 'f2', title: 'Urban Oak Finish', icon: 'box' },
      { id: 'f3', title: 'Lightweight & Sturdy', icon: 'feather' },
    ],

    variants: [
      { variantId: 'v1', name: 'Oak Brown', price: 6999, inventoryCount: 0, availability: 'out_of_stock' },
    ],
    status: { rating: 4.1, reviewCount: 43, tags: [], isFeatured: false, availability: 'out_of_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2020/10/01/16/54/decoration-5619114_1280.jpg',
          alt: 'Compact Console Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Oak Brown', hex: '#8B5A2B' }],
    },
    seo: {
      metaTitle: 'Compact Urban Console Table | Small Space Solution | Urban Home',
      metaDescription:
        'Smart and compact console table for urban apartments. Designed for small hallways and multi-purpose use.',
      keywords: ['compact console', 'small space hallway table', 'apartment furniture', 'urban decor'],
    },
    description:
      'Smart and compact console table, specifically designed for urban hallways and small residential spaces.',
    createdAt: '2024-11-20T10:00:00Z',
    updatedAt: '2024-11-20T10:00:00Z',
  },

  // =============================== office and study table ============ //

  // 021. Modern Study Table
  {
    id: 'tab-021',
    sku: 'WH-TBL-STY-MOD',
    title: 'Modern Study Table',
    slug: 'modern-study-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['office', 'bedroom', 'study'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'study-table',
      subType: 'rectangular',
      style: 'modern', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Engineered Wood',
      tableType: 'study-table',
      seatingCapacity: 1,
      dimensions: { length: 110, width: 55, height: 75, unit: 'cm' },
      weight: { value: 22, unit: 'kg' },
    },
    pricing: {
      mrp: 15999,
      sellingPrice: 12999,
      currency: 'INR',
      discount: { value: 19, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Ergonomic Height', icon: 'height' },
      { id: 'f2', title: 'Walnut Finish', icon: 'palette' },
      { id: 'f3', title: 'Sturdy Legs', icon: 'shield' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Standard Walnut',
        price: 12999,
        inventoryCount: 20,
        availability: 'in_stock',
      },
      {
        variantId: 'v2',
        name: 'Walnut with Drawer',
        price: 14499,
        inventoryCount: 12,
        availability: 'in_stock',
      },
    ],
    status: { rating: 4.3, reviewCount: 84, tags: ['New'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2017/08/02/19/11/people-2572980_1280.jpg',
          alt: 'Modern Study Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Modern Walnut Study Table | Home Office Desk | Urban Home',
      metaDescription:
        'Boost productivity with our modern walnut finish study table. Ergonomically designed for long hours of focus and comfort.',
      keywords: ['study table', 'home office desk', 'walnut desk', 'ergonomic table'],
    },
    description:
      'A sleek and sturdy walnut finish study table designed for long working hours and deep focus. Perfect for home offices.',
    createdAt: '2024-11-21T10:00:00Z',
    updatedAt: '2024-11-21T10:00:00Z',
  },

  // 022. Computer Study Desk
  {
    id: 'tab-022',
    sku: 'WH-TBL-CMP-DES',
    title: 'Computer Study Desk',
    slug: 'computer-study-desk',
    brand: 'Urban Home',
    taxonomy: {
      room: ['office', 'study'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'study-table',
      subType: 'rectangular',
      style: 'contemporary', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Engineered Wood',
      tableType: 'computer-table',
      seatingCapacity: 1,
      dimensions: { length: 120, width: 60, height: 75, unit: 'cm' },
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
      { id: 'f1', title: 'CPU Compartment', icon: 'cpu' },
      { id: 'f2', title: 'Cable Management', icon: 'zap' },
      { id: 'f3', title: 'Keyboard Tray', icon: 'monitor' },
    ],

    variants: [
      { variantId: 'v1', name: 'Oak Finish', price: 14999, inventoryCount: 15, availability: 'in_stock' },
      { variantId: 'v2', name: 'Arctic White', price: 14999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: {
      rating: 4.4,
      reviewCount: 102,
      tags: ['Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2017/08/10/05/18/home-2618511_1280.jpg',
          alt: 'Computer Study Desk',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Oak', hex: '#DEB887' },
        { name: 'White', hex: '#FFFFFF' },
      ],
    },
    seo: {
      metaTitle: 'Computer Study Desk with CPU Storage | Office Table | Urban Home',
      metaDescription:
        'Spacious computer desk featuring dedicated CPU storage and cable management. Ideal for professional and student setups.',
      keywords: ['computer desk', 'pc table', 'office desk with storage', 'computer workstation'],
    },
    description:
      'Spacious computer desk with a designated area for CPU and smart cable management for a clean, professional setup.',
    createdAt: '2024-11-22T10:00:00Z',
    updatedAt: '2024-11-22T10:00:00Z',
  },

  // 023. Compact Writing Table
  {
    id: 'tab-023',
    sku: 'WH-TBL-WRT-MIN',
    title: 'Compact Writing Table',
    slug: 'compact-writing-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'office', 'study'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'study-table',
      subType: 'rectangular',
      style: 'minimal', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Engineered Wood',
      tableType: 'writing-table',
      seatingCapacity: 1,
      dimensions: { length: 90, width: 45, height: 75, unit: 'cm' },
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
      { id: 'f1', title: 'Minimal Footprint', icon: 'maximize' },
      { id: 'f2', title: 'Modern White Finish', icon: 'sun' },
      { id: 'f3', title: 'Easy to Move', icon: 'move' },
    ],

    variants: [
      { variantId: 'v1', name: 'Arctic White', price: 9999, inventoryCount: 25, availability: 'in_stock' },
    ],
    status: { rating: 4.1, reviewCount: 61, tags: [], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2020/08/25/18/28/workplace-5517744_1280.jpg',
          alt: 'Compact Writing Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Compact Writing Table | Minimal White Desk | Urban Home',
      metaDescription:
        'Perfect for small rooms, this minimal white writing table offers a clutter-free workspace. Sleek and durable engineered wood.',
      keywords: ['writing table', 'small desk', 'minimalist desk', 'white study table'],
    },
    description:
      'Perfect for small rooms, this minimal white writing table offers a clean workspace without clutter.',
    createdAt: '2024-11-23T10:00:00Z',
    updatedAt: '2024-11-23T10:00:00Z',
  },

  // 024. Foldable Study Table
  {
    id: 'tab-024',
    sku: 'WH-TBL-FLD-URB',
    title: 'Foldable Study Table',
    slug: 'foldable-study-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'study'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'study-table',
      subType: 'rectangular',
      style: 'urban', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Engineered Wood & Metal',
      tableType: 'foldable-table',
      seatingCapacity: 1,
      dimensions: { length: 80, width: 50, height: 75, unit: 'cm' },
      weight: { value: 10, unit: 'kg' },
    },
    pricing: {
      mrp: 10999,
      sellingPrice: 8999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Foldable Design', icon: 'layers' },
      { id: 'f2', title: 'No Assembly Required', icon: 'check-circle' },
      { id: 'f3', title: 'Portable', icon: 'briefcase' },
    ],

    variants: [
      { variantId: 'v1', name: 'Urban Brown', price: 8999, inventoryCount: 18, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 58, tags: ['New'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_1280.jpg',
          alt: 'Foldable Study Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Brown', hex: '#8B4513' }],
    },
    seo: {
      metaTitle: 'Foldable Study Table | Portable Desk for Students | Urban Home',
      metaDescription:
        'Space-saving foldable study table. No assembly required. Ideal for students and compact apartment living.',
      keywords: ['foldable desk', 'portable study table', 'space saving desk', 'student table'],
    },
    description:
      'Space-saving foldable design. Tuck it away when not in use. Ideal for students and small apartments.',
    createdAt: '2024-11-24T10:00:00Z',
    updatedAt: '2024-11-24T10:00:00Z',
  },

  // 025. Wall Mounted Study Desk
  {
    id: 'tab-025',
    sku: 'WH-TBL-WAL-MTD',
    title: 'Wall Mounted Study Desk',
    slug: 'wall-mounted-study-desk',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'office', 'study'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'study-table',
      subType: 'rectangular',
      style: 'modern', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Engineered Wood',
      tableType: 'wall-mounted-desk',
      seatingCapacity: 1,
      dimensions: { length: 100, width: 50, height: 60, unit: 'cm' },
      weight: { value: 15, unit: 'kg' },
    },
    pricing: {
      mrp: 13999,
      sellingPrice: 10999,
      currency: 'INR',
      discount: { value: 21, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Zero Floor Space', icon: 'home' },
      { id: 'f2', title: 'Built-in Shelves', icon: 'grid' },
      { id: 'f3', title: 'Heavy Duty Mounts', icon: 'anchor' },
    ],

    variants: [
      { variantId: 'v1', name: 'Classic Teak', price: 10999, inventoryCount: 12, availability: 'in_stock' },
      { variantId: 'v2', name: 'Modern Black', price: 11499, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      rating: 4.5,
      reviewCount: 96,
      tags: ['Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2015/10/09/20/37/library-979896_1280.jpg',
          alt: 'Wall Mounted Study Desk',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak', hex: '#964B00' }],
    },
    seo: {
      metaTitle: 'Wall Mounted Study Desk | Floating Office Desk | Urban Home',
      metaDescription:
        'Maximize floor space with our floating wall-mounted study desk. Built-in shelves for extra storage. Perfect for tiny homes.',
      keywords: [
        'wall mounted desk',
        'floating study table',
        'space saving furniture',
        'wall desk with shelves',
      ],
    },
    description:
      'Maximum utility with zero floor space. This teak finish wall desk is a modern marvel for tiny homes and minimal setups.',
    createdAt: '2024-11-25T10:00:00Z',
    updatedAt: '2024-11-25T10:00:00Z',
  },
  // =============================== Dining Tables ============ //
  // 026. Modern 4 Seater Dining Table
  {
    id: 'tab-026',
    sku: 'WH-DIN-TBL-MOD4',
    title: 'Modern 4 Seater Dining Table',
    slug: 'modern-4-seater-dining-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'dining-set',
      subCategory: '4-seater-dining-set',
      subType: 'rectangular', // Specifications ke 'shape' se map kiya gaya
      style: 'modern', // Specifications se shift kiya gaya
    },
    specifications: {
      material: 'Engineered Wood',
      tableType: 'dining-table',
      seatingCapacity: 4,
      dimensions: { length: 120, width: 75, height: 75, unit: 'cm' },
      weight: { value: 35, unit: 'kg' },
    },
    pricing: {
      mrp: 29999,
      sellingPrice: 24999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Seats 4 Comfortably', icon: 'users' },
      { id: 'f2', title: 'Rich Walnut Finish', icon: 'palette' },
      { id: 'f3', title: 'Durable Build', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Finish', price: 24999, inventoryCount: 10, availability: 'in_stock' },
      { variantId: 'v2', name: 'Dark Oak Finish', price: 25999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: { rating: 4.4, reviewCount: 120, tags: ['New'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2017/04/27/08/18/champagne-2264811_1280.jpg',
          alt: 'Modern 4 Seater Dining Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut', hex: '#6B4423' }],
    },
    seo: {
      metaTitle: 'Modern 4 Seater Dining Table | Walnut Finish | Urban Home',
      metaDescription:
        'Upgrade your dining experience with our stylish 4-seater walnut dining table. Perfect blend of modern design and everyday durability.',
      keywords: [
        '4 seater dining table',
        'walnut dining table',
        'modern dining furniture',
        'rectangular dining table',
      ],
    },
    description:
      'Stylish 4-seater table with a rich walnut finish. Combines modern aesthetics with everyday durability for urban homes.',
    createdAt: '2025-01-01T10:00:00Z',
    updatedAt: '2025-01-01T10:00:00Z',
  },

  // 027. Solid Wood 6 Seater Dining Table
  {
    id: 'tab-027',
    sku: 'WH-DIN-TBL-SLD6',
    title: 'Solid Wood 6 Seater Dining Table',
    slug: 'solid-wood-6-seater-dining-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'dining-set',
      subCategory: '6-seater-dining-set',
      subType: 'rectangular', // Specifications ke 'shape' se map kiya gaya
      style: 'classic', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Sheesham Wood',
      tableType: 'dining-table',
      seatingCapacity: 6,
      dimensions: { length: 180, width: 90, height: 75, unit: 'cm' },
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
      { id: 'f1', title: 'Premium Sheesham Wood', icon: 'tree' },
      { id: 'f2', title: 'Large Family Size', icon: 'users' },
      { id: 'f3', title: 'Handcrafted Finish', icon: 'award' },
    ],

    variants: [
      { variantId: 'v1', name: 'Honey Finish', price: 38999, inventoryCount: 8, availability: 'in_stock' },
      { variantId: 'v2', name: 'Teak Finish', price: 38999, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 210,
      tags: ['Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2020/04/18/08/06/furniture-5058151_1280.jpg',
          alt: 'Solid Wood 6 Seater Dining Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak Finish', hex: '#8B4513' }],
    },
    seo: {
      metaTitle: 'Solid Wood 6 Seater Dining Table | Sheesham Wood | Urban Home',
      metaDescription:
        'Premium Sheesham wood 6-seater dining table. Handcrafted for large family gatherings and timeless dining room elegance.',
      keywords: [
        '6 seater dining table',
        'solid wood dining table',
        'sheesham wood furniture',
        'large dining table',
      ],
    },
    description:
      'Premium Sheesham wood table for large family gatherings. A handcrafted centerpiece designed for durability and class.',
    createdAt: '2025-01-02T10:00:00Z',
    updatedAt: '2025-01-02T10:00:00Z',
  },

  // 028. Compact 2 Seater Dining Table
  {
    id: 'tab-028',
    sku: 'WH-DIN-TBL-CPT2',
    title: 'Compact 2 Seater Dining Table',
    slug: 'compact-2-seater-dining-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'kitchen'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'dining-set',
      subCategory: '4-seater-dining-set',
      subType: 'square', // Square shape ko taxonomy mein map kiya gaya
      style: 'minimal', // Specifications se shift kiya gaya
    },
    specifications: {
      material: 'Engineered Wood',
      tableType: 'dining-table',
      seatingCapacity: 2,
      dimensions: { length: 75, width: 75, height: 75, unit: 'cm' },
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
      { id: 'f1', title: 'Space Saver', icon: 'minimize' },
      { id: 'f2', title: 'Studio Friendly', icon: 'home' },
      { id: 'f3', title: 'Minimalist Design', icon: 'zap' },
    ],

    variants: [
      { variantId: 'v1', name: 'Standard Oak', price: 15999, inventoryCount: 20, availability: 'in_stock' },
    ],
    status: { rating: 4.2, reviewCount: 76, tags: [], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2021/11/19/07/45/interior-design-6808303_1280.jpg',
          alt: 'Compact 8 Seater Dining Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Light Oak', hex: '#D2B48C' }],
    },
    seo: {
      metaTitle: 'Compact 2 Seater Dining Table | Small Space Solution | Urban Home',
      metaDescription:
        'Perfect for studio apartments and small kitchens. Compact 2-seater dining table with a clean oak finish.',
      keywords: [
        '2 seater dining table',
        'small dining table',
        'studio apartment furniture',
        'kitchen table',
      ],
    },
    description:
      'Space-saving table, perfect for studio apartments or kitchens. Clean and minimal design for modern living.',
    createdAt: '2025-01-03T10:00:00Z',
    updatedAt: '2025-01-03T10:00:00Z',
  },

  // 029. Glass Top Dining Table
  {
    id: 'tab-029',
    sku: 'WH-DIN-TBL-GLS4',
    title: 'Glass Top Dining Table',
    slug: 'glass-top-dining-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'dining-set',
      subCategory: '4-seater-dining-set',
      subType: 'round', // Gole format follow kiya gaya hai
      style: 'contemporary', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Glass & Metal',
      tableType: 'dining-table',
      seatingCapacity: 4,
      dimensions: {
        diameter: 110, // Square values ko diameter mein badla gaya
        height: 75,
        unit: 'cm',
      },
      weight: { value: 30, unit: 'kg' },
    },
    pricing: {
      mrp: 38999,
      sellingPrice: 32999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Tempered Safety Glass', icon: 'shield' },
      { id: 'f2', title: 'Chrome Finished Legs', icon: 'star' },
      { id: 'f3', title: 'Modern Round Shape', icon: 'circle' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Clear Glass / Chrome',
        price: 32999,
        inventoryCount: 15,
        availability: 'in_stock',
      },
    ],
    status: { rating: 4.3, reviewCount: 98, tags: ['New'], isFeatured: false, availability: 'in_stock' },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2015/10/26/00/00/dining-room-1006525_1280.jpg',
          alt: 'Glass Top 4-Seater Dining Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Clear Glass', hex: '#F0F8FF' }],
    },
    seo: {
      metaTitle: 'Round Glass Top Dining Table | Chrome Finish | Urban Home',
      metaDescription:
        'Elegant tempered glass top dining table with a sturdy chrome metal frame. Modern round design seats 4 comfortably.',
      keywords: ['glass dining table', 'round dining table', '4 seater glass table', 'modern dining room'],
    },
    description:
      'Elegant tempered glass top table with a sturdy metal frame, perfect for a contemporary dining room setup.',
    createdAt: '2025-01-04T10:00:00Z',
    updatedAt: '2025-01-04T10:00:00Z',
  },

  // 030. Extendable Dining Table
  {
    id: 'tab-030',
    sku: 'WH-DIN-TBL-EXT',
    title: 'Extendable Dining Table',
    slug: 'extendable-dining-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'dining-set',
      subCategory: '6-seater-dining-set',
      subType: 'rectangular', // Extendable rectangle format
      style: 'classic', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Solid Wood',
      tableType: 'dining-table',
      seatingCapacity: 8,
      dimensions: { length: 220, width: 100, height: 75, unit: 'cm' },
      weight: { value: 65, unit: 'kg' },
    },
    pricing: {
      mrp: 49999,
      sellingPrice: 42999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Expandable Surface', icon: 'maximize' },
      { id: 'f2', title: 'Solid Cherry Wood', icon: 'tree' },
      { id: 'f3', title: 'Seats up to 8', icon: 'users' },
    ],

    variants: [
      { variantId: 'v1', name: 'Cherry Wood', price: 42999, inventoryCount: 6, availability: 'in_stock' },
    ],
    status: {
      rating: 4.5,
      reviewCount: 156,
      tags: ['Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2022/03/11/07/21/interior-design-7061458_1280.jpg',
          alt: 'Extendable 6-Seater Dining Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Cherry Wood', hex: '#8B0000' }],
    },
    seo: {
      metaTitle: 'Extendable Dining Table | Cherry Wood 8 Seater | Urban Home',
      metaDescription:
        'Hosting-friendly extendable dining table in solid cherry wood. Seamlessly expands to seat up to 8 guests for large gatherings.',
      keywords: [
        'extendable dining table',
        '8 seater dining table',
        'cherry wood table',
        'expandable furniture',
      ],
    },
    description:
      'Hosting-friendly table that extends to seat up to 8 guests. Crafted from solid cherry wood for a premium feel.',
    createdAt: '2025-01-05T10:00:00Z',
    updatedAt: '2025-01-05T10:00:00Z',
  },

  // 031. dining set Table
  {
    id: 'tab-031',
    sku: 'WH-TBL-CLS-TEK',
    title: 'Classic Solid Wood Coffee Table',
    slug: 'classic-solid-wood-coffee-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table', // Title/Specs ke mutabiq fix kiya gaya
      subCategory: 'coffee-table', // Title/Specs ke mutabiq fix kiya gaya
      subType: 'rectangular',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood',
      tableType: 'coffee-table',
      dimensions: { length: 100, width: 60, height: 45, unit: 'cm' },
      weight: { value: 18, unit: 'kg' },
    },
    pricing: {
      mrp: 15999,
      sellingPrice: 12999,
      currency: 'INR',
      discount: { value: 19, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Solid Sheesham Wood', icon: 'tree' },
      { id: 'f2', title: 'Handcrafted Detail', icon: 'tool' },
      { id: 'f3', title: 'Antique Finish', icon: 'sun' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Finish', price: 12999, inventoryCount: 12, availability: 'in_stock' },
      { variantId: 'v2', name: 'Rosewood Finish', price: 13999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 138,
      tags: ['Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2015/09/29/21/32/furniture-964584_1280.jpg',
          alt: 'Solid Wood Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak Finish', hex: '#87441F' }],
    },
    seo: {
      metaTitle: 'Classic Solid Wood Coffee Table | Sheesham Wood | Urban Home',
      metaDescription:
        'Handcrafted solid wood coffee table with a timeless teak finish. Durable and elegant for traditional homes.',
      keywords: ['solid wood table', 'sheesham coffee table', 'classic furniture', 'teak coffee table'],
    },
    description:
      'Durable solid wood coffee table with a timeless teak finish and high-quality handcrafted grain.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
  // 032. Garden Dining Table
  {
    id: 'tab-032',
    sku: 'WH-TBL-STG-032',
    title: 'Garden Dining Table',
    slug: 'garden-dining-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['outdoor', 'dining-room'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'dining-set',
      subCategory: '10-seater-dining-set',
      subType: 'rectangular',
      style: 'classic', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Solid Wood',
      tableType: 'dining-table',
      seatingCapacity: 6,
      dimensions: { length: 180, width: 90, height: 75, unit: 'cm' },
      weight: { value: 42, unit: 'kg' },
    },
    pricing: {
      mrp: 28999,
      sellingPrice: 24999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: '6-Seater Capacity', icon: 'users' },
      { id: 'f2', title: 'Solid Acacia Wood', icon: 'tree' },
      { id: 'f3', title: 'UV Protected Finish', icon: 'sun' },
    ],

    variants: [
      { variantId: 'v1', name: 'Honey Brown', price: 24999, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: {
      rating: 4.5,
      reviewCount: 88,
      tags: ['Best Seller'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2018/07/01/21/50/table-3510523_1280.jpg',
          alt: 'Garden Dining Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Brown', hex: '#8B4513' }],
    },
    seo: {
      metaTitle: 'Solid Wood Garden Dining Table | 6 Seater Outdoor Table',
      metaDescription:
        'Spacious 6-seater wooden garden dining table. Handcrafted from solid wood with weather-resistant treatment for outdoor feasts.',
      keywords: ['garden dining table', '6 seater outdoor table', 'wooden patio table', 'outdoor furniture'],
    },
    description:
      'Large 6-seater wooden table designed for outdoor garden parties and feasts. Treated for UV and moisture resistance.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 033. Round Patio Table
  {
    id: 'tab-033',
    sku: 'WH-TBL-STG-033',
    title: 'Round Patio Table',
    slug: 'round-patio-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['outdoor', 'patio', 'balcony'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'dining-set',
      subCategory: 'outdoor-dining-set',
      subType: 'round',
      style: 'minimal',
    },
    specifications: {
      material: 'Wrought Iron',
      tableType: 'Outdoor Dining Table',
      seatingCapacity: 4,
      dimensions: { diameter: 100, height: 75, unit: 'cm' },
      weight: { value: 18, unit: 'kg' },
    },
    pricing: {
      mrp: 16999,
      sellingPrice: 13999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Sturdy Pedestal Base', icon: 'anchor' },
      { id: 'f2', title: 'Compact Circular Top', icon: 'circle' },
      { id: 'f3', title: 'Anti-Skid Feet', icon: 'target' },
      { id: 'f4', title: 'Weather Resistant', icon: 'cloud-rain' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Slate Grey',
        price: 13999,
        inventoryCount: 20,
        availability: 'in_stock',
      },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 20,
      rating: 4.2,
      reviewCount: 51,
      tags: ['Outdoor Special', 'Best for Balcony'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2013/08/15/04/18/teak-172642_1280.jpg',
          alt: 'Round Patio Table for Outdoor Dining',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Slate Grey', hex: '#708090' }],
    },
    seo: {
      metaTitle: 'Round Patio Table | Metal Outdoor Dining Table | Urban Home',
      metaDescription:
        'Sturdy round metal patio table seating 4 comfortably. Elegant slate grey finish, perfect for brunch on the terrace or balcony.',
      keywords: ['patio table', 'round outdoor table', 'terrace furniture', '4 seater patio table'],
    },
    description:
      'Sturdy round metal table, perfect for brunch on the patio or terrace. Features a stable pedestal base designed for uneven outdoor surfaces and weather-resistant finish.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z', // Updated date
  },

  // 034. Foldable Outdoor Table

  {
    id: 'tab-034',
    sku: 'WH-TBL-STG-034',
    title: 'Classic Foldable Garden Bistro Set',
    slug: 'classic-foldable-garden-bistro-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['outdoor', 'garden', 'balcony'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'dining-set',
      subCategory: 'outdoor-dining-set',
      subType: 'square', // tableShape se map kiya gaya
      style: 'rustic',
    },
    specifications: {
      material: 'Treated Acacia Wood & Metal',
      seatingCapacity: 4,
      includes: ['1 Folding Table', '4 Folding Chairs'],
      dimensions: { length: 80, width: 80, height: 75, unit: 'cm' },
      weight: { value: 22, unit: 'kg' },
    },
    pricing: {
      mrp: 18999,
      sellingPrice: 14499,
      currency: 'INR',
      discount: { value: 24, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Space Saving Foldable', icon: 'move' },
      { id: 'f2', title: 'Rust-Resistant Coating', icon: 'shield' },
      { id: 'f3', title: 'Lightweight & Portable', icon: 'zap' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Natural Wood',
        price: 14499,
        inventoryCount: 15,
        availability: 'in_stock',
      },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 15,
      rating: 4.5,
      reviewCount: 112,
      tags: ['Foldable', 'Space Saver'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1754376148591-67e80b71b6bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Folding Garden Bistro Set',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Natural Brown', hex: '#8B4513' }],
    },
    seo: {
      metaTitle: 'Classic Foldable Garden Bistro Set | Portable Outdoor Dining',
      metaDescription:
        'Compact and stylish folding garden set. Made with treated wood and metal, ideal for small balconies or garden brunch.',
      keywords: ['folding garden set', 'bistro set', 'balcony furniture', 'small dining set outdoor'],
    },
    description:
      'Classic slatted wood design that folds away for easy storage. Ideal for garden brunches or small balcony spaces where portability is key.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 035. Outdoor Side Table
  {
    id: 'tab-035',
    sku: 'WH-TBL-STG-035',
    title: 'Outdoor Side Table',
    slug: 'outdoor-side-table',
    brand: 'Urban Home',
    taxonomy: {
      room: ['outdoor', 'balcony', 'patio'],
      mainCategory: 'furniture',
      productType: 'utility',
      category: 'table',
      subCategory: 'outdoor-side-table',
      subType: 'square', // Dimensions ke hisaab se set kiya gaya
      style: 'modern', // Specifications se taxonomy mein shift kiya gaya
    },
    specifications: {
      material: 'Powder Coated Metal',
      tableType: 'side-table',
      dimensions: { length: 40, width: 40, height: 50, unit: 'cm' },
      weight: { value: 4, unit: 'kg' },
    },
    pricing: {
      mrp: 5999,
      sellingPrice: 4999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Compact Size', icon: 'minimize' },
      { id: 'f2', title: 'All Weather Use', icon: 'cloud-lightning' },
      { id: 'f3', title: 'Anti-Rust Coating', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Matte Black', price: 4999, inventoryCount: 45, availability: 'in_stock' },
    ],
    status: { rating: 4.1, reviewCount: 44, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2014/05/21/14/54/end-table-349680_1280.jpg',
          alt: 'Outdoor Side Table',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Black', hex: '#000000' }],
    },
    seo: {
      metaTitle: 'Outdoor Side Table | Small Metal End Table | Urban Home',
      metaDescription:
        'Compact and durable metal side table for balconies and patios. All-weather resistant matte black finish for a modern look.',
      keywords: ['outdoor side table', 'balcony end table', 'metal side table', 'small garden table'],
    },
    description:
      'Compact metal side table to keep your drinks, phone, and books handy while relaxing outdoors. Built with weather-resistant coating.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
]
