import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";
import useScroll from "../hooks/useScroll";

export default function Navbar() {
  const { user, logout } = useContext(UserContext);
  const [scrolled, scrollY] = useScroll();

  return (
    <>
      <header ref={scrolled} className={scrollY > 0 ? 'sticky top-0 h-17.5 bg-black text-white' : 'sticky top-0 h-17.5 bg-white text-black h'}>
        <nav className="flex justify-between items-center p-[1.rem] my-0 mx-auto w-7/8 h-full">
          <Link to={'/'} className={scrollY > 0 ? 'text-2xl font-bold text-white' : 'text-2xl font-bold text-black'}>MYSITE- REACT</Link>
          <ul className="flex justify-around gap-4">
            {(user && (
              <>
                <li>
                  <Link to={'/posts'} className="text-[1.2rem] font-bold">Posts</Link>
                </li>
                <li>
                  <Link to={'/users'} className="text-[1.2rem] font-bold">Users and TODO</Link>
                </li>
              </>
            ))}
          </ul>
          <div className="flex justify-around gap-[1.2rem]">
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