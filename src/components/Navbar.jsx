import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { user, logout } = useContext(UserContext);
  return (
    <>
      <header className="navbar">
        <nav>
          <Link to={'/'} className="navbar__title">MYSITE- REACT</Link>
          <ul className="navbar__menu">
            {(user && (
              <>
                <li>
                  <Link to={'/posts'} className="navbar__menu__links">Posts</Link>
                </li>
                <li>
                  <Link to={'/users'} className="navbar__menu__links">Users and TODO</Link>
                </li>
              </>
            ))}
          </ul>
          <div className="navbar__auth">
            {(!user && (
              <>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
              </>
            )) || (
                <>
                  <a href="#">{user.name}</a>
                  <a onClick={logout}>Logout</a>
                </>

              )

            }

          </div>
        </nav>

      </header >
    </>
  );
}