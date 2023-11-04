import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./VanDetail.module.css";

const VanDetail = () => {
    const [van, setVan] = useState(null);

    const params = useParams();

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then((res) => res.json())
            .then((data) => setVan(data.vans));
    }, [params.id]);

    function primaLiteraMajuscula(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    return (
        <div>
            {van ? (
                <div className={style.main}>
                    <img
                        src={van.imageUrl}
                        alt=""
                        className={style.imageStyle}
                    />
                    <div>
                        <div
                            className={style.type}
                            style={{
                                backgroundColor:
                                    van.type === "simple"
                                        ? "orange"
                                        : van.type === "rugged"
                                        ? "green"
                                        : "black",
                            }}
                        >
                            {primaLiteraMajuscula(van.type)}
                        </div>
                        <h1 className={style.name}>{van.name}</h1>
                        <p className={style.price}>{`$${van.price}/day`}</p>
                        <p className={style.description}>{van.description}</p>
                        <button className={style.btn}>Rent this van</button>
                    </div>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
};

export default VanDetail;
