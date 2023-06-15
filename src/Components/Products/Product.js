import React, { useState, useEffect } from 'react';
import './Products.css';

const Product = () => {
    const url = 'https://fakestoreapi.com/products'
    const endPoint = '/1';

    const [data, setData] = useState([])

    const fetchInfo = () => {
        return fetch(url + endPoint)
            .then((res) => res.json())
            .then((d) => setData(d))
    }

    useEffect(() => {
        fetchInfo();
    }, []);
// console.log(data.rating.rate);
    return (
        <>

            <div className='card'>
                <img src={data.image} alt={data.title + ' image'} />
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <p><em>{data.category}</em></p>
                <p>{data.price} €</p>
                {/* <p>{data.rating.rate} of 5</p> */}
                <button>Add to cart</button>
            </div>
        </>
    )
}

export default Product