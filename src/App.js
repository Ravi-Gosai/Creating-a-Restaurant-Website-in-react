import Header from "./Components/Layout/Header";
import './App.css'
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true)
  }
  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }
  return (
   <CartProvider>
   {cartIsShown && <Cart onClose={hideCartHandler}/>}
   <Header onShowCart ={showCartHandler}></Header>
   <main>
    <Meals></Meals>
   </main>
   </CartProvider>
  );
}

export default App;
