import NavList from '@/components/common/NavList'
import { mainNavIcons, primaryNavLinks, utilityNavLinks } from '@/Config/navigation'
import HeaderMobileCategory from '@/components/header/mobile/HeaderMobileCategory'
import SubMegaMenuMobile from './SubMegaMenuMobile'
import { uiData } from '@/Config/menu/uiData'

const HamburgerMenuPanel = ({
  isOpen,
  onClose,
  activeMainMenuId,
  activeSubCategoryId,
  isSubMenuOpen,
  openMainMenu,
  openSubMenu,
  switchSubCategory,
  closeSubMenu,
  isDesktop,
}) => {
  if (isDesktop) return null
  return (
    <nav
      aria-label='Mobile navigation'
      className={`fixed inset-y-0 right-0 z-50 w-full bg-white shadow-xl max-h-dvh overflow-y-auto
        overscroll-contain touch-pan-y transform-gpu will-change-transform transition-transform duration-500
        ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <HeaderMobileCategory onClose={onClose} />

      <nav className='lg:hidden'>
        <ul className='top-full left-0 w-full bg-[#f7f0f3] p-4 grid grid-cols-2 gap-4'>
          {uiData.map((category) => (
            <li
              key={category.id}
              className='bg-[#ffffff] rounded-xl p-3 shadow-md hover:shadow-lg transition'
              onClick={(e) => {
                e.stopPropagation()
                openMainMenu(category.id)
                openSubMenu()
              }}
            >
              {/* MAIN CATEGORY */}
              <div className='flex flex-col items-center gap-2'>
                <img
                  src={category.image}
                  alt={category.title}
                  loading='lazy'
                  className='sm:w-60 sm:h-40 object-contain rounded-xl'
                />
                <span className='text-sm font-semibold text-center'>{category.title}</span>
              </div>

              {/* VIEW OPTIONS BUTTON */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  openMainMenu(category.id)
                  openSubMenu()
                }}
                aria-expanded={activeMainMenuId === category.id && isSubMenuOpen}
                className='mt-2 w-full text-xs text-gray-500 hover:text-red-500'
              >
                View Options
              </button>

              {/* SUB MENU */}

              <SubMegaMenuMobile
                activeSubCategoryId={activeSubCategoryId}
                switchSubCategory={switchSubCategory}
                onClose={closeSubMenu}
                isSubMenuOpen={isSubMenuOpen}
                isDesktop={isDesktop}
              />
            </li>
          ))}
        </ul>
      </nav>
      <div className='w-full lg:hidden flex flex-col gap-2 bg-[#f7f0f3] p-4 pb-8'>
        <NavList links={primaryNavLinks} />
        <NavList links={utilityNavLinks} />
        <NavList links={mainNavIcons.filter((item) => item.type === 'Profile')} />
      </div>
    </nav>
  )
}

export default HamburgerMenuPanel
