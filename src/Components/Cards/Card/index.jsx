import React,{useContext} from 'react';
import Styles from './Card.module.css'
import { Link } from 'react-router-dom';
import {Context} from '../../../Context';

export default function Card({imageURL,name,id,price}) {
    const {cart,addToCart,removeFromCart} = useContext(Context)
    return (
        <div className={Styles.Card} >
            <img src={imageURL} aria-hidden alt="Image" />
            <h4>{name}</h4>
            <h3>{price}$</h3>
            <Link to={`showDetail/${id}`} className={[Styles.btn,Styles.link].join(" ")}>View Detail</Link>
           {cart.find(product=>product.id===id)?
            <button className={[Styles.remove_from_cart,Styles.btn].join(" ")}
             onClick={()=>removeFromCart(id)}>Remove From Cart</button>: 
             <button className={[Styles.add_to_cart,Styles.btn].join(" ")}
            onClick={()=>addToCart({name,id,price,imageURL})}
            >Add To Cart</button>}
        </div>
    )
}
