import { useEffect, useState } from "react";
import styles from "./Vans.module.css";
import { Link } from "react-router-dom";
import VanInfo from "../VanInfo.jsx";

const Vans = () => {
    const [hostVans, setHostVans] = useState([]);

    useEffect(() => {
        fetch("/api/host/vans")
            .then((res) => res.json())
            .then((data) => setHostVans(data.vans));
    }, []);

    const hostVansEls = hostVans.map((item) => (
        <Link to={`/host/vans/${item.id}`} key={item.id}>
            <div key={item.id} className={styles.section}>
                <VanInfo
                    image={item.imageUrl}
                    name={item.name}
                    price={item.price}
                    type={item.type}
                    displayType={false}
                />
            </div>
        </Link>
    ));

    return (
        <div className={styles.vanList}>
            <h1 style={{ fontFamily: "sans-serif", marginBottom: "1rem" }}>
                Your listed vans
            </h1>
            {hostVans.length > 0 ? (
                <section>{hostVansEls}</section>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
};

export default Vans;
