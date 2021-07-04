import classes from './Cart.module.css';
import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../Store/Cart-context';
import CartItem from './CartItem'
const Cart=(props)=>{
    const CartCtx = useContext(CartContext)
    const TotalAmount= CartCtx.TotalAmount

    const hasItems=CartCtx.items.length>0
    const cartItemAddHandler=(item)=>{
        CartCtx.AddItem({...item,amount:1})

    }
    const cartItemRemoveHandler=(id)=>{
CartCtx.RemoveItem(id);
    }

    const CartItems=<ul className={classes['cart-items']}>
        {CartCtx.items.map(
            (item)=>(<CartItem key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}>

            </CartItem>
                ))}</ul>
return(
    <Modal onCloseCart={props.onCloseCart}>
       {CartItems}
        <div className={classes.total}>
            <span>Delivery Fees:Rs.40</span>
            <span>Total Amount</span>
            <span>Rs.{TotalAmount+40}.00</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt'] } onClick={props.onCloseCart}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>

)
}

export default Cart;