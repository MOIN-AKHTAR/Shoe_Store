import { createContext } from 'react';
const initialState = {
    cart: [],
    total:0,
    totalItem:0,
    addToCart: () => { },
    removeFromCart: () => { },
    changeAllow:true,
    inc:()=>{},
    dec:()=>{},
    pay:()=>{}
}
export const Context = createContext(initialState);
export const Provider = Context.Provider;