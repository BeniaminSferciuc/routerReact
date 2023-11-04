import { useOutletContext } from "react-router-dom";

const Details = () => {
    const { currentVan } = useOutletContext();

    const style = {
        marginBottom: '1rem',
        fontSize: '1rem',
        fontFamily: "sans-serif"
    }

    const container = {
        backgroundColor: "#EEF0F2",
        padding: "1rem",
        borderRadius: "1rem"
    }

    return (
        <div style={container}>
            <p style={style}>
                <strong>Name: </strong>
                {currentVan.name}
            </p>
            <p style={style}>
                <strong>Category: </strong>
                {currentVan.type}
            </p>
            <p style={style}>
                <strong>Description: </strong>
                {currentVan.description}
            </p>
            <p style={style}>
                <strong>Visibility: </strong>
                {"Public"}
            </p>
        </div>
    );
};

export default Details;
