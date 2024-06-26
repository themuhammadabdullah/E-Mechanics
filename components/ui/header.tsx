import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link href="/">
             
                <div className="bg-blue-500 rounded-full p-2">
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-full cursor-pointer"
                    src={Logo}
                    width={60}
                    height={60}
                    alt="Logo"
                    style={{ filter: 'grayscale(100%)' }}
                  />
                </div>
              
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign-in links */}
            <ul className="flex grow justify-end flex-wrap items-center">

            {/* <li>
                <Link href={Card} className="btn-sm text-white bg-green-600 hover:bg-green-700 ml-3">
                  Cards
                </Link>
              </li> */}

              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-blue-800 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Signin
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Signup
                </Link>
              </li>
              
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  );
}
