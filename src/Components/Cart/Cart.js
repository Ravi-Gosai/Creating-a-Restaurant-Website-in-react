import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = props =>{

    const cartContext = useContext(CartContext)

    const cartItem = (<ul className={classes['cart-items']}>
        {cartContext.items.map((item)=>{
        return <li key={item.id}>{item.name}</li>
    })}</ul>)

    return<Modal onClose={props.onClose}>
        {cartItem}
        <div className={classes.total}>
            <span>total amount</span>
            <span>35.66</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>close</button>
            <button className={classes.button}>order</button>
        </div>
    </Modal>
}
export default Cart;