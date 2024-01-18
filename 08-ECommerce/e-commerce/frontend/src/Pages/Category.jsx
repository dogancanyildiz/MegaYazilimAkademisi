import React, { useEffect, useState } from 'react'
import NavBar from '../Components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import ProductCard from '../Components/Products/ProductCard';

function Category({user, handleAddToCart}) {
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [categoryName]);

    return (
        <div>
            <ProductCard handleAddToCart={handleAddToCart} products={products} />
        </div>
    )
}

export default Category