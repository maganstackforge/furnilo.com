export const categoryConfig = {
  /* =========================
      LEVEL 1: GLOBAL & ROOMS
  ========================== */
  furniture: {
    slug: 'furniture', // Ab slug bhi furniture ho gaya
    label: 'Furniture', // 'All Products' se thoda better lagta hai
    category: 'furniture',
    allowedParentCategories: ['*'],
    isGlobal: true,
    longDescription:
      'Explore Urban Home India’s entire range of premium living solutions. From handcrafted solid wood furniture to exquisite home decor accents, we bring you a curated selection designed for modern Indian homes. Every piece in our collection is a blend of superior craftsmanship and timeless design.',
    seo: {
      title: 'Buy Home Furniture & Decor Online | Urban Home India',
      description:
        'Explore our complete range of premium solid wood furniture, sofas, beds, and home decor items. Quality guaranteed at Urban Home.',
    },
  },
  'living-room': {
    slug: 'living-room',
    parentKey: 'all',
    label: 'Living Room',
    category: 'furniture',
    longDescription:
      'The living room is where memories are made. Our extensive collection of living room furniture—from luxurious sofas and recliners to elegant coffee tables and TV units—is designed to create a space that is as comfortable for relaxing as it is impressive for entertaining.',
    allowedParentCategories: [
      'sofas',
      'tv-units',
      'recliners',
      'coffee-tables',
      'shoe-racks',
      'bookshelves',
      'console-tables',
      'side-tables',
      'ottomans',
      'lounge-chairs',
      'sofa-cum-beds',
    ],
    seo: {
      title: 'Living Room Furniture: Modern Sofas, TV Units & More',
      description:
        'Transform your living room with our designer sofas, recliners, and TV units. Stylish and comfortable furniture for every home.',
    },
  },
  bedroom: {
    slug: 'bedroom',
    parentKey: 'all',
    label: 'Bedroom',
    category: 'furniture',
    longDescription:
      'Discover the ultimate comfort for your private sanctuary. Our bedroom furniture collection features solid wood beds, spacious wardrobes, and functional bedside tables, all crafted to help you create a serene environment for rest and rejuvenation.',
    allowedParentCategories: [
      'beds',
      'wardrobes',
      'dressing-tables',
      'bedside-tables',
      'chest-of-drawers',
      'mattresses',
      'kids-beds',
      'benches',
      'wall-shelves',
      'mirrors',
    ],
    seo: {
      title: 'Bedroom Furniture Online: Wooden Beds & Wardrobes',
      description:
        'Create a cozy retreat with our solid wood beds, wardrobes, and bedside tables. Durable and elegant bedroom furniture.',
    },
  },
  'dining-room': {
    slug: 'dining-room',
    parentKey: 'false',
    label: 'dining room furniture',
    category: 'furniture',
    longDescription:
      'Elevate your dining experience with furniture that celebrates togetherness. From grand 6-seater dining sets for family feasts to space-saving kitchen racks and bar units, we provide everything you need for a functional and stylish dining area.',
    allowedParentCategories: [
      '6-seater-dining-sets',
      '4-seater-dining-sets',
      'dining-tables',
      'dining-chairs',
      'kitchen-racks',
      'kitchen-cabinets',
      'bar-cabinets',
      'bar-stools',
      'crockery-units',
      'table-runner',
    ],
    seo: {
      title: 'Dining Room & Kitchen Furniture: Sets, Tables & Chairs',
      description:
        'Shop premium dining sets, kitchen racks, and bar cabinets. Quality dining solutions for small and large families.',
    },
  },
  'home-decor': {
    slug: 'home-decor',
    parentKey: 'all',
    label: 'Home Decor',
    category: 'decor',
    longDescription:
      'Add a personal touch to your interiors with our exquisite home decor collection. Whether it is a statement wall clock, a handcrafted vase, or spiritual idols, our decor pieces are designed to breathe life and personality into every room of your house.',
    allowedParentCategories: ['*'],
    seo: {
      title: 'Luxury Home Decor Accessories Online | Urban Home',
      description:
        'Enhance your home aesthetics with our decor collection. Shop wall clocks, vases, idols, and wall decor.',
    },
  },

  /* =========================
      LIVING ROOM (12+ ITEMS)
  ========================== */
  sofa: {
    slug: 'sofa',
    parentKey: 'furniture',
    label: 'Sofas',
    category: 'furniture',
    longDescription:
      'Our sofa collection is the perfect marriage of style and comfort. Choose from various configurations including 3-seaters, sofa sets, and fabric options designed to withstand daily use while providing a plush, luxurious seating experience.',
    allowedParentCategories: ['sofas'],
    seo: {
      title: 'Modern Sofas & Couches Online',
      description: 'Explore a wide range of fabric and leather sofas for your living room.',
    },
  },
  'sofa-sets': {
    slug: 'sofa-set', // Singular for consistency
    parentKey: 'sofa-set',
    label: 'Sofa Sets',
    category: 'sofa', // Taaki ye 'sofa' filters ke sath bhi sync ho sake
    longDescription:
      'Elevate your living room’s grandeur with Urban Home India’s premium sofa sets. From majestic 3+2+1 seater arrangements to space-saving L-shaped sectionals, our sofa sets are designed for families that value both comfort and luxury. Crafted with kiln-dried solid wood and upholstered in premium breathable fabrics, these sets become the centerpiece of your home. Explore our range of wooden, fabric, and velvet sofa sets today.',
    allowedParentCategories: ['living-room', 'sofa', 'furniture'],
    seo: {
      title: 'Luxury Sofa Sets Online | Buy Wooden & Fabric Sofa Sets',
      description:
        'Discover high-quality sofa sets for your living room. Shop from a wide range of wooden, fabric, and L-shaped sofa sets at Urban Home.',
    },
  },
  'l-shape-sofas': {
    slug: 'l-shape',
    parentKey: 'sofa',
    label: 'L-Shape Sofas',
    category: 'furniture',
    longDescription:
      'Maximize your floor plan with our contemporary L-shaped sofas. Ideal for large families and open-plan living, these corner units provide ample seating and a cozy corner for relaxation.',
    allowedParentCategories: ['l-shape-sofas'],
    seo: {
      title: 'Space Saving L-Shape Corner Sofas',
      description: 'Stylish corner sofas to maximize your living room space and comfort.',
    },
  },
  'sofa-cum-beds': {
    slug: 'sofa-cum-bed',
    parentKey: 'sofas',
    label: 'Sofa Cum Beds',
    category: 'furniture',
    longDescription:
      'Perfect for homes that value versatility. Our sofa cum beds easily transition from a stylish sofa to a comfortable bed, offering a practical solution for overnight guests and small living spaces.',
    allowedParentCategories: ['sofa-cum-beds'],
    seo: {
      title: 'Multi-functional Sofa Cum Beds',
      description: 'Smart sofa cum beds for modern homes. Perfect for guests and compact spaces.',
    },
  },
  recliners: {
    slug: 'recliners',
    parentKey: 'living-room',
    label: 'Recliners',
    category: 'furniture',
    longDescription:
      'Experience the next level of relaxation. Our recliners feature ergonomic designs and smooth mechanisms, allowing you to kick back and unwind after a long day in total comfort.',
    allowedParentCategories: ['recliners'],
    seo: {
      title: 'Manual & Motorized Recliners',
      description: 'Experience ultimate relaxation with our ergonomic recliner chairs.',
    },
  },
  'tv-units': {
    slug: 'tv-unit',
    parentKey: 'living-room',
    label: 'TV Units and Stands',
    category: 'furniture',
    longDescription:
      'A TV unit should be as smart as the technology it holds. Explore our range of wall-mounted and floor-standing entertainment centers that offer sleek storage for all your gadgets and media essentials.',
    allowedParentCategories: ['tv-units'],
    seo: {
      title: 'Designer TV Units & Entertainment Centers',
      description: 'Wooden and wall-mounted TV stands for a tidy living room.',
    },
  },
  'coffee-tables': {
    slug: 'coffee-table',
    parentKey: 'living-room',
    label: 'Coffee & Centre Table',
    category: 'furniture',
    longDescription:
      'The center of your living room deserves a centerpiece. Our coffee tables are available in solid wood, marble tops, and contemporary glass designs, perfect for everything from coffee breaks to display decor.',
    allowedParentCategories: ['coffee-tables'],
    seo: {
      title: 'Modern Coffee Tables & Center Tables',
      description: 'Elegant center tables in wood, glass, and marble finishes.',
    },
  },
  'lounge-chairs': {
    slug: 'lounge-chair',
    parentKey: 'living-room',
    label: 'Lounge Chairs',
    category: 'furniture',
    longDescription:
      'Accentuate your home with our stylish lounge and accent chairs. Designed for both comfort and visual appeal, these chairs are perfect for creating a cozy reading nook or adding extra seating to your living area.',
    allowedParentCategories: ['lounge-chairs'],
    seo: {
      title: 'Comfortable Lounge & Accent Chairs',
      description: 'Relax in style with our premium lounge chairs for home and office.',
    },
  },
  'all-study-tables': {
    slug: 'study-table',
    parentKey: 'all',
    label: 'Study Tables',
    category: 'furniture',
    longDescription:
      'Boost your productivity with Urban Home India’s premium study tables. Whether you are setting up a home office or a dedicated study corner for kids, our collection offers ergonomically designed wooden desks that blend functionality with style. From compact wall-mounted desks to spacious executive tables with ample storage, find the perfect workspace for your needs.',
    allowedParentCategories: ['study-tables', 'office-tables', 'computer-tables', 'laptop-tables'],
    seo: {
      title: 'Wooden Study Tables Online | Modern Home Office Desks',
      description:
        'Shop high-quality solid wood study tables and office desks. Ergonomic designs with storage options for students and professionals.',
    },
  },
  'shoe-racks': {
    slug: 'shoe-rack',
    parentKey: 'living-room',
    label: 'Shoe Racks',
    category: 'furniture',
    longDescription:
      'Keep your entryway clutter-free with our functional shoe racks. Available in various sizes and finishes, these cabinets offer organized storage for your footwear while blending seamlessly with your home decor.',
    allowedParentCategories: ['shoe-racks'],
    seo: {
      title: 'Wooden Shoe Racks & Cabinets',
      description: 'Keep your footwear organized with our stylish shoe storage solutions.',
    },
  },
  'console-tables': {
    slug: 'console-table',
    parentKey: 'living-room',
    label: 'Console Tables',
    category: 'furniture',
    longDescription:
      'Console tables are the unsung heroes of home decor. Perfect for entryways or behind sofas, these sleek tables provide a platform for your favorite decor items, photos, and lighting.',
    allowedParentCategories: ['console-tables'],
    seo: {
      title: 'Sleek Console Tables for Entryways',
      description: 'Narrow console tables for hallways and living room decor.',
    },
  },
  bookshelves: {
    slug: 'bookshelf',
    parentKey: 'living-room',
    label: 'Bookshelves',
    category: 'furniture',
    longDescription:
      'Showcase your collection with pride. Our wooden bookshelves and display units are designed to hold everything from your favorite novels to decorative accents, keeping your library organized and stylish.',
    allowedParentCategories: ['bookshelves'],
    seo: {
      title: 'Modern Bookshelves & Display Racks',
      description: 'Organize your library with our sturdy and stylish wooden bookshelves.',
    },
  },
  'side-tables': {
    slug: 'side-table',
    parentKey: 'living-room',
    label: 'Side Tables',
    category: 'furniture',
    longDescription:
      'Functional and compact, our side tables are the perfect companions for your sofas or beds. They offer a convenient surface for lamps, books, or your morning coffee.',
    allowedParentCategories: ['side-tables'],
    seo: {
      title: 'End Tables & Side Tables Online',
      description: 'Functional side tables to complement your sofa and bedside.',
    },
  },
  ottomans: {
    slug: 'ottoman',
    parentKey: 'living-room',
    label: 'Ottomans',
    category: 'furniture',
    longDescription:
      'Versatility meets style with our range of ottomans and poufs. Use them as footrests, extra seating, or even as informal coffee tables in your living room or bedroom.',
    allowedParentCategories: ['ottomans'],
    seo: {
      title: 'Stylish Ottomans & Poufs',
      description: 'Versatile seating and footrests in trendy fabric designs.',
    },
  },
  'home-furnishing': {
    slug: 'home-furnishing', // Singular key and slug for consistency
    parentKey: 'all',
    label: 'Home Furnishing',
    category: 'furnishing',
    longDescription:
      'Urban Home India ke home furnishing collection ke saath apne ghar ko ek naya aur comfortable look dein. Hamare paas premium quality curtains, soft bedsheets, cushions, aur rugs ka ek vast range hai jo aapke interiors mein warmth aur style dono add karta hai. Har piece ko dhyan se select kiya gaya hai taaki aapko mile behtareen fabric aur trend-setting designs jo har season ke liye perfect hain.',
    allowedParentCategories: ['*'], // Sabhi rooms ke liye allowed hai
    seo: {
      title: 'Buy Home Furnishing Items Online | Curtains, Bedding & Rugs',
      description:
        'Explore premium home furnishing accessories at Urban Home. Shop for luxury curtains, bedsheets, cushions, and more to elevate your home comfort.',
    },
  },

  /* =========================
      BEDROOM (12+ ITEMS)
  ========================== */
  'all-beds': {
    slug: 'bed',
    parentKey: false,
    label: 'Beds',
    category: 'furniture',
    longDescription:
      'Sleep like royalty on our handcrafted solid wood beds. From majestic King sizes to space-efficient Queen sizes, our beds are built for durability and designed to be the centerpiece of your bedroom.',
    allowedParentCategories: ['beds'],
    seo: {
      title: 'Solid Wood Beds: King & Queen Size',
      description: 'Durable wooden beds with and without storage for a restful sleep.',
    },
  },
  wardrobes: {
    slug: 'wardrobe',
    parentKey: 'bedroom',
    label: 'Wardrobes',
    category: 'furniture',
    longDescription:
      'Organize your clothing and accessories with our premium wardrobes. Featuring intelligent storage layouts and high-quality finishes, these wardrobes are built to last and keep your bedroom tidy.',
    allowedParentCategories: ['wardrobes'],
    seo: {
      title: 'Spacious Wardrobes & Almirahs',
      description: '2, 3, and 4-door wardrobes to keep your clothes organized.',
    },
  },
  'cabinet-sideboards': {
    slug: 'cabinet',
    parentKey: 'furniture',
    label: 'Cabinets & Sideboards',
    category: 'furniture',
    longDescription:
      'Enhance your dining and living spaces with our stylish cabinets and sideboards. Designed for smart storage and elegant display, these pieces combine functionality with refined craftsmanship, helping you keep essentials organized while elevating your interior décor.',
    allowedParentCategories: ['cabinet-sideboards'],
    seo: {
      title: 'Modern Cabinets & Sideboards for Storage',
      description:
        'Explore premium cabinets and sideboards for dining and living spaces with ample storage and elegant designs.',
    },
  },
  'dressing-tables': {
    slug: 'dresser',
    parentKey: 'bedroom',
    label: 'Dressing Tables',
    category: 'furniture',
    longDescription:
      'Create your personal grooming station with our elegant dressing tables. With built-in mirrors and ample drawer space, they make your daily routine a delight.',
    allowedParentCategories: ['dressing-tables'],
    seo: {
      title: 'Modern Dressing Tables with Mirror',
      description: 'Elegant vanity tables with storage for your grooming essentials.',
    },
  },
  'bedside-tables': {
    slug: 'bedside-table',
    parentKey: 'bedroom',
    label: 'Bedside Tables',
    category: 'furniture',
    longDescription:
      'Keep your nighttime essentials within arm’s reach. Our bedside tables offer a compact yet functional storage solution for lamps, gadgets, and books.',
    allowedParentCategories: ['bedside-tables'],
    seo: {
      title: 'Compact Bedside Tables & Nightstands',
      description: 'Wooden nightstands to keep your night-time essentials within reach.',
    },
  },

  'chest-of-drawers': {
    slug: 'drawer-unit',
    parentKey: 'bedroom',
    label: 'Chest of Drawers',
    category: 'furniture',
    longDescription:
      'The perfect storage companion for any room. Our chest of drawers provide deep storage space for everything from linens to clothes, all while adding a classic touch to your decor.',
    allowedParentCategories: ['chest-of-drawers'],
    seo: {
      title: 'Storage Chest of Drawers Online',
      description: 'Multi-functional drawer units for bedroom and living room storage.',
    },
  },
  'kids-beds': {
    slug: 'kids-bed',
    parentKey: 'bedroom',
    label: 'Kids Beds',
    category: 'furniture',
    longDescription:
      'Make bedtime fun for your little ones. Our kids beds are designed with safety and style in mind, ranging from playful bunk beds to cozy single beds.',
    allowedParentCategories: ['kids-beds'],
    seo: {
      title: 'Safe & Colorful Kids Beds',
      description: 'Single beds and bunk beds designed specifically for children.',
    },
  },

  mirrors: {
    slug: 'mirror',
    parentKey: 'bedroom',
    label: 'Mirrors',
    category: 'furniture',
    longDescription:
      'Enhance the light and space in your home. Our decorative wall and floor mirrors are perfect for dressing areas or as statement pieces in your living room.',
    allowedParentCategories: ['mirrors'],
    seo: {
      title: 'Full Length & Wall Mirrors',
      description: 'Decorative mirrors to enhance the light and space in your room.',
    },
  },
  benches: {
    slug: 'benche',
    parentKey: 'bedroom',
    label: 'Benches',
    category: 'furniture',
    longDescription:
      'Add a touch of sophistication to the foot of your bed or your entryway. Our benches offer a perfect spot for seating while adding a layer of texture to your room.',
    allowedParentCategories: ['benches'],
    seo: {
      title: 'Bedroom Benches & Settees',
      description: 'Stylish seating benches for the foot of your bed or entryway.',
    },
  },
  'wall-shelves': {
    slug: 'wall-shelve',
    parentKey: 'bedroom',
    label: 'Wall Shelves',
    category: 'furniture',
    longDescription:
      'Utilize your vertical space with our modern wall shelves. Ideal for displaying decor, plants, or books, these floating shelves help keep your floor space clear.',
    allowedParentCategories: ['wall-shelves'],
    seo: {
      title: 'Floating Wall Shelves Online',
      description: 'Wall-mounted racks for displaying decor and saving floor space.',
    },
  },
  'breakfast-tables': {
    slug: 'breakfast-table',
    parentKey: 'bedroom',
    label: 'Breakfast Tables',
    category: 'furniture',
    longDescription:
      'Enjoy slow mornings with our compact breakfast tables. Perfect for bed-time reading or working on your laptop, these tables are both portable and practical.',
    allowedParentCategories: ['breakfast-tables'],
    seo: {
      title: 'Foldable Breakfast & Study Tables',
      description: 'Portable tables for bed-time reading or working.',
    },
  },

  /* =========================
      DINING & KITCHEN (12 ITEMS)
  ========================== */
  'all-dining-table-sets': {
    slug: 'dining-set',
    parentKey: 'dining-room',
    label: 'All Dining Sets',
    category: 'furniture',
    longDescription:
      'Bring the whole family together with our solid wood dining sets. Available in various seating capacities, these sets are designed for durability and shared joy.',
    allowedParentCategories: ['6-seater-dining-sets', '4-seater-dining-sets'],
    seo: {
      title: 'Buy Wooden Dining Table Sets Online | Urban Home',
      description:
        'Explore our wide range of 4-seater and 6-seater dining sets. Premium solid wood and marble top dining furniture for your home.',
    },
  },
  '6-seater-dining-sets': {
    slug: '6-seater-dining-set',
    parentKey: 'dining-room',
    label: '6 Seater Dining',
    category: 'furniture',
    longDescription:
      'Perfect for large families and hosting dinner parties. Our 6-seater dining sets provide ample space and a grand aesthetic to your dining area.',
    allowedParentCategories: ['6-seater-dining-sets'],
    seo: {
      title: 'Large 6 Seater Dining Sets',
      description: 'Solid wood dining sets for family dinners and gatherings.',
    },
  },
  '4-seater-dining-sets': {
    slug: '4-seater-dining-set',
    parentKey: 'dining-room',
    label: '4 Seater Dining',
    category: 'furniture',
    longDescription:
      'Ideal for modern apartments and small families. Our 4-seater dining sets are compact yet provide a premium dining experience.',
    allowedParentCategories: ['4-seater-dining-sets'],
    seo: {
      title: 'Compact 4 Seater Dining Sets',
      description: 'Perfect dining solutions for small families and apartments.',
    },
  },
  'dining-tables': {
    slug: 'dining-table',
    parentKey: 'dining-room',
    label: 'Dining Tables',
    category: 'furniture',
    longDescription:
      'Create a customized dining space with our range of dining tables. From warm wooden finishes to modern glass and marble tops, find the table that fits your style.',
    allowedParentCategories: ['dining-tables'],
    seo: {
      title: 'Wooden & Glass Dining Tables',
      description: 'Choose from a variety of dining table designs and sizes.',
    },
  },
  'dining-chairs': {
    slug: 'dining-chair',
    parentKey: 'dining-room',
    label: 'Dining Chairs',
    category: 'furniture',
    longDescription:
      'Comfortable seating is key to a good meal. Our dining chairs are ergonomically designed and available in various styles to match your dining table.',
    allowedParentCategories: ['dining-chairs'],
    seo: {
      title: 'Comfortable Dining Chairs Set',
      description: 'Ergonomic dining chairs to match your dining room decor.',
    },
  },
  'kitchen-racks': {
    slug: 'kitchen-rack',
    parentKey: 'dining-room',
    label: 'Kitchen Racks',
    category: 'furniture',
    longDescription:
      'Organize your kitchen essentials with our utility racks. Designed to hold spices, utensils, and gadgets, they help keep your countertops clear.',
    allowedParentCategories: ['kitchen-racks'],
    seo: {
      title: 'Utility Kitchen Racks & Stands',
      description: 'Organize your spices and utensils with our kitchen storage racks.',
    },
  },
  'kitchen-cabinets': {
    slug: 'kitchen-cabinet',
    parentKey: 'dining-room',
    label: 'Kitchen Cabinets',
    category: 'furniture',
    longDescription:
      'Transform your kitchen into a modular space. Our cabinets offer deep storage and durable construction for all your heavy kitchenware.',
    allowedParentCategories: ['kitchen-cabinets'],
    seo: {
      title: 'Modular Kitchen Cabinets',
      description: 'Spacious cabinets for a clutter-free and modern kitchen.',
    },
  },
  'bar-cabinets': {
    slug: 'bar-cabinet',
    parentKey: 'dining-room',
    label: 'Bar Cabinets',
    category: 'furniture',
    longDescription:
      'Store your fine collection in style. Our bar units are designed with slots for glasses and bottles, making them a centerpiece for home entertainment.',
    allowedParentCategories: ['bar-cabinets'],
    seo: {
      title: 'Home Bar Cabinets & Units',
      description: 'Elegant bar storage for your wine collection and glassware.',
    },
  },
  'bar-stools': {
    slug: 'bar-stool',
    parentKey: 'dining-room',
    label: 'Bar Stools',
    category: 'furniture',
    longDescription:
      'Add a contemporary touch to your kitchen island or bar counter with our range of bar stools, designed for both comfort and height.',
    allowedParentCategories: ['bar-stools'],
    seo: {
      title: 'Modern Bar Stools & Counter Chairs',
      description: 'High-seating chairs for your bar counter or kitchen island.',
    },
  },
  'crockery-units': {
    slug: 'crockery-unit',
    parentKey: 'dining-room',
    label: 'Crockery Units',
    category: 'furniture',
    longDescription:
      'Display your fine china and glassware with pride in our beautiful crockery cabinets, featuring glass doors and sturdy wooden frames.',
    allowedParentCategories: ['crockery-units'],
    seo: {
      title: 'Glass Door Crockery Cabinets',
      description: 'Display your fine crockery in our beautiful wooden units.',
    },
  },
  'sideboards-cabinets': {
    slug: 'sideboard-cabinet',
    parentKey: 'dining-room',
    label: 'Sideboards',
    category: 'furniture',
    longDescription:
      'Perfect for extra storage in the dining area, our sideboards and buffets offer a flat surface for serving during parties and deep cabinets for storage.',
    allowedParentCategories: ['sideboards-cabinets'],
    seo: {
      title: 'Dining Room Sideboards & Buffets',
      description: 'Extra storage and style for your dining area.',
    },
  },
  'table-runner': {
    slug: 'table-runner',
    parentKey: 'dining-room',
    label: 'Table Runners',
    category: 'furniture',
    longDescription:
      'Complete your table setting with our decorative table runners, adding a pop of color and texture to your dining experience.',
    allowedParentCategories: ['table-runner'],
    seo: {
      title: 'Decorative Table Runners',
      description: 'Add a touch of elegance to your dining table with runners.',
    },
  },

  /* =========================
      MATTRESSES (8 ITEMS)
  ========================== */
  mattresses: {
    slug: 'mattress',
    parentKey: 'bedroom',
    label: 'Mattresses',
    category: 'mattresses',
    longDescription:
      'The secret to a healthy life is a good night’s sleep. Explore our orthopedic and memory foam mattresses that provide perfect spine alignment.',
    allowedParentCategories: ['*'],
    seo: {
      title: 'Buy Premium Mattresses Online',
      description: 'Orthopedic and memory foam mattresses for better sleep.',
    },
  },
  'king-size-mattress': {
    slug: 'king-size-mattress',
    parentKey: 'mattresses',
    label: 'King Size Mattress',
    category: 'mattresses',
    longDescription:
      'Indulge in maximum space and comfort. Our King size mattresses are designed for large master beds to ensure undisturbed sleep.',
    allowedParentCategories: ['king-size-mattress'],
    seo: {
      title: 'King Size Mattresses for Wide Beds',
      description: 'Maximum space and comfort for your master bedroom.',
    },
  },
  'queen-size-mattress': {
    slug: 'queen-size-mattress',
    parentKey: 'mattresses',
    label: 'Queen Size Mattress',
    category: 'mattresses',
    longDescription:
      'Perfect for standard double beds, our Queen size mattresses offer a balance of comfort and space for couples.',
    allowedParentCategories: ['queen-size-mattress'],
    seo: {
      title: 'Queen Size Mattresses Online',
      description: 'Comfortable mattresses for standard double beds.',
    },
  },
  'single-bed-mattress': {
    slug: 'single-bed-mattress',
    parentKey: 'mattresses',
    label: 'Single Mattress',
    category: 'mattresses',
    longDescription:
      'Ideal for kids beds and single guest beds, these mattresses provide firm support in a compact size.',
    allowedParentCategories: ['single-bed-mattress'],
    seo: {
      title: 'Single Bed Mattresses Online',
      description: 'Durable mattresses for kids beds and single beds.',
    },
  },
  'orthopedic-mattress': {
    slug: 'orthopedic-mattress',
    parentKey: 'mattresses',
    label: 'Ortho Mattress',
    category: 'mattresses',
    longDescription:
      'Specifically designed for spine health, our orthopedic mattresses offer firm support to alleviate back pain and improve posture.',
    allowedParentCategories: ['orthopedic-mattress'],
    seo: {
      title: 'Orthopedic Mattresses for Back Pain',
      description: 'Firm support mattresses designed for spine health.',
    },
  },
  'memory-foam-mattress': {
    slug: 'memory-foam-mattress',
    parentKey: 'mattresses',
    label: 'Memory Foam Mattress',
    category: 'mattresses',
    longDescription:
      'Experience the weightless feel of memory foam that contours to your body shape, relieving pressure points for a deep sleep.',
    allowedParentCategories: ['memory-foam-mattress'],
    seo: {
      title: 'Soft Memory Foam Mattresses',
      description: 'Pressure-relieving mattresses that contour to your body.',
    },
  },

  /* =========================
      DECOR & SPECIAL (10 ITEMS)
  ========================== */
  'prayer-units': {
    slug: 'prayer-unit',
    parentKey: 'all',
    label: 'Pooja Mandir',
    category: 'furniture',
    longDescription:
      'Bring home a sacred space for your daily rituals. Our handcrafted wooden pooja mandirs are designed with intricate details and spiritual grace.',
    allowedParentCategories: ['prayer-units'],
    seo: {
      title: 'Wooden Pooja Mandirs Online',
      description: 'Handcrafted spiritual temples for your home prayer room.',
    },
  },
  'candle-stands': {
    slug: 'candle-stand',
    parentKey: 'home-decor',
    label: 'Candle Stands',
    category: 'decor',
    longDescription:
      'Illuminate your home with warmth. Our decorative candle stands are perfect for creating a cozy ambiance during dinner or festive occasions.',
    allowedParentCategories: ['candle-stands'],
    seo: {
      title: 'Designer Candle Stands & Holders',
      description: 'Decorative candle holders to create a warm ambiance.',
    },
  },
  'religious-idols': {
    slug: 'religious-idol',
    parentKey: 'home-decor',
    label: 'Religious Idols',
    category: 'decor',
    longDescription:
      'Invite divine blessings into your life. Explore our collection of spiritual idols, perfect for your pooja room or as thoughtful gifts.',
    allowedParentCategories: ['religious-idols'],
    seo: {
      title: 'Spiritual Idols & Statues',
      description: 'Bless your home with our collection of divine idols.',
    },
  },
  vases: {
    slug: 'vase',
    parentKey: 'home-decor',
    label: 'Flower Vases',
    category: 'decor',
    longDescription:
      'Add a floral touch to your rooms with our designer vases. From ceramic minimalism to glass elegance, find the perfect home for your blooms.',
    allowedParentCategories: ['vases'],
    seo: {
      title: 'Ceramic & Glass Flower Vases',
      description: 'Beautiful vases for fresh and artificial flowers.',
    },
  },
  'wall-clocks': {
    slug: 'wall-clock',
    parentKey: 'home-decor',
    label: 'Wall Clocks',
    category: 'decor',
    longDescription:
      'Make every minute count with our designer wall clocks. Available in modern, vintage, and artistic styles to suit your wall decor.',
    allowedParentCategories: ['wall-clocks'],
    seo: {
      title: 'Modern & Antique Wall Clocks',
      description: 'Tell time in style with our designer wall clocks.',
    },
  },
  'wall-decors': {
    slug: 'wall-decor',
    parentKey: 'home-decor',
    label: 'Wall Decor',
    category: 'decor',
    longDescription:
      'Transform blank walls into art galleries. Our metal and wooden wall decor pieces add depth and character to any living space.',
    allowedParentCategories: ['wall-decors'],
    seo: {
      title: 'Wall Decor & Art Pieces',
      description: 'Metal and wooden wall art to brighten up your rooms.',
    },
  },
  'artificial-plants': {
    slug: 'artificial-plant',
    parentKey: 'home-decor',
    label: 'Artificial Plants',
    category: 'decor',
    longDescription:
      'Enjoy the beauty of nature without the maintenance. Our hyper-realistic artificial plants stay green all year round.',
    allowedParentCategories: ['artificial-plants'],
    seo: {
      title: 'Artificial Plants & Greenery',
      description: 'Zero maintenance green plants for home and office decor.',
    },
  },
}
