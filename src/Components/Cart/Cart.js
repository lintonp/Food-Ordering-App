import React, {useContext} from 'react'
import classes from './Cart.module.css'

import Modal from '../UI/Modal';
import CartItem from './CartItem'
import cartTotalContext from '../../Store/cartTotal-context';

const Cart = (props) => {
    const cartCtx = useContext(cartTotalContext);

    const totalAmount = cartCtx.totalAmount.toFixed(2); 
    const hasItems = cartCtx.items.length === 0;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItems = <ul className={classes['cart-items']}>
            {cartCtx.items.map(item => {
                return (
                    <CartItem 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        onAdd={cartItemAddHandler} //.bind(null, item)
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />
                );
            }
            )}
        </ul>;
  return (
    <Modal hideCart={props.hideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{`₹${totalAmount}`}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.hideCart} className={classes['button--alt']}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart