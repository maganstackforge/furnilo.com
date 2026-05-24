export const StorageConfig = {
  id: 'storage',
  title: 'Storage',
  order: 8,
  trackingKey: 'storage_category_click',
  iconKey: 'storage',
  image:
    'https://images.unsplash.com/photo-1762280237740-5a9292e527ab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  path: '/storage',

  desktop: {
    columns: [
      {
        title: 'Wardrobes & Cupboards',
        order: 1,
        groups: [
          {
            title: 'Wardrobes',
            order: 1,
            items: [
              {
                id: 'single-door-wardrobe',
                title: 'Single Door Wardrobe',
                path: '/storage/wardrobes/single-door',
                image:
                  'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 1,
                trackingKey: 'single_door_wardrobe_click',
                filter: { category: 'storage', subCategory: 'Wardrobes', type: 'Single Door' },
              },
              {
                id: 'double-door-wardrobe',
                title: 'Double Door Wardrobe',
                path: '/storage/wardrobes/double-door',
                image:
                  'https://images.unsplash.com/photo-1600422086908-72be2c8f5f3f?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 2,
                trackingKey: 'double_door_wardrobe_click',
                filter: { category: 'storage', subCategory: 'Wardrobes', type: 'Double Door' },
              },
              {
                id: 'sliding-wardrobe',
                title: 'Sliding Wardrobe',
                path: '/storage/wardrobes/sliding',
                image:
                  'https://images.unsplash.com/photo-1672137233327-37b0c1049e77?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 3,
                trackingKey: 'sliding_wardrobe_click',
                filter: { category: 'storage', subCategory: 'Wardrobes', type: 'Sliding' },
              },
            ],
          },
        ],
      },

      {
        title: 'Sideboards & Cabinets',
        order: 2,
        groups: [
          {
            title: 'Cabinets',
            order: 1,
            items: [
              {
                id: 'display-cabinet',
                title: 'Display Cabinet',
                path: '/storage/cabinets/display',
                image:
                  'https://images.unsplash.com/photo-1763506240757-a8a33ca2c26f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 1,
                trackingKey: 'display_cabinet_click',
                filter: { category: 'storage', subCategory: 'Cabinets', type: 'Display' },
              },
              {
                id: 'sideboard',
                title: 'Sideboard',
                path: '/storage/cabinets/sideboard',
                image:
                  'https://plus.unsplash.com/premium_photo-1680082510819-cace32f84aeb?q=80&w=426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 2,
                trackingKey: 'sideboard_click',
                filter: { category: 'storage', subCategory: 'Cabinets', type: 'Sideboard' },
              },
              {
                id: 'console-table',
                title: 'Console Table',
                path: '/storage/cabinets/console',
                image:
                  'https://plus.unsplash.com/premium_photo-1683141118084-89df02e0a30c?q=80&w=829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 3,
                trackingKey: 'console_table_click',
                filter: { category: 'storage', subCategory: 'Cabinets', type: 'Console Table' },
              },
            ],
          },
        ],
      },

      {
        title: 'Shelving & Drawers',
        order: 3,
        items: [
          {
            id: 'bookshelves',
            title: 'Bookshelves',
            path: '/storage/bookshelves',
            image:
              'https://images.unsplash.com/photo-1642548083429-2283c4af718c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            order: 1,
            trackingKey: 'bookshelf_click',
            filter: { category: 'storage', subCategory: 'Bookshelves' },
          },
          {
            id: 'wall-shelves',
            title: 'Wall Shelves',
            path: '/storage/wall-shelves',
            image:
              'https://plus.unsplash.com/premium_photo-1682402663900-a4dc2c200933?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            order: 2,
            trackingKey: 'wall_shelf_click',
            filter: { category: 'storage', subCategory: 'Wall Shelves' },
          },
          {
            id: 'drawer-units',
            title: 'Drawer Units',
            path: '/storage/drawers',
            image:
              'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            order: 3,
            trackingKey: 'drawer_unit_click',
            filter: { category: 'storage', subCategory: 'Drawer Units' },
          },
        ],
      },
    ],

    promo: {
      image:
        'https://images.unsplash.com/photo-1628843201283-2ca32147ad3e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/storage',
      trackingKey: 'storage_promo_click',
    },
  },

  mobile: {
    topGrid: [
      {
        id: 'single-door-wardrobe',
        title: 'Single Door',
        image:
          'https://images.unsplash.com/photo-1659398652648-b3b8b7c1beab?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        path: '/storage/wardrobes/single-door',
        order: 1,
        trackingKey: 'mobile_single_door_click',
        filter: { category: 'storage', subCategory: 'Wardrobes', type: 'Single Door' },
      },
      {
        id: 'double-door-wardrobe',
        title: 'Double Door',
        image:
          'https://images.unsplash.com/photo-1600422086908-72be2c8f5f3f?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        path: '/storage/wardrobes/double-door',
        order: 2,
        trackingKey: 'mobile_double_door_click',
        filter: { category: 'storage', subCategory: 'Wardrobes', type: 'Double Door' },
      },
      {
        id: 'sliding-wardrobe',
        title: 'Sliding Wardrobe',
        image:
          'https://plus.unsplash.com/premium_photo-1674035036061-5561d1900534?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        path: '/storage/wardrobes/sliding',
        order: 3,
        trackingKey: 'mobile_sliding_wardrobe_click',
        filter: { category: 'storage', subCategory: 'Wardrobes', type: 'Sliding' },
      },
      {
        id: 'bookshelves',
        title: 'Bookshelves',
        image:
          'https://images.unsplash.com/photo-1577985051167-0d49eec21977?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        path: '/storage/bookshelves',
        order: 4,
        trackingKey: 'mobile_bookshelf_click',
        filter: { category: 'storage', subCategory: 'Bookshelves' },
      },
      {
        id: 'drawer-units',
        title: 'Drawers',
        image:
          'https://plus.unsplash.com/premium_photo-1677494554492-82ba01b0f2c6?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        path: '/storage/drawers',
        order: 5,
        trackingKey: 'mobile_drawer_click',
        filter: { category: 'storage', subCategory: 'Drawer Units' },
      },
      {
        id: 'sideboard',
        title: 'Sideboard',
        image:
          'https://images.unsplash.com/photo-1628152371231-936cf45eb8f3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        path: '/storage/cabinets/sideboard',
        order: 6,
        trackingKey: 'mobile_sideboard_click',
        filter: { category: 'storage', subCategory: 'Cabinets', type: 'Sideboard' },
      },
    ],
  },
}
