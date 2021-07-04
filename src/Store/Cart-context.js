import React from 'react'
const CartContext = React.createContext({
    items:[],
    TotalAmount:0, 
    AddItem:(item)=>{},
    RemoveItem:(id)=>{}

})
export default CartContext;