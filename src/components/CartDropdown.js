import CartItem from './CartItem';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/cart-context';

import '../styles/CartDropdown.styles.scss'


import React from 'react';

import Button from './Button';

const CartDropdown = () => {
const {cartItems} = useContext(CartContext)
const navigate = useNavigate()

const goToChekoutHandler = () => {
    navigate('/checkout')
}

    return(
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </div>
        <Button onClick={goToChekoutHandler} >GO TO CHECKOUT</Button>
      </div>

    )
}
export default CartDropdown; 