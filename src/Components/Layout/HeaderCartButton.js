import React, {useContext} from 'react'
import classes from './HeaderCartButton.module.css'

import CartIcon from '../Cart/CartIcon'
import cartTotalContext from '../../Store/cartTotal-context';

function HeaderCartButton(props) {
  const cartCtx = useContext(cartTotalContext);
  const length = cartCtx.items.length;
  let total=0;
  for(let i=0; i<length; i++){
    total += cartCtx.items[i].amount;
  }
  return (
    <button onClick={props.showCart} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Cart</span>
        <span className={classes.badge}>{total}</span>
    </button>
  )
}

export default HeaderCartButton