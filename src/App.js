import React, { useState } from "react";
// import Header from "./Components/Layout/Header";
// import MealSummary from "./Components/Meal/MealSummary";
// import {CartTotalContextProvider} from './Store/cartTotal-context.js'

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meal/Meals";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./Store/CartContextProvider";

function App() {
  const[cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  // const [totalCount, setTotalCount] = useState(0);
  //   const totalCountAdder = ()=>{
  //       setTotalCount(()=>{
  //           return totalCount+1;
  //       })
  //   }
  return (
    
    <CartContextProvider>
      {/* <Cart isDisplay={cartDisplay}/> */}
      {cartIsShown && <Cart hideCart={hideCartHandler} />}
      <Header showCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
