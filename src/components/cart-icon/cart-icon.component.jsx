import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.reducer.js';
import {CartIconContainer, ItemCount} from  './cart-icon.styles.jsx';

function CartIcon() {

    // const { isCartOpen, setIsCartOpen, cartCount } = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{ cartCount }</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon