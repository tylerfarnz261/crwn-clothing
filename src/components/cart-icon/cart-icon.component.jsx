import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {CartIconContainer, ItemCount} from  './cart-icon.styles.jsx';

function CartIcon() {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    
    function toggleIsCartOpen (){
        setIsCartOpen(!isCartOpen);
    }
    

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{ cartCount }</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon