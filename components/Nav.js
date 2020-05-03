import React, { useState } from 'react';
import Link from 'next/link';


const Nav = props => {
  const [action, setNav] = useState(false);

  return (
    <nav className='mb-8 flex top-0 left-0 relative justify-end items-center minLg:justify-center p-6'>
      <div className='minLg:hidden'>
        <button className='px-3 py-2 flex' onClick={(e) => {
          setNav(!action);
          navManager(e, action);
        }}>
          <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Menu</title><path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'/></svg>
        </button>
      </div>
      <div>
        <Link href='/'>
          <a className='absolute top-0 left-0 order-first'>
          <img
              src='/images/headerLogo-white.gif'
              className='rounded-full w-20 h-20'
              alt={props.name}
              />
          </a>
        </Link>
      </div>
        <div className='nav-items maxLg:hidden flex'>
          <Link href='/'>
            <a id='home' 
              onClick={(e) => {
                setNav(!action);
                navManager(e, action);
              }} 
              className='nav-link minLg:content-around mr-8'>Home</a>
          </Link>
          <Link href='/blog'>
            <a 
              id='blog' 
              onClick={(e) => {
                setNav(!action);
                navManager(e, action);
              }}
              className='nav-link minLg:content-around mr-8'>Blog</a>
          </Link>
          <Link href='/contact-me'>
            <a 
              id='contact-me' 
              onClick={(e) => {
                setNav(!action);
                navManager(e, action);
              }} 
              className='nav-link minLg:content-around mr-8'>Let's Connect </a>
          </Link>
        </div>
    </nav>
  )
}

const navManager = (e, action) => {
  e.persist();
  console.log(e.target.id);
  
  let navContainer = document.getElementsByClassName('nav-items');
  let navLinks = document.getElementsByClassName('nav-link');
    if (action) {
      navContainer[0].classList.remove('maxLg:hidden');
      navContainer[0].classList.add('flex-col');
      navLinks[0].classList.add('flex-col') // home
      navLinks[1].classList.add('flex-col') // blog
      navLinks[2].classList.add('flex-col'); // contact-me
    } else {
      navContainer[0].classList.add('maxLg:hidden');
      navContainer[0].classList.remove('flex-col');
      navLinks[0].classList.remove('flex-col') // home
      navLinks[1].classList.remove('flex-col') // blog
      navLinks[2].classList.remove('flex-col'); // contact-me
  }

}

export default Nav