import React, { useContext } from 'react';
import Cart from '../../img/Cart.jpg'
import Styles from './Header.module.css';
import {Link} from 'react-router-dom'
import { Context } from '../../Context';

export default function Header() {
    const {cart} = useContext(Context)
    return (
        <nav className={Styles.Header}>
            <Link to="/">Nike Shoe</Link>
            <div className={Styles.rightSide}>
            <Link to="/cart"><img src={Cart} alt="Cart Image" aria-hidden width={100} /></Link>
            <h4>{cart.length}</h4>
            </div>
        </nav>
    )
}
