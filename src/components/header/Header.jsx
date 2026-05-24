import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import HeaderTop from '@/components/header/HeaderTop'
import HeaderMiddle from '@/components/header/HeaderMiddle'
import MegaMenuDesktop from '@/components/header/desktop/MegaMenuDesktop'
import HamburgerMenuPanel from '@/components/header/mobile/HamburgerMenuPanel'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMainMenuId, setActiveMainMenuId] = useState(null)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [activeSubCategoryId, setActiveSubCategoryId] = useState(null)
  const [width, setWidth] = useState(window.innerWidth)

  const location = useLocation()
  const openMenu = () => setIsMenuOpen(true)
  /* ---------------- handlers ---------------- */

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveMainMenuId(null)
    setActiveSubCategoryId(null)
    setIsSubMenuOpen(false)
  }

  const openMainMenu = (id) => {
    setActiveMainMenuId(id)
    setActiveSubCategoryId(id)
    setIsSubMenuOpen(false)
  }
  const openSubMenu = () => setIsSubMenuOpen(true)

  const switchSubCategory = (id) => {
    setActiveSubCategoryId(id)
    setIsSubMenuOpen(true) // ye important hai
  }

  const closeSubMenu = () => {
    setIsSubMenuOpen(false)
  }

  /* ---------------- effects ---------------- */
  useEffect(() => {
    if (isMenuOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  useEffect(() => {
    isSubMenuOpen
  }, [isSubMenuOpen])

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const isDesktop = width >= 1024
  useEffect(() => {
    if (isDesktop) {
      closeSubMenu()
      closeMenu()
    }
  }, [isDesktop])
  /* ---------------- render ---------------- */

  return (
    <header className='w-full shadow-md relative'>
      <HeaderTop />

      <HeaderMiddle
        isDesktop={isDesktop}
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />

      <HamburgerMenuPanel
        isOpen={isMenuOpen}
        onClose={closeMenu}
        activeMainMenuId={activeMainMenuId}
        activeSubCategoryId={activeSubCategoryId}
        isSubMenuOpen={isSubMenuOpen}
        openMainMenu={openMainMenu}
        openSubMenu={openSubMenu}
        switchSubCategory={switchSubCategory}
        closeSubMenu={closeSubMenu}
        isDesktop={isDesktop}
      />

      <nav className='w-full'>
        <MegaMenuDesktop />
      </nav>
    </header>
  )
}

export default Header
