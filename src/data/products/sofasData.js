export const sofasData = [
  {
    id: 'sofa-001',
    sku: 'WS-MOD-3S-FAB',
    title: 'Modern Fabric 3-Seater Sofa',
    slug: 'modern-fabric-3-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '3-seater',
      subType: 'standard',
      style: 'modern',
    },
    specifications: {
      material: 'Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 3,
      style: 'Modern',
      dimensions: { length: 210, width: 85, height: 90, unit: 'cm' },
      weight: { value: 45, unit: 'kg' },
    },
    pricing: {
      mrp: 31999,
      sellingPrice: 26999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },

    features: [
      { id: 'f1', title: '2 Years Warranty', icon: 'shield-check' },
      { id: 'f2', title: 'Premium Fabric', icon: 'layers' },
      { id: 'f3', title: 'Ergonomic Support', icon: 'smile' },
    ],

    variants: [
      { variantId: 'v1', name: 'Grey', price: 26999, inventoryCount: 15, availability: 'in_stock' },
      { variantId: 'v2', name: 'Blue', price: 26999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 25,
      rating: 4.4,
      reviewCount: 110,
      tags: ['New'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1649410775070-d04c76e17512?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern Fabric 3-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Grey', hex: '#808080' },
        { name: 'Blue', hex: '#0000FF' },
      ],
    },
    seo: {
      metaTitle: 'Modern Fabric 3-Seater Sofa | Office & Living Room',
      metaDescription:
        'Luxury 3-seater sofa with premium fabric. Durable for both office waiting areas and modern living rooms.',
      keywords: ['fabric sofa', 'office couch', '3 seater sofa'],
    },
    description:
      'Experience luxury with the Urban Home Modern Fabric Sofa. Designed for comfort and durability with premium fabric upholstery.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-002',
    sku: 'WS-CLS-3S-WOD',
    title: 'Classic Wooden 3-Seater Sofa',
    slug: 'classic-wooden-3-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'hallway'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '3-seater',
      subType: 'standard',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood & Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 3,
      style: 'Classic',
      dimensions: { length: 220, width: 88, height: 92, unit: 'cm' },
      weight: { value: 52, unit: 'kg' },
    },
    pricing: {
      mrp: 42999,
      sellingPrice: 35999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Solid Wood Build', icon: 'tree' },
      { id: 'f2', title: 'Timeless Elegance', icon: 'star' },
      { id: 'f3', title: 'High Durability', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Brown', price: 35999, inventoryCount: 8, availability: 'in_stock' },
      { variantId: 'v2', name: 'Beige', price: 35999, inventoryCount: 7, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 15,
      rating: 4.6,
      reviewCount: 148,
      tags: ['Best Seller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg',
          alt: 'Classic Wooden Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Teak Brown', hex: '#B8860B' },
        { name: 'Beige', hex: '#F5F5DC' },
      ],
    },
    seo: {
      metaTitle: 'Classic Wooden 3-Seater Sofa | Traditional Hallway Seating',
      metaDescription:
        'Timeless solid wood sofa with comfortable fabric cushions. Perfect for traditional homes.',
      keywords: ['wooden sofa', 'classic sofa', 'hallway furniture'],
    },
    description:
      'Experience timeless elegance with the Urban Home Classic Wooden Sofa. Premium solid wood construction.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-003',
    sku: 'WS-MIN-3S-URB',
    title: 'Minimalist Urban 3-Seater Sofa',
    slug: 'minimalist-urban-3-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'studio'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '3-seater',
      subType: 'standard',
      style: 'minimal',
    },
    specifications: {
      material: 'Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 3,
      style: 'Minimal',
      dimensions: { length: 205, width: 82, height: 87, unit: 'cm' },
      weight: { value: 42, unit: 'kg' },
    },
    pricing: {
      mrp: 27999,
      sellingPrice: 23999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Clean Lines', icon: 'minus' },
      { id: 'f2', title: 'Compact Fit', icon: 'maximize' },
    ],

    variants: [
      { variantId: 'v1', name: 'Charcoal', price: 23999, inventoryCount: 20, availability: 'in_stock' },
      { variantId: 'v2', name: 'Light Grey', price: 23999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 30,
      rating: 4.2,
      reviewCount: 83,
      tags: [],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1661310048986-a5ce0ede1f83?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Minimalist Urban Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Charcoal', hex: '#36454F' },
        { name: 'Light Grey', hex: '#D3D3D3' },
      ],
    },
    seo: {
      metaTitle: 'Minimalist Urban 3-Seater Sofa | Apartment & Studio Furniture',
      metaDescription:
        'Clean-lined minimalist sofa designed for small apartments, studios, and modern bedrooms.',
      keywords: ['minimalist sofa', 'studio couch', 'compact apartment furniture'],
    },
    description:
      'Experience minimalist design with the Urban Home Urban Sofa. Clean lines and maximum comfort.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-004',
    sku: 'WS-LUX-3S-VEL',
    title: 'Luxury Velvet 3-Seater Sofa',
    slug: 'luxury-velvet-3-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '3-seater',
      subType: 'standard',
      style: 'luxury',
    },
    specifications: {
      material: 'Velvet Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 3,
      style: 'Luxury',
      dimensions: { length: 215, width: 90, height: 95, unit: 'cm' },
      weight: { value: 50, unit: 'kg' },
    },
    pricing: {
      mrp: 49999,
      sellingPrice: 42999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Premium Velvet', icon: 'award' },
      { id: 'f2', title: 'Ultra Comfort', icon: 'heart' },
      { id: 'f3', title: 'Statement Piece', icon: 'sparkles' },
    ],

    variants: [
      { variantId: 'v1', name: 'Emerald Green', price: 42999, inventoryCount: 5, availability: 'in_stock' },
      { variantId: 'v2', name: 'Navy Blue', price: 42999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 10,
      rating: 4.7,
      reviewCount: 176,
      tags: ['New', 'Best Seller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1758448755778-90ebf4d0f1e7?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Velvet Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Emerald Green', hex: '#50C878' },
        { name: 'Navy Blue', hex: '#000080' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Velvet 3-Seater Sofa | Master Bedroom & Lounge',
      metaDescription:
        'Royal velvet 3-seater couch. Perfect statement piece for master bedrooms and high-end living rooms.',
      keywords: ['velvet sofa', 'luxury seating', 'emerald green couch'],
    },
    description:
      'Experience ultimate luxury with the Urban Home Velvet Sofa. Premium velvet fabric with superior comfort.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
  {
    id: 'sofa-005',
    sku: 'WS-CMP-3S-CON',
    title: 'Compact Contemporary 3-Seater Sofa',
    slug: 'compact-contemporary-3-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '3-seater',
      subType: 'standard',
      style: 'contemporary',
    },
    specifications: {
      material: 'Fabric & Engineered Wood',
      frameMaterial: 'Engineered Wood',
      seatingCapacity: 3,
      style: 'Contemporary',
      dimensions: { length: 200, width: 80, height: 85, unit: 'cm' },
      weight: { value: 40, unit: 'kg' },
    },
    pricing: {
      mrp: 25999,
      sellingPrice: 21999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Compact Design', icon: 'maximize' },
      { id: 'f2', title: 'Contemporary Style', icon: 'monitor' },
      { id: 'f3', title: '2 Years Warranty', icon: 'shield-check' },
    ],

    variants: [
      { variantId: 'v1', name: 'Beige', price: 21999, inventoryCount: 0, availability: 'out_of_stock' },
      { variantId: 'v2', name: 'Brown', price: 21999, inventoryCount: 0, availability: 'out_of_stock' },
    ],
    status: {
      availability: 'out_of_stock', // Original data mein inStock: false tha
      inventoryCount: 0,
      rating: 4.1,
      reviewCount: 69,
      tags: [],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2019/03/05/22/58/living-room-4037295_1280.jpg',
          alt: 'Compact Contemporary 3-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Beige', hex: '#F5F5DC' },
        { name: 'Brown', hex: '#A52A2A' },
      ],
    },
    seo: {
      metaTitle: 'Compact Contemporary 3-Seater Sofa | Urban Home',
      metaDescription:
        'Perfect for small spaces, this contemporary 3-seater sofa offers maximum comfort with a minimalist design.',
      keywords: ['compact sofa', '3 seater sofa', 'contemporary furniture'],
    },
    description:
      'Experience modern living with the Urban Home Compact Contemporary Sofa. Perfect for small spaces with maximum comfort.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // sofa-006-010
  {
    id: 'sofa-006',
    sku: 'WS-MOD-2S-FAB',
    title: 'Modern Fabric 2-Seater Sofa',
    slug: 'modern-fabric-2-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office', 'studio'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '2-seater',
      subType: 'standard',
      style: 'modern',
    },
    specifications: {
      material: 'Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 2,
      style: 'Modern',
      dimensions: { length: 150, width: 80, height: 85, unit: 'cm' },
      weight: { value: 35, unit: 'kg' },
    },
    pricing: {
      mrp: 25999,
      sellingPrice: 21999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: '2 Years Warranty', icon: 'shield-check' },
      { id: 'f2', title: 'Premium Fabric', icon: 'layers' },
      { id: 'f3', title: 'No Assembly Required', icon: 'package' },
    ],

    variants: [
      { variantId: 'v1', name: 'Grey', price: 21999, inventoryCount: 10, availability: 'in_stock' },
      { variantId: 'v2', name: 'Blue', price: 21999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 15,
      rating: 4.3,
      reviewCount: 95,
      tags: ['New'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2018/05/02/09/02/baby-boy-3368016_1280.jpg',
          alt: 'Modern Fabric 2-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Grey', hex: '#808080' },
        { name: 'Blue', hex: '#0000FF' },
      ],
    },
    seo: {
      metaTitle: 'Modern Fabric 2-Seater Sofa | Compact Office Seating',
      metaDescription:
        'Modern 2-seater fabric sofa for compact living rooms and office cabins. High durability and comfort.',
      keywords: ['2 seater sofa', 'office couch', 'small fabric sofa'],
    },
    description:
      'Experience modern comfort with the Urban Home Fabric 2-Seater Sofa. Designed for style and durability.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-007',
    sku: 'WS-CLS-2S-WOD',
    title: 'Classic Wooden 2-Seater Sofa',
    slug: 'classic-wooden-2-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'hallway', 'study'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '2-seater',
      subType: 'standard',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood & Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 2,
      style: 'Classic',
      dimensions: { length: 155, width: 82, height: 88, unit: 'cm' },
      weight: { value: 42, unit: 'kg' },
    },
    pricing: {
      mrp: 34999,
      sellingPrice: 29999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Solid Wood Frame', icon: 'tree' },
      { id: 'f2', title: 'Timeless Finish', icon: 'award' },
      { id: 'f3', title: 'High Density Foam', icon: 'database' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Brown', price: 29999, inventoryCount: 6, availability: 'in_stock' },
      { variantId: 'v2', name: 'Beige', price: 29999, inventoryCount: 4, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 10,
      rating: 4.5,
      reviewCount: 128,
      tags: ['Best Seller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2019/04/16/03/16/interior-4130787_1280.jpg',
          alt: 'Classic Wooden 2-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Teak Brown', hex: '#B8860B' },
        { name: 'Beige', hex: '#F5F5DC' },
      ],
    },
    seo: {
      metaTitle: 'Classic Wooden 2-Seater Sofa | Solid Wood Couch',
      metaDescription:
        'Traditional solid wood 2-seater sofa. Elegant design for hallways and classic living spaces.',
      keywords: ['classic wooden sofa', 'solid wood 2 seater', 'traditional seating'],
    },
    description:
      'Experience timeless elegance with the Urban Home Classic Wooden Sofa. Solid wood construction with premium fabric.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-008',
    sku: 'WS-MIN-2S-URB',
    title: 'Minimalist Urban 2-Seater Sofa',
    slug: 'minimalist-urban-2-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'studio'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '2-seater',
      subType: 'standard',
      style: 'minimal',
    },
    specifications: {
      material: 'Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 2,
      style: 'Minimal',
      dimensions: { length: 145, width: 78, height: 82, unit: 'cm' },
      weight: { value: 32, unit: 'kg' },
    },
    pricing: {
      mrp: 23999,
      sellingPrice: 19999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Compact Footprint', icon: 'minimize' },
      { id: 'f2', title: 'Easy Maintenance', icon: 'droplet' },
    ],

    variants: [
      { variantId: 'v1', name: 'Charcoal', price: 19999, inventoryCount: 12, availability: 'in_stock' },
      { variantId: 'v2', name: 'Light Grey', price: 19999, inventoryCount: 8, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 20,
      rating: 4.1,
      reviewCount: 72,
      tags: [],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2024/01/27/08/22/ai-generated-8535497_1280.png',
          alt: 'Minimalist Urban 2-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Charcoal', hex: '#36454F' },
        { name: 'Light Grey', hex: '#D3D3D3' },
      ],
    },
    seo: {
      metaTitle: 'Minimalist Urban 2-Seater Sofa | Apartment Therapy',
      metaDescription:
        'Sleek and minimalist 2-seater couch. Perfect for small apartments and modern studio setups.',
      keywords: ['minimalist sofa', 'small apartment couch', 'urban 2 seater'],
    },
    description:
      'Experience minimalist design with the Urban Home Minimalist Sofa. Clean lines and maximum comfort for modern homes.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-009',
    sku: 'WS-LUX-2S-VEL',
    title: 'Luxury Velvet 2-Seater Sofa',
    slug: 'luxury-velvet-2-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'vanity'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '2-seater',
      subType: 'standard',
      style: 'luxury',
    },
    specifications: {
      material: 'Velvet Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 2,
      style: 'Luxury',
      dimensions: { length: 160, width: 85, height: 90, unit: 'cm' },
      weight: { value: 38, unit: 'kg' },
    },
    pricing: {
      mrp: 45999,
      sellingPrice: 38999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'High-End Velvet', icon: 'star' },
      { id: 'f2', title: 'Royal Aesthetics', icon: 'award' },
      { id: 'f3', title: 'Soft Scalloped Back', icon: 'cloud' },
    ],

    variants: [
      { variantId: 'v1', name: 'Emerald Green', price: 38999, inventoryCount: 4, availability: 'in_stock' },
      { variantId: 'v2', name: 'Navy Blue', price: 38999, inventoryCount: 3, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 7,
      rating: 4.7,
      reviewCount: 162,
      tags: ['New', 'Best Seller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2024/07/25/09/23/interior-8920588_1280.jpg',
          alt: 'Luxury Velvet 2-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Emerald Green', hex: '#50C878' },
        { name: 'Navy Blue', hex: '#000080' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Velvet 2-Seater Sofa | Glam Bedroom Seating',
      metaDescription:
        'Royal velvet 2-seater couch with elegant design. Best for master bedrooms and boutique living rooms.',
      keywords: ['velvet couch', 'luxury 2 seater', 'emerald green sofa'],
    },
    description:
      'Experience luxury with the Urban Home Velvet 2-Seater Sofa. Premium velvet fabric with elegant design and superior comfort.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-010',
    sku: 'WS-CMP-2S-CON',
    title: 'Compact Contemporary 2-Seater Sofa',
    slug: 'compact-contemporary-2-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'guest-room', 'balcony'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '2-seater',
      subType: 'standard',
      style: 'contemporary',
    },
    specifications: {
      material: 'Fabric & Engineered Wood',
      frameMaterial: 'Engineered Wood',
      seatingCapacity: 2,
      style: 'Contemporary',
      dimensions: { length: 140, width: 75, height: 80, unit: 'cm' },
      weight: { value: 30, unit: 'kg' },
    },
    pricing: {
      mrp: 22999,
      sellingPrice: 18999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Petite Design', icon: 'minimize' },
      { id: 'f2', title: 'Water-Repellent Fabric', icon: 'droplet' },
    ],

    variants: [
      { variantId: 'v1', name: 'Beige', price: 18999, inventoryCount: 0, availability: 'out_of_stock' },
      { variantId: 'v2', name: 'Brown', price: 18999, inventoryCount: 0, availability: 'out_of_stock' },
    ],
    status: {
      availability: 'out_of_stock',
      inventoryCount: 0,
      rating: 4.0,
      reviewCount: 61,
      tags: [],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2023/12/31/15/27/living-room-8480192_1280.jpg',
          alt: 'Compact Contemporary 2-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Beige', hex: '#F5F5DC' },
        { name: 'Brown', hex: '#A52A2A' },
      ],
    },
    seo: {
      metaTitle: 'Compact Contemporary 2-Seater Sofa | Small Space Seating',
      metaDescription:
        'Contemporary 2-seater sofa designed for small balconies and guest rooms. Space-saving and stylish.',
      keywords: ['compact sofa', '2 seater balcony couch', 'small contemporary sofa'],
    },
    description:
      'Experience contemporary style with the Urban Home Compact Sofa. Perfect for modern apartments with space-saving design.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
  // sofa-011-015

  {
    id: 'sofa-011',
    sku: 'WS-MOD-LC-GRY',
    title: 'Modern Lounge Chair Sofa',
    slug: 'modern-lounge-chair-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'study'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'single-seater',
      subType: 'lounge-chair',
      style: 'modern',
    },
    specifications: {
      material: 'Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 1,
      style: 'Modern',
      dimensions: { length: 85, width: 80, height: 90, unit: 'cm' },
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
      { id: 'f1', title: '2 Years Warranty', icon: 'shield-check' },
      { id: 'f2', title: 'Compact Design', icon: 'minimize' },
      { id: 'f3', title: 'Ergonomic Backrest', icon: 'user' },
    ],

    variants: [
      { variantId: 'v1', name: 'Grey', price: 18999, inventoryCount: 12, availability: 'in_stock' },
      { variantId: 'v2', name: 'Black', price: 18999, inventoryCount: 8, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 20,
      rating: 4.3,
      reviewCount: 84,
      tags: ['New'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2024/01/02/23/59/building-8484204_1280.jpg',
          alt: 'Modern Lounge Chair Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Grey', hex: '#808080' },
        { name: 'Black', hex: '#000000' },
      ],
    },
    seo: {
      metaTitle: 'Modern Lounge Chair | Single Seater Bedroom Sofa',
      metaDescription: 'Stylish single-seater lounge chair perfect for your reading nook or bedroom corner.',
      keywords: ['lounge chair', 'single seater sofa', 'modern armchair'],
    },
    description:
      'Experience comfort with the Urban Home Modern Lounge Chair. Perfect single-seater with modern design.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-012',
    sku: 'WS-LUX-LC-VEL',
    title: 'Luxury Velvet Lounge Chair',
    slug: 'luxury-velvet-lounge-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'vanity'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'single-seater',
      subType: 'lounge-chair',
      style: 'luxury',
    },
    specifications: {
      material: 'Velvet Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 1,
      style: 'Luxury',
      dimensions: { length: 90, width: 85, height: 95, unit: 'cm' },
      weight: { value: 28, unit: 'kg' },
    },
    pricing: {
      mrp: 29999,
      sellingPrice: 24999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Premium Velvet', icon: 'award' },
      { id: 'f2', title: 'Gold Tone Accents', icon: 'sparkles' },
      { id: 'f3', title: 'Plush Seating', icon: 'heart' },
    ],

    variants: [
      { variantId: 'v1', name: 'Emerald Green', price: 24999, inventoryCount: 5, availability: 'in_stock' },
      { variantId: 'v2', name: 'Gold Accent', price: 24999, inventoryCount: 3, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 8,
      rating: 4.6,
      reviewCount: 121,
      tags: ['Best Seller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2024/02/12/17/49/theater-8569119_1280.jpg',
          alt: 'Luxury Velvet Lounge Chair',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Emerald Green', hex: '#50C878' },
        { name: 'Gold Accent', hex: '#FFD700' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Velvet Lounge Chair | Premium Gold Accent Armchair',
      metaDescription: 'Royal velvet lounge chair with gold-finished legs. Add elegance to your living room.',
      keywords: ['velvet lounge chair', 'luxury armchair', 'green velvet sofa'],
    },
    description:
      'Experience luxury with the Urban Home Velvet Lounge Chair. Premium velvet fabric with elegant gold accents.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-013',
    sku: 'WS-MIN-LC-BEG',
    title: 'Minimalist Lounge Chair Sofa',
    slug: 'minimalist-lounge-chair-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'studio'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'single-seater',
      subType: 'lounge-chair',
      style: 'minimal',
    },
    specifications: {
      material: 'Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 1,
      style: 'Minimal',
      dimensions: { length: 80, width: 78, height: 85, unit: 'cm' },
      weight: { value: 22, unit: 'kg' },
    },
    pricing: {
      mrp: 19999,
      sellingPrice: 16999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Clean Aesthetic', icon: 'minus' },
      { id: 'f2', title: 'Lightweight Build', icon: 'feather' },
    ],

    variants: [
      { variantId: 'v1', name: 'Beige', price: 16999, inventoryCount: 15, availability: 'in_stock' },
      { variantId: 'v2', name: 'Brown', price: 16999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 25,
      rating: 4.1,
      reviewCount: 67,
      tags: [],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2024/01/12/15/21/interior-8504195_1280.jpg',
          alt: 'Minimalist Lounge Chair Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Beige', hex: '#F5F5DC' },
        { name: 'Brown', hex: '#A52A2A' },
      ],
    },
    seo: {
      metaTitle: 'Minimalist Lounge Chair | Scandi Style Armchair',
      metaDescription: 'Sleek and simple minimalist lounge chair for modern studio apartments.',
      keywords: ['minimalist chair', 'scandinavian armchair', 'simple lounge sofa'],
    },
    description:
      'Experience minimalist design with the Urban Home Lounge Chair. Clean lines and simple elegance.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-014',
    sku: 'WS-WOD-LC-WAL',
    title: 'Wooden Frame Lounge Chair',
    slug: 'wooden-frame-lounge-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'study', 'balcony'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'single-seater',
      subType: 'lounge-chair',
      style: 'contemporary',
    },
    specifications: {
      material: 'Wood & Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 1,
      style: 'Contemporary',
      dimensions: { length: 88, width: 82, height: 92, unit: 'cm' },
      weight: { value: 30, unit: 'kg' },
    },
    pricing: {
      mrp: 25999,
      sellingPrice: 21999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Solid Walnut Frame', icon: 'tree' },
      { id: 'f2', title: 'Stain Resistant', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut', price: 21999, inventoryCount: 7, availability: 'in_stock' },
      { variantId: 'v2', name: 'Cream', price: 21999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 12,
      rating: 4.4,
      reviewCount: 93,
      tags: ['New'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2013/12/08/16/24/la-molina-225145_1280.jpg',
          alt: 'Wooden Frame Lounge Chair',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Walnut', hex: '#5C4033' },
        { name: 'Cream', hex: '#FFFDD0' },
      ],
    },
    seo: {
      metaTitle: 'Wooden Frame Lounge Chair | Contemporary Study Chair',
      metaDescription: 'Durable solid wood frame lounge chair with premium walnut finish.',
      keywords: ['wooden lounge chair', 'walnut furniture', 'contemporary seating'],
    },
    description:
      'Experience contemporary style with the Urban Home Wooden Frame Lounge Chair. Premium wood construction.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-015',
    sku: 'WS-REC-LC-BRN',
    title: 'Recliner Style Lounge Chair',
    slug: 'recliner-style-lounge-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'home-theater', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'single-seater',
      subType: 'lounge-chair',
      style: 'recliner',
    },
    specifications: {
      material: 'Premium Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 1,
      style: 'Recliner',
      dimensions: { length: 95, width: 88, height: 100, unit: 'cm' },
      weight: { value: 35, unit: 'kg' },
    },
    pricing: {
      mrp: 33999,
      sellingPrice: 27999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Smooth Recline', icon: 'refresh-cw' },
      { id: 'f2', title: 'Padded Armrests', icon: 'plus-circle' },
      { id: 'f3', title: 'Heavy Duty Frame', icon: 'hard-drive' },
    ],

    variants: [
      { variantId: 'v1', name: 'Dark Brown', price: 27999, inventoryCount: 0, availability: 'out_of_stock' },
      { variantId: 'v2', name: 'Tan', price: 27999, inventoryCount: 0, availability: 'out_of_stock' },
    ],
    status: {
      availability: 'out_of_stock',
      inventoryCount: 0,
      rating: 4.7,
      reviewCount: 156,
      tags: ['Best Seller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2020/11/09/17/07/chair-5727263_1280.jpg',
          alt: 'Recliner Style Lounge Chair',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Dark Brown', hex: '#654321' },
        { name: 'Tan', hex: '#D2B48C' },
      ],
    },
    seo: {
      metaTitle: 'Recliner Style Lounge Chair | Home Theater Seating',
      metaDescription:
        'Ultimate comfort with our reclining lounge chair. Perfect for movie nights and relaxation.',
      keywords: ['reclining chair', 'home theater sofa', 'manual recliner'],
    },
    description:
      'Experience ultimate relaxation with the Urban Home Recliner Style Lounge Chair. Premium fabric with adjustable reclining.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
  // sofa-016-020
  {
    id: 'sofa-016',
    sku: 'WS-MOD-SS-32',
    title: 'Modern 3+2 Sofa Set',
    slug: 'modern-3-2-sofa-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'lounge'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-set',
      subType: '3-2-set',
      style: 'modern',
    },
    specifications: {
      material: 'Fabric & Wood',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 5,
      style: 'Modern',
      dimensions: { length: 210, width: 85, height: 90, unit: 'cm' },
      weight: { value: 95, unit: 'kg' },
    },
    pricing: {
      mrp: 89999,
      sellingPrice: 74999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: '2 Years Warranty', icon: 'shield-check' },
      { id: 'f2', title: '5-Seater Capacity', icon: 'users' },
      { id: 'f3', title: 'Premium Upholstery', icon: 'layers' },
    ],

    variants: [
      { variantId: 'v1', name: 'Grey', price: 74999, inventoryCount: 8, availability: 'in_stock' },
      { variantId: 'v2', name: 'Beige', price: 74999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 13,
      rating: 4.5,
      reviewCount: 142,
      tags: ['New', 'Best Seller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2018/09/15/09/05/home-3678955_1280.jpg',
          alt: 'Modern 3+2 Sofa Set',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Grey', hex: '#808080' },
        { name: 'Beige', hex: '#F5F5DC' },
      ],
    },
    seo: {
      metaTitle: 'Modern 3+2 Sofa Set | Premium Living Room Furniture',
      metaDescription:
        'Complete 5-seater modern sofa set. Perfect for large families and spacious living rooms.',
      keywords: ['3+2 sofa set', '5 seater sofa', 'modern living room set'],
    },
    description: 'Experience complete living room transformation with the Urban Home Modern 3+2 Sofa Set.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-017',
    sku: 'WS-LUX-SS-31',
    title: 'Luxury Velvet 3+1 Sofa Set',
    slug: 'luxury-velvet-3-1-sofa-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office-lobby'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-set',
      subType: '3-1-set',
      style: 'luxury',
    },
    specifications: {
      material: 'Velvet & Wood',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 4,
      style: 'Luxury',
      dimensions: { length: 210, width: 88, height: 92, unit: 'cm' },
      weight: { value: 85, unit: 'kg' },
    },
    pricing: {
      mrp: 99999,
      sellingPrice: 84999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Velvet Finish', icon: 'award' },
      { id: 'f2', title: 'Gold Accent Legs', icon: 'sparkles' },
      { id: 'f3', title: 'High Density Foam', icon: 'database' },
    ],

    variants: [
      { variantId: 'v1', name: 'Emerald Green', price: 84999, inventoryCount: 4, availability: 'in_stock' },
      { variantId: 'v2', name: 'Gold Accent', price: 84999, inventoryCount: 2, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 6,
      rating: 4.7,
      reviewCount: 178,
      tags: ['Best Seller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2025/01/28/16/21/little-girl-9365923_1280.jpg',
          alt: 'Luxury Velvet 3+1 Sofa Set',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Emerald Green', hex: '#50C878' },
        { name: 'Gold Accent', hex: '#FFD700' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Velvet 3+1 Sofa Set | Royal Living Seating',
      metaDescription:
        'Elite velvet 4-seater sofa set with gold accents. Designed for luxury homes and executive offices.',
      keywords: ['velvet sofa set', '3+1 sofa', 'luxury seating'],
    },
    description:
      'Experience ultimate luxury with the Urban Home Velvet 3+1 Sofa Set. Premium velvet fabric with gold accents.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-018',
    sku: 'WS-CLS-SS-WOD',
    title: 'Classic Wooden Sofa Set',
    slug: 'classic-wooden-sofa-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'veranda'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-set',
      subType: '3-1-set',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood & Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 5,
      style: 'Classic',
      dimensions: { length: 220, width: 90, height: 95, unit: 'cm' },
      weight: { value: 105, unit: 'kg' },
    },
    pricing: {
      mrp: 82999,
      sellingPrice: 69999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Handcrafted Wood', icon: 'tool' },
      { id: 'f2', title: 'Removable Cushions', icon: 'refresh-cw' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Brown', price: 69999, inventoryCount: 6, availability: 'in_stock' },
      { variantId: 'v2', name: 'Beige', price: 69999, inventoryCount: 9, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 15,
      rating: 4.4,
      reviewCount: 121,
      tags: [],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2017/02/24/09/56/assortments-to-2094359_1280.jpg',
          alt: 'Classic Wooden Sofa Set',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Teak Brown', hex: '#B8860B' },
        { name: 'Beige', hex: '#F5F5DC' },
      ],
    },
    seo: {
      metaTitle: 'Classic Wooden Sofa Set | Traditional 5 Seater',
      metaDescription: 'Traditional solid wood sofa set for heritage-style homes. Durable and timeless.',
      keywords: ['wooden sofa set', 'traditional furniture', 'solid wood couch set'],
    },
    description:
      'Experience timeless elegance with the Urban Home Classic Wooden Sofa Set. Premium solid wood construction.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-019',
    sku: 'WS-MIN-SS-21',
    title: 'Minimalist 5+1 Sofa Set',
    slug: 'minimalist-5-1-sofa-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'studio', 'waiting-area'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-set',
      subType: '5-1-set',
      style: 'minimal',
    },
    specifications: {
      material: 'Fabric & Engineered Wood',
      frameMaterial: 'Engineered Wood',
      seatingCapacity: 3,
      style: 'Minimal',
      dimensions: { length: 150, width: 80, height: 85, unit: 'cm' },
      weight: { value: 65, unit: 'kg' },
    },
    pricing: {
      mrp: 69999,
      sellingPrice: 59999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Compact Setup', icon: 'minimize' },
      { id: 'f2', title: 'Scandinavian Design', icon: 'compass' },
    ],

    variants: [
      { variantId: 'v1', name: 'Light Grey', price: 59999, inventoryCount: 10, availability: 'in_stock' },
      { variantId: 'v2', name: 'White', price: 59999, inventoryCount: 4, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 14,
      rating: 4.2,
      reviewCount: 89,
      tags: ['New'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2019/06/13/17/08/round-window-4272049_1280.jpg',
          alt: 'Minimalist 2+1 Sofa Set',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Light Grey', hex: '#D3D3D3' },
        { name: 'White', hex: '#FFFFFF' },
      ],
    },
    seo: {
      metaTitle: 'Minimalist 2+1 Sofa Set | Apartment Style Seating',
      metaDescription: '3-seater minimalist sofa set for modern apartments and clean office aesthetics.',
      keywords: ['2+1 sofa set', 'minimalist furniture', 'small space sofa set'],
    },
    description: 'Experience minimalist design with the Urban Home 2+1 Sofa Set. Perfect for compact spaces.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-020',
    sku: 'WS-ROY-SS-LSH',
    title: 'Royal L-Shaped Sofa Set',
    slug: 'royal-l-shaped-sofa-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'basement', 'home-theater'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-set',
      subType: 'l-shaped',
      style: 'royal',
    },
    specifications: {
      material: 'Premium Fabric & Wood',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 6,
      style: 'Royal',
      dimensions: { length: 280, width: 180, height: 95, unit: 'cm' },
      weight: { value: 125, unit: 'kg' },
    },
    pricing: {
      mrp: 119999,
      sellingPrice: 99999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: '6-Seater Sectional', icon: 'grid' },
      { id: 'f2', title: 'Solid Wood Frame', icon: 'shield' },
      { id: 'f3', title: 'Tufted Backrest', icon: 'edit' },
    ],

    variants: [
      { variantId: 'v1', name: 'Royal Blue', price: 99999, inventoryCount: 0, availability: 'out_of_stock' },
      { variantId: 'v2', name: 'Ivory', price: 99999, inventoryCount: 0, availability: 'out_of_stock' },
    ],
    status: {
      availability: 'out_of_stock',
      inventoryCount: 0,
      rating: 4.8,
      reviewCount: 205,
      tags: ['Best Seller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2018/09/15/09/05/home-3678955_1280.jpg',
          alt: 'Royal L-Shaped Sofa Set',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Royal Blue', hex: '#4169E1' },
        { name: 'Ivory', hex: '#FFFFF0' },
      ],
    },
    seo: {
      metaTitle: 'Royal L-Shaped Sofa Set | 6 Seater Sectional Couch',
      metaDescription:
        'Spacious royal L-shaped sectional sofa. Ideal for large family gatherings and home cinemas.',
      keywords: ['L shaped sofa', 'sectional sofa set', '6 seater royal sofa'],
    },
    description:
      'Experience royal luxury with the Urban Home L-Shaped Sofa Set. Spacious 6-seater configuration.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  // sofa-021-025
  {
    id: 'sofa-021',
    sku: 'WS-MOD-REC-GRY',
    title: 'Modern Recliner Chair',
    slug: 'modern-recliner-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'home-theater'],
      mainCategory: 'furniture',
      category: 'sofa',
      productType: 'seating',
      subCategory: 'sofa-set',
      subType: 'l-shape-recliner',
      style: 'modern',
    },
    specifications: {
      material: 'Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 1,
      style: 'Modern',
      dimensions: { length: 90, width: 85, height: 100, unit: 'cm' },
      weight: { value: 32, unit: 'kg' },
    },
    pricing: {
      mrp: 26999,
      sellingPrice: 22999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Smooth Recline', icon: 'refresh-cw' },
      { id: 'f2', title: 'High Back Support', icon: 'arrow-up' },
      { id: 'f3', title: 'Breathable Fabric', icon: 'wind' },
    ],

    variants: [
      { variantId: 'v1', name: 'Grey', price: 22999, inventoryCount: 15, availability: 'in_stock' },
      { variantId: 'v2', name: 'Charcoal', price: 22999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 25,
      rating: 4.4,
      reviewCount: 92,
      tags: ['New'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1743059199976-b709ec1e35f8?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern Recliner Chair',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Grey', hex: '#808080' },
        { name: 'Charcoal', hex: '#36454F' },
      ],
    },
    seo: {
      metaTitle: 'Modern Recliner Chair | Fabric Manual Recliner',
      metaDescription:
        'Ergonomic modern recliner chair with manual lever mechanism. Ideal for reading and relaxing.',
      keywords: ['recliner chair', 'manual recliner', 'modern armchair'],
    },
    description:
      'Experience modern comfort with the Urban Home Recliner Chair. Adjustable reclining mechanism.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-022',
    sku: 'WS-LUX-REC-LTH',
    title: 'Luxury Leather Recliner',
    slug: 'luxury-leather-recliner',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office', 'study'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'recliner',
      subType: 'manual',
      style: 'luxury',
    },
    specifications: {
      material: 'Leather',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 1,
      style: 'Luxury',
      dimensions: { length: 95, width: 88, height: 105, unit: 'cm' },
      weight: { value: 38, unit: 'kg' },
    },
    pricing: {
      mrp: 41999,
      sellingPrice: 34999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Genuine Leather', icon: 'shield-check' },
      { id: 'f2', title: '360 Swivel Base', icon: 'rotate-cw' },
      { id: 'f3', title: 'Zero Gravity Tilt', icon: 'zap' },
    ],

    variants: [
      { variantId: 'v1', name: 'Brown', price: 34999, inventoryCount: 5, availability: 'in_stock' },
      { variantId: 'v2', name: 'Black', price: 34999, inventoryCount: 3, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 8,
      rating: 4.7,
      reviewCount: 145,
      tags: ['Best Seller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1759722666941-a90d5a15b1d7?q=80&w=454&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Leather Recliner',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Brown', hex: '#A52A2A' },
        { name: 'Black', hex: '#000000' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Leather Recliner | Premium Swivel Armchair',
      metaDescription:
        'Premium genuine leather recliner with swivel base. Add a touch of class to your office or lounge.',
      keywords: ['leather recliner', 'swivel recliner', 'executive recliner chair'],
    },
    description:
      'Experience luxury with the Urban Home Leather Recliner. Premium genuine leather upholstery.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-023',
    sku: 'WS-CLS-REC-WHT',
    title: 'Classic Fabric Glider Recliner Chair',
    slug: 'classic-fabric-glider-recliner-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'nursery', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'recliner',
      subType: 'glider-recliner',
      style: 'Minimal',
    },
    specifications: {
      material: 'Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 1,

      dimensions: { length: 85, width: 82, height: 95, unit: 'cm' },
      weight: { value: 28, unit: 'kg' },
    },
    pricing: {
      mrp: 23999,
      sellingPrice: 19999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Compact Size', icon: 'minimize' },
      { id: 'f2', title: 'Easy Manual Pull', icon: 'hand' },
    ],

    variants: [
      { variantId: 'v1', name: 'Beige', price: 19999, inventoryCount: 12, availability: 'in_stock' },
      { variantId: 'v2', name: 'Grey', price: 19999, inventoryCount: 8, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 20,
      rating: 4.2,
      reviewCount: 78,
      tags: [],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1758914465233-c7f7dd81b667?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Minimalist Fabric Recliner',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Beige', hex: '#F5F5DC' },
        { name: 'Grey', hex: '#808080' },
      ],
    },
    seo: {
      metaTitle: 'Minimalist Fabric Recliner | Small Space Armchair',
      metaDescription: 'Simple and elegant fabric recliner for nursing or small bedroom corners.',
      keywords: ['small recliner', 'nursery chair', 'fabric reclining sofa'],
    },
    description:
      'Experience minimalist comfort with the Urban Home Fabric Recliner. Clean design with reclining feature.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-024',
    sku: 'WS-WOD-REC-WAL',
    title: 'Wooden Frame Recliner',
    slug: 'wooden-frame-recliner',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'veranda', 'library'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'recliner',
      subType: 'manual',
      style: 'contemporary',
    },
    specifications: {
      material: 'Genuine Leather & Walnut Plywood',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 1,
      style: 'Contemporary',
      dimensions: { length: 92, width: 85, height: 102, unit: 'cm' },
      weight: { value: 35, unit: 'kg' },
    },
    pricing: {
      mrp: 32999,
      sellingPrice: 27999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Exposed Wood Frame', icon: 'tree' },
      { id: 'f2', title: 'Modern Silhouette', icon: 'image' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut', price: 27999, inventoryCount: 6, availability: 'in_stock' },
      { variantId: 'v2', name: 'Cream', price: 27999, inventoryCount: 4, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 10,
      rating: 4.5,
      reviewCount: 101,
      tags: ['New'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1734549547884-d69882a2e0f0?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Wooden Frame Recliner',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Walnut', hex: '#5C4033' },
        { name: 'Cream', hex: '#FFFDD0' },
      ],
    },
    seo: {
      metaTitle: 'Wooden Frame Recliner | Walnut Finish Armchair',
      metaDescription:
        'Contemporary recliner with a stylish exposed solid wood frame. Perfect for modern libraries.',
      keywords: ['wooden recliner', 'contemporary armchair', 'walnut wood chair'],
    },
    description:
      'Experience contemporary comfort with the Urban Home Wooden Frame Recliner. Premium wood construction.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },

  {
    id: 'sofa-025',
    sku: 'WS-LUX-REC-LTH-MOT',
    title: 'Luxury Motorized Leather Recliner',
    slug: 'luxury-motorized-leather-recliner',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'home-theater'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofas',
      subCategory: 'recliners',
      subType: 'motorized',
      style: 'modern-luxury',
    },
    specifications: {
      material: 'Fixed Chaise Longue',
      frameMaterial: 'Plush Velvet',
      seatingCapacity: 1,
      dimensions: { length: 105, width: 95, height: 105, unit: 'cm' },
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
      { id: 'f1', title: 'One-Touch Motor', icon: 'power' },
      { id: 'f2', title: 'USB Charging Port', icon: 'battery-charging' },
      { id: 'f3', title: 'Electric Recline', icon: 'activity' },
    ],

    variants: [
      { variantId: 'v1', name: 'Black', price: 38999, inventoryCount: 4, availability: 'in_stock' },
      { variantId: 'v2', name: 'Brown', price: 38999, inventoryCount: 3, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 7,
      rating: 4.8,
      reviewCount: 156,
      tags: ['Best Seller', 'Motorized'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1698373890183-ae3943362fda?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Motorized Leather Recliner',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Black', hex: '#000000' },
        { name: 'Brown', hex: '#8B4513' },
      ],
    },
    seo: {
      metaTitle: 'Motorized Leather Recliner | Electric Cinema Seating',
      metaDescription:
        'Smart motorized leather recliner with USB charging and effortless electric reclining.',
      keywords: ['motorized recliner', 'electric leather chair', 'usb recliner'],
    },
    description: 'Premium motorized leather recliner for ultimate comfort in your living room or bedroom.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
  // sofa-026-030
  {
    id: 'sofa-026',
    sku: 'WS-CON-REC-FAB',
    title: 'Contemporary Fabric Manual Recliner',
    slug: 'contemporary-fabric-manual-recliner',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'study'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'recliner',
      subType: 'manual',
      style: 'contemporary',
    },
    specifications: {
      material: 'Soft Linen Blend Fabric',
      frameMaterial: 'Metal & Solid Wood',
      seatingCapacity: 1,
      style: 'Contemporary',
      dimensions: { length: 95, width: 90, height: 100, unit: 'cm' },
      weight: { value: 38, unit: 'kg' },
    },
    pricing: {
      mrp: 29999,
      sellingPrice: 24999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Manual Lever Recline', icon: 'settings' },
      { id: 'f2', title: 'High-Grade Padding', icon: 'layers' },
      { id: 'f3', title: '1 Year Warranty', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Grey', price: 24999, inventoryCount: 12, availability: 'in_stock' },
      { variantId: 'v2', name: 'Blue', price: 24999, inventoryCount: 6, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 18,
      rating: 4.5,
      reviewCount: 89,
      tags: ['Comfort Fit'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1755238861277-98f90b34b85f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Contemporary Fabric Manual Recliner',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Grey', hex: '#808080' },
        { name: 'Blue', hex: '#0000FF' },
      ],
    },
    seo: {
      metaTitle: 'Contemporary Fabric Recliner | Manual Armchair Sofa',
      metaDescription:
        'Shop our high-grade fabric manual recliner. Perfect for long hours of relaxation with premium foam padding.',
      keywords: ['fabric recliner', 'manual reclining chair', 'contemporary armchair'],
    },
    description: 'A cozy manual fabric recliner with premium foam padding, ideal for relaxation.',
    createdAt: '2025-01-14T12:00:00Z',
    updatedAt: '2025-01-14T12:00:00Z',
  },

  {
    id: 'sofa-027',
    sku: 'WS-MIN-REC-WD',
    title: 'Minimalist Rocking Recliner',
    slug: 'minimalist-rocking-recliner',
    brand: 'Urban Home',
    taxonomy: {
      room: ['nursery', 'bedroom', 'living-room'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofas',
      subCategory: 'recliners',
      subType: 'rocker-recliner',
      style: 'minimal',
    },
    specifications: {
      material: 'Premium Linen Blend',
      frameMaterial: 'Solid Oak Wood',
      seatingCapacity: 1,
      dimensions: { length: 100, width: 95, height: 105, unit: 'cm' },
      weight: { value: 42, unit: 'kg' },
    },
    pricing: {
      mrp: 35999,
      sellingPrice: 29999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Rocking Mechanism', icon: 'refresh-cw' },
      { id: 'f2', title: 'Multi-angle Backrest', icon: 'maximize' },
      { id: 'f3', title: 'Ergonomic Design', icon: 'user' },
    ],

    variants: [
      { variantId: 'v1', name: 'Cream', price: 29999, inventoryCount: 5, availability: 'in_stock' },
      { variantId: 'v2', name: 'Tan', price: 29999, inventoryCount: 3, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 8,
      rating: 4.7,
      reviewCount: 112,
      tags: ['Trending', 'Rocking Base'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1755247249518-e0d8980cafe5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Minimalist Rocking Recliner',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Cream', hex: '#FFFDD0' },
        { name: 'Tan', hex: '#D2B48C' },
      ],
    },
    seo: {
      metaTitle: 'Rocking Recliner Chair | Minimalist Nursery Seating',
      metaDescription:
        'Gentle rocking recliner with multi-angle support. Perfect for nurseries or relaxing in the living room.',
      keywords: ['rocking recliner', 'nursery chair', 'minimalist rocker'],
    },
    description: 'Features a gentle rocking mechanism and a multi-angle reclining backrest.',
    createdAt: '2025-01-14T12:00:00Z',
    updatedAt: '2025-01-14T12:00:00Z',
  },

  {
    id: 'sofa-028',
    sku: 'WS-MIN-SCB-FAB',
    title: 'Minimalist Fabric Sofa-Cum-Bed',
    slug: 'minimalist-fabric-sofa-cum-bed',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'guest-room', 'studio'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-cum-bed',
      subType: 'convertible',
      style: 'minimal',
    },
    specifications: {
      material: 'Fabric',
      frameMaterial: 'Engineered Wood',
      seatingCapacity: 2,
      style: 'Minimal',
      dimensions: { length: 160, width: 85, height: 85, unit: 'cm' },
      weight: { value: 65, unit: 'kg' },
    },
    pricing: {
      mrp: 31999,
      sellingPrice: 26999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Click-Clack Mechanism', icon: 'mouse' },
      { id: 'f2', title: 'Space Saver', icon: 'maximize-2' },
    ],

    variants: [
      { variantId: 'v1', name: 'Charcoal', price: 26999, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 15,
      rating: 4.3,
      reviewCount: 74,
      tags: ['Space Saver'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1759722665629-29df6ee4f9a5?q=80&w=518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Minimalist Fabric Sofa-Cum-Bed',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Charcoal', hex: '#36454F' }],
    },
    seo: {
      metaTitle: 'Fabric Sofa-Cum-Bed | Small Space Sleeper Sofa',
      metaDescription:
        'Convertible 2-seater sofa-cum-bed. Modern design for small apartments and guest rooms.',
      keywords: ['sofa cum bed', 'convertible sofa', 'sleeper couch fabric'],
    },
    description: 'Dual-purpose furniture that saves space and provides a comfortable sleeping area.',
    createdAt: '2025-01-14T12:00:00Z',
    updatedAt: '2025-01-14T12:00:00Z',
  },

  {
    id: 'sofa-029',
    sku: 'WS-CON-SCB-WD',
    title: 'Wooden Frame Sofa-Cum-Bed',
    slug: 'wooden-frame-sofa-cum-bed',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'guest-room'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-cum-bed',
      subType: 'convertible',
      style: 'contemporary',
    },
    specifications: {
      material: 'Solid Wood & Fabric',
      frameMaterial: 'Sheesham Wood',
      seatingCapacity: 3,
      style: 'Contemporary',
      dimensions: { length: 190, width: 90, height: 90, unit: 'cm' },
      weight: { value: 80, unit: 'kg' },
    },
    pricing: {
      mrp: 39999,
      sellingPrice: 33999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Sheesham Wood Frame', icon: 'tree' },
      { id: 'f2', title: 'Pull-out Bed Mode', icon: 'arrow-down' },
      { id: 'f3', title: '3-Seater Comfort', icon: 'users' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Brown', price: 33999, inventoryCount: 7, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 7,
      rating: 4.6,
      reviewCount: 92,
      tags: ['New Arrival', 'Solid Wood'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1688383454669-9f5cc5991778?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Wooden Frame Sofa-Cum-Bed',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Teak Brown', hex: '#8B4513' }],
    },
    seo: {
      metaTitle: 'Wooden Sofa-Cum-Bed | Sheesham Wood Sleeper Sofa',
      metaDescription:
        'Durable Sheesham wood sofa-cum-bed. Classic design that converts into a double bed effortlessly.',
      keywords: ['wooden sofa bed', 'sheesham wood furniture', '3 seater sofa bed'],
    },
    description: 'Elegant wooden sofa that easily converts into a spacious bed, crafted from premium wood.',
    createdAt: '2025-01-14T12:00:00Z',
    updatedAt: '2025-01-14T12:00:00Z',
  },

  {
    id: 'sofa-030',
    sku: 'WS-REC-SCB-LTH',
    title: 'Recliner Style Sofa-Cum-Bed',
    slug: 'recliner-sofa-cum-bed',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'home-theater'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-cum-bed',
      subType: 'convertible',
      style: 'recliner',
    },
    specifications: {
      material: 'Leather & Wood',
      frameMaterial: 'Metal & Solid Wood',
      seatingCapacity: 3,
      style: 'Recliner',
      dimensions: { length: 205, width: 100, height: 100, unit: 'cm' },
      weight: { value: 85, unit: 'kg' },
    },
    specifications: {
      material: 'Leather & Wood',
      frameMaterial: 'Metal & Solid Wood',
      seatingCapacity: 3,
      style: 'Recliner',
      dimensions: { length: 205, width: 100, height: 100, unit: 'cm' },
      weight: { value: 85, unit: 'kg' },
    },
    pricing: {
      mrp: 54999,
      sellingPrice: 47999,
      currency: 'INR',
      discount: { value: 13, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Reclining Backrest', icon: 'refresh-cw' },
      { id: 'f2', title: 'Premium Leatherette', icon: 'shield-check' },
      { id: 'f3', title: 'Heavy Duty Metal Frame', icon: 'hard-drive' },
    ],

    variants: [
      { variantId: 'v1', name: 'Dark Brown', price: 47999, inventoryCount: 0, availability: 'out_of_stock' },
      { variantId: 'v2', name: 'Tan', price: 47999, inventoryCount: 0, availability: 'out_of_stock' },
    ],
    status: {
      availability: 'out_of_stock',
      inventoryCount: 0,
      rating: 4.8,
      reviewCount: 160,
      tags: ['Best Seller', 'Luxury'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1639322132757-14ee19fb04f5?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Recliner Style Sofa-Cum-Bed',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Dark Brown', hex: '#5D4037' },
        { name: 'Tan', hex: '#D2B48C' },
      ],
    },
    seo: {
      metaTitle: 'Reclining Sofa-Cum-Bed | Luxury Leatherette Sleeper',
      metaDescription:
        'The ultimate luxury sleeper sofa with reclining features. Ideal for premium home theaters and guest comfort.',
      keywords: ['leather sofa bed', 'reclining sleeper', 'luxury sectional bed'],
    },
    description:
      'Premium leather sofa-cum-bed with a reclining backrest for ultimate luxury and guest comfort.',
    createdAt: '2025-01-14T12:00:00Z',
    updatedAt: '2025-01-14T12:00:00Z',
  },

  // sofa-031-035
  {
    id: 'sofa-031',
    sku: 'WS-MOD-3S-FAB',
    title: 'Modern Urban 3-Seater Sofa',
    slug: 'modern-urban-3-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office-lobby'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '3-seater',
      subType: 'stationary-sofa',
      style: 'modern',
    },
    specifications: {
      material: 'High-Quality Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 3,
      style: 'Modern',
      dimensions: { length: 210, width: 85, height: 85, unit: 'cm' },
      weight: { value: 48, unit: 'kg' },
    },
    pricing: {
      mrp: 34999,
      sellingPrice: 28999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Deep Cushioning', icon: 'layers' },
      { id: 'f2', title: 'Soft-Touch Fabric', icon: 'feather' },
      { id: 'f3', title: '2 Year Warranty', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Sky Blue', price: 28999, inventoryCount: 8, availability: 'in_stock' },
      { variantId: 'v2', name: 'Grey', price: 28999, inventoryCount: 14, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 22,
      rating: 4.4,
      reviewCount: 124,
      tags: ['Trending'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg',
          alt: 'Modern Urban 3-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Sky Blue', hex: '#87CEEB' },
        { name: 'Grey', hex: '#808080' },
      ],
    },
    seo: {
      metaTitle: 'Modern Urban 3-Seater Sofa | Premium Fabric Couch',
      metaDescription:
        'Upgrade your living room with our Modern 3-seater sofa. Features deep cushioning and high-quality fabric.',
      keywords: ['3 seater sofa', 'modern couch', 'living room sofa'],
    },
    description:
      'A sleek modern 3-seater sofa with deep cushioning and soft fabric, perfect for the main hall.',
    createdAt: '2025-01-14T14:00:00Z',
    updatedAt: '2025-01-14T14:00:00Z',
  },

  {
    id: 'sofa-032',
    sku: 'WS-CLA-3S-WD',
    title: 'Classic Wooden 3-Seater Sofa',
    slug: 'classic-wooden-3-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'traditional-hall'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '3-seater',
      subType: 'wooden-frame-sofa',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood & Fabric',
      frameMaterial: 'Sheesham Wood',
      seatingCapacity: 3,
      style: 'Classic',
      dimensions: { length: 195, width: 85, height: 90, unit: 'cm' },
      weight: { value: 52, unit: 'kg' },
    },
    pricing: {
      mrp: 42999,
      sellingPrice: 35999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Premium Sheesham Wood', icon: 'tree' },
      { id: 'f2', title: 'Traditional Carvings', icon: 'edit-3' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Brown', price: 35999, inventoryCount: 5, availability: 'in_stock' },
      { variantId: 'v2', name: 'Beige', price: 35999, inventoryCount: 3, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 8,
      rating: 4.6,
      reviewCount: 148,
      tags: ['Best Seller', 'Solid Wood'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2023/12/31/15/42/living-room-8480223_1280.jpg',
          alt: 'Classic Wooden 3-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Teak Brown', hex: '#8B4513' },
        { name: 'Beige', hex: '#F5F5DC' },
      ],
    },
    seo: {
      metaTitle: 'Sheesham Wood 3-Seater Sofa | Classic Furniture',
      metaDescription:
        'Durable and elegant 3-seater sofa made from solid Sheesham wood. Timeless design for Indian homes.',
      keywords: ['wooden sofa', 'sheesham wood 3 seater', 'traditional sofa set'],
    },
    description: 'Traditional 3-seater crafted from premium Sheesham wood for a timeless look in your home.',
    createdAt: '2025-01-14T14:00:00Z',
    updatedAt: '2025-01-14T14:00:00Z',
  },

  {
    id: 'sofa-033',
    sku: 'WS-MIN-3S-FAB',
    title: 'Minimalist Urban 3-Seater Sofa',
    slug: 'minimalist-urban-3-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['studio', 'apartment-living', 'waiting-area'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '3-seater',
      subType: 'stationary-sofa',
      style: 'minimal',
    },
    specifications: {
      material: 'Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 3,
      style: 'Minimal',
      dimensions: { length: 185, width: 80, height: 85, unit: 'cm' },
      weight: { value: 42, unit: 'kg' },
    },
    pricing: {
      mrp: 27999,
      sellingPrice: 23999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Compact Design', icon: 'minimize' },
      { id: 'f2', title: 'Easy Assembly', icon: 'tool' },
    ],

    variants: [
      { variantId: 'v1', name: 'Charcoal', price: 23999, inventoryCount: 20, availability: 'in_stock' },
      { variantId: 'v2', name: 'Light Grey', price: 23999, inventoryCount: 15, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 35,
      rating: 4.2,
      reviewCount: 83,
      tags: ['Budget Friendly'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1691819989572-d3a9c83a6f17?q=80&w=866&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Minimalist Urban 3-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Charcoal', hex: '#36454F' },
        { name: 'Light Grey', hex: '#D3D3D3' },
      ],
    },
    seo: {
      metaTitle: 'Minimalist 3-Seater Sofa | Affordable Studio Couch',
      metaDescription:
        'Low-cost, high-style minimalist 3-seater sofa. Perfect for small spaces and rental apartments.',
      keywords: ['budget sofa', 'minimalist 3 seater', 'small apartment couch'],
    },
    description: 'No-frills minimalist 3-seater sofa perfect for modern small apartments and studios.',
    createdAt: '2025-01-14T14:00:00Z',
    updatedAt: '2025-01-14T14:00:00Z',
  },

  {
    id: 'sofa-034',
    sku: 'WS-LUX-3S-VEL',
    title: 'Luxury Velvet 3-Seater Sofa',
    slug: 'luxury-velvet-3-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'lounge'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '3-seater',
      subType: 'upholstered-sofa',
      style: 'luxury',
    },
    specifications: {
      material: 'Velvet & Solid Wood',
      frameMaterial: 'Teak Wood',
      seatingCapacity: 3,
      style: 'Luxury',
      dimensions: { length: 210, width: 90, height: 95, unit: 'cm' },
      weight: { value: 58, unit: 'kg' },
    },
    pricing: {
      mrp: 52999,
      sellingPrice: 45999,
      currency: 'INR',
      discount: { value: 13, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Premium Velvet', icon: 'award' },
      { id: 'f2', title: 'Solid Teak Legs', icon: 'anchor' },
      { id: 'f3', title: '3 Year Warranty', icon: 'check-circle' },
    ],

    variants: [
      { variantId: 'v1', name: 'Royal Blue', price: 45999, inventoryCount: 4, availability: 'in_stock' },
      { variantId: 'v2', name: 'Emerald', price: 45999, inventoryCount: 2, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 6,
      rating: 4.9,
      reviewCount: 204,
      tags: ['Premium Choice', 'Velvet'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1683133884709-761d2340a2a9?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Velvet 3-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Royal Blue', hex: '#002366' },
        { name: 'Emerald', hex: '#50C878' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Velvet Sofa | Royal 3-Seater Seating',
      metaDescription:
        'Elite velvet sofa with Teak wood frame. Premium aesthetics for a high-end living room experience.',
      keywords: ['velvet 3 seater', 'luxury velvet sofa', 'teak wood sofa'],
    },
    description:
      'Luxurious velvet 3-seater with Teak wood legs, designed to be the centerpiece of your hall.',
    createdAt: '2025-01-14T14:00:00Z',
    updatedAt: '2025-01-14T14:00:00Z',
  },

  {
    id: 'sofa-035',
    sku: 'WS-CON-3S-FAB',
    title: 'Compact Contemporary 3-Seater Sofa',
    slug: 'compact-contemporary-3-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'apartment'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '3-seater',
      subType: 'stationary-sofa',
      style: 'contemporary',
    },
    specifications: {
      material: 'Fabric & Engineered Wood',
      frameMaterial: 'Engineered Wood',
      seatingCapacity: 3,
      style: 'Contemporary',
      dimensions: { length: 175, width: 80, height: 85, unit: 'cm' },
      weight: { value: 40, unit: 'kg' },
    },
    pricing: {
      mrp: 25999,
      sellingPrice: 21999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Engineered Strength', icon: 'cpu' },
      { id: 'f2', title: 'Durable Upholstery', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Beige', price: 21999, inventoryCount: 0, availability: 'out_of_stock' },
      { variantId: 'v2', name: 'Brown', price: 21999, inventoryCount: 0, availability: 'out_of_stock' },
    ],
    status: {
      availability: 'out_of_stock',
      inventoryCount: 0,
      rating: 4.1,
      reviewCount: 69,
      tags: ['Space Saver', 'Budget'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1721137057544-59ccfeb41095?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Compact Contemporary 3-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Beige', hex: '#F5F5DC' },
        { name: 'Brown', hex: '#8B4513' },
      ],
    },
    seo: {
      metaTitle: 'Compact 3-Seater Sofa | Contemporary Living Seating',
      metaDescription:
        'Space-efficient 3-seater sofa. Durable and stylish contemporary design at an affordable price.',
      keywords: ['compact sofa', 'contemporary 3 seater', 'small living room furniture'],
    },
    description:
      'A space-efficient 3-seater sofa featuring a contemporary design with durable fabric upholstery.',
    createdAt: '2025-01-14T14:00:00Z',
    updatedAt: '2025-01-14T14:00:00Z',
  },

  // sofa-036-040
  {
    id: 'sofa-036',
    sku: 'WS-MOD-2S-FAB',
    title: 'Modern Urban 2-Seater Sofa',
    slug: 'modern-urban-2-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'studio'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '2-seater',
      subType: 'loveseat',
      style: 'modern',
    },
    specifications: {
      material: 'Breathable Polyester Fabric',
      frameMaterial: 'Solid Wood & Plywood',
      seatingCapacity: 2,
      dimensions: { length: 150, width: 85, height: 85, unit: 'cm' },
      weight: { value: 32, unit: 'kg' },
    },
    pricing: {
      mrp: 20999,
      sellingPrice: 17999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Compact Fit', icon: 'minimize' },
      { id: 'f2', title: 'High Density Foam', icon: 'layers' },
      { id: 'f3', title: 'Solid Wood Base', icon: 'anchor' },
    ],

    variants: [
      { variantId: 'v1', name: 'Light Grey', price: 17999, inventoryCount: 10, availability: 'in_stock' },
      { variantId: 'v2', name: 'Dark Grey', price: 17999, inventoryCount: 8, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 18,
      rating: 4.4,
      reviewCount: 55,
      tags: ['Compact', 'Trending'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1683121479124-3ad7cb063020?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern Urban 2-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Light Grey', hex: '#D3D3D3' },
        { name: 'Dark Grey', hex: '#A9A9A9' },
      ],
    },
    seo: {
      metaTitle: 'Modern 2-Seater Sofa | Compact Apartment Couch',
      metaDescription:
        'Upgrade your studio apartment with our Modern 2-seater fabric sofa. Comfortable, sleek, and space-saving.',
      keywords: ['2 seater sofa', 'loveseat', 'small apartment couch', 'modern sofa'],
    },
    description: 'Sleek and comfortable 2-seater sofa, ideal for modern apartments and cozy living spaces.',
    createdAt: '2025-01-14T16:00:00Z',
    updatedAt: '2025-01-14T16:00:00Z',
  },

  {
    id: 'sofa-037',
    sku: 'WS-CLA-2S-WD',
    title: 'Classic Wooden 2-Seater Sofa',
    slug: 'classic-wooden-2-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office-lobby'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '2-seater-sofa',
      subType: 'wooden-frame-sofa',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood & Fabric',
      frameMaterial: 'Solid Rosewood / Sheesham',
      seatingCapacity: 2,
      dimensions: { length: 155, width: 85, height: 90, unit: 'cm' },
      weight: { value: 38, unit: 'kg' },
    },
    pricing: {
      mrp: 33999,
      sellingPrice: 28999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Sheesham Wood', icon: 'tree' },
      { id: 'f2', title: 'Durable Finish', icon: 'shield-check' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut', price: 28999, inventoryCount: 4, availability: 'in_stock' },
      { variantId: 'v2', name: 'Cream', price: 28999, inventoryCount: 2, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 6,
      rating: 4.5,
      reviewCount: 110,
      tags: ['Durable', 'Solid Wood'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1660491632751-3941540e383e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Classic Wooden 2-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Walnut', hex: '#77391b' },
        { name: 'Cream', hex: '#FFFDD0' },
      ],
    },
    seo: {
      metaTitle: 'Wooden 2-Seater Sofa | Sheesham Wood Loveseat',
      metaDescription:
        'Traditional 2-seater sofa with premium Sheesham wood frame. Perfect for office waiting areas and living rooms.',
      keywords: ['wooden 2 seater', 'sheesham wood sofa', 'classic loveseat'],
    },
    description: 'Timeless 2-seater design with a sturdy Sheesham wood frame and high-density foam seating.',
    createdAt: '2025-01-14T16:00:00Z',
    updatedAt: '2025-01-14T16:00:00Z',
  },

  {
    id: 'sofa-038',
    sku: 'WS-MIN-2S-FAB',
    title: 'Minimalist Urban 2-Seater Sofa',
    slug: 'minimalist-urban-2-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['studio', 'bedroom', 'balcony'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '2-seater',
      subType: 'loveseat',
      style: 'Minimalist',
    },
    specifications: {
      material: 'Breathable Linen Fabric',
      frameMaterial: 'Solid Pine Wood',
      seatingCapacity: 2,
      dimensions: { length: 140, width: 80, height: 85, unit: 'cm' },
      weight: { value: 30, unit: 'kg' },
    },
    pricing: {
      mrp: 23999,
      sellingPrice: 19999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Urban Aesthetic', icon: 'map' },
      { id: 'f2', title: 'Stain Resistant', icon: 'droplet' },
    ],

    variants: [
      { variantId: 'v1', name: 'Charcoal', price: 19999, inventoryCount: 15, availability: 'in_stock' },
      { variantId: 'v2', name: 'Light Grey', price: 19999, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 27,
      rating: 4.1,
      reviewCount: 72,
      tags: ['Urban', 'Simple'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2024/01/27/08/22/ai-generated-8535497_1280.png',
          alt: 'Minimalist Urban 2-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Charcoal', hex: '#36454F' },
        { name: 'Light Grey', hex: '#D3D3D3' },
      ],
    },
    seo: {
      metaTitle: 'Minimalist 2-Seater Sofa | Urban Living Room Seating',
      metaDescription:
        'Affordable minimalist 2-seater sofa. High quality, easy to clean fabric for urban living.',
      keywords: ['minimalist sofa', 'budget 2 seater', 'grey loveseat'],
    },
    description:
      'Minimalist 2-seater sofa that combines sleek aesthetics with functional design for small spaces.',
    createdAt: '2025-01-14T16:00:00Z',
    updatedAt: '2025-01-14T16:00:00Z',
  },

  {
    id: 'sofa-039',
    sku: 'WS-LUX-2S-VEL',
    title: 'Luxury Velvet 2-Seater Sofa',
    slug: 'luxury-velvet-2-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'luxury-suite'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '2-seater',
      subType: 'upholstered-loveseat',
      style: 'luxury',
    },
    specifications: {
      material: 'Premium Velvet & Solid Wood',
      frameMaterial: 'Teak Wood',
      seatingCapacity: 2,
      dimensions: { length: 160, width: 90, height: 95, unit: 'cm' },
      weight: { value: 42, unit: 'kg' },
    },
    pricing: {
      mrp: 39999,
      sellingPrice: 34999,
      currency: 'INR',
      discount: { value: 12, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Premium Velvet', icon: 'zap' },
      { id: 'f2', title: 'Teak Wood Legs', icon: 'box' },
      { id: 'f3', title: 'Hand-finished', icon: 'edit' },
    ],

    variants: [
      { variantId: 'v1', name: 'Wine', price: 34999, inventoryCount: 3, availability: 'in_stock' },
      { variantId: 'v2', name: 'Navy Blue', price: 34999, inventoryCount: 4, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 7,
      rating: 4.7,
      reviewCount: 88,
      tags: ['Premium', 'Velvet'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1661330096698-4148e5c3b874?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Velvet 2-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Wine', hex: '#722F37' },
        { name: 'Navy Blue', hex: '#000080' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Velvet Loveseat | Velvet 2-Seater Couch',
      metaDescription:
        'Plush velvet 2-seater sofa with teak legs. Add a royal touch to your master bedroom or lounge.',
      keywords: ['velvet loveseat', 'luxury small sofa', 'wine red velvet couch'],
    },
    description: 'Elegant 2-seater sofa upholstered in plush velvet, featuring hand-finished Teak wood legs.',
    createdAt: '2025-01-14T16:00:00Z',
    updatedAt: '2025-01-14T16:00:00Z',
  },

  {
    id: 'sofa-040',
    sku: 'WS-CON-2S-CPT',
    title: 'Compact Contemporary 2-Seater Sofa',
    slug: 'compact-contemporary-2-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['office', 'waiting-area', 'small-living-room'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '2-seater',
      subType: 'compact-loveseat',
      style: 'contemporary',
    },
    specifications: {
      material: 'Durable Fabric & Engineered Wood',
      frameMaterial: 'High-Grade Engineered Wood',
      seatingCapacity: 2,
      dimensions: { length: 135, width: 75, height: 85, unit: 'cm' },
      weight: { value: 28, unit: 'kg' },
    },
    pricing: {
      mrp: 22999,
      sellingPrice: 18999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Office Optimized', icon: 'briefcase' },
      { id: 'f2', title: 'Easy Maintainance', icon: 'coffee' },
    ],

    variants: [
      { variantId: 'v1', name: 'Tan', price: 18999, inventoryCount: 0, availability: 'out_of_stock' },
      { variantId: 'v2', name: 'Dark Grey', price: 18999, inventoryCount: 0, availability: 'out_of_stock' },
    ],
    status: {
      availability: 'out_of_stock',
      inventoryCount: 0,
      rating: 4.0,
      reviewCount: 42,
      tags: ['Space Saver', 'Office Use'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1759722665623-c4c1075c0a6b?q=80&w=454&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Compact Contemporary 2-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Tan', hex: '#D2B48C' },
        { name: 'Dark Grey', hex: '#A9A9A9' },
      ],
    },
    seo: {
      metaTitle: 'Office Cabin Sofa | 2-Seater Small Space Couch',
      metaDescription:
        'Professional 2-seater sofa for offices and waiting areas. Durable and space-efficient.',
      keywords: ['office sofa', 'waiting area couch', 'compact 2 seater'],
    },
    description: 'A budget-friendly contemporary 2-seater designed for tight spaces and modern offices.',
    createdAt: '2025-01-14T16:00:00Z',
    updatedAt: '2025-01-14T16:00:00Z',
  },
  // sofa-041-045
  {
    id: 'sofa-041',
    sku: 'WS-MOD-1S-FAB',
    title: 'Modern Urban 1-Seater Sofa',
    slug: 'modern-urban-1-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'study'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '1-seater',
      subType: 'armchair',
      style: 'modern',
    },
    specifications: {
      material: 'Premium Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 1,
      dimensions: { length: 85, width: 85, height: 85, unit: 'cm' },
      weight: { value: 18, unit: 'kg' },
    },
    pricing: {
      mrp: 14999,
      sellingPrice: 11999,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Vibrant Accent Chair', icon: 'star' },
      { id: 'f2', title: 'Ergonomic Back', icon: 'user' },
      { id: 'f3', title: '2 Year Warranty', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Yellow', price: 11999, inventoryCount: 5, availability: 'in_stock' },
      { variantId: 'v2', name: 'Teal', price: 11999, inventoryCount: 7, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 12,
      rating: 4.5,
      reviewCount: 65,
      tags: ['Accent Chair', 'Trending'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern Urban 1-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Yellow', hex: '#FFFF00' },
        { name: 'Teal', hex: '#008080' },
      ],
    },
    seo: {
      metaTitle: 'Modern 1-Seater Accent Chair | Urban Bedroom Sofa',
      metaDescription:
        'Add a pop of color with our Modern 1-seater sofa. Perfect as an accent chair for bedrooms or living rooms.',
      keywords: ['accent chair', '1 seater sofa', 'bedroom chair', 'modern armchair'],
    },
    description:
      'Bold and stylish 1-seater accent chair that adds a pop of color to your bedroom or living area.',
    createdAt: '2025-01-14T18:00:00Z',
    updatedAt: '2025-01-14T18:00:00Z',
  },

  {
    id: 'sofa-042',
    sku: 'WS-CLA-1S-WD',
    title: 'Classic Wooden 1-Seater Sofa',
    slug: 'classic-wooden-1-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'reading-room'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '1-seater',
      subType: 'accent-chair',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood & Premium Fabric',
      frameMaterial: 'Sheesham Wood (Solid Wood)',
      seatingCapacity: 1,
      dimensions: { length: 90, width: 85, height: 90, unit: 'cm' },
      weight: { value: 25, unit: 'kg' },
    },
    pricing: {
      mrp: 25999,
      sellingPrice: 21999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Sheesham Wood Frame', icon: 'tree' },
      { id: 'f2', title: 'Plush Cushioning', icon: 'layers' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Brown', price: 21999, inventoryCount: 3, availability: 'in_stock' },
      { variantId: 'v2', name: 'Cream', price: 21999, inventoryCount: 4, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 7,
      rating: 4.8,
      reviewCount: 120,
      tags: ['Best Seller', 'Solid Wood'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1749703836810-361f30aba87a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Classic Wooden 1-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Walnut Brown', hex: '#5D4037' },
        { name: 'Cream', hex: '#FFFDD0' },
      ],
    },
    seo: {
      metaTitle: 'Wooden 1-Seater Sofa | Sheesham Wood Armchair',
      metaDescription:
        'Traditional 1-seater chair crafted from premium Sheesham wood. Ideal for reading nooks and classic interiors.',
      keywords: ['wooden armchair', 'sheesham wood 1 seater', 'classic room chair'],
    },
    description: 'Premium Sheesham wood 1-seater chair, perfect for a cozy reading nook in the bedroom.',
    createdAt: '2025-01-14T18:00:00Z',
    updatedAt: '2025-01-14T18:00:00Z',
  },

  {
    id: 'sofa-043',
    sku: 'WS-MIN-1S-FAB',
    title: 'Minimalist Urban 1-Seater Sofa',
    slug: 'minimalist-urban-1-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'balcony', 'studio'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '1-seater',
      subType: 'lounge-chair',
      style: 'minimal',
    },
    specifications: {
      material: 'Breathable Linen Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 1,
      style: 'Minimal',
      dimensions: { length: 80, width: 80, height: 85, unit: 'cm' },
      weight: { value: 16, unit: 'kg' },
    },
    pricing: {
      mrp: 16999,
      sellingPrice: 13999,
      currency: 'INR',
      discount: { value: 18, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Compact Footprint', icon: 'minimize-2' },
      { id: 'f2', title: 'Stain Resistant Fabric', icon: 'droplet' },
    ],

    variants: [
      { variantId: 'v1', name: 'Light Grey', price: 13999, inventoryCount: 15, availability: 'in_stock' },
      { variantId: 'v2', name: 'Navy Blue', price: 13999, inventoryCount: 8, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 23,
      rating: 4.2,
      reviewCount: 58,
      tags: ['Minimal', 'Small Space'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1681558314227-33174756677d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Minimalist Urban 1-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Light Grey', hex: '#D3D3D3' },
        { name: 'Navy Blue', hex: '#000080' },
      ],
    },
    seo: {
      metaTitle: 'Minimalist 1-Seater Sofa | Compact Bedroom Seating',
      metaDescription:
        'Shop our space-saving minimalist 1-seater. Perfect for balconies, small bedrooms, or studio apartments.',
      keywords: ['compact 1 seater', 'minimalist armchair', 'small room sofa'],
    },
    description: 'Sleek minimalist 1-seater with a compact footprint, ideal for bedrooms and balconies.',
    createdAt: '2025-01-14T18:00:00Z',
    updatedAt: '2025-01-14T18:00:00Z',
  },

  {
    id: 'sofa-044',
    sku: 'WS-LUX-1S-VEL',
    title: 'Luxury Velvet 1-Seater Sofa',
    slug: 'luxury-velvet-1-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'master-bedroom', 'lounge'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '1-seater',
      subType: 'wingback-chair',
      style: 'luxury',
    },
    specifications: {
      material: 'Velvet & Solid Wood',
      frameMaterial: 'Teak Wood',
      seatingCapacity: 1,
      style: 'Luxury',
      dimensions: { length: 95, width: 90, height: 95, unit: 'cm' },
      weight: { value: 22, unit: 'kg' },
    },
    pricing: {
      mrp: 28999,
      sellingPrice: 24999,
      currency: 'INR',
      discount: { value: 13, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Elite Velvet Finish', icon: 'star' },
      { id: 'f2', title: 'Teak Wood Legs', icon: 'anchor' },
      { id: 'f3', title: '3 Year Warranty', icon: 'award' },
    ],
    variants: [
      { variantId: 'v1', name: 'Emerald Green', price: 24999, inventoryCount: 3, availability: 'in_stock' },
      { variantId: 'v2', name: 'Royal Blue', price: 24999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 8,
      rating: 4.9,
      reviewCount: 94,
      tags: ['Premium', 'Velvet', 'Luxury'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1691602832299-28e8bc505397?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Velvet 1-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Emerald Green', hex: '#50C878' },
        { name: 'Royal Blue', hex: '#002366' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Velvet 1-Seater Sofa | Royal Armchair',
      metaDescription:
        'Experience premium comfort with our luxury velvet armchair. Hand-finished teak legs and plush velvet upholstery.',
      keywords: ['velvet armchair', 'luxury 1 seater', 'royal bedroom chair'],
    },
    description:
      'A royal 1-seater velvet chair with Teak legs, providing a luxurious seating experience in any room.',
    createdAt: '2025-01-14T18:00:00Z',
    updatedAt: '2025-01-14T18:00:00Z',
  },

  {
    id: 'sofa-045',
    sku: 'WS-CON-1S-CPT',
    title: 'Compact Contemporary 1-Seater Sofa',
    slug: 'compact-contemporary-1-seater-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'office-cabin', 'waiting-area'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '1-seater',
      subType: 'tub-chair',
      style: 'contemporary',
    },
    specifications: {
      material: 'Fabric & Engineered Wood',
      frameMaterial: 'High-Density Engineered Wood',
      seatingCapacity: 1,
      dimensions: { length: 75, width: 75, height: 80, unit: 'cm' },
      weight: { value: 15, unit: 'kg' },
    },
    pricing: {
      mrp: 15999,
      sellingPrice: 12999,
      currency: 'INR',
      discount: { value: 19, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Office Optimized', icon: 'briefcase' },
      { id: 'f2', title: 'Engineered Durability', icon: 'tool' },
    ],

    variants: [
      { variantId: 'v1', name: 'Brown', price: 12999, inventoryCount: 0, availability: 'out_of_stock' },
      { variantId: 'v2', name: 'Grey', price: 12999, inventoryCount: 0, availability: 'out_of_stock' },
    ],
    status: {
      availability: 'out_of_stock',
      inventoryCount: 0,
      rating: 4.0,
      reviewCount: 31,
      tags: ['Space Saver', 'Minimalist'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1659393343418-c9a196fc782e?q=80&w=451&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Compact Contemporary 1-Seater Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Brown', hex: '#8B4513' },
        { name: 'Grey', hex: '#808080' },
      ],
    },
    seo: {
      metaTitle: 'Small Contemporary Armchair | Bedroom Side Chair',
      metaDescription:
        'Affordable and compact contemporary 1-seater. Ideal as a side chair for bedrooms or office waiting areas.',
      keywords: ['small armchair', 'contemporary 1 seater', 'budget bedroom chair'],
    },
    description:
      'A very compact 1-seater chair designed for studio apartments or as a side chair in the bedroom.',
    createdAt: '2025-01-14T18:00:00Z',
    updatedAt: '2025-01-14T18:00:00Z',
  },

  // sofa-046-050
  {
    id: 'sofa-046',
    sku: 'WS-MOD-311-FAB',
    title: 'Modern Urban 3+1+1 Sofa Set',
    slug: 'modern-urban-3-1-1-sofa-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office-reception'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-set',
      subType: '5-seater-set',
      style: 'modern',
    },
    specifications: {
      material: 'High-Performance Fabric',
      frameMaterial: 'Solid & Engineered Wood',
      seatingCapacity: 5,
      dimensions: { length: 210, width: 85, height: 90, unit: 'cm' },
      weight: { value: 95, unit: 'kg' },
    },
    pricing: {
      mrp: 75999,
      sellingPrice: 64999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: '5-Seater Capacity', icon: 'users' },
      { id: 'f2', title: 'Solid Wood Frame', icon: 'hard-drive' },
      { id: 'f3', title: 'Breathable Fabric', icon: 'wind' },
    ],

    variants: [
      { variantId: 'v1', name: 'Dark Grey', price: 64999, inventoryCount: 5, availability: 'in_stock' },
      { variantId: 'v2', name: 'Blue', price: 64999, inventoryCount: 3, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 8,
      rating: 4.6,
      reviewCount: 142,
      tags: ['Full Family Set', 'Trending'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern 3+1+1 Sofa Set',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Dark Grey', hex: '#A9A9A9' },
        { name: 'Blue', hex: '#0000FF' },
      ],
    },
    seo: {
      metaTitle: 'Modern 3+1+1 Sofa Set | Full 5 Seater Living Room Set',
      metaDescription:
        'Complete 5-seater sofa set for your living room. Modern design with premium fabric and durable wood frame.',
      keywords: ['3+1+1 sofa set', '5 seater sofa', 'complete sofa set', 'modern living room furniture'],
    },
    description:
      'Complete 5-seater sofa set including one 3-seater and two 1-seaters, perfect for large living rooms.',
    createdAt: '2025-01-14T20:00:00Z',
    updatedAt: '2025-01-14T20:00:00Z',
  },

  {
    id: 'sofa-047',
    sku: 'WS-CLA-311-WD',
    title: 'Classic Wooden 3+1+1 Sofa Set',
    slug: 'classic-wooden-3-1-1-sofa-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'grand-hall'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-set',
      subType: 'wooden-frame-set',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Wood & Premium Fabric',
      frameMaterial: 'Seasoned Sheesham Wood',
      seatingCapacity: 5,
      dimensions: { length: 195, width: 85, height: 90, unit: 'cm' },
      weight: { value: 120, unit: 'kg' },
    },
    pricing: {
      mrp: 112999,
      sellingPrice: 94999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Premium Sheesham Wood', icon: 'tree' },
      { id: 'f2', title: 'Heritage Design', icon: 'award' },
      { id: 'f3', title: '5 Year Warranty', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Honey Finish', price: 94999, inventoryCount: 2, availability: 'in_stock' },
      { variantId: 'v2', name: 'Walnut', price: 94999, inventoryCount: 2, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 4,
      rating: 4.9,
      reviewCount: 210,
      tags: ['Premium Wood', 'Best Seller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1746605620245-bf8d2c653379?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Classic Wooden 3+1+1 Sofa Set',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Honey Finish', hex: '#E3A857' },
        { name: 'Walnut', hex: '#77391B' },
      ],
    },
    seo: {
      metaTitle: 'Sheesham Wood 3+1+1 Sofa Set | Traditional 5 Seater',
      metaDescription:
        'Luxurious Sheesham wood sofa set with traditional craftsmanship. Durable, elegant, and perfect for Indian homes.',
      keywords: ['wooden sofa set', 'sheesham 5 seater', '3+1+1 wooden sofa', 'royal sofa set'],
    },
    description:
      'Heritage-style 5-seater sofa set made from high-quality Sheesham wood with royal upholstery.',
    createdAt: '2025-01-14T20:00:00Z',
    updatedAt: '2025-01-14T20:00:00Z',
  },

  {
    id: 'sofa-048',
    sku: 'WS-MIN-311-FAB',
    title: 'Minimalist Urban 3+1 Sofa Set',
    slug: 'minimalist-urban-3-1-sofa-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'apartment'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-set',
      subType: '4-seater-set',
      style: 'minimalist',
    },
    specifications: {
      material: 'Linen Blend Fabric',
      frameMaterial: 'Solid Pine Wood',
      seatingCapacity: 4,
      dimensions: { length: 185, width: 80, height: 85, unit: 'cm' },
      weight: { value: 88, unit: 'kg' },
    },
    pricing: {
      mrp: 89999,
      sellingPrice: 76999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Clean Silhouettes', icon: 'box' },
      { id: 'f2', title: 'Stain-Proof Fabric', icon: 'umbrella' },
    ],

    variants: [
      { variantId: 'v1', name: 'Light Grey', price: 76999, inventoryCount: 8, availability: 'in_stock' },
      { variantId: 'v2', name: 'Charcoal', price: 76999, inventoryCount: 6, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 14,
      rating: 4.3,
      reviewCount: 67,
      tags: ['Minimalist', 'Urban Living'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1664300969611-f3745a737234?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Minimalist 3+1+1 Sofa Set',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Light Grey', hex: '#D3D3D3' },
        { name: 'Charcoal', hex: '#36454F' },
      ],
    },
    seo: {
      metaTitle: 'Minimalist 5-Seater Sofa Set | Modern Apartment Furniture',
      metaDescription:
        'Discover our minimalist 3+1+1 sofa set. Clean design, space-efficient, and high-quality grey fabric.',
      keywords: ['minimal sofa set', 'urban sofa 5 seater', '3+1+1 grey sofa'],
    },
    description:
      'A clean, minimalist 5-seater sofa set designed to fit into modern urban aesthetics seamlessly.',
    createdAt: '2025-01-14T20:00:00Z',
    updatedAt: '2025-01-14T20:00:00Z',
  },

  {
    id: 'sofa-049',
    sku: 'WS-LUX-311-VEL',
    title: 'Luxury Velvet 3+1+1 Sofa Set',
    slug: 'luxury-velvet-3-1-1-sofa-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'penthouse', 'luxury-lounge'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-set',
      subType: 'upholstered-set',
      style: 'luxury',
    },
    specifications: {
      material: 'High-GSM Italian Velvet',
      frameMaterial: 'Solid Teak Wood',
      seatingCapacity: 5,
      dimensions: { length: 220, width: 90, height: 95, unit: 'cm' },
      weight: { value: 110, unit: 'kg' },
    },
    pricing: {
      mrp: 135999,
      sellingPrice: 115999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Teak Wood Support', icon: 'anchor' },
      { id: 'f2', title: 'Hand-Tufted Detailing', icon: 'edit' },
      { id: 'f3', title: 'Premium Velvet Feel', icon: 'star' },
    ],

    variants: [
      { variantId: 'v1', name: 'Emerald Green', price: 115999, inventoryCount: 3, availability: 'in_stock' },
      { variantId: 'v2', name: 'Royal Blue', price: 115999, inventoryCount: 2, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 5,
      rating: 5.0,
      reviewCount: 305,
      tags: ['Ultra Luxury', 'Royal'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1683133715785-a7fb248829d2?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Velvet 3+1+1 Sofa Set',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Emerald Green', hex: '#50C878' },
        { name: 'Royal Blue', hex: '#002366' },
      ],
    },
    seo: {
      metaTitle: 'Royal Velvet 3+1+1 Sofa Set | Luxury 5-Seater',
      metaDescription:
        'The pinnacle of luxury. Hand-tufted velvet sofa set with solid teak legs. Perfect for high-end living rooms.',
      keywords: ['luxury velvet sofa set', 'royal 3+1+1 sofa', 'teak wood sofa set', 'emerald green sofa'],
    },
    description:
      'Our most premium 5-seater velvet sofa set with Teak wood legs and intricate tufted detailing.',
    createdAt: '2025-01-14T20:00:00Z',
    updatedAt: '2025-01-14T20:00:00Z',
  },

  {
    id: 'sofa-050',
    sku: 'WS-CON-311-FAB',
    title: 'Contemporary Lined 2+1+1 Sofa Set',
    slug: 'contemporary-2-1-1-sofa-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'modern-hall'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-set',
      subType: '4-seater-set',
      style: 'contemporary',
    },
    specifications: {
      material: 'Textured Polyester Blend',
      frameMaterial: 'Kiln-Dried Hardwood',
      seatingCapacity: 4,
      dimensions: { length: 215, width: 88, height: 92, unit: 'cm' },
      weight: { value: 105, unit: 'kg' },
    },
    pricing: {
      mrp: 104999,
      sellingPrice: 88999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'High Resilience Foam', icon: 'zap' },
      { id: 'f2', title: 'Vertical Line Tufting', icon: 'align-justify' },
    ],

    variants: [
      { variantId: 'v1', name: 'Taupe', price: 88999, inventoryCount: 0, availability: 'out_of_stock' },
      { variantId: 'v2', name: 'Beige', price: 88999, inventoryCount: 0, availability: 'out_of_stock' },
    ],
    status: {
      availability: 'out_of_stock',
      inventoryCount: 0,
      rating: 4.7,
      reviewCount: 118,
      tags: ['Full Family Set', 'Elegant'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1759722665606-3be48960d3a3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Contemporary 3+1+1 Sofa Set',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Taupe', hex: '#483C32' },
        { name: 'Beige', hex: '#F5F5DC' },
      ],
    },
    seo: {
      metaTitle: 'Contemporary 5-Seater Sofa Set | Elegant Hall Seating',
      metaDescription:
        'Upgrade to elegance with our contemporary lined 3+1+1 sofa set. High-comfort foam and vertical tufting.',
      keywords: ['contemporary sofa set', '3+1+1 fabric sofa', 'elegant living room set'],
    },
    description: 'A stylish contemporary 5-seater set with vertical line tufting and high-resilience foam.',
    createdAt: '2025-01-14T20:00:00Z',
    updatedAt: '2025-01-14T20:00:00Z',
  },
  // sofa-051-055
  {
    id: 'sofa-051',
    sku: 'WS-MOD-LS-FAB',
    title: 'Modern Urban L-Shaped Sofa',
    slug: 'modern-urban-l-shaped-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sectional',
      subType: 'l-shape',
      style: 'modern',
    },
    specifications: {
      material: 'High-Quality Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 5,
      dimensions: { length: 240, width: 150, height: 85, unit: 'cm' },
      weight: { value: 90, unit: 'kg' },
    },
    pricing: {
      mrp: 65999,
      sellingPrice: 54999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Corner Space Optimizer', icon: 'maximize' },
      { id: 'f2', title: 'Right-Aligned Sectional', icon: 'layout' },
      { id: 'f3', title: 'High-Density Foam', icon: 'layers' },
    ],

    variants: [
      { variantId: 'v1', name: 'Dark Grey', price: 54999, inventoryCount: 4, availability: 'in_stock' },
      { variantId: 'v2', name: 'Navy Blue', price: 54999, inventoryCount: 6, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 10,
      rating: 4.5,
      reviewCount: 185,
      tags: ['Corner Sofa', 'Space Optimizer'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1639259885918-b8ee9b8374b8?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern Urban L-Shaped Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Dark Grey', hex: '#A9A9A9' },
        { name: 'Navy Blue', hex: '#000080' },
      ],
    },
    seo: {
      metaTitle: 'Modern L-Shaped Sectional Sofa | 5 Seater Corner Sofa',
      metaDescription:
        'Maximize your living room space with our Modern Urban L-shaped sofa. High-quality fabric and solid wood frame for ultimate comfort.',
      keywords: ['l shaped sofa', 'sectional sofa', 'corner sofa', '5 seater sectional'],
    },
    description: 'Right-aligned L-shaped sectional sofa that maximizes seating in corner spaces.',
    createdAt: '2025-01-14T21:00:00Z',
    updatedAt: '2025-01-14T21:00:00Z',
  },

  {
    id: 'sofa-052',
    sku: 'WS-LUX-LS-VEL',
    title: 'Luxury Velvet L-Shaped Sofa',
    slug: 'luxury-velvet-l-shaped-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'lounge'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sectional',
      subType: 'l-shape',
      style: 'luxury',
    },
    specifications: {
      material: 'Velvet Fabric & Wood',
      frameMaterial: 'Solid Teak Wood',
      seatingCapacity: 6,
      style: 'Luxury',
      dimensions: { length: 260, width: 180, height: 90, unit: 'cm' },
      weight: { value: 115, unit: 'kg' },
    },
    pricing: {
      mrp: 88999,
      sellingPrice: 74999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Premium Velvet Upholstery', icon: 'star' },
      { id: 'f2', title: 'Solid Teak Wood Base', icon: 'anchor' },
      { id: 'f3', title: 'Deep Seating Comfort', icon: 'coffee' },
    ],

    variants: [
      { variantId: 'v1', name: 'Emerald Green', price: 74999, inventoryCount: 3, availability: 'in_stock' },
      { variantId: 'v2', name: 'Wine Red', price: 74999, inventoryCount: 2, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 5,
      rating: 4.9,
      reviewCount: 210,
      tags: ['Best Seller', 'Premium Velvet'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1676213185722-252caa34d1ae?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Velvet L-Shaped Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Emerald Green', hex: '#50C878' },
        { name: 'Wine Red', hex: '#722F37' },
      ],
    },
    seo: {
      metaTitle: 'Premium Velvet L-Shaped Sofa | Luxury Sectional',
      metaDescription:
        'Shop our most luxurious 6-seater velvet sectional. Teak wood frame with deep seating emerald green upholstery.',
      keywords: ['luxury sectional', 'velvet corner sofa', '6 seater l shaped sofa', 'teak wood sectional'],
    },
    description: 'A grand velvet sectional sofa with deep seating, perfect for hosting guests in style.',
    createdAt: '2025-01-14T21:00:00Z',
    updatedAt: '2025-01-14T21:00:00Z',
  },

  {
    id: 'sofa-053',
    sku: 'WS-MIN-LS-CPT',
    title: 'Minimalist Compact L-Shaped Sofa',
    slug: 'minimalist-compact-l-shaped-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'apartment'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sectional',
      subType: 'l-shape',
      style: 'minimal',
    },
    specifications: {
      material: 'Fabric',
      frameMaterial: 'Engineered Wood',
      seatingCapacity: 5,
      dimensions: { length: 210, width: 140, height: 80, unit: 'cm' },
      weight: { value: 75, unit: 'kg' },
    },
    pricing: {
      mrp: 49999,
      sellingPrice: 42999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Studio Optimized', icon: 'home' },
      { id: 'f2', title: 'Lightweight Design', icon: 'feather' },
    ],

    variants: [
      { variantId: 'v1', name: 'Charcoal Grey', price: 42999, inventoryCount: 12, availability: 'in_stock' },
      { variantId: 'v2', name: 'Light Grey', price: 42999, inventoryCount: 9, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 21,
      rating: 4.2,
      reviewCount: 85,
      tags: ['Small Apartment', 'Compact Corner'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1759722665621-7ae933accb69?q=80&w=660&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Minimalist Compact L-Shaped Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Charcoal Grey', hex: '#36454F' },
        { name: 'Light Grey', hex: '#D3D3D3' },
      ],
    },
    seo: {
      metaTitle: 'Compact L-Shaped Sofa for Small Apartments',
      metaDescription:
        'A space-saving 4-seater sectional designed for urban flats. Modern look with a minimal footprint.',
      keywords: ['small l shaped sofa', 'compact sectional', 'apartment sofa corner'],
    },
    description:
      'Compact L-shaped sectional designed specifically for urban apartments with limited living area.',
    createdAt: '2025-01-14T21:00:00Z',
    updatedAt: '2025-01-14T21:00:00Z',
  },

  {
    id: 'sofa-054',
    sku: 'WS-CON-LS-WD',
    title: 'Wooden Frame L-Shaped Sofa',
    slug: 'wooden-frame-l-shaped-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'traditional-home'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sectional',
      subType: 'l-shape',
      style: 'contemporary',
    },
    specifications: {
      material: 'Solid Wood & Fabric',
      frameMaterial: 'Sheesham Wood',
      seatingCapacity: 6,
      style: 'Contemporary',
      dimensions: { length: 250, width: 160, height: 88, unit: 'cm' },
      weight: { value: 130, unit: 'kg' },
    },
    pricing: {
      mrp: 79999,
      sellingPrice: 67999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Solid Sheesham Wood', icon: 'tree' },
      { id: 'f2', title: 'Removable Cushions', icon: 'refresh-cw' },
      { id: 'f3', title: '5 Year Wood Warranty', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teak Brown', price: 67999, inventoryCount: 4, availability: 'in_stock' },
      { variantId: 'v2', name: 'Cream', price: 67999, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 9,
      rating: 4.8,
      reviewCount: 145,
      tags: ['New Arrival', 'Durable Wood'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1653251307042-c5821df9d527?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Wooden Frame L-Shaped Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Teak Brown', hex: '#8B4513' },
        { name: 'Cream', hex: '#FFFDD0' },
      ],
    },
    seo: {
      metaTitle: 'Wooden L-Shaped Sofa Set | Sheesham Wood Sectional',
      metaDescription:
        'Traditional meets modern with our wooden frame L-shaped sofa. Durable Sheesham wood with premium fabric cushions.',
      keywords: ['wooden l shaped sofa', 'sheesham sectional', 'corner wooden sofa set'],
    },
    description: 'Solid Sheesham wood L-shaped sofa set with removable cushions and elegant finish.',
    createdAt: '2025-01-14T21:00:00Z',
    updatedAt: '2025-01-14T21:00:00Z',
  },

  {
    id: 'sofa-055',
    sku: 'WS-MOD-CH-FAB',
    title: 'Vintage Curved Wooden Accent Chair',
    slug: 'vintage-curved-wooden-accent-chair',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'balcony', 'cafe-lounge'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '1-seater',
      subType: 'accent-chair',
      style: 'vintage',
    },
    specifications: {
      material: 'Leatherette & Solid Wood',
      frameMaterial: 'Bentwood / Teak Wood',
      seatingCapacity: 1,
      dimensions: { length: 160, width: 75, height: 85, unit: 'cm' },
      weight: { value: 25, unit: 'kg' },
    },
    pricing: {
      mrp: 24999,
      sellingPrice: 19999,
      currency: 'INR',
      discount: { value: 20, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Ergonomic Curve', icon: 'heart' },
      { id: 'f2', title: 'Reading Nook Essential', icon: 'book-open' },
      { id: 'f3', title: 'No Assembly Required', icon: 'check-circle' },
    ],

    variants: [
      { variantId: 'v1', name: 'Teal Blue', price: 19999, inventoryCount: 7, availability: 'in_stock' },
      { variantId: 'v2', name: 'Grey', price: 19999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 17,
      rating: 4.6,
      reviewCount: 82,
      tags: ['Relaxation', 'Trending'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1690618300133-21ad626cdd9e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern Urban Chaise Lounger',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Teal Blue', hex: '#008080' },
        { name: 'Grey', hex: '#808080' },
      ],
    },
    seo: {
      metaTitle: 'Modern Chaise Lounger | Bedroom Relaxing Chair',
      metaDescription:
        'Unwind in style with our Modern Urban Chaise Lounger. Perfect for bedrooms, libraries, or as a living room accent.',
      keywords: ['chaise lounger', 'indoor lounger', 'bedroom relaxing chair', 'fainting couch'],
    },
    description:
      'An elegantly curved chaise lounger designed for maximum comfort while reading or lounging in the bedroom.',
    createdAt: '2025-01-14T21:00:00Z',
    updatedAt: '2025-01-14T21:00:00Z',
  },

  // sofa-056-060
  {
    id: 'sofa-056',
    sku: 'WS-LUX-CH-VEL',
    title: 'Luxury Velvet Chaise Lounger',
    slug: 'luxury-velvet-chaise-lounger',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'lounger',
      subType: 'chaise-lounger',
      style: 'luxury',
    },
    specifications: {
      material: 'Deep-Tufted Premium Velvet',
      frameMaterial: 'Solid Teak Wood',
      seatingCapacity: 1,
      dimensions: { length: 170, width: 80, height: 90, unit: 'cm' },
      weight: { value: 30, unit: 'kg' },
    },
    pricing: {
      mrp: 33999,
      sellingPrice: 28999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Premium Teak Wood Legs', icon: 'anchor' },
      { id: 'f2', title: 'Deep Button Tufting', icon: 'check-square' },
      { id: 'f3', title: '3 Year Warranty', icon: 'shield' },
    ],

    variants: [
      { variantId: 'v1', name: 'Deep Wine', price: 28999, inventoryCount: 5, availability: 'in_stock' },
      { variantId: 'v2', name: 'Emerald Green', price: 28999, inventoryCount: 3, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 8,
      rating: 4.9,
      reviewCount: 104,
      tags: ['Premium', 'Royal Look'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://cdn.pixabay.com/photo/2016/08/07/00/42/chaise-1575490_1280.jpg',
          alt: 'Luxury Velvet Chaise Lounger',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Deep Wine', hex: '#722F37' },
        { name: 'Emerald Green', hex: '#50C878' },
      ],
    },
    seo: {
      metaTitle: 'Royal Velvet Chaise Lounger | Luxury Seating',
      metaDescription:
        'Add a touch of royalty to your bedroom with our tufted velvet chaise lounger. Hand-carved teak wood legs and premium upholstery.',
      keywords: ['velvet chaise', 'royal lounger', 'luxury bedroom seating', 'tufted lounger'],
    },
    description:
      'Upholstered in plush velvet with tufted detailing and carved wooden legs for a grand aesthetic.',
    createdAt: '2025-01-14T22:00:00Z',
    updatedAt: '2025-01-14T22:00:00Z',
  },

  {
    id: 'sofa-057',
    sku: 'WS-MOD-REC-311',
    title: 'Modern 3+1+1 Recliner Sofa Set',
    slug: 'modern-recliner-3-1-1-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'home-theater'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'recliner',
      subType: 'recliner-set',
      style: 'modern',
    },
    specifications: {
      material: 'Nappa Leatherette',
      frameMaterial: 'Reinforced Steel & Solid Wood',
      seatingCapacity: 5,
      dimensions: { length: 215, width: 95, height: 100, unit: 'cm' },
      weight: { value: 150, unit: 'kg' },
    },
    pricing: {
      mrp: 145999,
      sellingPrice: 125999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Manual Reclining Mechanism', icon: 'settings' },
      { id: 'f2', title: 'Home Cinema Experience', icon: 'tv' },
      { id: 'f3', title: 'Easy-Clean Leatherette', icon: 'droplet' },
    ],

    variants: [
      {
        variantId: 'v1',
        name: 'Chocolate Brown',
        price: 125999,
        inventoryCount: 2,
        availability: 'in_stock',
      },
      { variantId: 'v2', name: 'Black', price: 125999, inventoryCount: 4, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 6,
      rating: 4.8,
      reviewCount: 215,
      tags: ['Home Cinema', 'Ultra Comfort'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1743059199976-b709ec1e35f8?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern Recliner Sofa Set',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Chocolate Brown', hex: '#3E2723' },
        { name: 'Black', hex: '#000000' },
      ],
    },
    seo: {
      metaTitle: '5 Seater Recliner Sofa Set | Premium Home Theater Seating',
      metaDescription:
        'Transform your living room into a cinema with our 3+1+1 recliner set. Features smooth manual reclining and plush cushioning.',
      keywords: ['recliner sofa set', '3+1+1 recliner', 'home theater sofa', 'cinema seating india'],
    },
    description: 'Full 5-seater recliner set with manual reclining mechanisms on all outer seats.',
    createdAt: '2025-01-14T22:00:00Z',
    updatedAt: '2025-01-14T22:00:00Z',
  },

  {
    id: 'sofa-058',
    sku: 'WS-MIN-BEN-WD',
    title: 'Minimalist Wooden Bedroom Bench',
    slug: 'minimalist-wooden-bedroom-bench',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'entryway'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subType: 'end-of-bed-bench',
      style: 'minimalist',
    },
    specifications: {
      material: 'Solid Oak Wood',
      frameMaterial: 'Natural Matte Finish',
      seatingCapacity: 2,
      dimensions: { length: 110, width: 40, height: 45, unit: 'cm' },
      weight: { value: 12, unit: 'kg' },
    },
    pricing: {
      mrp: 11999,
      sellingPrice: 8999,
      currency: 'INR',
      discount: { value: 25, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Compact Design', icon: 'minimize' },
      { id: 'f2', title: 'Solid Sheesham Wood', icon: 'tree' },
    ],

    variants: [
      { variantId: 'v1', name: 'Natural Teak', price: 8999, inventoryCount: 15, availability: 'in_stock' },
      { variantId: 'v2', name: 'Dark Walnut', price: 8999, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 27,
      rating: 4.4,
      reviewCount: 47,
      tags: ['Bed End', 'Compact'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1681487369626-9265edbf28c8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Minimalist Wooden Bedroom Bench',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Natural Teak', hex: '#CB8E3F' },
        { name: 'Dark Walnut', hex: '#3D2B1F' },
      ],
    },
    seo: {
      metaTitle: 'Solid Wood Bedroom Bench | Minimalist Bed End Seating',
      metaDescription:
        'Shop our Sheesham wood bedroom bench. Perfect for the foot of your bed or entryway. Compact and stylish.',
      keywords: ['bedroom bench', 'wooden bench', 'bed end seating', 'entryway bench'],
    },
    description: 'A sleek wooden bench designed to sit at the foot of your bed for extra seating and style.',
    createdAt: '2025-01-14T22:00:00Z',
    updatedAt: '2025-01-14T22:00:00Z',
  },

  {
    id: 'sofa-059',
    sku: 'WS-LUX-BEN-VEL',
    title: 'Luxury Tufted Velvet Bench',
    slug: 'luxury-tufted-velvet-bench',
    brand: 'Urban Home',
    taxonomy: {
      room: ['bedroom', 'living-room'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'bench',
      subType: 'ottoman-bench',
      style: 'luxury',
    },
    specifications: {
      material: 'Premium Velvet & Memory Foam',
      frameMaterial: 'Solid Wood & Gold-Finished Metal Legs',
      seatingCapacity: 2,
      style: 'Luxury',
      dimensions: { length: 120, width: 45, height: 48, unit: 'cm' },
      weight: { value: 18, unit: 'kg' },
    },
    pricing: {
      mrp: 18999,
      sellingPrice: 14999,
      currency: 'INR',
      discount: { value: 21, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Gold-Finished Metal Legs', icon: 'award' },
      { id: 'f2', title: 'Plush Velvet Feel', icon: 'feather' },
    ],

    variants: [
      { variantId: 'v1', name: 'Royal Blue', price: 14999, inventoryCount: 8, availability: 'in_stock' },
      { variantId: 'v2', name: 'Champagne', price: 14999, inventoryCount: 6, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 14,
      rating: 4.7,
      reviewCount: 93,
      tags: ['Tufted', 'Gold Finish'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Tufted Velvet Bench',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Royal Blue', hex: '#002366' },
        { name: 'Champagne', hex: '#F7E7CE' },
      ],
    },
    seo: {
      metaTitle: 'Tufted Velvet Bench with Gold Legs | Luxury Seating',
      metaDescription:
        'Elegant tufted velvet bench for luxury interiors. Stainless steel legs with a premium gold finish.',
      keywords: ['velvet bench', 'tufted bench gold legs', 'luxury bed bench', 'ottoman bench'],
    },
    description:
      'Deeply tufted velvet bench with gold-finished metal legs, perfect for upscale bedroom decor.',
    createdAt: '2025-01-14T22:00:00Z',
    updatedAt: '2025-01-14T22:00:00Z',
  },

  {
    id: 'sofa-060',
    sku: 'WS-MOD-L-SCT',
    title: 'Modern Modular Sectional Sofa',
    slug: 'modern-modular-sectional-sofa',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sectional', // <--- Professional Standard
      subType: 'l-shape',
      style: 'modern',
    },
    specifications: {
      material: 'Chenille Fabric',
      frameMaterial: 'Solid Wood',
      seatingCapacity: 6,
      style: 'Modern',
      dimensions: { length: 270, width: 160, height: 85, unit: 'cm' },
      weight: { value: 110, unit: 'kg' },
    },
    pricing: {
      mrp: 69999,
      sellingPrice: 59999,
      currency: 'INR',
      discount: { value: 14, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Rearrangeable Modules', icon: 'grid' },
      { id: 'f2', title: 'Chenille Soft Fabric', icon: 'wind' },
      { id: 'f3', title: 'Family-Friendly Size', icon: 'users' },
    ],

    variants: [
      { variantId: 'v1', name: 'Cream', price: 59999, inventoryCount: 5, availability: 'in_stock' },
      { variantId: 'v2', name: 'Beige', price: 59999, inventoryCount: 3, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 8,
      rating: 4.5,
      reviewCount: 134,
      tags: ['Modular', 'Best Seller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1759722665610-e13e59aa117b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern Modular Sectional Sofa',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Cream', hex: '#FFFDD0' },
        { name: 'Beige', hex: '#F5F5DC' },
      ],
    },
    seo: {
      metaTitle: 'Modular Sectional Sofa | 6 Seater Rearrangeable Sofa',
      metaDescription:
        'The ultimate flexible seating. Our modular sectional can be configured to fit your room perfectly. Soft chenille fabric.',
      keywords: ['modular sofa', 'sectional sofa 6 seater', 'flexible living room seating', 'chenille sofa'],
    },
    description: 'Flexible modular design that can be rearranged to fit any living room corner perfectly.',
    createdAt: '2025-01-14T22:00:00Z',
    updatedAt: '2025-01-14T22:00:00Z',
  },

  // sofa-061-066

  {
    id: 'sofa-061',
    sku: 'WS-CLA-DIV-WD',
    title: 'Classic Carved Wooden Sofa-set',
    slug: 'classic-carved-wooden-sofa-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'guest-room'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-set',
      subType: '8-seater',
      style: 'classic',
    },
    specifications: {
      material: 'Solid Teak Wood & Upholstery',
      frameMaterial: 'Hand-Carved Teak Wood',
      seatingCapacity: 8,
      style: 'Classic',
      dimensions: { length: 185, width: 75, height: 80, unit: 'cm' },
      weight: { value: 55, unit: 'kg' },
    },
    pricing: {
      mrp: 37999,
      sellingPrice: 31999,
      currency: 'INR',
      discount: { value: 16, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Hand-Carved Details', icon: 'scissors' },
      { id: 'f2', title: 'Solid Sheesham Wood', icon: 'tree' },
      { id: 'f3', title: 'Pre-Assembled', icon: 'package' },
    ],

    variants: [
      { variantId: 'v1', name: 'Walnut Finish', price: 31999, inventoryCount: 5, availability: 'in_stock' },
      { variantId: 'v2', name: 'Honey Finish', price: 31999, inventoryCount: 3, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 8,
      rating: 4.8,
      reviewCount: 92,
      tags: ['Traditional', 'Hand-Carved'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1760067538299-3f58e7a99fc5?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Classic Carved Wooden Diwan',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Walnut Finish', hex: '#5D4037' },
        { name: 'Honey Finish', hex: '#E3A857' },
      ],
    },
    seo: {
      metaTitle: 'Classic Sheesham Wood Diwan | Traditional Sofa Seating',
      metaDescription:
        'Bring home the ethnic charm with our hand-carved Sheesham wood diwan. Intricate Indian craftsmanship with a 5-year warranty.',
      keywords: ['wooden diwan', 'traditional indian sofa', 'sheesham wood diwan', 'ethnic furniture'],
    },
    description:
      'A traditional Indian diwan with intricate carvings, perfect for an ethnic living room setup.',
    createdAt: '2025-01-14T23:00:00Z',
    updatedAt: '2025-01-14T23:00:00Z',
  },
  {
    id: 'sofa-062',
    sku: 'WS-MIN-OTM-FAB',
    title: 'Minimalist Square Ottoman',
    slug: 'minimalist-square-ottoman',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom', 'vanity-room'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'ottoman',
      subType: 'pouf-ottoman',
      style: 'minimalist',
    },
    specifications: {
      material: 'Fabric',
      frameMaterial: 'Engineered Wood',
      seatingCapacity: 1,
      style: 'Minimal',
      dimensions: { length: 50, width: 50, height: 45, unit: 'cm' },
      weight: { value: 8, unit: 'kg' },
    },
    pricing: {
      mrp: 6999,
      sellingPrice: 4999,
      currency: 'INR',
      discount: { value: 28, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Multi-Purpose Use', icon: 'layers' },
      { id: 'f2', title: 'High-Density Foam', icon: 'cloud' },
    ],

    variants: [
      { variantId: 'v1', name: 'Mustard', price: 4999, inventoryCount: 15, availability: 'in_stock' },
      { variantId: 'v2', name: 'Charcoal', price: 4999, inventoryCount: 20, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 35,
      rating: 4.3,
      reviewCount: 156,
      tags: ['Footrest', 'Compact'],
      isFeatured: false,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1677739767604-8ac8667f0794?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Minimalist Square Ottoman',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Mustard', hex: '#FFDB58' },
        { name: 'Charcoal', hex: '#36454F' },
      ],
    },
    seo: {
      metaTitle: 'Minimalist Square Ottoman | Fabric Footrest & Extra Seat',
      metaDescription:
        'Versatile and compact. Use it as a footstool, extra seating, or a side table base. Available in trendy colors.',
      keywords: ['ottoman stool', 'footrest', 'square pouf', 'compact seating'],
    },
    description: 'Versatile square ottoman that works as a footrest, extra seat, or coffee table base.',
    createdAt: '2025-01-14T23:00:00Z',
    updatedAt: '2025-01-14T23:00:00Z',
  },
  {
    id: 'sofa-063',
    sku: 'WS-LUX-OTM-VEL',
    title: 'Luxury Round Velvet Pouf',
    slug: 'luxury-round-velvet-pouf',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'bedroom'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'ottoman',
      subType: 'pouf',
      style: 'luxury',
    },
    specifications: {
      material: 'Crushed Velvet with Pearl Beading',
      frameMaterial: 'High-Density Foam & Thermocol Beans',
      seatingCapacity: 1,
      style: 'Luxury',
      dimensions: { length: 45, width: 45, height: 45, unit: 'cm' },
      weight: { value: 6, unit: 'kg' },
    },
    pricing: {
      mrp: 8499,
      sellingPrice: 6499,
      currency: 'INR',
      discount: { value: 23, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: 'Velvet Upholstery', icon: 'award' },
      { id: 'f2', title: 'Gold Finished Base', icon: 'sparkles' },
      { id: 'f3', title: 'No Assembly Required', icon: 'package' },
    ],

    variants: [
      { variantId: 'v1', name: 'Pink Blush', price: 6499, inventoryCount: 10, availability: 'in_stock' },
      { variantId: 'v2', name: 'Emerald', price: 6499, inventoryCount: 5, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 15,
      rating: 4.7,
      reviewCount: 84,
      tags: ['Pouf', 'Gold Base'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1655149555296-bad157279d8d?q=80&w=817&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Round Velvet Pouf',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Pink Blush', hex: '#DEA5A4' },
        { name: 'Emerald', hex: '#50C878' },
      ],
    },
    seo: {
      metaTitle: 'Luxury Round Velvet Pouf with Gold Base | Urban Home',
      metaDescription:
        'Add a touch of glam with our velvet pouf. Perfect for living rooms or as a vanity stool in the bedroom.',
      keywords: ['velvet pouf', 'round ottoman', 'gold base stool'],
    },
    description:
      'Glamorous round pouf with a gold-finished base and plush velvet upholstery. Perfect for adding a luxury touch to any corner.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'sofa-064',
    sku: 'WS-MOD-SFT-WD',
    title: 'Modern Futon Sofa Bed',
    slug: 'modern-futon-sofa-bed',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'guest-room'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'sofa-bed',
      subType: 'futon',
      style: 'modern',
    },
    specifications: {
      material: 'Breathable Cotton Fabric',
      frameMaterial: 'Solid Pine Wood',
      seatingCapacity: 3,
      sleepingCapacity: 2,
      style: 'Modern',
      dimensions: { length: 180, width: 90, height: 80, unit: 'cm' },
      weight: { value: 35, unit: 'kg' },
    },
    pricing: {
      mrp: 22999,
      sellingPrice: 18999,
      currency: 'INR',
      discount: { value: 17, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    features: [
      { id: 'f1', title: '3-Position Reclining', icon: 'arrow-right-circle' },
      { id: 'f2', title: 'Easy Conversion', icon: 'refresh-ccw' },
      { id: 'f3', title: 'Space-Saving Design', icon: 'minimize-2' },
    ],

    variants: [
      { variantId: 'v1', name: 'Light Blue', price: 18999, inventoryCount: 8, availability: 'in_stock' },
      { variantId: 'v2', name: 'Grey', price: 18999, inventoryCount: 12, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 20,
      rating: 4.2,
      reviewCount: 61,
      tags: ['Folding', 'Guest Bed'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1633515091011-d1aa4c127590?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Modern Futon Sofa Bed',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Light Blue', hex: '#ADD8E6' },
        { name: 'Grey', hex: '#808080' },
      ],
    },
    seo: {
      metaTitle: 'Modern Futon Sofa Bed | Folding Guest Bed Sofa',
      metaDescription:
        'Convertible 2-seater futon sofa that clicks into a bed in seconds. Ideal for studio apartments and guest rooms.',
      keywords: ['futon sofa', 'sofa bed', 'convertible sofa', 'folding bed'],
    },
    description: 'Versatile futon sofa that easily clicks back into a flat bed for overnight guests.',
    createdAt: '2025-01-14T23:00:00Z',
    updatedAt: '2025-01-14T23:00:00Z',
  },
  {
    id: 'sofa-065',
    sku: 'WS-LUX-CHEST',
    title: 'Luxury Chesterfield 3-Seater',
    slug: 'luxury-chesterfield-3-seater',
    brand: 'Urban Home',
    taxonomy: {
      room: ['living-room', 'office'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: '3-seater', // Singular Rule Applied
      subType: 'chesterfield',
      style: 'classic',
    },
    pricing: {
      mrp: 64999,
      sellingPrice: 54999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 18 },
    },
    specifications: {
      material: 'Genuine Italian Leather / Premium Velvet',
      frameMaterial: 'Kiln-Dried Solid Teak Wood',
      seatingCapacity: 3,
      style: 'Classic',
      dimensions: { length: 220, width: 95, height: 85, unit: 'cm' },
      weight: { value: 65, unit: 'kg' },
    },
    features: [
      { id: 'f1', title: 'Deep Button Tufting', icon: 'award' },
      { id: 'f2', title: 'Rolled Arms', icon: 'corner-up-right' },
      { id: 'f3', title: 'Premium Suede Finish', icon: 'zap' },
    ],

    variants: [
      { variantId: 'v1', name: 'Tan Leatherette', price: 54999, inventoryCount: 4, availability: 'in_stock' },
      { variantId: 'v2', name: 'Deep Grey', price: 54999, inventoryCount: 3, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 7,
      rating: 4.9,
      reviewCount: 188,
      tags: ['Premium', 'Classic Design'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1756164605695-21a5bd3defcd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Luxury Chesterfield 3-Seater',
          isPrimary: true,
        },
      ],
      colors: [
        { name: 'Tan Leatherette', hex: '#A0522D' },
        { name: 'Deep Grey', hex: '#2F4F4F' },
      ],
    },
    seo: {
      metaTitle: 'Premium Chesterfield 3 Seater Sofa | Classic Tufted Design',
      metaDescription:
        'Iconic Chesterfield sofa with deep tufting and rolled arms. Available in tan and grey. Premium majestic look for your office or living room.',
      keywords: ['chesterfield sofa', 'tufted 3 seater', 'classic sofa design', 'luxury suede sofa'],
    },
    description: 'Iconic Chesterfield design with deep button tufting and rolled arms for a majestic look.',
    createdAt: '2025-01-14T23:00:00Z',
    updatedAt: '2025-01-14T23:00:00Z',
  },
  {
    id: 'sofa-066',
    sku: 'WH-SOF-RAT-GRY',
    title: 'Outdoor Sofa Set',
    slug: 'outdoor-sofa-set',
    brand: 'Urban Home',
    taxonomy: {
      room: ['outdoor', 'living-room', 'patio'],
      mainCategory: 'furniture',
      productType: 'seating',
      category: 'sofa',
      subCategory: 'outdoor-sofa', // Singular Rule Applied
      subType: 'rattan-set',
      style: 'modern',
    },
    specifications: {
      material: 'Hand-Woven PE Rattan (Synthetic)',
      frameMaterial: 'Powder-Coated Aluminum',
      seatingCapacity: 4,
      style: 'Modern',
      dimensions: { length: 210, width: 85, height: 75, unit: 'cm' },
    },
    pricing: {
      mrp: 38999,
      sellingPrice: 32999,
      currency: 'INR',
      discount: { value: 15, type: 'percentage' },
      tax: { isIncluded: true, rate: 12 },
    },
    features: [
      { id: 'f1', title: 'Weather Proof Cushions', icon: 'shield-check' },
      { id: 'f2', title: 'Premium Rattan', icon: 'hexagon' },
    ],

    variants: [
      { variantId: 'v1', name: 'Grey Rattan', price: 32999, inventoryCount: 10, availability: 'in_stock' },
    ],
    status: {
      availability: 'in_stock',
      inventoryCount: 10,
      rating: 4.6,
      reviewCount: 101,
      tags: ['New', 'Best Seller'],
      isFeatured: true,
    },
    media: {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1625509673209-843c5d659d42?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Outdoor Sofa Set',
          isPrimary: true,
        },
      ],
      colors: [{ name: 'Grey', hex: '#808080' }],
    },
    seo: {
      metaTitle: 'Weather-Proof Outdoor Rattan Sofa Set | Patio Furniture',
      metaDescription:
        'Durable and stylish rattan sofa set for your garden or balcony. Comes with weather-resistant cushions and a modern design.',
      keywords: ['outdoor sofa', 'rattan furniture', 'garden sofa set', 'patio seating'],
    },
    description: 'Premium rattan sofa set with weather-proof cushions.',
    createdAt: '2025-01-14T10:00:00Z',
    updatedAt: '2025-01-14T10:00:00Z',
  },
]
