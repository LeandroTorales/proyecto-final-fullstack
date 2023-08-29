export interface ProductsInCart {
  id: number;
  nameGame: string;
  imgGame: string;
  discount: number;
  divisa: string;
  stock: number;
  price: number;
  categories: string[];
  quantity: number;
}

export const addProductToCart = (
  productOfArrayCart: ProductsInCart[],
  product: ProductsInCart
): ProductsInCart[] => {
  const findProductInCart: ProductsInCart | undefined = productOfArrayCart.find(
    (prod) => prod.id === product.id
  );

  if (findProductInCart !== undefined) {
    return productOfArrayCart.map((prod) => {
      return prod.id === findProductInCart.id
        ? {
            ...prod,
            quantity: prod.quantity + product.quantity,
          }
        : prod;
    });
  }

  return [...productOfArrayCart, { ...product }];
};
