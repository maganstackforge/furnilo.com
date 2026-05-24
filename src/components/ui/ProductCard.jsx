import { FiStar, FiHeart } from 'react-icons/fi' // Icons ke liye

const ProductCard = ({ product }) => {
  const { title, pricing, media, status, taxonomy, brand } = product

  return (
    <div
      className='group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl
        transition-shadow duration-300'
    >
      {/* 1. Image Section */}
      <div className='relative aspect-[4/3] overflow-hidden bg-gray-50'>
        <img
          src={media.images.find((img) => img.isPrimary)?.url}
          alt={media.images[0].alt}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />

        {/* Wishlist Icon */}
        <button
          className='absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600
            hover:text-red-500 transition-colors'
        >
          <FiHeart size={18} />
        </button>

        {/* New Tag */}
        {status.tags.includes('New') && (
          <span
            className='absolute top-3 left-3 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded'
          >
            NEW
          </span>
        )}
      </div>

      {/* 2. Content Section */}
      <div className='p-4'>
        <p className='text-[10px] text-orange-600 font-semibold uppercase tracking-wider mb-1'>
          {brand} • {taxonomy.style}
        </p>

        <h3 className='text-sm font-medium text-gray-800 line-clamp-1 mb-2'>{title}</h3>

        {/* Rating */}
        <div className='flex items-center gap-1 mb-3'>
          <div className='flex items-center bg-green-700 text-white text-[10px] px-1.5 py-0.5 rounded'>
            <span className='font-bold'>{status.rating}</span>
            <FiStar className='ml-0.5 fill-current' size={8} />
          </div>
          <span className='text-[10px] text-gray-400'>({status.reviewCount} Reviews)</span>
        </div>

        {/* Pricing Section */}
        <div className='flex items-baseline gap-2'>
          <span className='text-lg font-bold text-gray-900'>
            ₹{pricing.sellingPrice.toLocaleString('en-IN')}
          </span>
          <span className='text-xs text-gray-400 line-through'>₹{pricing.mrp.toLocaleString('en-IN')}</span>
          <span className='text-xs text-green-600 font-medium'>{pricing.discount.value}% OFF</span>
        </div>

        {/* Summary Footer */}
        <div
          className='mt-3 pt-3 border-t border-dashed border-gray-100 flex justify-between items-center
            text-[10px] text-gray-500'
        >
          <span>{taxonomy.category.replace('-', ' ')}</span>
          <span className={status.availability === 'in_stock' ? 'text-green-600' : 'text-red-500'}>
            {status.availability === 'in_stock' ? '● In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
