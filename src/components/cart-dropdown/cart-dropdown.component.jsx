import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector.js';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

function CartDropdown () {

    const cartItems = useSelector(selectCartItems);
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