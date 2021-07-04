import React, { Fragment } from 'react';
import classes from './Header.module.css';
import mealss from '../../assets/mealss.jpeg';
import CartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <Fragment>

            <header className={classes.header}>
                <h1>DOWN TOWN </h1>
                <CartButton onclick={props.onShowCart}></CartButton>
                 
            </header>
            <div className={classes['main-image']}>
                <img src={mealss} alt="background image"></img>
            </div>
        </Fragment>
    )
}
export default Header;
