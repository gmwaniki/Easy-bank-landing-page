import Image from 'next/image';
import Link from 'next/link';
import logo from '../images/logo.svg';
import hamburgerIcon from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close.svg';
import React, { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    setShowMenu(!showMenu);
  };
  return (
    <header className='bg-CustomWhite sticky top-0 z-10 py-6 sm:py-0  '>
      <div className='container mx-auto px-4 grid grid-cols-2 gap-4 items-center  sm:grid-cols-[auto,1fr,auto]  '>
        <Link href='/'>
          <a className='flex items-center'>
            <Image src={logo} alt='easybank logo' priority></Image>
          </a>
        </Link>
        <nav
          id='navigation'
          className={` ${
            showMenu
              ? 'block absolute  top-[4.25rem] w-screen left-0 h-[100vh]  bg-gradient-to-b from-CustomDarkBlueTrans to-CustomWhiteTrans overscroll-contain sm:bg-none sm:static sm:h-auto sm:w-auto'
              : 'hidden'
          } sm:block text-GrayishBlue sm:justify-self-center`}
        >
          <ul
            role='list'
            className='bg-CustomWhite text-CustomGrayishBlue w-5/6 mx-auto text-center rounded relative top-5 py-8 grid gap-4 sm:grid-flow-col sm:gap-4 sm:static sm:py-0 sm:max-w-xl'
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
          className='sm:hidden place-self-end flex justify-center items-center'
          onClick={handleClick}
        >
          {showMenu ? (
            <Image src={closeIcon} alt='close Icon' />
          ) : (
            <Image src={hamburgerIcon} alt='Menu Icon' />
          )}
        </button>
      </div>
    </header>
  );
};
export default Navbar;
