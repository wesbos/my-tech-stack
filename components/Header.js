
import Nav from './Nav';


// closeNav = () => {
//   document.body.getElementsByClassName('overlay')[0].style.width = "0%";
//   document.body.getElementsByClassName('navIcon')[0].classList.remove('hide');
//   document.body.getElementsByClassName('navIcon')[1].classList.remove('hide');
// }

// openNav = () => {
//   document.body.getElementsByClassName('overlay')[0].style.height = "10%";
//   document.body.getElementsByClassName('navIcon')[0].classList.add('hide');
//   document.body.getElementsByClassName('navIcon')[1].classList.add('hide');
// }

const Header = () => {
  const name = 'Jacob Andrew Smith';
  return (
    <header>
      <Nav name={name}/>
    </header>
  )
}

export default Header

{/* <span className='flex justify-center'>
        <Link href="/">
          <a className=''>
            <img
              src="/images/profile.jpg"
              className={isHome ? `${headerHomeImage} ${borderCircle}` : `${headerImage} ${borderCircle}`}
              alt={name}
              />
          </a>
        </Link>
      </span> */}
{/* <h1 className={isHome ? `${heading2Xl} ${colorInherit} text-center` : `${headingLg} ${colorInherit} text-center`}>{name}</h1> */}




