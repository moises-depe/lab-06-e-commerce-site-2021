import { cartProduct } from '../cart/data-cart.js';
import { cbdProduct } from '../products/data.js';
import { getCart } from './cart-utils.js';
import { renderTableRow } from './render-table-row.js';
import { calcItemTotal, findById } from './utils.js';


const tbody = document.querySelector('tbody');
const cart = getCart();

for (let item of cartProduct) {
    const cbd = findById(item.id, cbdProduct);

    const tableRowElement = renderTableRow(item, cbd);

    tbody.append(tableRowElement);
}

const tr = document.createElement('tr');

const tdElement1 = document.createElement('td');
tr.append(tdElement1);

const tdElement2 = document.createElement('td');
tr.append(tdElement2);

const tdTotal = document.createElement('td');
tdTotal.textContent = `Cart total: $${calcItemTotal}`;
tr.append(tdTotal);

const button = document.querySelector('place-button');
button.textContent = 'place-order';

button.addEventListener('click', () => {
    const cart = getCart();



}

// /
// const button = document.createElement('button');
// button.addEventListener('click', () => {
//     addToCart(cbd.id); 
// });

// button.classList.add('add-button');    
// button.textContent = 'add to cart';
// li.append(button);//
