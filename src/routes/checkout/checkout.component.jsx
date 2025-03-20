import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles.jsx';

import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector.js";
import { useSelector } from "react-redux";

function Checkout() {


    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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