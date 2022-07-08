import Image from 'next/image';
import facebookLogo from '../images/icon-facebook.svg';
import youtubeIcon from '../images/icon-youtube.svg';
import twitterIcon from '../images/icon-twitter.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import instagramIcon from '../images/icon-instagram.svg';
import easybankLogo from '../images/logo.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div>
        <Image src={easybankLogo} alt='easybank logo' />
        <ul>
          <li>
            <Image src={facebookLogo} alt=''></Image>
          </li>
          <li>
            <Image src={youtubeIcon} alt=''></Image>
          </li>
          <li>
            <Image src={twitterIcon} alt=''></Image>
          </li>
          <li>
            <Image src={pinterestIcon} alt=''></Image>
          </li>
          <li>
            <Image src={instagramIcon} alt=''></Image>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li> About Us</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <button>Request Invite</button>
        <p>© Easybank. All Rights Reserved</p>
      </div>
      <div className='attribution'>
        Challenge by
        <Link
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
        >
          <a>Frontend Mentor</a>
        </Link>
        . Coded by <a href='#'>George Mwaniki</a>.
      </div>
    </footer>
  );
};
export default Footer;
