import React,{useState} from 'react';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import Footer from './Components/Footer';
import ShowDetail from './Components/ShowDetail';
import Cart from './Components/Cart'
import {Switch,Route,withRouter} from 'react-router-dom';
import {Provider} from './Context';
import './App.css';


function App({history}) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)
  const [totalItem, setTotalItem] = useState(0);

  const addToCart=({id,name,price,imageURL:imgUrl})=>{
    let Index=cart.findIndex(shoe=>shoe.id===id);
               if(Index>=0){
                   return ;
               }
            let newShoe={
                id,
                name,
                price,
                imgUrl,
                totalPrice:price,
                qty:1,
            }
            setCart([...cart,newShoe]);
            setTotal(total+price);
            setTotalItem(totalItem+1)
  }

  const removeFromCart=id=>{
    let Index=cart.findIndex(product=>product.id===id);
                    if(Index>=0){
                      setTotalItem(totalItem-cart[Index].qty);
                      setTotal(total-cart[Index].totalPrice,)
                      setCart(cart.filter(product=>product.id!==id));
                            }
}

  const inc=id=>{
    let Item=cart.find(product=>product.id===id);
                Item.qty+=1;
                Item.totalPrice+=Item.price;
                setTotal(total+Item.price);
                setTotalItem(totalItem+1);
  }

  const dec=id=>{
    let Index=cart.findIndex(product=>product.id===id);
    if(cart[Index].qty>1){
      cart[Index].qty-=1;
      cart[Index].totalPrice-=cart[Index].price;

    }else{
         setCart(cart.filter(product=>product.id!==id))
    }
    setTotal(total-cart[Index].price);
    setTotalItem(totalItem-1)
  }

  const pay=_=>{
    setCart([]);
    setTotal(0);
    setTotalItem(0);
    history.push("/");
  }

  return (
    <Provider value={{
      cart,
      total,
      totalItem,
      addToCart,
      removeFromCart,
      inc,
      dec,
      pay
      }}>
    <Header/>
      <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route path="/showDetail/:id" component={ShowDetail}/>
      <Route path="/cart" component={Cart}/>
    </Switch>
    <Footer/>
    </Provider>
  );
}

export default withRouter(App);
