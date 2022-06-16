import { useState, useEffect } from 'react';
import BeerItem from './BeerItem';

const BeerList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    console.log(products);

    return (<section>
        {products.map((elt) =>
            <BeerItem
                key={elt._id}
                id={elt._id}
                name={elt.name}
                slogan={elt.tagline}
                img={elt.image_url}
                produzent={elt.contributed_by}
                details={products}
            />
        )}
    </section>);
}

export default BeerList;