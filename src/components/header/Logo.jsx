import { Link } from 'react-router-dom'
import FurniloLogo from '@/assets/images/Logo/prime_1.png'

const Logo = () => {
  return (
    <Link to='/' aria-label='Go to home page' className='w-full text-xl text-gray-800'>
      <img src={FurniloLogo} alt='Furnilo Logo' className='w-40 md:w-60 h-12 md:h-16 object-contain' />
    </Link>
  )
}

export default Logo
