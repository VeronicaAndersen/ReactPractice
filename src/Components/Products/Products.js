import React, { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
    const url = 'https://fakestoreapi.com/products'

    const [data, setData] = useState([])

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    
    return (
        <>
        <div>Products</div>
            <div className='products'>
                {data.map((dataObj, index) => {
                    return (
                        <div className="product-card" key={dataObj.id}>
                            <img src={dataObj.image} alt={dataObj.title + ' image'}  ></img>
                            <p>{dataObj.title}</p>
                            <p>Price: {dataObj.price} €</p>
                            <button value={dataObj.id}>More details</button>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Products