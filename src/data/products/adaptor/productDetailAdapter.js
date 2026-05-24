export const adaptProductForDetail = (product) => ({
  title: product.title,
  price: product.pricing.sellingPrice,
  images: product.media.images,
  specs: product.specifications,
  description: product.description,
  rating: product.status.rating,
  reviews: product.status.reviewCount,
})
