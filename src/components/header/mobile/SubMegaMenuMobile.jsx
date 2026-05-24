import React from 'react'
import HeaderMobileCategory from './HeaderMobileCategory'
import { MdChevronRight } from 'react-icons/md'
import Button from '@/components/ui/Button'
import Model from '@/components/ui/Modal'
import { uiData } from '@/Config/menu/uiData'
import { categoryIcons } from '@/icons/categoryIcons'
import { Link } from 'react-router-dom'

const SubMegaMenuMobile = ({ activeSubCategoryId, switchSubCategory, onClose, isSubMenuOpen, isDesktop }) => {
  const activeItem = uiData.find((category) => category.id === activeSubCategoryId)
  const categoryTitle = uiData.find((category) => category.id === activeSubCategoryId)?.title

  if (isDesktop) return null
  return (
    <Model isOpen={isSubMenuOpen} onClose={onClose}>
      {/* HEADER (NON-SCROLL) */}
      <div className='shrink-0 sticky top-0 bg-white z-10'>
        <HeaderMobileCategory onClose={onClose} />
      </div>

      {/* BODY (SCROLL AREA) */}
      <div className='flex flex-1 overflow-hidden'>
        {/* LEFT */}
        <div className='w-1/4 bg-[#EEEEEE] overflow-y-auto'>
          {uiData.map((category) => {
            const Icon = categoryIcons[category.iconKey]

            return (
              <button key={category.id} onClick={() => switchSubCategory(category.id)} className='w-full'>
                <div
                  className={`flex flex-col items-center py-4 gap-1
                  ${activeSubCategoryId === category.id ? 'bg-white text-red-500' : ''}`}
                >
                  <span className='bg-white shadow-md rounded-xl px-2 sm:px-6 py-2'>
                    <Icon className='w-12 sm:w-16 h-12 sm:h-16 text-amber-800' />
                  </span>
                  <span className='text-xs text-center'>{category.title}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* RIGHT */}
        <div className='w-3/4 p-2 sm:p-3 overflow-y-auto'>
          <div className='w-full bg-[#dddddd] p-2 sm:p-4 rounded-sm mb-4'>
            <div className='flex justify-between items-center mb-4'>
              <h4 className='font-semibold pl-2'>{categoryTitle}</h4>

              {/* BACK BUTTON — NOW WORKING */}
              <Button icon={MdChevronRight} iconPosition='right' onClick={onClose} className='text-3xl' />
            </div>
            <div className='w-full'>
              <ul className='grid grid-cols-3 gap-2 sm:gap-4'>
                {activeItem?.mobile?.topGrid?.map((topLink) => {
                  return (
                    <li key={topLink.id} className='text-xs h-24 sm:h-40 p-1 md:h-40'>
                      <Link
                        to={topLink.path}
                        className='flex flex-col items-center gap-1 h-full text-center text-gray-600
                          hover:text-red-500 transition'
                      >
                        <img
                          src={topLink.image}
                          alt={topLink.title}
                          className='w-full h-14 md:h-20 object-cover rounded'
                        />
                        <span className='p-1'>{topLink.title}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className='w-full'>
            {activeItem?.desktop?.columns?.map((column, idx) => {
              return (
                <div key={idx} className='mb-6'>
                  <h4 className='font-semibold mb-2'>{column.title}</h4>

                  <ul className='grid grid-cols-3 gap-4'>
                    {column.items &&
                      column?.items?.map((link) => {
                        return (
                          <li key={link.id} className='text-xs h-24 sm:h-40 p-1 md:h-40'>
                            <Link
                              to={link.path}
                              className='flex flex-col items-center gap-1 h-full text-center text-gray-600
                                hover:text-red-500 transition'
                            >
                              <img
                                src={link.image}
                                alt={link.title}
                                className='w-full h-14 md:h-20 object-cover rounded'
                              />
                              <span className='p-1'>{link.title}</span>
                            </Link>
                          </li>
                        )
                      })}
                  </ul>
                  <div className='w-full'>
                    {column.groups &&
                      column?.groups?.map((group, idy) => {
                        return (
                          <React.Fragment key={idy}>
                            <h1 className='font-semibold'>{group.title}</h1>

                            <ul className='grid grid-cols-3 gap-4'>
                              {group.items.map((item) => {
                                return (
                                  <li key={item.id} className='text-xs h-32 sm:h-40 p-1 md:h-40'>
                                    <Link
                                      to={item.path}
                                      className='flex flex-col items-center gap-1 h-full text-center
                                        text-gray-600 hover:text-red-500 transition'
                                    >
                                      <img
                                        src={item.image}
                                        alt={item.title}
                                        className='w-full h-14 md:h-20 object-cover rounded'
                                      />
                                      <span className='p-1'>{item.title}</span>
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          </React.Fragment>
                        )
                      })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Model>
  )
}

export default SubMegaMenuMobile
