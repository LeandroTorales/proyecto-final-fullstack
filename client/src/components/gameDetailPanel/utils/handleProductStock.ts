import { ProductsInCart } from "../../../redux/slices/products/utils/addProductToCart";

export const handleProductStock = (
  productOfArrayCart: ProductsInCart[],
  product: ProductsInCart
): number => {
  const findProductInCart: ProductsInCart | undefined = productOfArrayCart.find(
    (prod) => prod.id === product.id
  );

  if (findProductInCart !== undefined) {
    return findProductInCart.stock - findProductInCart.quantity;
  }

  return product.stock;
};
