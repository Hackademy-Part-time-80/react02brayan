import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";
import useScroll from "../hooks/useScroll";

export default function Navbar() {
  const { user, logout } = useContext(UserContext);
  const [scrolled, scrollY] = useScroll();

  const navbarClass = 'max-lg:collapse  lg:mb-48 shadow-sm w-full  sticky top-0';

  return (
    <>
      <div ref={scrolled} className={scrollY > 0 ? `${navbarClass} bg-neutral text-white` : `${navbarClass} bg-base-200 text-black`}>
        <input id="navbar-1-toggle  " className="peer hidden" type="checkbox" />
        <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <Link to={'/'} className="btn btn-ghost text-xl">daisyUI</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {(user && (
                <>
                  <li><Link to={'/posts'} >Posts</Link></li>
                  <li><Link to={'/users'} >Users and TODO</Link></li>
                </>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            {/* <input type="text" placeholder="Search" className="input w-64 lg:w-auto" /> */}
            <ul className="menu menu-horizontal px-1">
              {(!user && (
                <>
                  <li><Link to={'/login'}>Login</Link>  </li>
                  <li><Link to={'/register'}>Register</Link></li>
                </>
              )) || (
                  <>
                    <li><a href="#">{user.name}</a> </li>
                    <li> <a onClick={logout}>Logout</a></li>
                  </>
                )
              }
            </ul>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">
            <li><Link to={'/posts'} >Posts</Link></li>
            <li><Link to={'/users'} >Users and TODO</Link></li>
          </ul>
        </div>
      </div>


      {/* <header ref={scrolled} className={scrollY > 0 ? 'sticky top-0 h-17.5 bg-black text-white' : 'sticky top-0 h-17.5 bg-white text-black h'}>
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

      </header > */}
    </>
  );
}