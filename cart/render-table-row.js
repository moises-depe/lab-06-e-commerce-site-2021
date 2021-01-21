export function renderTableRow(cartItem, cbdProduct) {

    const quantity = cartItem.quantity;

    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');


    nameTd.textContent = cbdProduct.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = `$${getCbdTotal(cartItem, cbdProduct)}`;


}