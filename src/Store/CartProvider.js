import React,{useReducer}from 'react'
import CartContext from './Cart-context';
const defaultCartState={
    items:[],
    TotalAmount:0 
};
const CartReducer = (state, action) => {
    if (action.type === 'ADD') {
      const updatedTotalAmount =
        state.TotalAmount + action.item.price * action.item.amount;
  
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
  
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
  
      return {
        items: updatedItems,
        TotalAmount: updatedTotalAmount,
      };
    }
    if (action.type === 'REMOVE') {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingitem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.TotalAmount - existingitem.price;
      let updatedItems;
      if (existingitem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id);
      } else {
        const updatedItem = { ...existingitem, amount: existingitem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
  
      return {
        items: updatedItems,
        TotalAmount: updatedTotalAmount
      };
    }
  
    return defaultCartState;
}



const CartProvider=(props)=>{
    const [CartState,DispatchCartAction]=useReducer(CartReducer,defaultCartState)
    const AdditemHandler=(item)=>{
          DispatchCartAction({type:'ADD' , item:item})
    }
    const RemoveitemHandler=(id)=>{
           DispatchCartAction({type:"REMOVE" , id:id})
    }
    const cartContext={
        items:CartState.items,
        TotalAmount:CartState.TotalAmount,
        AddItem: AdditemHandler,
        RemoveItem: RemoveitemHandler,
    }
return(
    <CartContext.Provider value={cartContext}>
        {props.children}

    </CartContext.Provider>
)
}
export default CartProvider;