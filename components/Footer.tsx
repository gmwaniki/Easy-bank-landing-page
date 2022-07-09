import Image from 'next/image';
import facebookLogo from '../images/icon-facebook.svg';
import youtubeIcon from '../images/icon-youtube.svg';
import twitterIcon from '../images/icon-twitter.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import instagramIcon from '../images/icon-instagram.svg';
import easybankLogo from '../images/logo-dark.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className='bg-CustomDarkBlue text-CustomWhite text-center py-10 relative
      
    '
    >
      <div className='container mx-auto sm:px-4 sm:grid sm:grid-cols-[.5fr_.5fr_1fr] sm:justify-items-start'>
        <div>
          <Image src={easybankLogo} alt='easybank logo' />
          <ul
            className='py-4 grid grid-cols-[repeat(5,auto)] gap-4 items-center justify-center'
            aria-label='Social links'
          >
            <li>
              <Image src={facebookLogo} alt='facebook'></Image>
            </li>
            <li>
              <Image src={youtubeIcon} alt='Youtube'></Image>
            </li>
            <li>
              <Image src={twitterIcon} alt='Twitter'></Image>
            </li>
            <li>
              <Image src={pinterestIcon} alt='Pinterest'></Image>
            </li>
            <li>
              <Image src={instagramIcon} alt='Instagram'></Image>
            </li>
          </ul>
        </div>
        <div>
          <ul className='grid grid-flow-row gap-4 gap-x-10 sm:text-left sm:grid-cols-2'>
            <li> About Us</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='sm:justify-self-end'>
          <button className='mt-7 text-CustomWhite font-semibold bg-gradient py-2 px-6 rounded-full hover:opacity-80'>
            Request Invite
          </button>
          <p className='pt-7 text-CustomGrayishBlue'>
            © Easybank. All Rights Reserved
          </p>
        </div>
        <div className='mt-7 sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2'>
          <p>
            Challenge by
            <Link
              href='https://www.frontendmentor.io?ref=challenge'
              target='_blank'
            >
              <a>Frontend Mentor.</a>
            </Link>
            Coded by
            <Link href='https://github.com/g-nm'>
              <a className='text-sky-500'> George Mwaniki.</a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
