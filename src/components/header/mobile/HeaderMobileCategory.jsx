import Logo from '../Logo'
import { FiArrowRight } from 'react-icons/fi'
import Button from '@/components/ui/Button'
const HeaderMobileCategory = ({ onClose }) => {
  return (
    <div className='w-full flex bg-[#FFFFFF]'>
      <header
        className='w-full h-16 flex justify-between items-center relative z-50 shadow-md shadow-black/20'
      >
        <div className='flex justify-center items-center'>
          <Logo />
        </div>
        <div className='flex gap-1 items-center px-4'>
          <span className='text-sm md:text-base hover:text-[#e74c3c] px-1'>Login/Signup</span>

          <Button
            icon={FiArrowRight}
            iconPosition='right'
            onClick={onClose}
            className='text-2xl py-2 hover:text-[#e74c3c] font-bold text-[#222222]'
          />
        </div>
      </header>
    </div>
  )
}

export default HeaderMobileCategory
