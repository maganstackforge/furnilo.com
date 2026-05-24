export const buildTaxonomy = (products) => {
  const taxonomy = {
    room: {},
    category: {},
    parentCategory: {},
    subCategory: {},
  }

  products.forEach((product) => {
    const t = product.taxonomy

    // ROOM (array)
    t.room.forEach((room) => {
      taxonomy.room[room] ||= []
      taxonomy.room[room].push(product)
    })

    // CATEGORY
    taxonomy.category[t.category] ||= []
    taxonomy.category[t.category].push(product)

    // PARENT CATEGORY
    taxonomy.parentCategory[t.parentCategory] ||= []
    taxonomy.parentCategory[t.parentCategory].push(product)

    // SUB CATEGORY
    taxonomy.subCategory[t.subCategory] ||= []
    taxonomy.subCategory[t.subCategory].push(product)
  })

  return taxonomy
}
