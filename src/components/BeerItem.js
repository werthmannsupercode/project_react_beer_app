import { Link } from "react-router-dom";

const BeerItem = (props) => {
    return (<div className="BeerItem">
        <img src={props.img} alt="Produktbild" />
        <div>
            <h2>{props.name}</h2>
            <h3>{props.slogan}</h3>
            <p>Created by: {props.name}</p>
            <Link to={`/item/${props.id}`} state={props.details}>Details</Link>
        </div>
    </div>);
}

export default BeerItem;