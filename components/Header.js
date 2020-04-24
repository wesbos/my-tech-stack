import Link from 'next/link';


const Header = props => {
  const name = 'Jacob Andrew Smith';
  const {isHome, styles, utilStyles } = props;
  const { navWrapper, navItems, headerHomeImage, headerImage, header } = styles;
  const { borderCircle, heading2Xl, headingLg, colorInherit } = utilStyles;
  return (
    <div className={header}>
      <nav className={navWrapper}>
        <Link href="/">
          <a id="home" className={navItems}>Home</a>
        </Link>
        <Link href="/about">
          <a className={navItems}>About</a>
        </Link>
        <Link href="/blog">
          <a className={navItems}>Blog</a>
        </Link>
        <Link href="/contact-me">
          <a className={navItems}>Let's Connect </a>
        </Link>
      </nav>
      <Link href="/">
        <a>
        <img
          src="/images/profile.jpg"
          className={isHome ? `${headerHomeImage} ${borderCircle}` : `${headerImage} ${borderCircle}`}
          alt={name}
          />
        </a>
      </Link>
      <h1 className={isHome ? `${heading2Xl} ${colorInherit}` : `${headingLg} ${colorInherit}`}>{name}</h1>
    </div>
  )
}

export default Header;
