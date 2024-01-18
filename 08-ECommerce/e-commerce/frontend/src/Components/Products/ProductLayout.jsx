import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import NavBar from '../Navbar/Navbar';

function ProductLayout({limit, handleAddToCart}) {

  const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products' + (limit ? `?limit=${limit}` : ''))
            .then(res => res.json())
            .then(json => setProducts(json))
    }, []);

  return (
    <div className='my-3'>
      <ProductCard handleAddToCart={handleAddToCart} products={products} />
    </div>
  )
}

export default ProductLayout