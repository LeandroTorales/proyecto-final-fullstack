import { createSlice, current } from "@reduxjs/toolkit";
import { products } from "../../../data/products";
import { addProductToCart } from "./utils/addProductToCart";
import { removeProductFromCart } from "./utils/removeProductFromCart";

interface Products {
  products: {
    categories: string[];
    discount: number;
    divisa: string;
    id: number;
    imgGame: string;
    nameGame: string;
    price: number;
    stock: number;
  }[];
  productsInCart: {
    categories: string[];
    discount: number;
    divisa: string;
    id: number;
    imgGame: string;
    nameGame: string;
    price: number;
    stock: number;
    quantity: number;
  }[];
}

const initialState: Products = {
  products: products,
  productsInCart: [],
};

const productsSlice: any = createSlice({
  name: "productsSlice",
  initialState: initialState,
  reducers: {
    changeOrderOfProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
    productsInCartAction: (state, action) => {
      return {
        ...state,
        productsInCart: addProductToCart(current(state.productsInCart), action.payload),
      };
    },
    removeProductFromCartAction: (state, action) => {
      return {
        ...state,
        productsInCart: removeProductFromCart(current(state.productsInCart), action.payload),
      };
    },
    cleanCartAction: (state) => {
      return {
        ...state,
        productsInCart: initialState.productsInCart,
      };
    },
  },
});

export const {
  changeOrderOfProducts,
  productsInCartAction,
  removeProductFromCartAction,
  cleanCartAction,
} = productsSlice.actions;
export default productsSlice.reducer;
