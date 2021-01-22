import { calcItemTotal } from './utils.js';

export function renderTableRow(cartItem, cbdProduct) {

    const quantity = cartItem.quantity;

    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = cbdProduct.id;

    const quantityTd = document.createElement('td');
    quantityTd.textContent = quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = `$${calcItemTotal(cartItem.quantity, cbdProduct.price)}`;

    tr.append(nameTd, quantityTd, priceTd);

    return tr;
}