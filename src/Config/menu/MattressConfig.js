export const MattressConfig = {
  id: 'mattress',
  title: 'Mattresses',
  order: 7,
  trackingKey: 'mattress_category_click',
  iconKey: 'mattress',
  image:
    'https://images.unsplash.com/photo-1640003145136-f998284e11de?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  path: '/mattresses',

  desktop: {
    columns: [
      {
        title: 'Mattresses by Size',
        order: 1,
        groups: [
          {
            title: 'Single Size',
            order: 1,
            items: [
              {
                id: 'single-foam',
                title: 'Foam Mattress',
                path: '/mattresses/single/foam',
                image:
                  'https://images.unsplash.com/photo-1669695605483-539f648c252a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 1,
                trackingKey: 'single_foam_click',
                filter: { category: 'mattress', subCategory: 'Single', material: 'Foam' },
              },
              {
                id: 'single-memory-foam',
                title: 'Memory Foam Mattress',
                path: '/mattresses/single/memory-foam',
                image:
                  'https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 2,
                trackingKey: 'single_memory_foam_click',
                filter: { category: 'mattress', subCategory: 'Single', material: 'Memory Foam' },
              },
              {
                id: 'single-spring',
                title: 'Spring Mattress',
                path: '/mattresses/single/spring',
                image:
                  'https://images.unsplash.com/photo-1759176171017-7bb69f6bbd1f?q=80&w=458&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 3,
                trackingKey: 'single_spring_click',
                filter: { category: 'mattress', subCategory: 'Single', material: 'Spring' },
              },
            ],
          },
          {
            title: 'Double Size',
            order: 2,
            items: [
              {
                id: 'double-foam',
                title: 'Foam Mattress',
                path: '/mattresses/double/foam',
                image:
                  'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 1,
                trackingKey: 'double_foam_click',
                filter: { category: 'mattress', subCategory: 'Double', material: 'Foam' },
              },
              {
                id: 'double-memory-foam',
                title: 'Memory Foam Mattress',
                path: '/mattresses/double/memory-foam',
                image:
                  'https://images.unsplash.com/photo-1658595148963-13b7da6dcd6d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 2,
                trackingKey: 'double_memory_foam_click',
                filter: { category: 'mattress', subCategory: 'Double', material: 'Memory Foam' },
              },
              {
                id: 'double-spring',
                title: 'Spring Mattress',
                path: '/mattresses/double/spring',
                image:
                  'https://images.unsplash.com/photo-1573434918104-7da2440e21c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 3,
                trackingKey: 'double_spring_click',
                filter: { category: 'mattress', subCategory: 'Double', material: 'Spring' },
              },
            ],
          },
          {
            title: 'Queen & King Size',
            order: 3,
            items: [
              {
                id: 'queen-memory-foam',
                title: 'Queen Memory Foam',
                path: '/mattresses/queen/memory-foam',
                image:
                  'https://plus.unsplash.com/premium_photo-1670869815097-4af200de78f0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 1,
                trackingKey: 'queen_memory_foam_click',
                filter: { category: 'mattress', subCategory: 'Queen', material: 'Memory Foam' },
              },
              {
                id: 'king-spring',
                title: 'King Spring Mattress',
                path: '/mattresses/king/spring',
                image:
                  'https://images.unsplash.com/photo-1742319096912-7bb94fdfeb03?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 2,
                trackingKey: 'king_spring_click',
                filter: { category: 'mattress', subCategory: 'King', material: 'Spring' },
              },
            ],
          },
        ],
      },

      {
        title: 'Mattresses by Comfort',
        order: 2,
        items: [
          {
            id: 'soft-mattress',
            title: 'Soft',
            path: '/mattresses/soft',
            image:
              'https://images.unsplash.com/photo-1722356541555-eeabc38f80a8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            order: 1,
            trackingKey: 'soft_mattress_click',
            filter: { category: 'mattress', comfort: 'Soft' },
          },
          {
            id: 'medium-mattress',
            title: 'Medium',
            path: '/mattresses/medium',
            image:
              'https://images.unsplash.com/photo-1613940512699-fc9150817bb2?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            order: 2,
            trackingKey: 'medium_mattress_click',
            filter: { category: 'mattress', comfort: 'Medium' },
          },
          {
            id: 'firm-mattress',
            title: 'Firm',
            path: '/mattresses/firm',
            image:
              'https://images.unsplash.com/photo-1759176170553-7c078c66c514?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            order: 3,
            trackingKey: 'firm_mattress_click',
            filter: { category: 'mattress', comfort: 'Firm' },
          },
        ],
      },
    ],

    promo: {
      image:
        'https://images.unsplash.com/photo-1759176171634-674f37841636?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/mattresses',
      trackingKey: 'mattress_promo_click',
    },
  },

  mobile: {
    topGrid: [
      {
        id: 'single-foam',
        title: 'Single Foam',
        image:
          'https://images.unsplash.com/photo-1669695605483-539f648c252a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        path: '/mattresses/single/foam',
        order: 1,
        trackingKey: 'mobile_single_foam_click',
        filter: { category: 'mattress', subCategory: 'Single', material: 'Foam' },
      },
      {
        id: 'double-memory-foam',
        title: 'Double Memory Foam',
        image:
          'https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        path: '/mattresses/double/memory-foam',
        order: 2,
        trackingKey: 'mobile_double_memory_click',
        filter: { category: 'mattress', subCategory: 'Double', material: 'Memory Foam' },
      },
      {
        id: 'queen-memory-foam',
        title: 'Queen Memory Foam',
        image:
          'https://plus.unsplash.com/premium_photo-1670869815097-4af200de78f0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        path: '/mattresses/queen/memory-foam',
        order: 3,
        trackingKey: 'mobile_queen_memory_click',
        filter: { category: 'mattress', subCategory: 'Queen', material: 'Memory Foam' },
      },
      {
        id: 'king-spring',
        title: 'King Spring',
        image:
          'https://images.unsplash.com/photo-1742319096912-7bb94fdfeb03?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        path: '/mattresses/king/spring',
        order: 4,
        trackingKey: 'mobile_king_spring_click',
        filter: { category: 'mattress', subCategory: 'King', material: 'Spring' },
      },
      {
        id: 'soft-mattress',
        title: 'Soft',
        image:
          'https://images.unsplash.com/photo-1722356541555-eeabc38f80a8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        path: '/mattresses/soft',
        order: 5,
        trackingKey: 'mobile_soft_click',
        filter: { category: 'mattress', comfort: 'Soft' },
      },
      {
        id: 'firm-mattress',
        title: 'Firm',
        image:
          'https://images.unsplash.com/photo-1759176170553-7c078c66c514?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        path: '/mattresses/firm',
        order: 6,
        trackingKey: 'mobile_firm_click',
        filter: { category: 'mattress', comfort: 'Firm' },
      },
    ],
  },
}
