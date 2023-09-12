import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const ProfileUserInfo = () => {
  const navigate = useNavigate();

  return (
    <ContainerMainProfile>
      <div>
        <h3>Ordenes de Usuario</h3>
      </div>
      <WrapperOrders>
        <ContainerOrderInfo>
          <span>Fecha de pedido: 12/12/2012</span>
          <span>Estado: Pendiente</span>
          <span>Total de productos: 2</span>
          <button type="button" onClick={() => navigate("/")}>
            Más información
          </button>
        </ContainerOrderInfo>
        <ContainerOrderInfo>
          <span>Fecha de pedido: 12/12/2012</span>
          <span>Estado: Pendiente</span>
          <span>Total de productos: 2</span>
          <button type="button" onClick={() => navigate("/")}>
            Más información
          </button>
        </ContainerOrderInfo>
        <ContainerOrderInfo>
          <span>Fecha de pedido: 12/12/2012</span>
          <span>Estado: Pendiente</span>
          <span>Total de productos: 2</span>
          <button type="button" onClick={() => navigate("/")}>
            Más información
          </button>
        </ContainerOrderInfo>
        <ContainerOrderInfo>
          <span>Fecha de pedido: 12/12/2012</span>
          <span>Estado: Pendiente</span>
          <span>Total de productos: 2</span>
          <button type="button" onClick={() => navigate("/")}>
            Más información
          </button>
        </ContainerOrderInfo>
      </WrapperOrders>
    </ContainerMainProfile>
  );
};

export default ProfileUserInfo;
