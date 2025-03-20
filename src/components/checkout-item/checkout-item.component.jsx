
import { CheckoutItemContainer, ImageContainer, Quantity, Name, Price, RemoveButton} from './checkout-item.styles.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action.js';
function CheckoutItem({cartItem}) {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    const {name, imageUrl, quantity, price} = cartItem;
    return (

        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name}/>
            </ImageContainer>
            <Name>{name}</Name>

            <Quantity>
                <div className='arrow' onClick = {removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick= { addItemHandler}>&#10095;</div>
            </Quantity>

            <Price>${price*quantity}</Price>

            <RemoveButton onClick = {clearItemHandler} className='remove-button'>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;