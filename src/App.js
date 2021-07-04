import logo from './logo.svg';
import './App.css';
import React,{Fragment ,useState} from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
import CartProvider from './Store/CartProvider';

function App() {
  const[cartisShown,SetCartisShown]=useState();
  const ShowCartHandler=()=>{
    SetCartisShown(true)
  }
  const HideCartHandler=()=>{
    SetCartisShown(false)
  }
  return (
    <CartProvider>
      {cartisShown && <Cart onCloseCart={HideCartHandler}></Cart>}
      <Header onShowCart={ShowCartHandler} />
      <main><Meals></Meals></main>
      
      
    </CartProvider>
  );
}

export default App;
