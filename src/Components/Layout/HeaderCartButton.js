
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";

const HeaderCartButton = props =>{
    
const cartContext = useContext(CartContext);
const numberOfItem = cartContext.items.reduce((x,y)=>{
    return x + y.amount
},0)
console.log(numberOfItem)
   
    return(
        <button className={classes.button} onClick={props.onClick}> 
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItem}</span>
        </button>
    )
}
export default HeaderCartButton;