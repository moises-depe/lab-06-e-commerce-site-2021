
   /*
   cbd products has


   description
   brand 
   image
   price
   thc

*/

export function renderProduct(cbd) {

    const li = document.createElement('li');
    li.classList.add('cbd-item');

    const h3 = document.createElement('h3');
    h3.classList.add('cbd-description');
    h3.textContent = cbd.description;

    const h2 = document.createElement('h2');
    h2.classList.add('cbd-brand');
    h2.textContent = cbd.brand;
    
    const img = document.createElement('img');
    img.classList.add('cbd-image');
    li.append(img);
    img.src = `../assets/`g


    const pPrice = document.createElement('p');
    pPrice.classList.add('cbd-price');
    pPrice.textContent = `$${cbd.price}`;
    li.append(pPrice);

    const pThc = document.createElement('p');
    pThc.classList.add('cbd-thc');

    if (cbd.hasThc) {

        pThc.textContent = 'true';
    }

    else {

        pThc.textContent = 'none';
    }

    const button = document.createElement('button');
    button.textContent = 'add to cart';
    li.append(button);

    return li;
}