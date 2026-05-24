export const BedroomConfig = {
  id: 'bedroom',
  title: 'Bedroom',
  order: 2,
  trackingKey: 'bedroom_category_click',
  iconKey: 'bedroom',
  image:
    'https://images.unsplash.com/photo-1595526051245-4506e0005bd0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  path: '/bedroom',

  desktop: {
    columns: [
      {
        title: 'Beds',
        order: 1,
        items: [
          {
            id: 'all-beds',
            title: 'All Beds',
            path: '/beds',
            image: 'https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg',
            order: 1,
            trackingKey: 'bed_all_click',
            filter: { category: 'bedroom' },
          },
          {
            id: 'king-size-beds',
            title: 'King Size Beds',
            path: '/beds/king-size',
            image: 'https://cdn.pixabay.com/photo/2016/05/26/04/17/home-1416376_1280.jpg',
            order: 2,
            trackingKey: 'bed_king_size_click',
            filter: { category: 'bedroom', subCategory: 'King Size Beds', size: 'King' },
          },
          {
            id: 'queen-size-beds',
            title: 'Queen Size Beds',
            path: '/beds/queen-size',
            image: 'https://cdn.pixabay.com/photo/2015/08/29/13/26/bed-913051_1280.jpg',
            order: 3,
            trackingKey: 'bed_queen_size_click',
            filter: { category: 'bedroom', subCategory: 'Queen Size Beds', size: 'Queen' },
          },
          {
            id: 'single-beds',
            title: 'Single Beds',
            path: '/beds/single',
            image:
              'https://images.unsplash.com/photo-1582068019386-a943ee9287ae?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            order: 4,
            trackingKey: 'bed_single_click',
            filter: { category: 'bedroom', subCategory: 'Single Beds', size: 'Single' },
          },
        ],
      },

      {
        order: 2,
        groups: [
          {
            title: 'Wardrobes',
            order: 1,
            items: [
              {
                id: 'all-wardrobes',
                title: 'All Wardrobes',
                path: '/wardrobes',
                image: 'https://cdn.pixabay.com/photo/2016/01/13/14/01/dressing-room-1137941_640.jpg',
                order: 1,
                trackingKey: 'wardrobe_all_click',
                filter: { category: 'bedroom', subCategory: 'Wardrobes' },
              },
              {
                id: 'wooden-wardrobes',
                title: 'Wooden Wardrobes',
                path: '/wardrobes/wooden',
                image: 'https://cdn.pixabay.com/photo/2018/01/14/13/03/wood-3081795_1280.jpg',
                order: 2,
                trackingKey: 'wardrobe_wooden_click',
                filter: { category: 'bedroom', subCategory: 'Wardrobes', material: 'Wood' },
              },
            ],
          },
          {
            title: 'Bedside Tables',
            order: 2,
            items: [
              {
                id: 'all-bedside-tables',
                title: 'All Bedside Tables',
                path: '/bedside-tables',
                image: 'https://cdn.pixabay.com/photo/2018/03/01/03/52/furniture-3189674_1280.jpg',
                order: 1,
                trackingKey: 'bedside_table_all_click',
                filter: { category: 'bedroom', subCategory: 'Bedside Tables' },
              },
              {
                id: 'wooden-bedside-tables',
                title: 'Wooden Bedside Tables',
                path: '/bedside-tables/wooden',
                image: 'https://cdn.pixabay.com/photo/2019/03/05/22/47/living-room-table-4037281_1280.jpg',
                order: 2,
                trackingKey: 'bedside_table_wooden_click',
                filter: { category: 'bedroom', subCategory: 'Bedside Tables', material: 'Wood' },
              },
            ],
          },
        ],
      },

      {
        title: 'Seating & Storage',
        order: 3,
        items: [
          {
            id: 'benches',
            title: 'Benches',
            path: '/benches',
            image: 'https://cdn.pixabay.com/photo/2017/08/03/14/29/bank-2576581_640.png',
            order: 1,
            trackingKey: 'bench_click',
            filter: { category: 'bedroom', subCategory: 'Benches' },
          },
          {
            id: 'storage-boxes',
            title: 'Storage Boxes',
            path: '/storage-boxes',
            image: 'https://cdn.pixabay.com/photo/2017/06/17/10/58/furniture-2411853_640.jpg',
            order: 2,
            trackingKey: 'storage_box_click',
            filter: { category: 'bedroom', subCategory: 'Storage Boxes' },
          },
        ],
      },
    ],

    promo: {
      image: 'https://cdn.pixabay.com/photo/2017/06/17/10/58/furniture-2411853_640.jpg',
      path: '/bedroom',
      trackingKey: 'bedroom_promo_click',
    },
  },

  mobile: {
    topGrid: [
      {
        id: 'king-size-beds',
        title: 'King Size Beds',
        image: 'https://cdn.pixabay.com/photo/2016/05/26/04/17/home-1416376_640.jpg',
        path: '/beds/king-size',
        order: 1,
        trackingKey: 'mobile_bed_king_size_click',
        filter: { category: 'bedroom', subCategory: 'King Size Beds', size: 'King' },
      },
      {
        id: 'queen-size-beds',
        title: 'Queen Size Beds',
        image: 'https://cdn.pixabay.com/photo/2015/08/29/13/26/bed-913051_640.jpg',
        path: '/beds/queen-size',
        order: 2,
        trackingKey: 'mobile_bed_queen_size_click',
        filter: { category: 'bedroom', subCategory: 'Queen Size Beds', size: 'Queen' },
      },
      {
        id: 'single-beds',
        title: 'Single Beds',
        image:
          'https://images.unsplash.com/photo-1582068019386-a943ee9287ae?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        path: '/beds/single',
        order: 3,
        trackingKey: 'mobile_bed_single_click',
        filter: { category: 'bedroom', subCategory: 'Single Beds', size: 'Single' },
      },
      {
        id: 'wardrobes',
        title: 'Wardrobes',
        image: 'https://cdn.pixabay.com/photo/2016/01/13/14/01/dressing-room-1137941_640.jpg',
        path: '/wardrobes',
        order: 4,
        trackingKey: 'mobile_wardrobe_click',
        filter: { category: 'bedroom', subCategory: 'Wardrobes' },
      },
      {
        id: 'bedside-tables',
        title: 'Bedside Tables',
        image: 'https://cdn.pixabay.com/photo/2019/03/05/22/47/living-room-table-4037281_640.jpg',
        path: '/bedside-tables',
        order: 5,
        trackingKey: 'mobile_bedside_table_click',
        filter: { category: 'bedroom', subCategory: 'Bedside Tables' },
      },
      {
        id: 'benches',
        title: 'Benches',
        image: 'https://cdn.pixabay.com/photo/2017/08/03/14/29/bank-2576581_640.png',
        path: '/benches',
        order: 6,
        trackingKey: 'mobile_bench_click',
        filter: { category: 'bedroom', subCategory: 'Benches' },
      },
    ],
  },
}
