import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    setShowMenu(!showMenu);
  };
  return (
    <header className='bg-CustomWhite sticky top-0 z-10 py-5 sm:py-0  '>
      <div className='container mx-auto px-4 grid grid-cols-2 justify-between items-center justify-items-start  sm:grid-cols-[auto,1fr,auto]  '>
        <Link href='/'>
          <a className='flex items-center'>
            <div className='relative h-5 w-36'>
              <Image
                src='/images/logo.svg'
                alt='easybank logo'
                priority
                layout='fill'
                objectFit='contain'
              />
            </div>
          </a>
        </Link>
        <nav
          id='navigation'
          className={`${
            showMenu
              ? 'block absolute  top-[4.25rem] w-screen left-0 h-[100vh]  bg-gradient-to-b from-CustomDarkBlueTrans to-CustomWhiteTrans overscroll-contain sm:bg-none sm:static sm:h-auto sm:w-auto'
              : 'hidden'
          } sm:block text-GrayishBlue sm:justify-self-center`}
        >
          <ul
            role='list'
            className='bg-CustomWhite text-CustomGrayishBlue w-11/12  mx-auto text-center rounded relative top-5 py-8 grid gap-4 sm:grid-flow-col md:gap-7 sm:static sm:py-0 sm:w-auto sm:max-w-xl'
          >
            <li className='sm:py-4 sm:relative sm:before:w-0 sm:before:transition-[width_color] sm:hover:text-black sm:hover:before:w-full sm:before:h-1 sm:before:bg-CustomLimeGreen sm:before:absolute sm:before:bottom-0 sm:before:left-0'>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li className='sm:py-4 sm:relative sm:before:w-0 sm:before:transition-[width_color] sm:hover:text-black sm:hover:before:w-full sm:before:h-1 sm:before:bg-CustomLimeGreen sm:before:absolute sm:before:bottom-0 sm:before:left-0'>
              <Link href='/'>
                <a>About</a>
              </Link>
            </li>
            <li className='sm:py-4 sm:relative sm:before:w-0 sm:before:transition-[width_color] sm:hover:text-black sm:hover:before:w-full sm:before:h-1 sm:before:bg-CustomLimeGreen sm:before:absolute sm:before:bottom-0 sm:before:left-0'>
              <Link href='/'>
                <a>Contact</a>
              </Link>
            </li>
            <li className='sm:py-4 sm:relative sm:before:w-0 sm:before:transition-[width_color] sm:hover:text-black sm:hover:before:w-full sm:before:h-1 sm:before:bg-CustomLimeGreen sm:before:absolute sm:before:bottom-0 sm:before:left-0'>
              <Link href='/'>
                <a>Blog</a>
              </Link>
            </li>
            <li className='sm:py-4 sm:relative sm:before:w-0 sm:before:transition-[width_color] sm:hover:text-black sm:hover:before:w-full sm:before:h-1 sm:before:bg-CustomLimeGreen sm:before:absolute sm:before:bottom-0 sm:before:left-0'>
              <Link href='/'>
                <a>Careers</a>
              </Link>
            </li>
          </ul>
        </nav>
        <button className='hidden sm:inline-block text-CustomWhite font-semibold bg-gradient py-2 px-4 rounded-full hover:opacity-80'>
          Request Invite
        </button>
        <button
          className='sm:hidden justify-self-end '
          onClick={handleClick}
          aria-label={`${showMenu ? 'Close menu' : 'Open menu'}`}
        >
          {showMenu ? (
            <div className='relative h-7 w-7'>
              <Image
                src='/images/icon-close.svg'
                alt='close Icon'
                layout='fill'
                objectFit='contain'
              />
            </div>
          ) : (
            <div className='relative h-7 w-7'>
              <Image
                src='/images/icon-hamburger.svg'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </div>
          )}
        </button>
      </div>
    </header>
  );
};
export default Navbar;
