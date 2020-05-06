import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Nav = props => {
  const [action, setNav] = useState(false);

  // remove class on nav-items when screen width is at 1023 or greater
  useEffect(() => {
    window.addEventListener('resize', desktopNav);
  });

  return (
    <nav className="mb-8 flex flex-col top-0 left-0 relative justify-end items-end minLg:items-center minLg:justify-center p-6">
      <button
        type="button"
        className={`hamburger hamburger--collapse minLg:hidden ${
          action ? `is-active` : ''
        }`}
        onClick={e => {
          setNav(!action);
          console.log({ action });
          // navManager(e, action);
        }}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      {/* </span> */}
      <div>
        <Link href="/">
          <a className="absolute top-0 left-0 order-first">
            <img
              src="/images/headerLogo-white.gif"
              className="rounded-full w-20 h-20"
              alt={props.name}
            />
          </a>
        </Link>
      </div>
      <div
        className={`nav-items flex ${
          action ? 'flex-col text-right' : 'maxLg:hidden'
        }`}
      >
        <Link href="/">
          <a
            id="home"
            onClick={e => {
              setNav(!action);
              navManager(e, action);
            }}
            className={`nav-link minLg:content-around ${action ? '' : 'mr-8'}`}
          >
            Home
          </a>
        </Link>
        <Link href="/blog">
          <a
            id="blog"
            onClick={e => {
              setNav(!action);
              // navManager(e, action);
            }}
            className={`nav-link minLg:content-around ${action ? '' : 'mr-8'}`}
          >
            Blog
          </a>
        </Link>
        <Link href="/contact-me">
          <a
            id="contact-me"
            onClick={e => {
              setNav(!action);
              navManager(e, action);
            }}
            className={`nav-link minLg:content-around ${action ? '' : 'mr-8'}`}
          >
            Let's Connect{' '}
          </a>
        </Link>
      </div>
    </nav>
  );
};
const desktopNav = () => {
  if (window.innerWidth >= 1023) {
    const hamburger = document.getElementsByClassName('hamburger')[0];
    const navContainer = document.getElementsByClassName('nav-items')[0];
    const navLinks = document.getElementsByClassName('nav-link');
    hamburger.classList.remove('is-active');
    navContainer.classList.add('maxLg:hidden');
    navContainer.classList.remove('flex-col');
    navContainer.classList.remove('text-right');
    navLinks[0].classList.add('mr-8'); // home
    navLinks[1].classList.add('mr-8'); // blog
    navLinks[2].classList.add('mr-8'); // contact-me
  }
};

export default Nav;
