import React, { useContext } from 'react';
import {useParams} from 'react-router-dom';
import {products} from '../../Utils/mockData';
import Styles from './ShowDetail.module.css'
import { Context } from '../../Context';

export default function ShowDetail() {
    let {id}=useParams();
    const context = useContext(Context)
    const Product=products.find(product=>product.id===Number(id)
    )
    return (
        <div className={Styles.ProductDetai}>
            {Product?<React.Fragment>
                
                <img src={Product.imageURL} alt=""/>
                <h1>{Product.name}</h1>
                <h3>Brand: {Product.brand}</h3>
                 <h3>Category: {Product.category}</h3>
                 <h3>For: {Product.gender}</h3>
                 <h3>Price: {Product.price}$</h3>
                 {context.cart.find(product=>product.id===Number(Product.id))?
                 <button
                 onClick={(e)=>context.removeFromCart(Product.id)}
                 >Remove From Cart</button>:
                 <button onClick={(e)=>context.addToCart(
                 {id:Product.id,
                  name:Product.name,
                  price:Product.price,
                  imgUrl:Product.imageURL})}
                 >Add To Cart</button>}
                </React.Fragment>:<h1 style={{textAlign:"center"}}>ITEM NOT FOUND :(</h1>}
        </div>
    )
}
