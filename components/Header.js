import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    {/* Add props at the <a> level and not Link component*/}
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>Blog </a>
    </Link>
    <Link href="/contact-me">
      <a style={linkStyle}>Let's Connect </a>
    </Link>
  </div>
);

export default Header;
