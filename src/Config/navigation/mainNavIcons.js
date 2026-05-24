import { FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi'
export const mainNavIcons = [
  {
    id: 1,
    type: 'Search',
    icon: FiSearch,
    path: '/search',
  },
  {
    id: 2,
    type: 'Profile',
    name: 'My Account',
    icon: FiUser,
    path: '/profile',
  },
  {
    id: 3,
    type: 'Wishlist',
    icon: FiHeart,
    path: '/wishlist',
  },
  {
    id: 4,
    type: 'Cart',
    icon: FiShoppingCart,
    path: '/cart',
  },
]
