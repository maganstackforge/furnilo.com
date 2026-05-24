export const chairsData = [
  // 001. Modern Office Chair

  {
    id: 'chr-001',
    sku: 'WH-CHR-OFC-MOD',
    title: 'Modern Ergonomic Office Chair',
    slug: 'modern-office-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['office', 'study', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'chair',
      subCategory: 'office-chair',
      subType: 'ergonomic', // Chair functionality ke hisaab se define kiya gaya
      style: 'modern',
    },
    specifications: {
      material: 'High-Grade Mesh & Reinforced Nylon Base',
      chairType: 'Office/Task Chair',
      maxLoad: '120 kg',
      dimensions: { length: 65, width: 65, height: 110, unit: 'cm' },
      weight: { value: 12, unit: 'kg' },
    },
    pricing: {
      mrp: 8999,
      sellingPrice: 7499,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Lumbar Support', icon: 'shield-check' },
      { id: 'f2', title: 'Gas Lift Height Adjust', icon: 'arrow-up-down' },
      { id: 'f3', title: '360° Swivel Base', icon: 'rotate-cw' },
      { id: 'f4', title: 'Breathable Mesh', icon: 'wind' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Midnight Black',
        price: 7499,
        inventoryCount: 25,
        availability: 'in_stock',
      },
      {
        variantId: 'v2',
        name: 'Space Grey',
        price: 7699,
        inventoryCount: 15,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.4,
      reviewCount: 60,
      tags: ['Ergonomic', 'Bestseller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2024/12/31/18/06/ai-generated-9302778_1280.jpg',
          alt: 'Modern Ergonomic Office Chair with Mesh Back',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Black', hex: '#000000' },
        { name: 'Gray', hex: '#808080' },
      ],
    },
    seo: {
      metaTitle: 'Modern Ergonomic Office Chair | Height Adjustable | Urban Home',
      metaDescription:
        'Shop the best ergonomic office chair with breathable mesh and lumbar support. Perfect for home office and long study hours.',
      keywords: ['office chair', 'ergonomic chair', 'computer chair', 'mesh chair'],
    },
    description:
      'Designed for productivity. This ergonomic mesh office chair features adjustable height and superior lumbar support to keep you comfortable during long working hours.',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 002. Wooden Dining Chair
  {
    id: 'chr-002',
    sku: 'WH-CHR-DIN-WOD',
    title: 'Solid Teak Wooden Dining Chair',
    slug: 'wooden-dining-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'kitchen'],
      mainCategory: 'furniture',
      productType: 'seating', // Sofa/Chair logic alignment
      category: 'chair',
      subCategory: 'dining-chair',
      subType: 'armless',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Teak Wood',
      chairType: 'Dining Chair',
      finish: 'Matte Walnut',
      dimensions: { length: 45, width: 45, height: 90, unit: 'cm' },
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
      { id: 'f1', title: 'Solid Wood Build', icon: 'tree' },
      { id: 'f2', title: 'Classic Walnut Finish', icon: 'sparkles' },
      { id: 'f3', title: 'Anti-Scratch Pads', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Finish', price: 4999, inventoryCount: 30, availability: 'in_stock' },
      { variantId: 'v2', name: 'Natural Oak', price: 5199, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: {
      rating: 4.2,
      reviewCount: 40,
      tags: ['Classic', 'Durable'],
      isFeatured: false,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1683141419137-db47132b8df4?q=80&w=915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Wooden Dining Chairs',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Brown', hex: '#8B4513' },
        { name: 'Beige', hex: '#F5F5DC' },
      ],
    },
    seo: {
      metaTitle: 'Solid Wood Dining Chair | Classic Teak Furniture',
      metaDescription:
        'Elegant and sturdy wooden dining chair made from premium teak wood. Ideal for classic dining room setups.',
      keywords: ['dining chair', 'wooden chair', 'teak wood furniture', 'kitchen chair'],
    },
    description:
      'Bring timeless elegance to your dining area with our handcrafted solid wood chair. Built to last for generations.',
    createdAt: '2024-06-02T10:00:00Z',
    updatedAt: '2024-06-02T10:00:00Z',
  },

  // 003. Lounge Fabric Chair
  {
    id: 'chr-003',
    sku: 'WH-CHR-LOU-FAB',
    title: 'Contemporary Lounge Fabric Chair',
    slug: 'lounge-fabric-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'chair',
      subCategory: 'accent-chair',
      subType: 'upholstered',
      style: 'contemporary',
    },
    specifications: {
      material: 'Velvet Upholstery & Ash Wood Legs',
      chairType: 'Lounge / Accent Chair',
      seatDepth: '55 cm',
      dimensions: { length: 70, width: 75, height: 90, unit: 'cm' },
      weight: { value: 15, unit: 'kg' },
    },
    pricing: {
      mrp: 10999,
      sellingPrice: 8999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Premium Velvet Fabric', icon: 'layers' },
      { id: 'f2', title: 'High-Density Foam', icon: 'cloud' },
      { id: 'f3', title: 'Tapered Wooden Legs', icon: 'pylon' },
    ],

    variants: [
      { variantId: 'v1', name: 'Royal Gray', price: 8999, inventoryCount: 20, availability: 'in_stock' },
      { variantId: 'v2', name: 'Dusty Rose', price: 9299, inventoryCount: 8, availability: 'in_stock' },
    ],
    status: {
      rating: 4.5,
      reviewCount: 55,
      tags: ['Comfort Choice', 'Featured'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1664298054807-1d520a38011f?q=80&w=821&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Lounge Fabric Chair',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Gray', hex: '#808080' },
        { name: 'Beige', hex: '#F5F5DC' },
      ],
    },
    seo: {
      metaTitle: 'Comfortable Lounge Fabric Chair | Modern Accent Chair',
      metaDescription:
        'Upgrade your living room with our premium velvet lounge chair. Extra padded for maximum comfort and style.',
      keywords: ['lounge chair', 'accent chair', 'bedroom chair', 'velvet seating'],
    },
    description:
      'The perfect spot to unwind. Our lounge chair combines contemporary design with plush high-density foam for an unmatched seating experience.',
    createdAt: '2024-06-03T10:00:00Z',
    updatedAt: '2024-06-03T10:00:00Z',
  },

  // 004. Bar Stool Metal Chair
  {
    id: 'chr-004',
    sku: 'WH-CHR-BAR-MET',
    title: 'Industrial Metal Bar Stool',
    slug: 'bar-stool-metal-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['kitchen', 'bar'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'chair',
      subCategory: 'bar-stool',
      subType: 'high-stool',
      style: 'industrial',
    },
    specifications: {
      material: 'Mild Steel & PU Leather',
      chairType: 'Bar Stool',
      seatHeight: '75 cm',
      dimensions: { length: 40, width: 40, height: 75, unit: 'cm' },
      weight: { value: 6, unit: 'kg' },
    },
    pricing: {
      mrp: 4999,
      sellingPrice: 3999,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Powder-Coated Steel', icon: 'shield' },
      { id: 'f2', title: 'Faux Leather Seat', icon: 'circle' },
      { id: 'f3', title: 'Footrest Included', icon: 'minus' },
    ],

    variants: [
      { variantId: 'v1', name: 'Matte Black', price: 3999, inventoryCount: 25, availability: 'in_stock' },
    ],
    status: {
      rating: 4.1,
      reviewCount: 30,
      tags: ['Industrial', 'Minimal'],
      isFeatured: false,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1661962720375-ce9097fb4d69?q=80&w=1010&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Industrial Bar Stool',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Black', hex: '#000000' }],
    },
    seo: {
      metaTitle: 'Industrial Metal Bar Stool | Kitchen Island Chair',
      metaDescription:
        'Sleek and durable industrial bar stool with a comfortable faux leather seat. Perfect for home bars and kitchen islands.',
      keywords: ['bar stool', 'metal bar chair', 'industrial stool', 'kitchen seating'],
    },
    description:
      'Add an urban edge to your home bar. This industrial-style stool features a rugged steel frame and a cushioned leatherette seat.',
    createdAt: '2026-01-15T10:00:00Z', // Updated to current year
    updatedAt: '2026-01-15T10:00:00Z',
  },

  // 005. Recliner Comfort Chair
  {
    id: 'chr-005',
    sku: 'WH-CHR-REL-RCN',
    title: 'Luxury Leather Recliner Chair',
    slug: 'recliner-comfort-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'home-theater'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'chair',
      subCategory: 'recliner-chair',
      subType: 'manual-recliner', // functionality ke hisaab se map kiya gaya
      style: 'luxury',
    },
    specifications: {
      material: 'Genuine Leatherette & Iron Frame',
      chairType: 'Manual Recliner',
      reclineAngle: '160 Degrees',
      dimensions: { length: 90, width: 80, height: 100, unit: 'cm' },
      weight: { value: 20, unit: 'kg' },
    },
    pricing: {
      mrp: 15999,
      sellingPrice: 13499,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Smooth Manual Recline', icon: 'settings' },
      { id: 'f2', title: 'Ergonomic Armrests', icon: 'users' },
      { id: 'f3', title: 'Full Body Padding', icon: 'database' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Chocolate Brown',
        price: 13499,
        inventoryCount: 12,
        availability: 'in_stock',
      },
      { variantId: 'v2', name: 'Jet Black', price: 13999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 70,
      tags: ['Premium', 'Top Rated'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1733760125597-50af3d179538?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Recliner Chair',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Brown', hex: '#8B4513' },
        { name: 'Black', hex: '#000000' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Manual Recliner Chair | Home Theater Seating',
      metaDescription:
        'Experience ultimate relaxation with our luxury leatherette recliner. Perfect for movies and afternoon naps.',
      keywords: ['recliner chair', 'leather recliner', 'comfortable lounge', 'home theater chair'],
    },
    description:
      'The ultimate relaxation machine. Our luxury recliner offers multiple reclining positions and thick padding for full-body support.',
    createdAt: '2024-06-05T10:00:00Z',
    updatedAt: '2024-06-05T10:00:00Z',
  },
  // 006. Upholstered Dining Chair
  {
    id: 'chr-006',
    sku: 'WH-CHR-DIN-UPH',
    title: 'Modern Upholstered Dining Chair',
    slug: 'upholstered-dining-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'bedroom', 'office'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'chair',
      subCategory: 'dining-chair',
      subType: 'upholstered', // Frame aur fabric ke basis par logic
      style: 'modern',
    },
    specifications: {
      material: 'Premium Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 1,
      dimensions: { length: 45, width: 50, height: 95, unit: 'cm' },
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
      { id: 'f1', title: 'High Density Foam', icon: 'sofa' },
      { id: 'f2', title: 'Solid Wood Frame', icon: 'box' },
      { id: 'f3', title: 'Ergonomic Support', icon: 'user-check' },
    ],

    variants: [
      { variantId: 'v1', name: 'Standard Grey', price: 4999, inventoryCount: 45, availability: 'in_stock' },
    ],
    status: {
      rating: 4.3,
      reviewCount: 88,
      tags: ['New Arrival'],
      isFeatured: false,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2017/03/28/12/16/tables-2181979_1280.jpg',
          alt: 'Upholstered Dining Chair Grey',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Grey', hex: '#808080' }],
    },
    seo: {
      metaTitle: 'Buy Upholstered Dining Chair | Modern Fabric Chair | Urban Home',
      metaDescription:
        'High-quality upholstered dining chair with solid wood frame. Perfect for dining rooms or as an accent chair.',
      keywords: ['dining chair', 'upholstered chair', 'modern dining furniture', 'fabric accent chair'],
    },
    description:
      'High-quality upholstered chair featuring high-density foam for comfort. Works perfectly for dining or as a stylish accent chair in the bedroom.',
    createdAt: '2024-11-01T10:00:00Z',
    updatedAt: '2024-11-01T10:00:00Z',
  },

  // 007. Solid Wood Dining Chair
  {
    id: 'chr-007',
    sku: 'WH-CHR-DIN-SHEE',
    title: 'Solid Sheesham Wood Dining Chair',
    slug: 'solid-wood-dining-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'chair',
      subCategory: 'dining-chair',
      subType: 'solid-wood', // Material-based sub-type
      style: 'classic',
    },
    specifications: {
      material: 'Genuine Sheesham Wood',
      seatingCapacity: 1,
      dimensions: { length: 42, width: 45, height: 90, unit: 'cm' },
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
      { id: 'f1', title: 'Premium Sheesham Wood', icon: 'tree' },
      { id: 'f2', title: 'Durable Construction', icon: 'shield' },
      { id: 'f3', title: 'Natural Teak Finish', icon: 'droplet' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Natural Teak Finish',
        price: 6999,
        inventoryCount: 20,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.5,
      reviewCount: 134,
      tags: ['Best Seller'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2020/04/18/08/06/furniture-5058151_1280.jpg',
          alt: 'Solid Wood Dining Chair Natural Finish',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak', hex: '#8B4513' }],
    },
    seo: {
      metaTitle: 'Solid Sheesham Wood Dining Chair | Classic Furniture | Urban Home',
      metaDescription:
        'Timeless classic dining chair made from premium Sheesham wood. Natural finish and highly durable construction.',
      keywords: ['wooden dining chair', 'sheesham wood furniture', 'classic dining', 'solid wood chair'],
    },
    description:
      'Timeless classic dining chair made from premium Sheesham wood. Built to last for generations with a beautiful natural grain finish.',
    createdAt: '2024-11-02T10:00:00Z',
    updatedAt: '2024-11-02T10:00:00Z',
  },

  // 008. Wooden Dining Bench
  {
    id: 'chr-008',
    sku: 'WH-CHR-DIN-BEN',
    title: 'Rustic Wooden Dining Bench',
    slug: 'wooden-dining-bench',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'living-room', 'entryway'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'chair',
      subCategory: 'dining-benche',
      subType: 'bench',
      style: 'rustic',
    },
    specifications: {
      material: 'Solid Mango Wood',
      seatingCapacity: 2,
      dimensions: { length: 120, width: 40, height: 45, unit: 'cm' },
      weight: { value: 15, unit: 'kg' },
    },
    pricing: {
      mrp: 14999,
      sellingPrice: 11999,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: '2-3 Seater Capacity', icon: 'users' },
      { id: 'f2', title: 'Rustic Aesthetics', icon: 'home' },
      { id: 'f3', title: 'Versatile Usage', icon: 'layers' },
    ],

    variants: [
      { variantId: 'v1', name: 'Dark Walnut', price: 11999, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: {
      rating: 4.1,
      reviewCount: 52,
      tags: ['Space Saver'],
      isFeatured: false,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2016/08/12/14/11/bach-ritterburg-1588647_1280.jpg',
          alt: 'Rustic Wooden Dining Bench',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Walnut', hex: '#5C4033' }],
    },
    seo: {
      metaTitle: 'Rustic Wooden Dining Bench | 3 Seater Bench | Urban Home',
      metaDescription:
        'Sturdy rustic wooden bench for dining or entryway seating. Made from solid wood with a rich walnut finish.',
      keywords: ['dining bench', 'wooden bench', 'entryway seating', '3 seater bench'],
    },
    description:
      'Rustic solid wood bench. Great for communal dining setups or as stylish entryway seating in your home.',
    createdAt: '2024-11-03T10:00:00Z',
    updatedAt: '2024-11-03T10:00:00Z',
  },

  // 009. Metal Frame Dining Chair
  {
    id: 'chr-009',
    sku: 'WH-CHR-DIN-MET',
    title: 'Industrial Metal Dining Chair',
    slug: 'metal-frame-dining-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'office'],
      mainCategory: 'furniture',
      productType: 'seating', // Standard seating pattern alignment
      category: 'chair',
      subCategory: 'dining-chair',
      subType: 'metal-frame', // Material-driven sub-type
      style: 'industrial',
    },
    specifications: {
      material: 'Reinforced Steel',
      seatingCapacity: 1,
      dimensions: { length: 40, width: 40, height: 85, unit: 'cm' },
      weight: { value: 6, unit: 'kg' },
    },
    pricing: {
      mrp: 5499,
      sellingPrice: 4599,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Powder Coated Metal', icon: 'shield' },
      { id: 'f2', title: 'Stackable Design', icon: 'copy' },
      { id: 'f3', title: 'Industrial Look', icon: 'settings' },
    ],

    variants: [
      { variantId: 'v1', name: 'Matte Black', price: 4599, inventoryCount: 50, availability: 'in_stock' },
    ],
    status: {
      rating: 4.0,
      reviewCount: 61,
      tags: ['New Arrival'],
      isFeatured: false,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1765842216337-fd8f70e37481?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Metal Frame Industrial Chair',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Matte Black', hex: '#282828' }],
    },
    seo: {
      metaTitle: 'Industrial Metal Dining Chair | Stackable Loft Chair | Urban Home',
      metaDescription:
        'Durable and stackable industrial metal chair. Ideal for modern dining spaces and home offices.',
      keywords: ['metal chair', 'industrial dining chair', 'stackable chair', 'loft style furniture'],
    },
    description:
      'Industrial metal chair with a sleek powder-coated finish. Sturdy enough for daily dining and cool enough for a home office.',
    createdAt: '2024-11-04T10:00:00Z',
    updatedAt: '2024-11-04T10:00:00Z',
  },

  // 010. Cushioned Dining Arm Chair
  {
    id: 'chr-010',
    sku: 'WH-CHR-DIN-ARM',
    title: 'Luxury Cushioned Dining Armchair',
    slug: 'cushioned-dining-arm-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'chair',
      subCategory: 'dining-chair',
      subType: 'armchair', // Design-based sub-type
      style: 'luxury',
    },
    specifications: {
      material: 'Velvet Fabric & Solid Wood Legs',
      seatingCapacity: 1,
      dimensions: { length: 55, width: 55, height: 100, unit: 'cm' },
      weight: { value: 12, unit: 'kg' },
    },
    pricing: {
      mrp: 10499,
      sellingPrice: 8999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Padded Armrests', icon: 'armchair' },
      { id: 'f2', title: 'Premium Upholstery', icon: 'feather' },
      { id: 'f3', title: 'Luxury Comfort', icon: 'star' },
    ],

    variants: [
      { variantId: 'v1', name: 'Royal Beige', price: 8999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: {
      rating: 4.6,
      reviewCount: 143,
      tags: ['Top Rated', 'Luxury'],
      isFeatured: true,
      availability: 'in_stock',
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1683120951444-3128a958c0c6?q=80&w=622&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Cushioned Dining Arm Chair',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Beige', hex: '#F5F5DC' }],
    },
    seo: {
      metaTitle: 'Luxury Dining Armchair | Cushioned Royal Chair | Urban Home',
      metaDescription:
        'Premium cushioned dining arm chair with thick padding. A royal addition to your dining space or bedroom.',
      keywords: ['armchair dining', 'luxury chair', 'cushioned seating', 'royal dining chair'],
    },
    description:
      'Premium arm chair with thick cushioning for maximum comfort. A royal addition to your dining space that combines luxury with ergonomic support.',
    createdAt: '2024-11-05T10:00:00Z',
    updatedAt: '2024-11-05T10:00:00Z',
  },

  // 011. Outdoor Wicker Chair
  {
    id: 'chair-011',
    sku: 'WH-CHR-WIC-BRW',
    title: 'Outdoor Wicker Chair',
    slug: 'outdoor-wicker-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['outdoor', 'living-room', 'balcony'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'chair',
      subCategory: 'outdoor-chair',
      subType: 'wicker-craft',
      style: 'modern',
    },
    specifications: {
      material: 'Hand-woven Wicker',
      frameMaterial: 'Powder Coated Aluminium',
      seatingCapacity: 1,
      dimensions: { length: 60, width: 65, height: 85, unit: 'cm' },
      weight: { value: 6, unit: 'kg' },
    },
    pricing: {
      mrp: 10999,
      sellingPrice: 8999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Weather Resistant', icon: 'cloud-sun' },
      { id: 'f2', title: 'Lightweight Frame', icon: 'feather' },
      { id: 'f3', title: 'UV Protected Wicker', icon: 'sun' },
    ],

    variants: [
      { variantId: 'v1', name: 'Brown Wicker', price: 8999, inventoryCount: 25, availability: 'in_stock' },
    ],
    status: { rating: 4.4, reviewCount: 72, tags: ['New'], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2015/03/12/14/29/screened-porch-670263_1280.jpg',
          alt: 'Outdoor Wicker Chair',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Brown', hex: '#8B4513' }],
    },
    seo: {
      metaTitle: 'Outdoor Wicker Chair | All-Weather Balcony Seating',
      metaDescription:
        'Durable and stylish hand-woven wicker chair with a lightweight aluminium frame. Perfect for balconies, patios, and outdoor lounging.',
      keywords: ['wicker chair', 'outdoor seating', 'balcony chair', 'weather resistant furniture'],
    },
    description:
      'Premium hand-woven weather-resistant wicker chair. Designed with a lightweight yet sturdy aluminium frame, perfect for balcony or patio setups.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 012. Metal Garden Chair
  {
    id: 'chair-012',
    sku: 'WH-CHR-MET-BLK',
    title: 'Metal Garden Chair',
    slug: 'metal-garden-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['outdoor', 'garden'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'chair',
      subCategory: 'outdoor-chair',
      subType: 'metal-work',
      style: 'classic',
    },
    specifications: {
      material: 'Wrought Iron',
      seatingCapacity: 1,
      dimensions: { length: 55, width: 50, height: 90, unit: 'cm' },
      weight: { value: 8, unit: 'kg' },
    },
    pricing: {
      mrp: 8999,
      sellingPrice: 7499,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Powder Coated Finish', icon: 'shield' },
      { id: 'f2', title: 'Rust Proof Construction', icon: 'droplet-off' },
      { id: 'f3', title: 'Stackable Design', icon: 'layers' },
    ],

    variants: [
      { variantId: 'v1', name: 'Black Metal', price: 7499, inventoryCount: 40, availability: 'in_stock' },
    ],
    status: {
      rating: 4.2,
      reviewCount: 55,
      tags: ['Best Seller'],
      availability: 'in_stock',
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1602023039928-7af5a2f000fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Metal Garden Chair',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Black', hex: '#000000' }],
    },
    seo: {
      metaTitle: 'Metal Garden Chair | Rust-Proof Outdoor Seating',
      metaDescription:
        'Classic wrought iron garden chair with a rust-proof powder coating. Durable, stackable, and built for heavy-duty outdoor use.',
      keywords: ['garden chair', 'metal outdoor chair', 'rust proof chair', 'wrought iron furniture'],
    },
    description:
      'Durable powder-coated metal chair designed to withstand harsh outdoor conditions. Classic design meets heavy-duty performance.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 013. Outdoor Bench Seating
  {
    id: 'chair-013',
    sku: 'WH-CHR-BEN-WOD',
    title: 'Outdoor Bench Seating',
    slug: 'outdoor-bench-seating',
    brand: 'Urban Home',
    taxonomy: {
      room: ['outdoor', 'garden', 'dining-room'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'chair',
      subCategory: 'outdoor-benche',
      subType: 'park-bench',
      style: 'rustic',
    },
    specifications: {
      material: 'Solid Wood',
      seatingCapacity: 3,
      dimensions: { length: 150, width: 60, height: 90, unit: 'cm' },
      weight: { value: 22, unit: 'kg' },
    },
    pricing: {
      mrp: 18999,
      sellingPrice: 15999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: '3-Seater Capacity', icon: 'users' },
      { id: 'f2', title: 'Solid Acacia Wood', icon: 'tree' },
      { id: 'f3', title: 'Ergonomic Backrest', icon: 'heart' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Finish', price: 15999, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: { rating: 4.5, reviewCount: 89, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2015/08/18/15/13/bank-894308_1280.jpg',
          alt: 'Outdoor Wooden Bench',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak', hex: '#CD853F' }],
    },
    seo: {
      metaTitle: 'Solid Wood Outdoor Bench | 3-Seater Garden Seating',
      metaDescription:
        'Spacious 3-seater wooden garden bench crafted from seasoned solid wood. Specially treated for outdoor durability and comfort.',
      keywords: ['outdoor bench', 'garden seating', 'wooden bench', '3 seater bench'],
    },
    description:
      'Spacious 3-seater wooden bench crafted from high-quality seasoned wood. Professionally treated for resistance against moisture and insects.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // 014. Foldable Outdoor Chair
  {
    id: 'chair-014',
    sku: 'WH-CHR-FLD-WHT',
    title: 'Foldable Outdoor Chair',
    slug: 'foldable-outdoor-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['outdoor', 'balcony', 'utility'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'chair',
      subCategory: 'outdoor-chair',
      subType: 'folding', // Core functionality based
      style: 'utility',
    },
    specifications: {
      material: 'Reinforced Plastic',
      seatingCapacity: 1,
      dimensions: { length: 45, width: 40, height: 80, unit: 'cm' },
      weight: { value: 3.5, unit: 'kg' },
    },
    pricing: {
      mrp: 6999,
      sellingPrice: 5999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Easy Fold Mechanism', icon: 'fold' },
      { id: 'f2', title: 'Ultra Portable', icon: 'move' },
      { id: 'f3', title: 'BPA-Free Material', icon: 'check-circle' },
    ],

    variants: [{ variantId: 'v1', name: 'White', price: 5999, inventoryCount: 50, availability: 'in_stock' }],
    status: { rating: 4.1, reviewCount: 43, tags: [], availability: 'in_stock', isFeatured: false },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2018/05/21/15/08/street-cafe-3418515_1280.jpg',
          alt: 'Foldable Outdoor Chair',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'White', hex: '#FFFFFF' }],
    },
    seo: {
      metaTitle: 'Foldable Outdoor Chair | Portable Plastic Seating',
      metaDescription:
        'Lightweight and durable foldable plastic chair. Easy to store and carry, making it perfect for extra seating in balconies or events.',
      keywords: ['foldable chair', 'portable seating', 'plastic outdoor chair', 'easy store furniture'],
    },
    description:
      'Lightweight and foldable reinforced plastic chair. Perfect for extra seating during gatherings or for compact balconies.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
  {
    id: 'chair-015',
    sku: 'WH-SEA-CHR-PREM', // SKU updated for Seating/Chair
    title: 'Premium Solid Wood Dining Chair',
    slug: 'premium-solid-wood-dining-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['dining-room', 'living-room'],
      mainCategory: 'furniture',
      productType: 'seating', // Corrected logic
      category: 'chair', // Singular standard
      subCategory: 'dining-chair', // Corrected from outdoor chair
      subType: 'accent-chair',
      style: 'contemporary',
    },
    specifications: {
      material: 'Solid Sheesham Wood',
      finish: 'Walnut Finish',
      seatingHeight: 45, // Standard chair height
      dimensions: { length: 45, width: 45, height: 90, unit: 'cm' },
      weight: { value: 8, unit: 'kg' },
    },
    pricing: {
      mrp: 8999,
      sellingPrice: 7499,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Ergonomic Backrest', icon: 'user' },
      { id: 'f2', title: 'Solid Wood Durability', icon: 'shield' },
      { id: 'f3', title: 'High Density Foam Cushion', icon: 'layers' },
    ],
    variants: [
      {
        variantId: 'v1',
        name: 'Walnut & Grey Fabric',
        price: 7499,
        inventoryCount: 20,
        availability: 'in_stock',
      },
      {
        variantId: 'v2',
        name: 'Honey & Beige Fabric',
        price: 7499,
        inventoryCount: 15,
        availability: 'in_stock',
      },
    ],
    status: {
      rating: 4.8,
      reviewCount: 12,
      tags: ['Premium', 'Best for Dining'],
      availability: 'in_stock',
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1682484702272-38ed0d66a715?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Premium Solid Wood Dining Chair',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Walnut', hex: '#5D4037' },
        { name: 'Honey', hex: '#E1AD01' },
      ],
    },
    seo: {
      metaTitle: 'Premium Solid Wood Dining Chair | Urban Home',
      metaDescription: 'Handcrafted Sheesham wood chair with ergonomic support and premium upholstery.',
      keywords: ['dining chair', 'solid wood chair', 'sheesham chair', 'seating'],
    },
    description:
      'A masterfully crafted dining chair made from solid Sheesham wood. Features an ergonomic backrest and premium fabric cushioning for ultimate comfort during long meals.',
    createdAt: '2026-01-29T10:00:00Z',
    updatedAt: '2026-01-29T10:00:00Z',
  },
]
