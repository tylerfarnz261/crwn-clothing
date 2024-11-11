import { CartItemContainer, ItemDetails, CartImg, Name, Price } from './cart-item.styles.jsx';


function CartItem({cartItem}) {

    const {name, imageUrl, quantity, price} = cartItem;

    return(

        <CartItemContainer>
        <CartImg src={imageUrl} alt={name}/>
            <ItemDetails>
                <Name>{name}</Name>
                <Price>{quantity} X ${price}</Price>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;