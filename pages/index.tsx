import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';
import heroImage from '../images/image-mockups.png';

const Home: NextPage = () => {
  return (
    <Layout>
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
          <Image src={heroImage} alt='' />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
