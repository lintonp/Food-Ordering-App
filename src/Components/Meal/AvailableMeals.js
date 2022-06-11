import React from 'react'
import DUMMY_MEALS from '../dummy-meals'

import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem'

function AvailableMeals(props) {
    const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem 
       key={meal.id}
       id={meal.id} 
       name={meal.name} 
       description={meal.description} 
       price={meal.price} 
    />)

  return (
    <section className={classes.meals}>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
  )
}

export default AvailableMeals