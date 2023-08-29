import { ProductsInCart } from "./addProductToCart";
export const removeProductFromCart = (
  productsInCart: ProductsInCart[],
  product: ProductsInCart
) => {
  return productsInCart.filter((prod) => prod.id !== product.id);
};
