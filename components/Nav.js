import Link from 'next/link';

const Nav = props => {
  return (
    <nav className='mb-8 flex top-0 left-0 relative items-center justify-center flex-wrap p-6'>
      <div>
        <Link href='/'>
          <a className='absolute top-0 left-0 order-first ml-12'>
          <img
              src="/images/headerLogo-white.gif"
              className='rounded-full w-20 h-20'
              alt={props.name}
              />
          </a>
        </Link>
      </div>
      <Link href="/">
        <a id="home" className='content-around mr-8'>Home</a>
      </Link>
      <Link href="/about">
        <a className='content-around mr-8'>About</a>
      </Link>
      <Link href="/blog">
        <a className='content-around mr-8'>Blog</a>
      </Link>
      <Link href="/contact-me">
        <a className='content-around mr-8'>Let's Connect </a>
      </Link>
    </nav>
  )
}

export default Nav