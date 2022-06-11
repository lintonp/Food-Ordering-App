import React, {useReducer} from 'react'
// import CartContext from './cartContext'
import cartTotalContext from './cartTotal-context'
const defaultCartState = {items: [], totalAmount: 0};

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    // console.log("Context-Add");
    // console.log(action.item);
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount; 
    const existingCardItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCardItemIndex];
    let updatedItems
    if(existingCartItem){
      // console.log('Existing Item');
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      // console.log("action.item.amount", action.item.amount)
      // console.log("existingCartItem.amount", existingCartItem.amount)

      updatedItems = [...state.items]  //update amount
      updatedItems[existingCardItemIndex] = updatedItem
    }
    else{
      // console.log('New Item');
      updatedItems = state.items.concat(action.item)
    }
    // console.log("state.totalAmount", state.totalAmount)
    // console.log("action.item.price", action.item.price)
    // console.log("action.item.amount", action.item.amount)
    // console.log("updatedAmount", state.totalAmount + action.item.price * action.item.amount);
    return {
            items: updatedItems,
            totalAmount: updatedAmount  //state.totalAmount + action.item.price * action.item.amount
          };
  }
  if(action.type === 'REMOVE'){
    //remove
    // console.log(action.id);
    const itemIndex = state.items.findIndex(item => item.id === action.id);
    const existingCartItem = state.items[itemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    // console.log(updatedTotalAmount);
    let updatedItems;
    if(existingCartItem.amount === 1){
      updatedItems = state.items.filter(item => item.id !== action.id);
    }
    else{
      const updatedItemAmount = existingCartItem.amount - 1;
      updatedItems = state.items;
      updatedItems[itemIndex].amount = updatedItemAmount;
      // console.log("existingCartItem",existingCartItem)
      // const updatedItem = {...existingCartItem, amount: updatedItemAmount}
      // console.log("updatedItem",updatedItem)
      // updatedItems = state.items.filter(item => item.id !== action.id);
      // updatedItems = updatedItems.concat(updatedItem)
      // console.log("updatedItems", updatedItems)
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  return defaultCartState;
}

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
      dispatchCartAction({type: 'ADD', item: item});
    }
    const removeItemHandler = (id) => {
      dispatchCartAction({type:'REMOVE', id: id});
    }
  
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

  return (
    <cartTotalContext.Provider value={cartContext}>
        {props.children}
    </cartTotalContext.Provider>
  )
}

export default CartContextProvider



// const updatedItemsUsingReduce = state.items.reduce(function(acc, curr){
    //   if(acc[curr.name]){
    //     acc[curr.amount] = acc[curr.amount] + newAmount; //acc[curr.amount] + 
    //   }
    //   else{
    //     acc[curr.amount] = newAmount;
    //   }
    //   return acc;
    // }, {});
    // console.log(updatedItemsUsingReduce);