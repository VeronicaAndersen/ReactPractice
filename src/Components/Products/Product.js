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

    return (
        <>
            <div>Product</div>
            <div className='card'>
                <img src={data.image} alt={data.title + ' image'} />
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <p>{data.price} €</p>
            </div>
        </>
    )
}

export default Product