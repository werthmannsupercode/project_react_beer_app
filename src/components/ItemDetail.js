import { useParams, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";


const ItemDetail = () => {

    let { id } = useParams();
    const location = useLocation();
    let data = location.state;

    console.log(id);
    console.log(data);

    let gefiltert;

    if (id == "random") {
        let zufaellig = Math.floor(Math.random() * data.length);
        gefiltert = data[zufaellig];
    }

    else {
        gefiltert = data.filter((elt) => elt._id === id)[0];
    }

    console.log(gefiltert);
    return (<article className="randomBeer">
        <img src={gefiltert.image_url} alt="Artikelbild" />
        <h2>{gefiltert.name}</h2>
        <h3>{gefiltert.tagline}</h3>
        <div className="brewed">
            <p>First brewed:</p>
            <p>{gefiltert.first_brewed}</p>
        </div>
        <div className="attenuation">
            <p>Attenuation Level:</p>
            <p>{gefiltert.attenuation_level}</p>
        </div>
        <p className="description">{gefiltert.description}</p>
        <Link to="/allBeers" className="LinkBack">⬅︎</Link>
        <Link to="/" className="LinkStartseite">
            <p>🍻</p>
        </Link>
    </article>);
}

export default ItemDetail;