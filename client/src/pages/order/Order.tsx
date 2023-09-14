import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RootStateType } from "../../redux/store";
import { InterfaceOrderOfUser } from "../../components/profile/ProfileUserInfo";

const ContainerMainOrder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 30px;
  padding-top: 75px;
  background-color: white;
  color: black;
  text-align: center;
  gap: 50px;
  font-size: 1.4rem;
  span {
    span {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

const WrapperInfoOrder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
`;

const WrapperInfoShipping = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  @media (max-width: 850px) {
    align-items: center;
  }
`;

const WrapperOrderProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  align-content: center;
`;

const WrapperInfoProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
  height: 400px;
  img {
    width: 170px;
    height: auto;
    border: 2px solid black;
    border-radius: 5px;
  }
`;

const PriceOfProduct = styled.span`
  font-weight: 700;
`;

const Order = () => {
  const { idOrder } = useParams();
  const currentOrders = useSelector((state: RootStateType) => state.authSlice.ordersOfUser);
  const order: InterfaceOrderOfUser = currentOrders.filter(
    (order: InterfaceOrderOfUser) => order._id === idOrder
  )[0];

  const date = new Date(order.createdAt);

  return (
    <ContainerMainOrder>
      <WrapperInfoOrder>
        <span>
          Fecha de compra:
          <span> {date.toLocaleDateString()}</span>
        </span>
        <span>
          Costo de envío:
          <span> ${order.shippingCost}</span>
        </span>
        <span>
          Estado de compra:
          <span> {order.status === "pending" ? "pendiente" : "entregada"}</span>
        </span>
      </WrapperInfoOrder>
      <WrapperInfoShipping>
        <span>
          Nombre destinatario:
          <span> {order.shippingDetails.nombreDestinatario}</span>
        </span>
        <span>
          Direccion destinatario:
          <span> {order.shippingDetails.direccion}</span>
        </span>
        <span>
          Numero celular:
          <span> {order.shippingDetails.cellphone}</span>
        </span>
        <span>
          Ciudad:
          <span> {order.shippingDetails.ciudad}</span>
        </span>
        <span>
          Codigo postal:
          <span> {order.shippingDetails.codigoPostal}</span>
        </span>
      </WrapperInfoShipping>
      <WrapperOrderProducts>
        {order.products.map((prod) => {
          return (
            <WrapperInfoProduct>
              <img src={prod.imgGame} alt="Imagen Juego Comprado" />
              <span>{prod.nameGame}</span>
              <PriceOfProduct>${prod.price.toFixed(2)} c/u</PriceOfProduct>
              <span>Cantidad: {prod.quantity}</span>
            </WrapperInfoProduct>
          );
        })}
      </WrapperOrderProducts>
    </ContainerMainOrder>
  );
};

export default Order;
