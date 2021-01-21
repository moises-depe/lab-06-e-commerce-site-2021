import { cbdProduct } from './data.js';
import { renderProduct } from './render-products.js';

const list = document.getElementById('list');

for (let cbd of cbdProduct) {
    const cbdElement = renderProduct(cbd);

    list.append(cbdElement);
}