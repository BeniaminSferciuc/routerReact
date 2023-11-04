import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    const [isBurger, setIsBurger] = useState(true);

    const toggleMenu = () => {
        setIsBurger(!isBurger);
    };

    const closeMenu = () => {
        setIsBurger(true);
    };

    return (
        <header className="navBarHeader">
            <nav className="nav-bar">
                <Link to="/" className="logo">#VANLIFE</Link>
                <div className={`links-to ${!isBurger && "active"}`}>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "activeLink link" : "link"
                        }
                        onClick={closeMenu}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/host"
                        className={({ isActive }) =>
                            isActive ? "activeLink link" : "link"
                        }
                        onClick={closeMenu}
                    >
                        Host
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "activeLink link" : "link"
                        }
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/vans"
                        className={({ isActive }) =>
                            isActive ? "activeLink link" : "link"
                        }
                        onClick={closeMenu}
                    >
                        Vans
                    </NavLink>
                </div>
                {isBurger ? (
                    <HiOutlineMenuAlt4
                        onClick={toggleMenu}
                        className="nav-menu"
                    />
                ) : (
                    <AiOutlineClose
                        onClick={toggleMenu}
                        className="nav-menu"
                        style={{ color: "white" }}
                    />
                )}
            </nav>
        </header>
    );
};

export default Header;
