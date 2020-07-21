import React from 'react';
import {products} from '../../Utils/mockData';
import Card from './Card';
import Styles from './Cards.module.css'

export default function Cards() {
    return (
        <div className={Styles.Cards}>
            {
             products.map(({imageURL,id,name,price})=><Card 
                imageURL={imageURL}
                id={id}
                name={name}
                price={price}
                key={id}
             />
             )
            }
        </div>
    )
}
