import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout({ handleLogout }) {

    const navigate = useNavigate();

    setTimeout(() => {
        handleLogout();
        navigate('/');
    }, 2000)

    return (
        <div>
            <h1>Logout successfull!</h1>
            <h2>Returning the login page...</h2>
        </div>
    )
}

export default Logout