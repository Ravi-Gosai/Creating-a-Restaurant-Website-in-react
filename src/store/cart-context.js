import { createContext } from "react";

const CartContext = createContext({
    items : [],
    totalAmount : 0,
    addItem : (item)=>{},
    removeItem : (id)=>{},
    increment :(item)=>{},
    decrement : (item)=>{}
})

export default CartContext;