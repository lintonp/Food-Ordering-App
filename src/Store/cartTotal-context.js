import React from 'react';

const cartTotalContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {}
});

// export const CartTotalContextProvider = (props) => {
//     const [totalCount, setTotalCount] = useState(0);
//     const totalCountAdder = ()=>{
//         setTotalCount(()=>{
//             return totalCount+1;
//         })
//     }
    
//   return (
//     <cartTotalContext.Provider value={{
//         total:totalCount,
//         onAdd:totalCountAdder
//     }}>
//         {props.children}
//     </cartTotalContext.Provider>
//   )
// }


export default cartTotalContext;