
const form = document.querySelector('form');


const data = new FormData('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();


    const id = id.get('name');
    const createBrand = data.get('brand');
    const description = data.get('description');
    const createImage = data.get('create-image');
    const price = id.get('price');
    
    const productCreate = {
    
        id: id,
        create: createBrand,
        name: description,
        createImage: createImage,
        price: Number(price),
    
    };

}


/*        id: 'lotion',
        price: 20,
        image: 'lotion.jpg',
        description: 'lotion',
        brand: 'justcbd',
        thc: false */