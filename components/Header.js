import Link from 'next/link';


const Header = props => {
  const name = 'Jacob Andrew Smith';
  const {isHome, styles, utilStyles } = props;
  const { navWrapper, navItems, headerHomeImage, headerImage, header } = styles;
  const { borderCircle, heading2Xl, headingLg, colorInherit } = utilStyles;
  return (
    <header>
      <nav className='flex items-center justify-center flex-wrap p-6'>
        <Link href='/'>
          <a className='hover:no-underline hover:bg-blue-700 hover:text-white rounded-sm mr-8 px-1 font-semibold text-xl tracking-tight border border-black border-8'>JS</a>
        </Link>
        <Link href="/">
          <a id="home" className='mr-8 hover:text-blue-800'>Home</a>
        </Link>
        <Link href="/about">
          <a className='mr-8'>About</a>
        </Link>
        <Link href="/blog">
          <a className='mr-8'>Blog</a>
        </Link>
        <Link href="/contact-me">
          <a className='mr-8'>Let's Connect </a>
        </Link>
      </nav>
      <span className='flex justify-center'>
        <Link href="/">
          <a className=''>
            <img
              src="/images/profile.jpg"
              className={isHome ? `${headerHomeImage} ${borderCircle}` : `${headerImage} ${borderCircle}`}
              alt={name}
              />
          </a>
        </Link>
      </span>
        <h1 className={isHome ? `${heading2Xl} ${colorInherit} text-center` : `${headingLg} ${colorInherit} text-center`}>{name}</h1>
    </header>
  )
}

export default Header;
