import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = (props)=>{

    return(
        <>
       <header className={classes.header}>
            <h1>ReactMeals</h1>
           <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
       </header>
       <div className={classes['main-image']}>
            <img src={mealsImage} alt='a table full of delious food' />
       </div>
        </>
    )
}
export default Header