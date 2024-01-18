import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Product.css';

function Product({ handleAddToCart }) {

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then(res => res.json())
            .then(json => setProduct(json))

    }, []);

    return (
        <div>
            <div class="container">
                <div class="imgBx">
                    <img src={product.image} height="400" alt="Nike Jordan Proto-Lyte Image" />
                </div>
                <div class="details">
                    <div class="content">
                        <h2>{product.title} <br />
                            <span></span>
                        </h2>
                        <p>{product.description}
                        </p>
                        <h3>{product.price} </h3>
                        <button className='btn btn-success' onClick={() => handleAddToCart(product)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product