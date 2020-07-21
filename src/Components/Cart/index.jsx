import React, { useContext } from 'react';
import CartItem from '../CartItem'
import Styles from './Cart.module.css'
import { Context } from '../../Context';
 function Cart() {
    const {cart,total,totalItem,pay} = useContext(Context);
    return (
        <div className={Styles.Cart}>
            <div className={Styles.CartList}>
                {cart.length>0?<React.Fragment>{cart.map(product=><CartItem key={product.name}product={product}/>)}
                </React.Fragment>
                :<h1 style={{textAlign:"center"}}>NO ITEM FOUND :(</h1>}
            </div>
            <div className={Styles.CartPrice}>
                <div className={Styles.SubCart}>
                   <h1>{totalItem} (Items)</h1>
                   <h1>{total}$</h1>
                </div>
                <button disabled={total===0} onClick={pay} >Check To Proceed</button>
            </div>
        </div>
    )
}
export default Cart;