import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props =>{

    const cartItem = (<ul className={classes['cart-items']}>
        {[{id:'c1', name:'ravi', price : 12.45}].map((item)=>{
        return <li key={item.id}>{item.name}</li>
    })}</ul>)

    return<Modal>
        {cartItem}
        <div className={classes.total}>
            <span>total amount</span>
            <span>35.66</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>close</button>
            <button className={classes.button}>order</button>
        </div>
    </Modal>
}
export default Cart;