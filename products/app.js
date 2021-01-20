import { cbdProduct } from './data.js';
import { renderProduct } from './render-cbd';


const list = document.getElementById('list');

for (let cbdProducts of cbdProducts) {
    const cbdElementElement = renderProduct(cbdProducts);

    list.prepend(cbdElementElement);
}