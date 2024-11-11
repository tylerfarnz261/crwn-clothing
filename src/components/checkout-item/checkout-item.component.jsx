
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { CheckoutItemContainer, ImageContainer, Quantity, Name, Price, RemoveButton} from './checkout-item.styles.jsx';



function CheckoutItem({cartItem}) {

    const {addItemToCart, removeItemFromCart, removeProductFromCart} = useContext(CartContext);


    const clearItemHandler = () => removeProductFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

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