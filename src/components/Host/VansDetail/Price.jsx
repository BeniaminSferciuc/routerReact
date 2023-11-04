import { useOutletContext } from "react-router-dom";

const Price = () => {
    const { currentVan } = useOutletContext();
    
    const style = {
      fontWeight: "bold",
      fontSize: "2.0rem",
        fontFamily: "sans-serif"
    }

    return (
        <div>
            <span style={style}>${currentVan.price}.00</span>
            <span style={{color: "gray", fontSize: "1.5rem"}}>/day</span>
        </div>
    );
};

export default Price;
