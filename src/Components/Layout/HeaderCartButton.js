import classes from './HeaderCartButton.module.css';
import {useContext,useEffect,useState} from 'react';
import CartIcon from '../Cart/Carticon'
import CartContext from '../../Store/Cart-context'

const CartButton =(props)=>{
    const cartCtx = useContext(CartContext);
    const {items}=cartCtx
    const [HighlightedButton,SetHighlightedButton]=useState(false)
   
    const numberOfCartItems = items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);
 
const btnClasses=`${classes.button} ${HighlightedButton ? classes.bump:''}`;
useEffect(()=>{
  if(items.length===0){
    return;
  }
  SetHighlightedButton(true);
  const timer=setTimeout(()=>{
    SetHighlightedButton(false)
  },300);
  return (()=>{
    clearTimeout=(timer);
  })
},[items]);

return (<div className={btnClasses} onClick={props.onclick}>
<span className={classes.icon}>
    <CartIcon/>
</span>
<span  > Your cart</span>
<span className={classes.badge}>{numberOfCartItems}</span>
</div>
);};

export default CartButton;