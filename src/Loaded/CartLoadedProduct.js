import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoaded = async () => {
    const loadProduct = await fetch('products.json');
    const products = await loadProduct.json();
    // console.log(products);

    // ~ if cart data is in database you have to use async await

    const storedCart = getShoppingCart()
    // console.log(storedCart);

    const saveCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id)
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct)
        }
    }

    /* 
        // ! if you need to send two things
        // return [saveCart , products];
        // ! another option
        // return {products, cart: saveCart }
    */
    return saveCart;
}

export default cartProductLoaded;