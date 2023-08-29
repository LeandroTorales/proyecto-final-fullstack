import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootStateType, dispatchType } from "../../redux/store";
import { ProductsInCart } from "../../redux/slices/products/utils/addProductToCart";
import { removeProductFromCartAction } from "../../redux/slices/products/products";

const WrapperItemsOfCartStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const ContainerItemOfCart = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 5px;
  border-top: 1px solid black;
  gap: 10px;
  height: 200px;

  &:last-of-type {
    border-bottom: 1px solid black;
  }

  .container--text {
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 1.3rem;
      font-weight: 600;
    }
  }
  @media (max-width: 850px) {
    .container--text {
      width: 250px;
    }
    flex-direction: column;
    text-align: center;
    height: 350px;
  }
`;

const ContainerImagenJuego = styled.div`
  width: 150px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: auto;
  }
`;
const ContainerQuantityProduct = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

const ContainerPriceProduct = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
`;

const ContainerXDeleteItemFromCart = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: -75px;
  font-weight: 600;
  border-radius: 7px;
  padding: 13px 13px;
  margin-right: 10px;
  width: 0%;
  height: 0%;
  &:hover {
    background-color: black;
    color: white;
  }
  @media (max-width: 850px) {
    top: -93%;
    left: 47%;
  }
`;

const WrapperItemsOfCart = () => {
  const productsInCart = useSelector((state: RootStateType) => state.productsSlice.productsInCart);
  const dispatch = useDispatch<dispatchType>();

  return (
    <WrapperItemsOfCartStyled>
      {productsInCart.map((prod: ProductsInCart, index: any) => {
        return (
          <ContainerItemOfCart key={index}>
            <ContainerImagenJuego>
              <img src={prod.imgGame} alt="Imagen Juego Portada" />
            </ContainerImagenJuego>
            <div className="container--text">
              <p>{prod.nameGame}</p>
            </div>
            <ContainerQuantityProduct>Cantidad: {prod.quantity}</ContainerQuantityProduct>
            <ContainerPriceProduct>
              ${prod.price.toFixed(2)} {prod.divisa}
            </ContainerPriceProduct>
            <ContainerXDeleteItemFromCart
              onClick={() => dispatch(removeProductFromCartAction(prod))}
            >
              X
            </ContainerXDeleteItemFromCart>
          </ContainerItemOfCart>
        );
      })}
    </WrapperItemsOfCartStyled>
  );
};

export default WrapperItemsOfCart;
