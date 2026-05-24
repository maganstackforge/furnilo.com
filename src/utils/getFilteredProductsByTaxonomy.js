export const getFilteredProductsByTaxonomy = (products, targetCategory, categoryConfig = {}) => {
  if (!products || !targetCategory) return []

  return products.filter((product) => {
    const { taxonomy } = product
    if (!taxonomy) return false

    // Strict exact match: product category exactly matches our target slug
    // Example: product.taxonomy.category ('bed') === targetCategory ('bed')
    const matchesCategory =
      taxonomy.category === targetCategory ||
      taxonomy.subCategory === targetCategory ||
      taxonomy.subType === targetCategory

    // Optional: Agar aap room-based listing bhi dikhana chahte hain
    // (Jahan targetCategory 'living-room' jaisa kuch ho)
    const matchesRoom = Array.isArray(taxonomy.room) && taxonomy.room.includes(targetCategory)

    return matchesCategory || matchesRoom
  })
}

// /**
//  * getFilteredProductsByTaxonomy
//  * Handles: Room, Category, Sub-Category (Slug matches) and Search logic.
//  */
// export const getFilteredProductsByTaxonomy = (products, query, categoryConfig = {}) => {
//   if (!products || !query) return []
//   console.log(query)
//   // 1. All Products Case
//   if (query === 'all') return products

//   const config = categoryConfig[query]
//   const searchTerm = query.toLowerCase()

//   return products.filter((product) => {
//     const { taxonomy, title } = product
//     if (!taxonomy) return false

//     // A. Room Match (Checks if query is inside the room array)
//     const matchesRoom = Array.isArray(taxonomy.room) && taxonomy.room.includes(query)

//     // B. Direct Category/Sub-Category Match (Slug based)
//     const matchesCategory = taxonomy.category === query
//     const matchesSubCategory = taxonomy.subCategory === query

//     // C. Configuration Match (Checks allowed list from categoryConfig)
//     let matchesConfig = false
//     if (config && config.allowedParentCategories) {
//       matchesConfig =
//         config.allowedParentCategories.includes(taxonomy.category) ||
//         config.allowedParentCategories.includes(taxonomy.subCategory)
//     }

//     // D. Search Match (Optional: Matches title/category if you use this for search bar)
//     const matchesSearch =
//       title?.toLowerCase().includes(searchTerm) || taxonomy.category?.toLowerCase().includes(searchTerm)
//     console.log('Matches =', searchTerm)

//     // Return true if any condition matches (Using OR logic for navigation/search)
//     return matchesRoom || matchesCategory || matchesSubCategory || matchesConfig || matchesSearch
//   })
// }
