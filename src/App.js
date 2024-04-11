import Header from "./Components/Layout/Header";
import './App.css'
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true)
  }
  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }
  return (
   <>
   {cartIsShown && <Cart onClose={hideCartHandler}/>}
   <Header onShowCart ={showCartHandler}></Header>
   <main>
    <Meals></Meals>
   </main>
   </>
  );
}

export default App;
