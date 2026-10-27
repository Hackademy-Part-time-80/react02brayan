import { Link } from "react-router";

export default function Navbar() {
    return (
        <>
            <header className="navbar">
                <Link to={'/'}>MYSITE- REACT</Link>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/posts'}>Posts</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}