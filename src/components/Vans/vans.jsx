import { useEffect, useState } from "react";
import style from "./vans.module.css";
import "../../server";
import Van from "../Van/Van";
import { Link } from "react-router-dom";

const Vans = () => {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
    }, []);

    const vanElements = vans.map((van) => (
        <div key={van.id}>
            <Link to={`/vans/${van.id}`}>
                <Van
                    img={van.imageUrl}
                    price={van.price}
                    type={van.type}
                    name={van.name}
                />
            </Link>
        </div>
    ));

    return (
        <div className={style.background}>
            <h1>Explore our van options</h1>
            <div className={style.main}>{vanElements}</div>
        </div>
    );
};

export default Vans;
