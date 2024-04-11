import { useState } from "react"
import CartContext from "./cart-context"


const CartProvider = (props)=>{
    const [items,setItems] = useState([])

    const addItemToCartHandler = (itemName)=>{
        console.log(itemName, 'cart provider')

        const cheakValue = items.find((curItem)=>itemName.id === curItem.id )

        console.log(cheakValue)
        if(cheakValue === undefined){
            setItems([...items,itemName])
        }else{

                //  const index = items.findIndex((item)=>itemName.id === item.id)
                //  console.log(index, itemName)
            setItems(()=>{
                
                const currItemList = [...items]
                const index = items.findIndex((item)=>itemName.id === item.id)
                currItemList[index].amount = cheakValue.amount + itemName.amount;
                return currItemList
            })
            
        }


    }
    // console.log(items)
    
    const removeItemFromCartHandler = props =>{

    }
    const incremenHandler = (cartMeal)=>{
        
    
    }
    const decrementHandler = (cartMeal)=>{
        if(cartMeal.amount > 1){
            setItems(()=>{
                const currItemList = [...items]
                const index = items.findIndex((item)=>item.id === cartMeal.id)
                currItemList[index].amount = currItemList[index].amount -1;
                return currItemList

            })
        }else if(cartMeal.amount === 1){

            setItems(()=>{
                const currItemList = [...items]
                const index = items.findIndex((item)=>item.id === cartMeal.id)
                currItemList.splice(index,1);
                return currItemList
            })
        }
    
    }
    const cartContext = {
        items : items,
        totalAmount : 0,
        addItem : addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        increment :incremenHandler,
        decrement : decrementHandler
    
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;