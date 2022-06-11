import React, {Fragment} from 'react'
import classes from './Header.module.css';

import mealsImage from '../../Assets/meals.jpg'
import HeaderCartButton from '../Layout/HeaderCartButton'

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton showCart={props.showCart} />
          {/* {ctx.total !== 0 ? <p>Cart {ctx.total}</p> : <p>Cart</p>}             */}
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A Table full of delicious food" />
      </div>
    </Fragment>
  )
}

export default Header