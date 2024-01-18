import React from 'react'
import { Link } from 'react-router-dom'

function Categories({ categories }) {
    return (
        <div>
            <h1 className='m-3'>Categories</h1>
            <ul className='list-group m-3'>
                {
                    categories.map((category, i) => {
                        return (
                            <Link className='list-group-item list-group-item-action ' key={i} style={{ textDecoration: "none" }} to={`category/${category}`}>{category} </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Categories