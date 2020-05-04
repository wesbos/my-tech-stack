
import Nav from './Nav';



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




