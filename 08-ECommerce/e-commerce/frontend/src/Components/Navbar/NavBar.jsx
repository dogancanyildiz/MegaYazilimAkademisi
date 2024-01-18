import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Collapse, ListGroup, ListGroupItem, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import './Navbar.css'

function NavBar({ user, cartProductCount }) {

    const [productCount, setProductCount] = React.useState(0);

    React.useEffect(() => {
        let count = 0;
        user?.cart?.forEach(item => {
            count += item.quantity;
        })
        setProductCount(count);
    }, [user, cartProductCount]);

    return (
        <>
            <Navbar
                className="my-2 mx-3"
                color="light"
            >
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src="/favicon.png"
                        style={{
                            height: 40,
                            width: 40
                        }}
                    />
                    <h5
                        className="d-inline-block ml-2"
                        style={{
                            verticalAlign: 'middle',
                            lineHeight: 'normal'
                        }}
                    >UNStore</h5>
                    <nav className="navbar navbar-expand-sm d-inline-block ml-2">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to='/' className={`nav-link`}>Ana Sayfa</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/products' className={`nav-link`}>Ürünler</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/about' className={`nav-link`}>Hakkımızda</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </NavbarBrand>
                <div className='navbar-text mx-2'>
                    <ul className='nav-list'>
                        {
                            user ? (
                                <li >
                                    <a class="user btn btn-outlined-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className='bi-person-fill'></i>
                                        <Link to='/' style={{ textDecoration: "none" }}>{user.username} </Link>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li>
                                            <Link to='/logout' className='dropdown-item bg-danger rounded text-light' style={{ textDecoration: "none" }}>
                                                <i className='bi-box-arrow-right mx-1'></i>
                                                Çıkış Yap
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            ) :
                                <li >
                                    <Link to='/login' className='login-card btn btn-outline-dark'>
                                        <i className='bi-person-fill'></i>
                                        Giriş Yap
                                    </Link>
                                </li>
                        }
                        <li >
                            <Link to="/cart" className='btn' style={{ fontSize: "1.5rem" }}>
                                <i className='bi-cart'></i>
                                <span style={{ fontSize: "0.7rem" }} className="position-absolute mt-4 translate-middle badge rounded-pill bg-danger">
                                    {
                                        cartProductCount || 0
                                    }
                                </span>
                            </Link>
                        </li>
                    </ul >
                </div >
            </Navbar >
        </>
    )
}

export default NavBar