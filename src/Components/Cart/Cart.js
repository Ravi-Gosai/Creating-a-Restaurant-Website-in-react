import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props =>{

    const cartContext = useContext(CartContext)

    const cartItem = (<ul className={classes['cart-items']}>
        {cartContext.items.map((item)=>{
            console.log(item)
        return <CartItem key={item.id} item={item}></CartItem>
    })}</ul>)
console.log(cartContext.items)
    // let totalAmountIs = cartContext.items.reduce((a,currItem)=> a + currItem.price ,0);
// console.log(totalAmountIs)
let totalAmountIs = 0;
for(let i=0; i<cartContext.items.length; i++){
    totalAmountIs = totalAmountIs + (cartContext.items[i].price * cartContext.items[i].amount)
}
console.log(totalAmountIs)
    return<Modal onClose={props.onClose}>
        {cartItem}
        <div className={classes.total}>
            <span>total amount</span>
            <span>{totalAmountIs}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>close</button>
            <button  className={classes.button}>order</button>
        </div>
    </Modal>
}
export default Cart;