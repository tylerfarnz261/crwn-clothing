
import { CheckoutItemContainer, ImageContainer, Quantity, Name, Price, RemoveButton} from './checkout-item.styles.jsx';

import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.reducer.js';
function CheckoutItem({cartItem}) {

    const dispatch = useDispatch();


    const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

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