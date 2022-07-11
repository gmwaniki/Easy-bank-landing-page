import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <>
      <section className=' pb-24 sm:pb-0 bg-CustomVeryLightGray  sm:overflow-hidden '>
        <div className='container mx-auto sm:px-4 grid grid-cols-1 grid-rows-[auto_auto] sm:grid-cols-[1fr_2fr] sm:grid-rows-1'>
          <div className='text-center px-4 sm:self-center sm:text-left sm:px-0'>
            <h1 className='text-4xl text-CustomDarkBlue lg:text-5xl'>
              Next generation digital banking
            </h1>
            <p className='mt-7 text-CustomGrayishBlue '>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button className='mt-7 text-CustomWhite font-semibold bg-gradient py-2 px-6 rounded-full hover:opacity-80'>
              Request Invite
            </button>
          </div>
          <div className='row-start-1 row-end-2  sm:row-start-auto sm:row-end-auto  sm:relative'>
            <div className='sm:hidden relative w-full h-[25rem]'>
              <Image
                src='/images/bg-intro-mobile.svg'
                alt=''
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='hidden sm:block relative -right-[26rem] -top-[4.5rem] overflow-hidden scale-150 w-full h-[40rem]'>
              <Image
                src='/images/bg-intro-desktop.svg'
                alt=''
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
          <div
            className='absolute -z-0 -top-36 left-1/2 -translate-x-1/2 w-11/12 pointer-events-none   h-[36rem] sm:z-0 sm:-right-28 sm:grid sm:grid-cols-2  sm:translate-x-0 sm:h-[50rem]
           sm:w-full sm:left-[35%] sm:-top-20
          '
          >
            <div></div>
            <Image
              src='/images/image-mockups.png'
              alt='Screen shots of easy bankig app showing the splash screen and account page'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
      </section>
      <section className='text-center pb-24 pt-24 bg-CustomLightGrayishBlue sm:text-left '>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl text-CustomDarkBlue'>Why choose Easybank?</h2>
          <p className='text-CustomGrayishBlue mt-6 pb-8 max-w-sm mx-auto sm:mx-0 sm:max-w-xl'>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
          <div className='sm:grid sm:grid-cols-2 sm:gap-20 lg:grid-cols-4'>
            <div className='pt-8'>
              <Image
                src='/images/icon-online.svg'
                alt=''
                width={'72px'}
                height={'72px'}
              />
              <h3 className='text-2xl text-CustomDarkBlue mt-4'>
                Online Banking
              </h3>
              <p className='text-CustomGrayishBlue mt-6 max-w-sm mx-auto '>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div className='pt-8'>
              <Image
                src='/images/icon-budgeting.svg'
                alt=''
                width={'72px'}
                height={'72px'}
              />
              <h3 className='text-2xl text-CustomDarkBlue mt-4'>
                Simple Budgeting
              </h3>
              <p className='text-CustomGrayishBlue mt-6 max-w-sm mx-auto'>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
            <div className='pt-8'>
              <Image
                src='/images/icon-onboarding.svg'
                alt=''
                width={'72px'}
                height={'72px'}
              />
              <h3 className='text-2xl text-CustomDarkBlue mt-4'>
                Fast Onboarding
              </h3>
              <p className='text-CustomGrayishBlue mt-6 max-w-sm mx-auto'>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className='pt-8'>
              <Image
                src='/images/icon-api.svg'
                alt=''
                width={'72px'}
                height={'72px'}
              />
              <h3 className='text-2xl text-CustomDarkBlue mt-4'>Open API</h3>
              <p className='text-CustomGrayishBlue mt-6 max-w-sm mx-auto px-1'>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='text-center sm:text-left pt-24 bg-CustomVeryLightGray px-4 pb-24'>
        <div className='container mx-auto sm:px-4'>
          <h2 className='text-3xl text-CustomDarkBlue mb-8'>Latest Articles</h2>
          <div className='grid sm:grid-cols-2 sm:gap-7 lg:grid-cols-4'>
            <div className='bg-CustomWhite grid grid-rows-2'>
              <div className='relative'>
                <Image
                  src='/images/image-currency.jpg'
                  alt=''
                  className='rounded-t'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='container mx-auto px-7 pb-10 text-left'>
                <p className='text-CustomGrayishBlue text-xs pt-4 pb-2'>
                  By Claire Robinson
                </p>
                <Link href='/'>
                  <a className='text-CustomDarkBlue transition-colors hover:text-CustomLimeGreen'>
                    Receive money in any currency with no fees
                  </a>
                </Link>
                <p className='text-CustomGrayishBlue text-sm pt-4'>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>
            <div className='bg-CustomWhite mt-8 sm:mt-0 grid grid-rows-2'>
              <div className='relative'>
                <Image
                  src='/images/image-restaurant.jpg'
                  alt=''
                  layout='fill'
                  className='rounded-t'
                  objectFit='cover'
                />
              </div>
              <div className='container mx-auto px-7 pb-10 text-left'>
                <p className='text-CustomGrayishBlue text-xs pt-4 pb-2'>
                  By Wilson Hutton
                </p>
                <Link href='/'>
                  <a className='text-CustomDarkBlue transition-colors hover:text-CustomLimeGreen'>
                    Treat yourself without worrying about money
                  </a>
                </Link>
                <p className='text-CustomGrayishBlue text-sm pt-4'>
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>
            </div>
            <div className='bg-CustomWhite mt-8 sm:mt-0 grid grid-rows-2'>
              <div className='relative'>
                <Image
                  src='/images/image-plane.jpg'
                  alt=''
                  layout='fill'
                  className='rounded-t'
                  objectFit='cover'
                />
              </div>
              <div className='container mx-auto px-7 pb-10 text-left'>
                <p className='text-CustomGrayishBlue text-xs pt-4 pb-2'>
                  By Wilson Hutton
                </p>
                <Link href='/'>
                  <a className='text-CustomDarkBlue transition-colors hover:text-CustomLimeGreen'>
                    Take your Easybank card wherever you go
                  </a>
                </Link>
                <p className='text-CustomGrayishBlue text-sm pt-4'>
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                </p>
              </div>
            </div>
            <div className='bg-CustomWhite mt-8 sm:mt-0 grid grid-rows-2 h-full'>
              <div className='relative'>
                <Image
                  src='/images/image-confetti.jpg'
                  alt=''
                  layout='fill'
                  className='rounded-t'
                  objectFit='cover'
                />
              </div>
              <div className='container mx-auto px-7 pb-10 text-left'>
                <p className='text-CustomGrayishBlue text-xs pt-4 pb-2'>
                  By Claire Robinson
                </p>
                <Link href='/'>
                  <a className='text-CustomDarkBlue transition-colors hover:text-CustomLimeGreen'>
                    Our invite-only Beta accounts are now live!
                  </a>
                </Link>
                <p className='text-CustomGrayishBlue text-sm pt-4'>
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site …
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
