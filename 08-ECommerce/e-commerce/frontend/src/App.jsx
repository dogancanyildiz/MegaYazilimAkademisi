import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Category from './Pages/Category'
import ProductLayout from './Components/Products/ProductLayout'
import Cart from './Pages/Cart'
import Logout from './Pages/Logout'
import Product from './Pages/Product'

function App() {


  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const userData = {
      email: event.target.elements["email"].value,
      password: event.target.elements["pass"].value
    }
    const isKeep = event.target.elements["check"].checked;

    console.log(userData);
    // send a post request to the server with the user data
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(json => {
        console.log("DATA" + { json })
        if (json.success) {
          alert("User logged in successfully!");
          // set the user state 
          setUser({
            username: json.username,
            email: json.email,
            id: json.id
          });
          if (isKeep) {
            localStorage.setItem('user', JSON.stringify({
              username: json.username,
              email: json.email,
              id: json.id
            }));
          }
          console.log("DATA" + json);
          navigate('/');
        } else {
          console.log(json);
          alert("User login failed! " + json.message);
        }
      })
  }

  function handleLogout() {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
  }

  function handleRegister(event) {
    // send a post request to the server with the user data
    event.preventDefault();
    const pass = event.target.elements["passReg"].value;
    const passRep = event.target.elements["passRegRep"].value;

    if (pass !== passRep) {
      alert("Passwords are not the same!");
      return;
    }

    const userData = {
      email: event.target.elements["emailReg"].value,
      password: event.target.elements["passReg"].value,
      username: event.target.elements["user"].value
    }

    // send a post request to the server with the user data
    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          alert("User registered successfully!");
          // set the user state 
          setUser({
            username: json.username,
            email: json.email,
            id: json.id
          });
          navigate('/');
        } else {
          alert("User registration failed! " + json.message);
        }
      })
  }

  function handleAddToCart(product) {
    const newCart = cart ? [...cart, product] : [product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartAmount(cartAmount + 1);
  }

  function handleRemoveFromCart(product, key) {
    // remove the product from the card and filter by index
    const newCart = product.filter((p, index) => index !== key);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartAmount(cartAmount - 1);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (user) {
      setUser(user);
    }
    if (cart) {
      setCart(cart);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route index path='/' element={<Home cartProductCount={cart?.length || 0} handleAddToCart={handleAddToCart} user={user} />} />
        <Route path='/products' element={<Products cartProductCount={cart?.length || 0} handleAddToCart={handleAddToCart} user={user} />} >
          <Route index element={<ProductLayout handleAddToCart={handleAddToCart} user={user} />} />
          <Route path='category/:categoryName' element={<Category handleAddToCart={handleAddToCart} user={user} />} />
          <Route path='product/:id' element={<Product handleAddToCart={handleAddToCart} user={user} cartProductCount={cart?.length || 0} />} />
        </Route>
        <Route path='/cart' element={<Cart user={user} cartAmount={cartAmount} cartProductCount={cart?.length || 0} handleRemoveFromCart={handleRemoveFromCart} />} />
        <Route path='/login' element={<Login handleRegister={handleRegister} handleLogin={handleLogin} />} />
        <Route path='/logout' element={<Logout handleLogout={handleLogout} />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
