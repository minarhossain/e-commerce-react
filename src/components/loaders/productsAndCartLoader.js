import { getStoredCart } from "../../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart from storage
    const savedCart = getStoredCart();
    const initialCart = [];
    // console.log(products)
    for (const id in savedCart) {
        console.log(id)
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }
    return {products:products, initialCart: initialCart};
}