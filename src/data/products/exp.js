export const sofaProduct = {
  id: 'sofa-001',
  sku: 'WS-MOD-3S-FAB',
  title: 'Modern Fabric 3-Seater Sofa',
  slug: 'modern-fabric-3-seater-sofa',
  brand: 'Urban Home',

  taxonomy: {
    room: ['living-room', 'office'],
    category: 'furniture',
    parentCategory: 'sofas', // MegaMenu
    subCategory: '3-seater-sofas', // Category Page
    productType: 'seating',
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
    { id: 'f2', title: 'Premium Fabric Upholstery', icon: 'layers' },
    { id: 'f3', title: 'Ergonomic Comfort', icon: 'smile' },
  ],

  specifications: {
    material: 'fabric',
    frameMaterial: 'solid-wood',
    seatingType: 'straight', // L-shape / straight / recliner
    seatingCapacity: 3,
    style: 'modern',
  },

  variants: [
    {
      variantId: 'v1',
      color: 'Grey',
      price: 26999,
      inventoryCount: 15,
      availability: 'in_stock',
    },
    {
      variantId: 'v2',
      color: 'Blue',
      price: 26999,
      inventoryCount: 10,
      availability: 'in_stock',
    },
  ],

  status: {
    availability: 'in_stock',
    rating: 4.4,
    reviewCount: 110,
    tags: ['new'],
    isFeatured: true,
  },

  media: {
    images: [
      {
        url: 'https://cdn.pixabay.com/photo/2018/07/10/19/46/sofa-3529489_1280.jpg',
        alt: 'Modern Fabric 3-Seater Sofa',
        isPrimary: true,
      },
    ],
  },

  seo: {
    metaTitle: 'Modern Fabric 3 Seater Sofa | Urban Home',
    metaDescription: 'Buy modern fabric 3 seater sofa for living room and office.',
    keywords: ['fabric sofa', '3 seater sofa', 'modern sofa'],
  },

  description:
    'A modern fabric sofa designed for comfort and durability, suitable for living rooms and offices.',

  createdAt: '2025-01-14T10:00:00Z',
  updatedAt: '2025-01-14T10:00:00Z',
}

export const bedProduct = {
  id: 'bed-001',
  sku: 'WH-BED-SGL-WOD',
  title: 'Single Wooden Bed',
  slug: 'single-wooden-bed',
  brand: 'Urban Home',

  taxonomy: {
    room: ['bedroom', 'guest-room'],
    category: 'furniture',
    parentCategory: 'beds', // MegaMenu
    subCategory: 'single-beds', // Category Page
    productType: 'sleeping',
  },

  pricing: {
    mrp: 15999,
    sellingPrice: 12999,
    currency: 'INR',
    discount: { value: 19, type: 'percentage' },
    tax: { isIncluded: true, rate: 18 },
  },

  features: [
    { id: 'f1', title: 'Solid Wood Construction', icon: 'shield-check' },
    { id: 'f2', title: 'Compact Design', icon: 'maximize' },
    { id: 'f3', title: 'Easy Assembly', icon: 'tool' },
  ],

  specifications: {
    material: 'solid-wood',
    bedSize: 'single', // single / queen / king
    storageType: 'none', // none / box / hydraulic
    style: 'modern',
  },

  variants: [
    {
      variantId: 'v1',
      name: 'Single - No Storage',
      price: 12999,
      inventoryCount: 15,
      availability: 'in_stock',
    },
    {
      variantId: 'v2',
      name: 'Single - With Storage',
      price: 14999,
      inventoryCount: 8,
      availability: 'in_stock',
    },
  ],

  status: {
    availability: 'in_stock',
    rating: 4.3,
    reviewCount: 72,
    tags: ['solid-wood'],
    isFeatured: false,
  },

  media: {
    images: [
      {
        url: 'https://images.unsplash.com/photo-1688383454669-9f5cc5991778',
        alt: 'Single Wooden Bed',
        isPrimary: true,
      },
    ],
  },

  seo: {
    metaTitle: 'Buy Single Wooden Bed | Urban Home',
    metaDescription: 'Premium solid wood single bed with modern design.',
    keywords: ['single bed', 'wooden bed'],
  },

  description: 'A modern single wooden bed crafted from premium solid wood for durability and comfort.',

  createdAt: '2026-01-15T10:00:00Z',
  updatedAt: '2026-01-15T10:00:00Z',
}
