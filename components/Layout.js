import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
// This is a small example of how to implement css modules in Next.
// I will probably use Tailwind for my styling but it's worth mentioning.
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';


const Layout = ({ children, home }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Welcome! ✋</title>
        <link/>
        <meta
          name='description'
          content='Tech Stack by Jacob Andrew Smith'
        />
        <meta
          property="og:image"
          // content image goes here
        />
        {/* <meta name="og:title" content={siteTitle} /> */}
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Header isHome={home} styles={styles} utilStyles={utilStyles} />
      <article className='flex-1 m-16'>
        {children}
      </article>
      <div className='flex justify-center'>
      <Footer/>
      </div>
    </div>
  )
};

export default Layout;
