// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { cbdProduct } from '../products/data.js';
import { cartProduct } from '../cart/data-cart.js';
import { renderProduct } from '../products/render-products.js';
import { findById } from '../cart/utils.js';
import { calcItemTotal } from '../cart/utils.js';
import { calcOrderTotal } from '../cart/utils.js';
import { renderTableRow } from '../cart/render-table-row.js';

//Products test

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    const gummyBear = {
        id: 1,
        price: 55,
        image: 'cbdGummiesBears.png',
        description: 'gummies',
        brand: 'justcbd',
        thc: false,
    };

    // Set up your arguments and expectations
    const expected = `<li class="cbd-gummy"><h3 class="cbd-description">gummies</h3><h2 class="cbd-brand">justcbd</h2><img class="cbd-image" src="../assets/cbdGummiesBears.png"><p class="cbd-price">$55</p><button class="add-button">add to cart</button></li>`;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(gummyBear);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

//calculate total test
test('calcItemTotal should take in a quantity of 3 from id 3 and should return a total of $150', (expect) => {

    const item = [

        { 
            id: 3,
            quantity: 3

        }];

    const cbdProduct = [{

        id: 3,
        price: 50,
        image: 'vapecart.jpg',
        description: 'vape cartridge',
        brand: 'justcbd',
        thc: false,
    }];

    const expected = 150;

    const actual = calcItemTotal(item[0].quantity, cbdProduct[0].price);

    expect.equal(actual, expected);

});

test('It should take in a cart items and return the table row', (expect) => {

    const cartItem1 = {
        id: 'gum',
        quantity: 1
    };

    const cbdItem1 = {
        id: 'gum',
        price: 55,
        image: 'cbdGummiesBears.png',
        description: 'gummies',
        brand: 'justcbd',
        thc: false,
    };

    const expected = '<tr><td>gum</td><td>1</td><td>$55</td></tr>';

    const actual = renderTableRow(cartItem1, cbdItem1);

    expect.equal(actual.outerHTML, expected);
});


test('findById should take in a 4 and return a lotion', (expect) => {
    //Arrange

    const cbdProduct = [{
        id: 1,
        price: 55,
        image: 'cbdGummiesBears.png',
        description: 'gummies',
        brand: 'justcbd',
        thc: false,
    },
    {
        id: 2,
        price: 40,
        image: 'tincture.jpg',
        description: 'tincture.jpg',
        brand: 'full specturm',
        thc: false,
    },
    {
        id: 3,
        price: 50,
        image: 'vapecart.jpg',
        description: 'vape cartridge',
        brand: 'justcbd',
        thc: false,
    },
    {
        id: 4,
        price: 20,
        image: 'lotion.jpg',
        description: 'lotion',
        brand: 'justcbd',
        thc: false,
    },
    {
        id: 5,
        price: 10,
        image: 'bathbomb.jpg',
        description: 'bath bomb',
        brand: 'justcbd',
        thc: false,
    }];

     // Set up your arguments and expectations
    const expected = {
        id: 4,
        price: 20,
        image: 'lotion.jpg',
        description: 'lotion',
        brand: 'justcbd',
        thc: false,
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(4, cbdProduct);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


test('It should return 385 for the total items that are in the cart items', (expect) => {

    const cartProduct = [

        {
            id: 'gum',
            quantity: 3
        },
        {
            id: 'tincture',
            quantity: 1
    
        },
        {
            id: 'vape',
            quantity:2
        },
        {
            id: 'lotion',
            quantity:2
        },
        {
            id: 'bathBomb',
            quantity:4
        },
    
    ];

    const cbdProduct = [
    
        {
            id: 'gum',
            price: 55,
            image: 'cbdGummiesBears.png',
            description: 'gummies',
            brand: 'justcbd',
            thc: false,
        },
        {
            id: 'tincture',
            price: 40,
            image: 'tincture.jpg',
            description: 'tincture.jpg',
            brand: 'full specturm',
            thc: false,
        },
        {
            id: 'vape',
            price: 50,
            image: 'vapecart.jpg',
            description: 'vape cartridge',
            brand: 'justcbd',
            thc: false,
        },
        {
            id: 'lotion',
            price: 20,
            image: 'lotion.jpg',
            description: 'lotion',
            brand: 'justcbd',
            thc: false,
        },
        {
            id: 'bathBomb',
            price: 10,
            image: 'bathbomb.jpg',
            description: 'bath bomb',
            brand: 'justcbd',
            thc: false,
        },
    ];

    const expected = 385;

    const actual = calcOrderTotal(cartProduct, cbdProduct);

    expect.deepEqual(actual, expected);
});