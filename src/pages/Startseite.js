import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Startseite = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
            .then(json => { setProducts(json) })
    }, [])

    return (
        <div className="Startseite">
            <Link to="/allBeers">
                <img src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="Bierregal" />
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam porro quasi doloribus ullam!</p></Link>
            <Link to={`/item/random`} state={products}>
                <img src="https://images.unsplash.com/photo-1499424474736-c040d0665d84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3027&q=80" alt="Bierflasche" />
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam porro quasi doloribus ullam!</p></Link>
        </div>
    );
}

export default Startseite;