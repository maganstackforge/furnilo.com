import { Link } from 'react-router-dom'

const NavList = ({ links }) => (
  <ul className='flex flex-col gap-2 w-full'>
    {links.map((link) => {
      const Icon = link.icon
      return (
        <li
          key={link.id}
          className='w-full bg-white text-[#334434] hover:bg-[#ffffff] hover:text-[#e74c3c] shadow-md p-4
            rounded-t-2xl flex items-center'
        >
          <Link to={link.path} className='flex items-center gap-2'>
            <Icon className='w-12 h-8' />
            <span>{link.name}</span>
          </Link>
        </li>
      )
    })}
  </ul>
)

export default NavList
