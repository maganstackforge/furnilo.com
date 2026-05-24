import { Link } from 'react-router-dom'
import { mainNavIcons } from '@/Config/navigation'

const HeaderActionDesktop = () => {
  return (
    <nav aria-label='User actions'>
      <ul className='w-full flex items-center gap-4 justify-center pr-4 md:pr-8'>
        {mainNavIcons.slice(1, 4).map((item) => {
          const Icon = item.icon
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                aria-label={item.type}
                className='group relative flex flex-col items-center gap-1 text-[#334443] hover:text-[#e74c3c]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e74c3c] rounded-md'
              >
                {/* Icon */}
                <Icon className='w-6 h-6' />
                <div className='flex items-center'>
                  {/* Label */}
                  <span className='text-sm'>{item.type}</span>
                  {/* Badge for cart & wishlist */}
                  {(item.type === 'Cart' || item.type === 'Wishlist') && (
                    <span aria-live='true' className='text-xs px-1 rounded-full'>
                      (10)
                    </span>
                  )}
                </div>

                <span
                  aria-hidden='true'
                  className='absolute -bottom-1 left-0 w-full h-0.5 bg-[#e74c3c] scale-x-0
                    group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-200'
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default HeaderActionDesktop
