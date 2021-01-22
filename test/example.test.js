// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { cbdProduct } from '../products/data.js';
import { renderProduct } from '../products/render-products.js';
import { findById } from '../cart/utils.js';
import { calcItemTotal } from '../cart/utils.js';

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
    const expected = `<li class="cbd-gummy"><h3 class="cbd-description">gummies</h3><h2 class="cbd-brand">justcbd</h2><img class="cbd-image" src="../assets/cbdGummiesBears.png"><p class="cbd-price">$55</p><button>add to cart</button></li>`;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(gummyBear);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


//cart test

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

    const actual = calcItemTotal(item[0], cbdProduct[0]);

    expect.equal(actual, expected);

});

