/**
 * COLLECTIONS
 * -------------------------
 * Business + SEO grouping layer
 * Stable contract (DO NOT BREAK)
 *
 * URL pattern: /:mainCategory/:collection/:parentMainCategory
 */

export const COLLECTIONS = {
  /* =========================
      SHOP ALL (GLOBAL)
  ========================== */
  'all-furniture': {
    slug: 'all-furniture',
    label: 'All Furniture',
    mainCategory: 'furniture',
    rooms: [
      'living-room',
      'bedroom',
      'dining-room',
      'study-room',
      'office',
      'kids-room',
      'outdoor',
      'kitchen',
    ],
    allowedCategories: ['*'], // Logic: Allow all products in this view
    productTypes: ['seating', 'storage', 'tables', 'sleeping'],
    isGlobal: true,
    seo: {
      title: 'Buy Home Furniture Online in India | Urban Home',
      description:
        'Shop our entire collection of modern furniture including sofas, beds, tables, and storage solutions at Urban Home.',
    },
  },

  /* =========================
      LIVING ROOM
  ========================== */
  'living-room-furniture': {
    slug: 'living-room-furniture',
    label: 'Living Room Furniture',
    mainCategory: 'furniture',
    rooms: ['living-room'],
    allowedCategories: ['sofas', 'tv-unit', 'storage', 'chairs', 'tables', 'recliners', 'ottomans'],
    productTypes: ['seating', 'storage', 'tables'],
    seo: {
      title: 'Living Room Furniture Online | Sofas, TV Units & More | Urban Home',
      description:
        'Upgrade your living space with premium sofas, TV units, recliners, and storage furniture designed for comfort.',
    },
  },

  'living-room-decor': {
    slug: 'living-room-decor',
    label: 'Living Room Decor',
    mainCategory: 'decor',
    rooms: ['living-room'],
    allowedCategories: ['wall-decor', 'mirrors', 'rugs', 'showpieces', 'clocks'],
    productTypes: ['decor'],
    seo: {
      title: 'Living Room Decor & Home Accessories Online | Urban Home',
      description:
        'Transform your home with our exquisite range of wall decor, mirrors, rugs, and decorative showpieces.',
    },
  },

  /* =========================
      BEDROOM
  ========================== */
  'bedroom-furniture': {
    slug: 'bedroom-furniture',
    label: 'Bedroom Furniture',
    mainCategory: 'furniture',
    rooms: ['bedroom'],
    allowedCategories: ['bed', 'wardrobe', 'storage', 'side-tables', 'dressing-tables'],
    productTypes: ['sleeping', 'storage', 'tables'],
    seo: {
      title: 'Modern Bedroom Furniture Online | Beds & Wardrobes | Urban Home',
      description:
        'Create your dream bedroom with our collection of solid wood beds, spacious wardrobes, and bedside tables.',
    },
  },

  'bedroom-furnishings': {
    slug: 'bedroom-furnishings',
    label: 'Bedroom Furnishings',
    mainCategory: 'furnishings',
    rooms: ['bedroom'],
    allowedCategories: ['bedsheets', 'curtains', 'cushions', 'blankets'],
    productTypes: ['utility'],
    seo: {
      title: 'Premium Bedroom Furnishings & Bedding Online | Urban Home',
    },
  },

  'bedroom-mattresses': {
    slug: 'bedroom-mattresses',
    label: 'Bedroom Mattresses',
    mainCategory: 'mattresses',
    rooms: ['bedroom'],
    allowedCategories: ['single-mattress', 'double-mattress', 'queen-mattress', 'king-mattress'],
    productTypes: ['sleeping'],
    seo: {
      title: 'Comfortable Mattresses for Better Sleep | Urban Home',
    },
  },

  /* =========================
      DINING & KITCHEN
  ========================== */
  'dining-room-furniture': {
    slug: 'dining-room-furniture',
    label: 'Dining Room Furniture',
    mainCategory: 'furniture',
    rooms: ['dining-room', 'kitchen'],
    allowedCategories: ['dining', 'chairs', 'storage', 'bar-cabinets'],
    productTypes: ['tables', 'seating', 'storage'],
    seo: {
      title: 'Dining Room Furniture & Kitchen Storage Units | Urban Home',
      description:
        'Modern dining tables, chairs, and kitchen storage cabinets to enhance your dining experience.',
    },
  },

  'kitchen-storage': {
    slug: 'kitchen-storage',
    label: 'Kitchen Storage',
    mainCategory: 'furniture',
    rooms: ['kitchen'],
    allowedCategories: ['storage'],
    productTypes: ['storage'],
    seo: {
      title: 'Modern Kitchen Storage Cabinets & Racks | Urban Home',
      description:
        'Organize your kitchen with durable cabinets, wall racks, and space-saving storage solutions.',
    },
  },

  /* =========================
      OFFICE & STUDY
  ========================== */
  'office-study-furniture': {
    slug: 'office-study-furniture',
    label: 'Office & Study Furniture',
    mainCategory: 'furniture',
    rooms: ['office', 'study-room'],
    allowedCategories: ['study-table', 'chairs', 'storage', 'workstations', 'bookshelves'],
    productTypes: ['tables', 'seating', 'storage'],
    seo: {
      title: 'Home Office & Study Furniture Online | Workstations | Urban Home',
      description:
        'Ergonomic office chairs, study tables, and bookshelves for a productive workspace at home.',
    },
  },

  /* =========================
      KIDS ROOM
  ========================== */
  'kids-room-furniture': {
    slug: 'kids-room-furniture',
    label: 'Kids Room Furniture',
    mainCategory: 'furniture',
    rooms: ['kids-room'],
    allowedCategories: ['kids-bed', 'study-table', 'storage'],
    productTypes: ['sleeping', 'tables', 'storage'],
    seo: {
      title: 'Kids Room Furniture & Bunk Beds Online | Urban Home',
    },
  },

  /* =========================
      LIGHTING
  ========================== */
  'home-lighting': {
    slug: 'home-lighting',
    label: 'Home Lighting',
    mainCategory: 'lighting',
    rooms: ['living-room', 'bedroom', 'dining-room', 'study-room', 'office', 'outdoor'],
    allowedCategories: ['ceiling-lights', 'table-lamps', 'wall-lights', 'floor-lamps'],
    productTypes: ['lighting'],
    seo: {
      title: 'Modern Home Lighting & Designer Lamps Online | Urban Home',
    },
  },

  /* =========================
      OUTDOOR
  ========================== */
  'outdoor-furniture': {
    slug: 'outdoor-furniture',
    label: 'Outdoor Furniture',
    mainCategory: 'furniture',
    rooms: ['outdoor'],
    allowedCategories: ['outdoor-sofas', 'outdoor-chairs', 'outdoor-tables'],
    productTypes: ['seating', 'tables'],
    seo: {
      title: 'Outdoor Garden & Balcony Furniture Online | Urban Home',
    },
  },
}
