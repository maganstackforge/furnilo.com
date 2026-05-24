export const StudyAndOfficeConfig = {
  id: 'study-office',
  title: 'Study & Office',
  order: 4,
  trackingKey: 'study_office_category_click',
  iconKey: 'studyOffice',
  image:
    'https://images.unsplash.com/photo-1759986452774-be47f7db2362?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  path: '/study-office',

  desktop: {
    columns: [
      {
        title: 'Tables & Workstations',
        order: 1,
        groups: [
          {
            title: 'Study Tables',
            order: 1,
            items: [
              {
                id: 'all-study-tables',
                title: 'All Study Tables',
                path: '/study-tables',
                image:
                  'https://images.unsplash.com/photo-1679731980192-a18d8bbb47d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 1,
                trackingKey: 'study_table_all_click',
                filter: { category: 'study-office', subCategory: 'Study Tables' },
              },
              {
                id: 'wooden-study-tables',
                title: 'Wooden Study Tables',
                path: '/study-tables/wooden',
                image:
                  'https://images.unsplash.com/photo-1762857995550-1fc51c8fbf2d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 2,
                trackingKey: 'study_table_wooden_click',
                filter: { category: 'study-office', subCategory: 'Study Tables', material: 'Wood' },
              },
              {
                id: 'compact-study-tables',
                title: 'Compact Study Tables',
                path: '/study-tables/compact',
                image:
                  'https://plus.unsplash.com/premium_photo-1661963215010-501baaf8c3d1?q=80&w=526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 3,
                trackingKey: 'compact_study_table_click',
                filter: { category: 'study-office', subCategory: 'Study Tables', style: 'Compact' },
              },
            ],
          },
          {
            title: 'Office Tables',
            order: 2,
            items: [
              {
                id: 'all-office-tables',
                title: 'All Office Tables',
                path: '/office-tables',
                image:
                  'https://images.unsplash.com/photo-1696453423495-046a7d83bf55?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 1,
                trackingKey: 'office_table_all_click',
                filter: { category: 'study-office', subCategory: 'Office Tables' },
              },
              {
                id: 'computer-tables',
                title: 'Computer Tables',
                path: '/office-tables/computer',
                image:
                  'https://images.unsplash.com/photo-1593392611302-61ae0578776c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 2,
                trackingKey: 'computer_table_click',
                filter: { category: 'study-office', subCategory: 'Office Tables', purpose: 'Computer Desk' },
              },
              {
                id: 'adjustable-tables',
                title: 'Height Adjustable Tables',
                path: '/office-tables/adjustable',
                image:
                  'https://images.unsplash.com/photo-1587129980116-d44492ecc7bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                order: 3,
                trackingKey: 'adjustable_table_click',
                filter: { category: 'study-office', subCategory: 'Office Tables', feature: 'Adjustable' },
              },
            ],
          },
        ],
      },

      {
        title: 'Chairs & Seating',
        order: 2,
        items: [
          {
            id: 'study-chairs',
            title: 'Study Chairs',
            path: '/study-chairs',
            image:
              'https://plus.unsplash.com/premium_photo-1671656349007-0c41dab52c96?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            order: 1,
            trackingKey: 'study_chair_click',
            filter: { category: 'study-office', subCategory: 'Study Chairs' },
          },
          {
            id: 'office-chairs',
            title: 'Office Chairs',
            path: '/office-chairs',
            image:
              'https://images.unsplash.com/photo-1681418659069-eef28d44aeab?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            order: 2,
            trackingKey: 'office_chair_click',
            filter: { category: 'study-office', subCategory: 'Office Chairs' },
          },
          {
            id: 'ergonomic-chairs',
            title: 'Ergonomic Chairs',
            path: '/office-chairs/ergonomic',
            image:
              'https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            order: 3,
            trackingKey: 'ergonomic_chair_click',
            filter: { category: 'study-office', subCategory: 'Office Chairs', feature: 'Ergonomic' },
          },
        ],
      },

      {
        title: 'Storage & Organization',
        order: 3,
        items: [
          {
            id: 'bookshelves',
            title: 'Bookshelves',
            path: '/bookshelves',
            image:
              'https://images.unsplash.com/photo-1708161885729-63faff807840?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            order: 1,
            trackingKey: 'bookshelf_click',
            filter: { category: 'study-office', subCategory: 'Bookshelves' },
          },
          {
            id: 'file-cabinets',
            title: 'File Cabinets',
            path: '/file-cabinets',
            image:
              'https://images.unsplash.com/photo-1661260099882-436cc84a85d8?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            order: 2,
            trackingKey: 'file_cabinet_click',
            filter: { category: 'study-office', subCategory: 'File Cabinets' },
          },
          {
            id: 'table-organizers',
            title: 'Table Organizers',
            path: '/table-organizers',
            image:
              'https://images.unsplash.com/photo-1751107807635-a2ac6035e8dd?q=80&w=425&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            order: 3,
            trackingKey: 'table_organizer_click',
            filter: { category: 'study-office', subCategory: 'Table Organizers' },
          },
        ],
      },
    ],

    promo: {
      image:
        'https://images.unsplash.com/photo-1588710768013-a36d48bce237?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/study-tables',
      trackingKey: 'study_office_promo_click',
    },
  },

  mobile: {
    topGrid: [
      {
        id: 'wooden-study-tables',
        title: 'Study Tables',
        image:
          'https://images.unsplash.com/photo-1762857995550-1fc51c8fbf2d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        path: '/study-tables/wooden',
        order: 1,
        trackingKey: 'mobile_study_table_click',
        filter: { category: 'study-office', subCategory: 'Study Tables' },
      },
      {
        id: 'computer-tables',
        title: 'Computer Desks',
        image:
          'https://images.unsplash.com/photo-1593392611302-61ae0578776c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        path: '/office-tables/computer',
        order: 2,
        trackingKey: 'mobile_computer_table_click',
        filter: { category: 'study-office', subCategory: 'Office Tables', purpose: 'Computer Desk' },
      },
      {
        id: 'office-chairs',
        title: 'Office Chairs',
        image:
          'https://images.unsplash.com/photo-1681418659069-eef28d44aeab?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        path: '/office-chairs',
        order: 3,
        trackingKey: 'mobile_office_chair_click',
        filter: { category: 'study-office', subCategory: 'Office Chairs' },
      },
      {
        id: 'study-chairs',
        title: 'Study Chairs',
        image:
          'https://plus.unsplash.com/premium_photo-1671656349007-0c41dab52c96?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        path: '/study-chairs',
        order: 4,
        trackingKey: 'mobile_study_chair_click',
        filter: { category: 'study-office', subCategory: 'Study Chairs' },
      },
      {
        id: 'bookshelves',
        title: 'Bookshelves',
        image:
          'https://images.unsplash.com/photo-1708161885729-63faff807840?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        path: '/bookshelves',
        order: 5,
        trackingKey: 'mobile_bookshelf_click',
        filter: { category: 'study-office', subCategory: 'Bookshelves' },
      },
      {
        id: 'file-cabinets',
        title: 'File Cabinets',
        image:
          'https://images.unsplash.com/photo-1661260099882-436cc84a85d8?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        path: '/file-cabinets',
        order: 6,
        trackingKey: 'mobile_file_cabinet_click',
        filter: { category: 'study-office', subCategory: 'File Cabinets' },
      },
    ],
  },
}
