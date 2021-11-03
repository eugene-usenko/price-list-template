import { title, notes, items } from './data.json'
import { Footer } from './footer'
import { Header } from './header'
import { Menu } from './menu'

export const App = () => {
  // const className = [
  //   'flex-auto flex-auto',
  //   'bg-gray-50',
  //   'm-8 p-8',
  //   'shadow-lg rounded-lg  subpixel-antialiased'
  // ].join(' ')

  return (
    <div className={'min-h-screen  py-6 flex flex-col justify-center sm:py-12'}>
      <div className='relative sm:max-w-xl sm:mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 sm:rounded-3xl'></div>

        <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10'>
          <div className='max-w-md mx-auto'>
            <Header text={title} />
            <div className='border-b divide-y divide-gray-200'>
              <Menu items={items} />
            </div>
            <Footer text={notes} />
          </div>
        </div>
      </div>
    </div>
  )
}
