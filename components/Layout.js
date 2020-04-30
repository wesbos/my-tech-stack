import Header from './Header';
import Footer from './Footer'
import Head from './Head';
// This is a small example of how to implement css modules in Next.
// I will probably use Tailwind for my styling but it's worth mentioning.
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';


const Layout = ({ children, home, title }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head titleTag={title} />
      <Header isHome={home} styles={styles} utilStyles={utilStyles} />
      <article className='flex-1 m-12'>
        {children}
      </article>
      <div className='flex justify-center'>
      <Footer/>
      </div>
    </div>
  )
};

export default Layout;
