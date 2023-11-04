import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VanInfo from "../VanInfo.jsx";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import style from "./VansDetail.module.css";

const VansDetail = () => {
    const [currentVan, setCurrentVan] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then((res) => res.json())
            .then((data) => setCurrentVan(data.vans));
    }, [id]);

    return (
        <div className={style.main}>
            <section className={style.goback}>
                <NavLink to=".." relative="path" className={style.pathback}>
                    &larr; <span>Back to all vans</span>
                </NavLink>
            </section>
            {currentVan ? (
                <>
                    <VanInfo
                        image={currentVan.imageUrl}
                        name={currentVan.name}
                        price={currentVan.price}
                        type={currentVan.type}
                        displayType
                    />
                    <nav className={style.linksVans}>
                        <NavLink className={style.link} to=".">Details</NavLink>
                        <NavLink className={style.link} to="price">Pricing</NavLink>
                        <NavLink className={style.link} to="photos">Photos</NavLink>
                    </nav>
                    <Outlet context={{currentVan}} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default VansDetail;
