import styled from "styled-components";
import ContainerCounterItems from "../../components/cart/ContainerCounterItems";
import WrapperItemsOfCart from "../../components/cart/WrapperItemsOfCart";
import ResumeCart from "../../components/cart/ResumeCart";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import { Link } from "react-router-dom";

const ContainerMainCart = styled.div`
  min-height: 100vh;
  padding-top: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerCart = styled.div`
  width: 100%;
  height: 100%;
  margin: 25px;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const LineDivisory = styled.div`
  width: 95%;
  background: grey;
  height: 2px;
`;

const ContainerAdvice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  a {
    padding: 10px 20px;
    background-color: black;
    color: white;
    border-radius: 25px;
    text-transform: uppercase;
    transition: all 0.2s;
    &:hover {
      color: black;
      padding: 10px 40px;
      background-color: white;
    }
  }
`;

const Cart = () => {
  const productsInCart = useSelector((state: RootStateType) => state.productsSlice.productsInCart);

  return (
    <>
      <ContainerMainCart>
        {productsInCart.length !== 0 ? (
          <ContainerCart>
            <ContainerCounterItems />
            <LineDivisory />
            <WrapperItemsOfCart />
            <LineDivisory />
            <ResumeCart />
          </ContainerCart>
        ) : (
          <ContainerAdvice>
            <h3>Todavía no has agregado ningún producto al carrito.</h3>
            <Link to={"/juegos"}>Ir a juegos</Link>
          </ContainerAdvice>
        )}
      </ContainerMainCart>
    </>
  );
};

export default Cart;
