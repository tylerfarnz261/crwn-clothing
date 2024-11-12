import { createContext, useReducer} from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItem: () => {},
    cartCount: 0,
    cartTotal: 0,
});

const addCartItem = (cartItems, productToAdd) => {

    // find if cartItems contains product to add
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
    //if found, increment quantity
    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        );
    }
    //return new array with modified cartitems/ new cart items
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }
    return cartItems.map(cartItem => 
        cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    );
}

const removeProductItem = (cartItems, productToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
}

const cartActionTypes = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
}

const cartReducer = (state, action) => {

    const { type, payload } = action;

    switch(type){
        case 'SET_IS_CART_OPEN':
            return {
                ...state,
                isCartOpen: payload
            }
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`Invalid action type: ${type}`);
    }
}

export const CartProvider = ({children}) => {

    const [{isCartOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer,
        {
            isCartOpen: false,
            cartItems: [],
            cartCount: 0,
            cartTotal: 0,
        }
    );

    const updateCartItemsReducer = (newCartItems) => {

        const newCartCount =  newCartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0);

        dispatch(createAction(cartActionTypes.SET_CART_ITEMS, {cartItems: newCartItems, cartCount: newCartCount, cartTotal: newCartTotal}));
    }

    const setIsCartOpen = (isOpen) => {
        dispatch(createAction(cartActionTypes.SET_IS_CART_OPEN, isOpen));
    }
    
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
       updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const removeProductFromCart = (productToRemove) => {
        const newCartItems = removeProductItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, removeProductFromCart, cartTotal};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}