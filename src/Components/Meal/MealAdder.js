import React, {useState, useContext} from 'react'
import cartTotalContext from '../../Store/cartTotal-context';

function MealAdder() {
    const [total, setTotal] = useState(0);
    const ctx = useContext(cartTotalContext);

    const addItem = () => {
        setTotal(() => {
            return total+1;
        })
        ctx.onAdd();
    }

  return (
    <div>
        <div>
            <p>Amount</p>   
            <p>{total}</p>
        </div>
        <button onClick={addItem}>+Add</button>
    </div>
  )
}

export default MealAdder