export const adaptProductForCard = (product) => ({
  id: product.id,
  title: product.title,
  price: product.pricing?.sellingPrice ?? product.pricing?.mrp,
  image: product.media?.images?.find((img) => img.isPrimary)?.url,
  rating: product.status?.rating,
  slug: product.slug,
})
