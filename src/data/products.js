import { sofasData } from './products/sofasData'
import { bedsData } from './products/bedsData'
import { decorData } from './products/decorsData'
import { storageData } from './products/storagesData'
import { chairsData } from './products/chairsData'
import { tableData } from './products/tablesData'

export const products = [...sofasData, ...bedsData, ...decorData, ...storageData, ...chairsData, ...tableData]

// taxonomy hierarchy
// taxonomy: {
//   mainCategory: 'furniture',      // Level 1 (Global Search)
//   category: 'sofas',              // Level 2 (Listing Page Header)
//   subCategory: 'l-shape-sofas',   // Level 3 (Deep Filtering)
//   room: ['living-room'],          // Extra Dimension (Navigation)
// }
