import React, { useEffect, useState } from 'react'
import NavBar from '../Components/Navbar/Navbar'
import ProductCard from '../Components/Products/ProductCard'
import CartCard from '../Components/Products/CartCard';

function Cart({ user, cartProductCount, handleRemoveFromCart, cartAmount }) {
  const [cart, setCart] = useState([]); // [product, setProduct]

  useEffect(() => {
    // get the cart from the local storage
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      // if there is two or more products in the cart then increase the cart amount and filter the products to get the unique products and set the cart state
      setCart(cart);
    }
  }, [cartAmount]);

  return (
    <div>
      <NavBar user={user} cartProductCount={cartProductCount} />
      <h1 className='mx-5'>Cart</h1>
      <div className="row">
        <div className='col-8 mx-3 '>
          <table className='table' >
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Price ($)</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            {
              cart.map((product, index) => (
                <CartCard cart={cart} handleRemoveFromCart={handleRemoveFromCart} index={index} key={index} product={product} />
              ))
            }
          </table>
        </div>
        <div className='col-3'>
          <div className="">
            <div className="card-body">
              <h5 className="card-title">Total</h5>
              <p className="card-text">Total Price: {cart.reduce((total, product) => Math.round(total + product.price), 0)} $</p>
              <button className="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Cart