import React from 'react';
import Cards from '../Cards'
import Styles from './MainPage.module.css'
export default function MainPage() {
    return (
     <div className={Styles.MainPage}>
     <h1>SELECT YOUR FAVOURITE SHOES :</h1>
     <Cards/>
     </div>
    )
}
