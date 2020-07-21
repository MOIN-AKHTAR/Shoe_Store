import React, { useContext } from 'react';
import Styles from './CartItem.module.css'
import { Context } from '../../Context';

export default function CartItem({product:{name,qty,id,imgUrl,totalPrice}}) {
    const {inc,dec,removeFromCart} = useContext(Context)
    return (
        <React.Fragment>
        <div className={Styles.CartItem}>
            <div>
            <img src={imgUrl} alt=""/>
            </div>
            <div>
                <h2>Name: {name}</h2>
                <h2>QTY: {qty}</h2>
                <h2>TOTAL: {totalPrice}</h2>
                <div>
                    <button className={Styles.Dec} onClick={(e)=>dec(id)}>-</button>
                    <button className={Styles.Inc} onClick={(e)=>inc(id)}>+</button>
                    <button className={Styles.removeFromCart} onClick={(e)=>removeFromCart(id)}>X</button>
                </div>
            </div>
            </div>
            <hr style={{height:"1px",background:"#000"}}/>
            </React.Fragment>
            
       
    )
}
