import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

const Breadcrumbs = ({ category, collection, subCategory, productTitle }) => {
  // Helper function to check if an item is the last one in the list
  const isLast = (itemType) => {
    if (itemType === 'product' && productTitle) return true
    if (itemType === 'subCategory' && subCategory && !productTitle) return true
    if (itemType === 'collection' && collection && !subCategory && !productTitle) return true
    if (itemType === 'category' && category && !collection && !subCategory && !productTitle) return true
    return false
  }

  return (
    <nav
      className='flex items-center space-x-2 text-xs md:text-sm text-gray-500 py-4 px-4 md:px-6
        overflow-hidden'
    >
      {/* Home */}
      <Link to='/' className='hover:text-orange-600 transition-colors flex-shrink-0'>
        Home
      </Link>

      {/* Category */}
      {category && (
        <>
          <FiChevronRight className='flex-shrink-0' />
          {isLast('category') ? (
            <span className='text-orange-600 font-semibold capitalize'>{category.replace(/-/g, ' ')}</span>
          ) : (
            <Link to={`/category/${category}`} className='capitalize hover:text-orange-600'>
              {category.replace(/-/g, ' ')}
            </Link>
          )}
        </>
      )}

      {/* Collection */}
      {collection && (
        <>
          <FiChevronRight className='flex-shrink-0' />
          {isLast('collection') ? (
            <span className='text-orange-600 font-semibold capitalize'>{collection.label}</span>
          ) : (
            <Link
              to={`/category/${collection.category}/${collection.slug}`}
              className='capitalize hover:text-orange-600'
            >
              {collection.label}
            </Link>
          )}
        </>
      )}

      {/* SubCategory */}
      {subCategory && (
        <>
          <FiChevronRight className='flex-shrink-0' />
          {isLast('subCategory') ? (
            <span className='text-orange-600 font-semibold capitalize'>{subCategory.replace(/-/g, ' ')}</span>
          ) : (
            <Link to={`/category/${category}/${subCategory}`} className='capitalize hover:text-orange-600'>
              {subCategory.replace(/-/g, ' ')}
            </Link>
          )}
        </>
      )}

      {/* Product Title */}
      {productTitle && (
        <>
          <FiChevronRight className='flex-shrink-0' />
          <span className='font-semibold text-gray-800 truncate max-w-[150px] md:max-w-none'>
            {productTitle}
          </span>
        </>
      )}
    </nav>
  )
}

export default Breadcrumbs

// import { Link } from 'react-router-dom'
// import { FiChevronRight } from 'react-icons/fi' // Ek achha arrow icon

// const Breadcrumbs = ({ category, collection, subCategory, productTitle }) => {
//   return (
//     <nav className='flex items-center space-x-2 text-xs md:text-sm text-gray-500 py-4 px-4 md:px-6'>
//       {/* Home */}
//       <Link to='/' className='hover:text-orange-600'>
//         Home
//       </Link>

//       {/* Category */}
//       {category && (
//         <>
//           <FiChevronRight />
//           <Link to={`/${category}`} className='capitalize hover:text-orange-600'>
//             {category.replace('-', ' ')}
//           </Link>
//         </>
//       )}

//       {/* ✅ Collection (OBJECT SAFE) */}
//       {collection && (
//         <>
//           <FiChevronRight />
//           <Link
//             to={`/${collection.category}/${collection.slug}`}
//             className='capitalize hover:text-orange-600'
//           >
//             {collection.label}
//           </Link>
//         </>
//       )}

//       {/* SubCategory */}
//       {subCategory && (
//         <>
//           <FiChevronRight />
//           <span className='text-orange-600 capitalize font-medium'>{subCategory.replace('-', ' ')}</span>
//         </>
//       )}

//       {/* Product */}
//       {productTitle && (
//         <>
//           <FiChevronRight />
//           <span className='font-medium text-gray-800 truncate'>{productTitle}</span>
//         </>
//       )}
//     </nav>
//   )
// }

// export default Breadcrumbs
