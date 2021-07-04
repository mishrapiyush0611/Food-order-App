import classes from './AvailableMeals.module.css';
import MealsItem from './MealsItem'
import React from 'react'
import Card from '../UI/Card'

const DUMMY_MEALS= [
    {
      id: 'm1',
      name: 'Chole Bhature',
      description: 'Fresh Chole Bhature with Onion',
      price: 129,
    },
    {
      id: 'm2',
      name: 'Masala Dosa',
      description: 'Crispy Dosa with Sambhar',
      price: 179,
    },
    {
      id: 'm3',
      name: 'Cheese Burst Pizza',
      description: 'Italian, cheesy, delicious',
      price: 299,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 249,
    },
    {
        id: 'm5',
        name: 'Tomato Soup',
        description: 'Hot And full of Veggies',
        price: 49,
      },
      {
        id: 'm6',
        name: 'Samosa',
        description: 'Crisp..Grab it',
        price: 19,
      },
      {
        id: 'm7',
        name: 'Pao Bhaji',
        description: 'Enjoy the Bombay taste',
        price: 89,
      },
      {
        id: 'm8',
        name: 'Fried Rice',
        description: 'Spicy...Chilly ',
        price: 139,
      },
      {
        id: 'm9',
        name: 'Noodles',
        description: 'Chinese Corner!!',
        price: 119,
      },
      {
        id: 'm10',
        name: 'Gulab Jamun',
        description: 'Hot And Juicy',
        price: 49,
      },
  ];
  const AvailableMeals=()=>{
      return(
          <section className={classes.meals}>
              <Card>
          <ul>
             {DUMMY_MEALS.map(meal=>
             <MealsItem 
             name={meal.name}
             id={meal.id}
              description={meal.description} 
              price={meal.price} 
              key={meal.price}>
                  
              </MealsItem>)}
          </ul>
          
          </Card>
          </section>
      )

  }
  export default AvailableMeals;