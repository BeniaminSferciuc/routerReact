import style from "./van.module.css";

const Van = (props) => {
    const styleForType = {
        backgroundColor:
            props.type === "simple"
                ? "orange"
                : props.type === "rugged"
                ? "green"
                : "black",
    };

    return (
        <div className={style.vanSection}>
            <img src={props.img} alt="" className={style.imgStyle} />
            <div className={style.namePrice}>
                <h3 className={style.name}>{props.name}</h3>
                <p className={style.price}>{`$${props.price}/day `}</p>
            </div>
            <div style={styleForType} className={style.type}>{props.type}</div>
        </div>
    );
};

export default Van;
