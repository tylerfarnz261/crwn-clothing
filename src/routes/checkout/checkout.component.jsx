import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles.jsx';
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";


function Checkout() {


    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>Product</HeaderBlock>
                <HeaderBlock>Description</HeaderBlock>
                <HeaderBlock>Quantity</HeaderBlock>
                <HeaderBlock>Price</HeaderBlock>
                <HeaderBlock>Remove</HeaderBlock>
            </CheckoutHeader>
            {/* Map through Cart Items and create a checkout item for each one */}
            {cartItems.map(item => 
            <CheckoutItem key={item.id} cartItem={item}/>)}
            <Total>TOTAL ${cartTotal}</Total>
        </CheckoutContainer>
    );

}


export default Checkout;