import React, { useRef } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../UI/Input'

const MealItemForm = (props) => {
  const amountRef = useRef();
  const formSubmitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const amountNumber = +enteredAmount;
    props.onAdd(amountNumber);
  }

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
        <Input label='Amount'
        ref={amountRef}
         input={{
            id: props.id,
            type: 'number',
            min: '1',
            max: '5',
            step:'1',
            defaultValue: '1'
        }} />        
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm