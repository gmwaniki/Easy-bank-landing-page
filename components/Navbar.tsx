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
    <header>
      <Link href='/'>
        <a>
          <Image src={logo} alt=''></Image>
        </a>
      </Link>
      <nav id='navigation'>
        <ul role='list'>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Careers</a>
            </Link>
          </li>
        </ul>
      </nav>
      <button className='hidden sm:inline-block'>Request Invite</button>
      <button className='sm:hidden' onClick={handleClick}>
        {showMenu ? (
          <Image src={closeIcon} alt='' />
        ) : (
          <Image src={hamburgerIcon} alt='' />
        )}
      </button>
    </header>
  );
};
export default Navbar;
