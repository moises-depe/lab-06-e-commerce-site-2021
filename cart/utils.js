
export function findById(id, array) {

    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}


export function calcItemTotal(cartProduct, price) {



    const itemTotal = cartProduct * price;

    return itemTotal;
}

export function calcOrderTotal(cartItem, cbdArray) {

    let total = 0;

    for (let item of cartItem) {
        const cbd = findById(item.id, cbdArray);
        const totalByItem = calcItemTotal(item.quantity, cbd.price);

        total = total + totalByItem;

    }
    return total;
}