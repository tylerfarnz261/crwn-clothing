import { ProductCardContainer, Footer, Name, Price} from './product-card.styles.jsx';
import { useContext } from 'react';
import Button, {BUTTON_TYPE_CLASS} from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

function ProductCard({product}) {


    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={addProductToCart}>Add To Cart</Button>
        </ProductCardContainer>

    )
}

export default ProductCard;