import { useParams } from 'react-router-dom'
import { categoryConfig } from '@/data/categoryConfig'
import { useProducts } from '@/context/ProductContext'
import UIBreadcrumbs from '@/components/ui/UIBreadcrumbs'
import ProductCard from '@/components/ui/ProductCard'
import { Helmet } from 'react-helmet-async'
import { getBreadcrumbs } from '@/utils/getBreadcrumbs'
import { getFilteredProductsByTaxonomy } from '@/utils/getFilteredProductsByTaxonomy'
import { useState } from 'react'

const ProductListingPage = () => {
  const { currentSlug } = useParams()
  // Get current collection object from COLLECTIONS
  const currentCollection = categoryConfig[currentSlug]

  // IMPORTANT: first we check that collection are exist or not.
  if (!currentCollection) {
    return <div className='py-20 text-center text-gray-500'>Collection not found</div>
  }
  console.log(currentCollection)
  console.log(currentSlug)
  console.log(categoryConfig)

  const { products } = useProducts()

  // const filteredProducts = taxonomy.category?.[slug] || []
  const filteredProducts = getFilteredProductsByTaxonomy(products, currentCollection.slug, categoryConfig)

  // 1. Breadcrumb Data generate karo
  const crumbs = getBreadcrumbs(currentSlug)
  const [isExpanded, setIsExpanded] = useState(false)
  const shortText = currentCollection.longDescription.substring(0, 150) + '...'
  if (!currentCollection) return <div>Collection not found</div>
  return (
    <div className='w-full'>
      {/* 2. SEO (Title & Description) */}
      <Helmet>
        <title>{currentCollection.seo.title}</title>
        <meta name='description' content={currentCollection.seo.description} />
      </Helmet>

      {/* 3. Breadcrumbs UI */}
      <UIBreadcrumbs crumbs={crumbs} />

      <div className='px-4 md:px-6'>
        <div className='flex flex-col justify-center items-center m-2'>
          <h1 className='text-2xl md:text-3xl capitalize text-gray-800'>{currentCollection.label}</h1>
          <p className='text-sm text-gray-500 font-medium'>({filteredProducts.length} Products)</p>
        </div>
        <div className='mb-12 text-gray-600 text-sm flex justify-center items-center'>
          <p>
            {isExpanded ? currentCollection.longDescription : shortText}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className='text-orange-600 font-semibold ml-2 underline'
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </p>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className='py-20 text-center'>
            <img src='/empty-cart.png' alt='Empty' className='mx-auto w-32 mb-4 opacity-20' />
            <p className='text-gray-500'>Oops! No products are available in this category right now.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductListingPage
