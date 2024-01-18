import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({ products, handleAddToCart }) {
    return (
        <div className=' row row-cols-sm-4'>
            {
                products.map((product, index) => {
                    return (
                        <div key={index} className="card my-3">
                            <Link to={`/products/product/${product.id}`} className='imgBox'>
                                <img src={product.image} alt="mouse corsair" className="mouse" />
                            </Link>

                            <div className="contentBox">
                                <Link to={`/products/product/${product.id}`} style={{textDecoration: "none", textAlign: "center"}}>
                                    <h3>{product.title.slice(0, 17)}...</h3>
                                    <h2 className="price">{product.price} €</h2>
                                </Link>
                                <button onClick={() => handleAddToCart(product)} className="buy">Buy Now</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductCard