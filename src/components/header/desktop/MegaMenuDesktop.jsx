import { Link } from 'react-router-dom'
import { useState } from 'react'
import { uiData } from '@/Config/menu/uiData'

const MegaMenuDesktop = () => {
  const [activeMenu, setActiveMenu] = useState(null)

  return (
    <div className='hidden lg:flex w-full h-10 justify-start items-center text-sm relative'>
      {uiData.map((category) => (
        <div
          key={category.id}
          className='h-full flex justify-center items-center mx-3 group'
          onMouseEnter={() => setActiveMenu(category.id)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {/* TITLE */}
          <button className='relative py-2 text-[#334443] group-hover:text-red-500 transition cursor-pointer'>
            {category.title}

            <span
              className='absolute left-0 bottom-1 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100
                transition-transform origin-left duration-300 z-50'
            />
          </button>

          {/* MEGA MENU */}
          {activeMenu === category.id && (
            <div
              className='absolute top-full mx-auto left-0 right-0 w-[98%] bg-white shadow-md shadow-black/40
                rounded-b-sm animate-[fadeIn_0.8s_ease] z-50'
            >
              <div className='max-w-full flex px-6'>
                {/* NAV COLUMNS */}
                <div className='w-3/4 col-span-3 grid grid-cols-3 gap-8'>
                  {category.desktop.columns.map((column, idx) => {
                    const bgClass = idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                    return (
                      <div key={idx} className={`${bgClass} p-4 rounded-lg`}>
                        {column.items && (
                          <ul className='space-y-2'>
                            {column.title && <h4 className='mb-3 text-gray-950'>{column.title}</h4>}
                            {column.items.map((item) => (
                              <li key={item.id}>
                                <Link to={item.path} className='text-gray-600 hover:text-red-500 transition'>
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {column.groups && (
                          <div className='space-y-4'>
                            {column.groups.map((group) => (
                              <div key={group.title}>
                                <h5 className='mb-2 text-gray-950'>{group.title}</h5>
                                <ul className='space-y-2'>
                                  {group.items.map((item) => (
                                    <li key={item.id}>
                                      <Link
                                        to={item.path}
                                        className='text-gray-600 hover:text-red-500 transition'
                                      >
                                        {item.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* PROMO */}
                <div className='w-1/4 py-4 flex items-center justify-center'>
                  {category.desktop.promo && (
                    <Link to={category.desktop.promo.path}>
                      <img
                        src={category.desktop.promo.image}
                        alt='promo'
                        loading='lazy'
                        className='rounded-lg w-full h-full object-cover hover:scale-105 transition-transform
                          duration-300'
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default MegaMenuDesktop
