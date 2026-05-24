import { Link } from 'react-router-dom'
import { mainNavIcons } from '@/Config/navigation'

const MobileViewMenu = () => {
  return (
    <div className='w-full flex items-center gap-2 justify-center'>
      {mainNavIcons
        .filter((item) => item.type === 'Wishlist' || item.type === 'Cart')
        .map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id}>
              <Link to={item.path} className='relative'>
                <Icon className='w-6 h-6 text-[#334443] hover:text-[#e74c3c] mx-auto' />
              </Link>
            </div>
          )
        })}
    </div>
  )
}

export default MobileViewMenu
