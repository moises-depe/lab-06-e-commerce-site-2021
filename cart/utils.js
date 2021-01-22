
export function findById(id, array) {

    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

let total = 0;

export function calcItemTotal(cartProduct, price) {

    const itemTotal = cartProduct * price;

    return itemTotal;
}

export function calcOrderTotal(cartItem, cbd) {

    for (let item of cartItem) {
        const shoe = findById(item.id, cbd);
        const totalByItem = calcItemTotal(item, shoe);

        total = total + totalByItem;

    }
    return total;
}