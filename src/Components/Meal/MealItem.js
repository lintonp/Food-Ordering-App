import React, {useContext} from 'react'
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
// import MealAdder from './MealAdder'

import cartTotalContext from '../../Store/cartTotal-context';

function MealItem(props) {
  const cartCtx = useContext(cartTotalContext);
  const price = `₹${props.price.toFixed(2)}`;

  const addItemToCart = (amount) => {
    // console.log(props.name);
    // console.log("MealItem: amount", amount)
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div  className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAdd={addItemToCart}/>
      </div>
    </li>
    // <Card>
    //     <div className={classes.meal}>
    //         <h3>{props.meal}</h3>
    //         <p className={classes.description}>{props.description}</p>
    //         <p className={classes.price}>{props.amount}</p>
    //     </div>
    //     <MealAdder />
    // </Card>      
  )
}

export default MealItem