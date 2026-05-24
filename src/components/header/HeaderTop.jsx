import { Link } from 'react-router-dom'
import { primaryNavLinks, utilityNavLinks } from '@/Config/navigation'

const HeaderTop = () => {
  return (
    <nav
      className='hidden lg:flex w-full justify-between items-center bg-[#f9f8f2] py-2 text-sm px-8'
      aria-label='Top header navigation'
    >
      {/* Center Links */}
      <ul className='flex items-center divide-x divide-gray-300'>
        {primaryNavLinks.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.id} className='cursor-pointer text-[#334443] hover:text-[#e74c3c] px-4'>
              <Link to={item.path} className='flex items-center gap-1'>
                {Icon && <Icon className='w-4 h-4' />}
                <span>{item.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Right Links */}
      <ul className='flex items-center divide-x divide-gray-300'>
        {utilityNavLinks.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.id} className='px-3 cursor-pointer text-[#334443] hover:text-[#e74c3c]'>
              <Link to={item.path} className='flex items-center gap-1'>
                {Icon && <Icon className='w-4 h-4' />}
                <span>{item.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default HeaderTop
