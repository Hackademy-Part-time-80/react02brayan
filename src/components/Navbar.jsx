import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <nav>
          <Link to={'/'} className="navbar__title">MYSITE- REACT</Link>
          <ul className="navbar__menu">
            <li>
              <Link to={'/posts'} className="navbar__menu__links">Posts</Link>
            </li>
          </ul>
          <div className="navbar__auth">
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
          </div>
        </nav>

      </header>
    </>
  );
}