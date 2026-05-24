import { Link } from 'react-router-dom'
import { uiCategoryNavigation } from '@/data/home/uiCategoryNavigation'
import Button from '@/components/ui/Button'
import { FiGrid } from 'react-icons/fi'
import { useState } from 'react'

const CategoryGrid = ({ setIsOpen, isOpen }) => {
  const [activeTab, setActiveTab] = useState('all')

  const selectedCategory = uiCategoryNavigation.find((cat) => cat.id === activeTab)

  return (
    <section className='w-full flex flex-col justify-center items-center mt-10 pb-10'>
      <h1 className='font-bold py-2 text-2xl text-gray-950 uppercase text-center'>Shop By Categories</h1>

      <nav className='w-full flex items-center justify-between md:justify-center px-4'>
        <ul
          className='flex justify-start md:justify-center md:items-center gap-1 lg:gap-4 py-6 overflow-x-auto
            scrollbar-hide whitespace-nowrap'
        >
          {uiCategoryNavigation.map((category) => (
            <li
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`group relative md:shadow-md rounded-4xl py-1 px-3 md:px-5 capitalize cursor-pointer
              transition-all duration-300 ${
                activeTab === category.id
                  ? 'text-orange-600 md:outline-orange-600 md:outline-1 font-medium'
                  : 'text-gray-500 hover:text-gray-800 md:outline-gray-200 md:outline-1'
              }`}
            >
              {category.title}
              <div
                className={`absolute md:hidden bottom-0 left-0 w-full h-0.5 bg-orange-600 transition-transform
                origin-left duration-300 ${activeTab === category.id ? 'scale-x-100' : 'scale-x-0'}`}
              />
            </li>
          ))}
        </ul>

        <Button
          icon={FiGrid}
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-xl p-2 text-[#334443] hover:text-orange-600 font-bold cursor-pointer
            transition-colors'
        />
      </nav>

      {/* Products Category Grid */}
      <div
        className='grid grid-rows-2 grid-flow-col auto-cols-40 gap-4 px-6 pb-6 overflow-x-auto scrollbar-hide
          w-full md:grid-rows-none md:grid-flow-row md:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]'
      >
        {selectedCategory?.gridItems.map((item) => (
          <Link
            key={`${activeTab}-${item.id}`} // Unique key logic
            to={`/${item.slug}`}
            className='w-36 md:w-full group flex flex-col bg-white rounded-lg overflow-hidden transition-all'
          >
            <div
              className='relative aspect-square w-full overflow-hidden bg-gray-100 rounded-t-2xl border
                border-gray-100'
            >
              <img
                src={item.img}
                alt={item.title}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110
                  will-change-transform'
                loading='lazy'
                decoding='async'
              />
            </div>

            <div className='p-3 flex justify-center items-center w-full text-center'>
              <h2
                className='text-xs md:text-sm text-gray-700 transition-colors uppercase tracking-tight
                  line-clamp-2 leading-tight'
              >
                {item.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryGrid
