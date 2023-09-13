import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getOrders } from "../../axios/orders/getOrders";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import { useEffect } from "react";
import { dispatchType } from "../../redux/store/index";
import { ordersOfUserAction } from "../../redux/slices/auth/authSlice";
import { InterfaceProductDetails, InterfaceShippingDetails } from "../../axios/orders/createOrder";

const ContainerMainProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  min-height: 60vh;
  width: 80%;
  gap: 20px;
`;

const WrapperOrders = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ContainerOrderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  font-size: 1.2rem;
  border: 2px solid black;
  border-radius: 10px;
  span {
    width: 100%;
    text-align: left;
  }
  button {
    background: #0080c3;
    color: white;
    padding: 10px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    border: 2px solid #00006f;
  }
`;

interface InterfaceOrderOfUser {
  createdAt: string;
  products: InterfaceProductDetails[];
  shippingCost: number;
  shippingDetails: InterfaceShippingDetails;
  status: string;
  user: string;
  __v: number;
  _id: string;
}

const ProfileUserInfo = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state: RootStateType) => state.authSlice.currentUser);
  const currentOrders = useSelector((state: RootStateType) => state.authSlice.ordersOfUser);
  console.log("currentOrders:", currentOrders);
  const dispatch = useDispatch<dispatchType>();

  const getOrdersFromDB = async () => {
    const data = await getOrders({ token });
    if (data.length !== 0) {
      return dispatch(ordersOfUserAction(data));
    }
    return;
  };

  useEffect(() => {
    getOrdersFromDB();
  }, []);

  return (
    <ContainerMainProfile>
      <div>
        <h3>Ordenes de Usuario</h3>
      </div>
      <WrapperOrders>
        {currentOrders.map((order: InterfaceOrderOfUser, index: any) => {
          const newDate = new Date(order.createdAt);

          return (
            <ContainerOrderInfo key={index}>
              <span>Fecha de pedido: {newDate.toLocaleDateString()} </span>
              <span>Estado: {order.status === "pending" ? "Entrega pendiente" : "Entregada"}</span>
              <span>
                Total de productos: {order.products.reduce((prev, cur) => prev + cur.quantity, 0)}
              </span>
              <button type="button" onClick={() => navigate("/")}>
                {/* Hacer renderizado dinamico de orden */}
                Más información
              </button>
            </ContainerOrderInfo>
          );
        })}
      </WrapperOrders>
    </ContainerMainProfile>
  );
};

export default ProfileUserInfo;
