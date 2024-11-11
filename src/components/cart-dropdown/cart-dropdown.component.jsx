import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

function CartDropdown () {

    const { cartItems } = useContext(CartContext);
    const naviagte = useNavigate();

    const goToCheckout = () => {
        naviagte('/checkout');
    }
    return (
        <CartDropdownContainer>
            <CartItems >
                {cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)) :
                 <EmptyMessage>Your cart is empty</EmptyMessage>
                 }            
            </CartItems>
            <Button onClick={goToCheckout}  >GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;