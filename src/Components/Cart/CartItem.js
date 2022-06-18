import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
  // console.log(props.amount);

  function addButtonHandler() {
    // console.log("addButtonendler")
    props.onAdd({
      id: props.id, 
      amount: +1,
      name: props.name,
      price: props.price
    })
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={addButtonHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
