const VanInfo = (props) => {
    const type = props.displayType && (
        <div className="typebadge">{props.type}</div>
    );

    return (
        <div className="flex">
            <img src={props.image} className="image" />
            <div className="info">
                {type}
                <h3>{props.name}</h3>
                <p>${props.price}/day</p>
            </div>
        </div>
    );
};

export default VanInfo;
