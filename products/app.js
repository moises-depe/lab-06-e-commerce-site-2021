import { cbdProduct } from './data.js';
import { renderProduct } from './render-products.js';


const list = document.getElementById('list');

for (let item of cbdProduct) {
    const cbdElementElement = renderProduct(item);

    list.prepend(cbdElementElement);
}
