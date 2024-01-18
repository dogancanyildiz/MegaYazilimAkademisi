import React, { useEffect, useState } from 'react'
import NavBar from '../Components/Navbar/Navbar';
import ProductCard from '../Components/Products/ProductCard';
import Categories from '../Components/Categories/Categories';
import { Outlet } from 'react-router-dom';

function Products({ user, cartProductCount }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))

        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div>
            <NavBar cartProductCount={cartProductCount} user={user} />
            <div className='row'>
                <div className='col-md-3'>
                    <Categories categories={categories} />
                </div>
                <div className='col-md-9'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Products