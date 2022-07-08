import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';
import heroImage from '../images/image-mockups.png';
import onlineBankingIcon from '../images/icon-online.svg';
import budgetingIcon from '../images/icon-budgeting.svg';
import onboardingIcon from '../images/icon-onboarding.svg';
import apiIcon from '../images/icon-api.svg';
import currencyImg from '../images/image-currency.jpg';
import restaurantImg from '../images/image-restaurant.jpg';
import planeImg from '../images/image-plane.jpg';
import confettiImg from '../images/image-confetti.jpg';

const Home: NextPage = () => {
  return (
    <>
      <section>
        <div>
          <h1 className='text-teal-500'> Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button>Request Invite</button>
        </div>
        <div>
          <Image
            src={heroImage}
            alt='Screen shots of easy bankig app showing the splash screen and account page'
            priority
          />
        </div>
      </section>
      <section>
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div>
          <div>
            <Image src={onlineBankingIcon} alt='' />
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div>
            <Image src={budgetingIcon} alt='' />
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div>
            <Image src={onboardingIcon} alt='' />
            <h3>Fast Onboarding</h3>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div>
            <Image src={apiIcon} alt='' />
            <h3>Open API</h3>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Latest Articles</h2>
        <div>
          <div>
            <Image src={currencyImg} alt='' loading='lazy' placeholder='blur' />
            <p>By Claire Robinson</p>
            <h3>Receive money in any currency with no fees</h3>
            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
          <div>
            <Image
              src={restaurantImg}
              alt=''
              loading='lazy'
              placeholder='blur'
            />
            <p>By Wilson Hutton</p>
            <h3>Treat yourself without worrying about money</h3>
            <p>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
          <div>
            <Image src={planeImg} alt='' loading='lazy' placeholder='blur' />
            <p>By Wilson Hutton</p>
            <h3>Take your Easybank card wherever you go</h3>
            <p>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
          <div>
            <Image src={confettiImg} alt='' loading='lazy' placeholder='blur' />
            <p>By Claire Robinson</p>
            <h3>Our invite-only Beta accounts are now live!</h3>
            <p>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
