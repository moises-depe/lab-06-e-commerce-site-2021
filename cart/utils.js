
export function calcItemTotal(cartProduct, price) {

    const itemTotal = cartProduct * price;

    return itemTotal;
}

export function findById(id, array) {

    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}