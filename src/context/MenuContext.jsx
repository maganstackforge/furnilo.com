// MenuContext.jsx
import { createContext, useContext, useState } from 'react'

const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMainMenuId, setActiveMainMenuId] = useState(null)
  const [activeSubCategoryId, setActiveSubCategoryId] = useState(null)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const openMenu = () => setIsMenuOpen(true)
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

  const switchSubCategory = (id) => {
    setActiveSubCategoryId(id)
    setIsSubMenuOpen(true)
  }

  const closeSubMenu = () => setIsSubMenuOpen(false)

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        activeMainMenuId,
        activeSubCategoryId,
        isSubMenuOpen,
        width,
        setWidth,
        openMenu,
        closeMenu,
        openMainMenu,
        switchSubCategory,
        closeSubMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => useContext(MenuContext)
