import Link from 'next/link';

const Nav = props => {
  return (
    <nav className='mb-8 flex top-0 left-0 relative items-center justify-center flex-wrap p-6'>
      <div className="lg:hidden">
        <button className="flex px-3 py-2">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div>
        <Link href='/'>
          <a className='absolute top-0 left-0 order-first'>
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
        {/* <Link href="/about">
          <a className='content-around mr-8'>About</a>
        </Link> */}
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