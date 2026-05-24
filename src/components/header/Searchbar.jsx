import { mainNavIcons } from '@/Config/navigation'

const Searchbar = () => {
  return (
    <form role='search' aria-label='Site search' className='flex flex-1 justify-center'>
      {mainNavIcons
        .filter((item) => item.type === 'Search')
        .map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              className='w-full max-w-lg shadow-md rounded-full bg-gray-100 px-4 py-2 flex items-center'
            >
              <label htmlFor='site-search' className='sr-only'>
                Search products
              </label>

              <input
                id='site-search'
                type='search'
                placeholder='Search products...'
                className='w-full bg-transparent outline-none text-sm'
              />

              <button type='submit' aria-label='Search' className='ml-2'>
                <Icon className='w-6 h-6 text-[#334443]' />
              </button>
            </div>
          )
        })}
    </form>
  )
}

export default Searchbar
