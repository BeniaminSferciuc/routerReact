import { Outlet, NavLink } from "react-router-dom";
import style from "./Host.module.css";

const Host = () => {
    return (
        <div className={style.mainPage}>
            <nav className={style.hostNav}>
                <NavLink
                    to="."
                    end
                    className={({ isActive }) =>
                        isActive ? style.hostItemActive : style.notactive
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="income"
                    className={({ isActive }) =>
                        isActive ? style.hostItemActive : style.notactive
                    }
                >
                    Income
                </NavLink>
                <NavLink
                    to="vans"
                    className={({ isActive }) =>
                        isActive ? style.hostItemActive : style.notactive
                    }
                >
                    Vans
                </NavLink>
                <NavLink
                    to="reviews"
                    className={({ isActive }) =>
                        isActive ? style.hostItemActive : style.notactive
                    }
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    );
};

export default Host;
