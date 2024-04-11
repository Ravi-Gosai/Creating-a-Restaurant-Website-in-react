
import { useContext } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'
import CartContext from '../../../store/cart-context';
const MealItemForm = props =>{

    const cartContext = useContext(CartContext);
    // console.log(cartContext)
    const submitHandler = (event)=>{
        event.preventDefault()
        cartContext.addItem(props.item)
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label='Amount' input={{
                id: 'amount',
                type : 'number',
                min : 1,
                max : 5,
                step : 1,
                defaultValue : 1
            }} />
            <button type='submit'>+ Add</button>
        </form>
    )
}
export default MealItemForm;