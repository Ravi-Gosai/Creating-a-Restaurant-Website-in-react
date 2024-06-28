import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'gujrati thali',
      description: '2 gujrati sabji, 5 roti, 1 buttermilk ',
      price: 22.99,
      amount :1
    },
    {
      id: 'm2',
      name: 'panjabi thali',
      description: '2 panner sabji , 1butter roti , 1 buttermilk',
      price: 16.5,
      amount :1
    },
    {
      id: 'm3',
      name: 'grand panjabi thali',
      description: '4 panner sabji , 1butter roti , 1 buttermilk',
      price: 12.99,
      amount :1
    },
    {
      id: 'm4',
      name: 'dal chawal',
      description: 'Healthy...and green...',
      price: 18.99,
      amount :1
    },
  ];

  const AvailableMeals = ()=>{
    const mealsList = DUMMY_MEALS.map((meal)=><MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} id={meal.id} amount={meal.amount}/>)
    return(
        <section className={classes.meals}>
          <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    )
  }
  export default AvailableMeals;