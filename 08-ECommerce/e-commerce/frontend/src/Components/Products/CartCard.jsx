import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

function CartCard({ product, handleRemoveFromCart, index, cart }) {
    return (
        <>
            <tbody>
                <tr>
                    <th scope="row">
                        <img src={product.image} style={{ width: "40px", height: "50px" }} alt="mouse corsair" className="mouse" />
                    </th>
                    <td>{product.title} </td>
                    <td><b>{product.price}</b> $ </td>
                    <td><button className="btn btn-danger" onClick={()=> handleRemoveFromCart(cart, index)}>Remove</button></td>
                </tr>
            </tbody>
        </>
    );
}

export default CartCard;
