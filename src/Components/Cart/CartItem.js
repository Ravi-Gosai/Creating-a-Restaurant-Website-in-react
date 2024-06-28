import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
    const cartContext = useContext(CartContext)
  return (
    <>
      <li key={props.item.id}>
        {" "}
        {`${props.item.name}    x ${props.item.amount}`}
        <button onClick={()=>{cartContext.increment(props.item)}}>+</button>
        <button onClick={()=>{cartContext.decrement(props.item)}}>-</button>
        {props.item.price}
      </li>
    </>
  );
};
export default CartItem;
