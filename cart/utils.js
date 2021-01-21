export function findById(id, array) {

    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcItemTotsl(cartProduct, price) {

    const itemTotal = cartProduct * price;

    return itemTotal;
}