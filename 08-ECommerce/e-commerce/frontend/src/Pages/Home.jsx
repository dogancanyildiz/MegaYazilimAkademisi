import React from 'react'
import Carousel from '../Components/Carousel/Carousel';
import Products from '../Components/Products/ProductCard';
import NavBar from '../Components/Navbar/Navbar';
import ProductLayout from '../Components/Products/ProductLayout';


function Home({ user, handleAddToCart, cartProductCount }) {



    return (
        <div>
            <NavBar cartProductCount={cartProductCount} user={user} />
            <Carousel />
            <ProductLayout handleAddToCart={handleAddToCart} limit={4} />
        </div>
    )
}

export default Home