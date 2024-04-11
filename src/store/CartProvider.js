import { useState } from "react"
import CartContext from "./cart-context"


const CartProvider = (props)=>{
    const [items,setItems] = useState([])

    const addItemToCartHandler = (itemName)=>{
        console.log(itemName)
        setItems([...items,itemName])
    }
    console.log(items)
    
    const removeItemFromCartHandler = props =>{

    }
    const cartContext = {
        items : items,
        totalAmount : 0,
        addItem : addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;