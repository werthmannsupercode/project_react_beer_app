import BeerList from './../components/BeerList';
import { Link } from "react-router-dom";

const AllBeers = () => {
    return (<div>
        <Link to="/" className="LinkStartseite">
            <p>🍻</p>
        </Link>
        <BeerList />
    </div>);
}

export default AllBeers;