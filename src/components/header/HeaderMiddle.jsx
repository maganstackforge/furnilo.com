import Logo from '@/components/header/Logo'
import Searchbar from '@/components/header/Searchbar'
import HeaderActionDesktop from '@/components/header/HeaderActionDesktop'
import HeaderActionMobile from '@/components/header/mobile/HeaderActionMobile'
import Button from '@/components/ui/Button'
import { FiMenu } from 'react-icons/fi'

const HeaderMiddle = ({ isDesktop, setIsOpen, isOpen }) => {
  return (
    <div className='w-full bg-white sticky top-0 z-50 py-2'>
      {/* ------------------- DESKTOP VIEW ------------------- */}
      {isDesktop ? (
        <div className='flex justify-between items-center'>
          <div className='w-1/5 flex items-center'>
            <Logo />
          </div>
          <div className='w-2/5'>
            <Searchbar />
          </div>
          <div className='w-1/5'>
            <HeaderActionDesktop />
          </div>
        </div>
      ) : (
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='w-full flex justify-between items-center px-6'>
            <div className='w-24'>
              <Logo />
            </div>
            <div className='w-24 flex justify-between gap-2 items-center'>
              <HeaderActionMobile />
              <Button
                icon={FiMenu}
                onClick={() => {
                  setIsOpen(!isOpen)
                }}
                className='text-2xl p-2 text-[#334443] hover:text-[#e74c3c] font-bold cursor-pointer'
              />
            </div>
          </div>
          <div className='w-4/5 px-4 my-4'>
            <Searchbar />
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderMiddle
