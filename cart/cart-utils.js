import { findById } from './utils.js';

const CART = 'CART'; //KEY
const emptyCartArray = [];

export function getCart() {

    const stringifyCart = localStorage.getItem(CART);

    if (stringifyCart) {

        const parseCart = JSON.parse(stringifyCart);

        return parseCart;
    } else {
        const stringifyEmptyCart = JSON.stringify(emptyCartArray);

        localStorage.setItem(CART, stringifyEmptyCart);

        return emptyCartArray;
    }
}

export function addToCart(id) {  

    const cart = getCart();

    const cartItem = findById(id, cart);

    if (cartItem) {
        cartItem.quantity++;
    } else {
    
        const newItem = {
            id: id,
            quantity: 1
        
        };
        cart.push(newItem);
    }
}

export function clearCart() {
    const stringifyEmptyCart = JSON.stringify(emptyCartArray);


    localStorage.clear(CART, stringifyEmptyCart);
}
