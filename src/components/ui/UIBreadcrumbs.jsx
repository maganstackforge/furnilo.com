import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

const UIBreadcrumbs = ({ crumbs }) => {
  // Guard clause to prevent errors if crumbs is undefined
  if (!crumbs || crumbs.length === 0) return null

  return (
    <nav
      className='flex items-center text-xs md:text-sm py-4 px-4 md:px-6 overflow-hidden bg-white'
      aria-label='Breadcrumb'
    >
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1
        const shouldBeLink = !isLast || crumb.isHome || crumb.slug === '/'

        // Safety check for label
        const displayLabel = crumb.label ? crumb.label.replaceAll('-', ' ') : ''

        return (
          <div key={crumb.slug || index} className='flex items-center'>
            {shouldBeLink ? (
              <Link
                // Agar slug khud ek full path hai (starts with /), toh wahi use karein
                to={crumb.slug?.startsWith('/') ? crumb.slug : `/category/${crumb.slug}`}
                className='transition-colors capitalize whitespace-nowrap text-gray-500 hover:text-orange-600'
              >
                {displayLabel}
              </Link>
            ) : (
              <span
                className='transition-colors flex-shrink-0 capitalize truncate text-gray-800 font-medium'
                title={displayLabel}
              >
                {displayLabel}
              </span>
            )}

            {!isLast && (
              <FiChevronRight className='mx-2 text-gray-400 flex-shrink-0' size={14} aria-hidden='true' />
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default UIBreadcrumbs
