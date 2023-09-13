import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../../redux/store";
import { dispatchType } from "../../redux/store/index";
import { useEffect, useState } from "react";
import { cleanCartAction } from "../../redux/slices/products/products";
import authSlice from "../../redux/slices/auth/authSlice";
import { useNavigate } from "react-router-dom";

const ContainerButtonPurchase = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 10px 35px;
    background: black;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 5px;
    border: 1px solid black;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      padding: 10px 55px;
    }
    &:disabled {
      background-color: #888888;
    }
  }
`;

const ButtonPurchase = () => {
  const [disabled, setDisabled] = useState(true);
  const productsInCart = useSelector((state: RootStateType) => state.productsSlice.productsInCart);
  const currentUser = useSelector((state: RootStateType) => state.authSlice.currentUser);
  const navigate = useNavigate();

  const toggleDisabledButton = (): void => {
    if (productsInCart.length !== 0) return setDisabled(false);
    return setDisabled(true);
  };

  const handlePurchaseCartButton = (): void => {
    if (currentUser === undefined) {
      navigate("/auth");
      return alert("Todavía no haz iniciado sesión. Para comprar, primero logueate con tu cuenta.");
    }
    navigate("/checkout");
  };

  useEffect(() => {
    toggleDisabledButton();
  }, [productsInCart]);

  return (
    <ContainerButtonPurchase>
      <button disabled={disabled} onClick={handlePurchaseCartButton}>
        Comprar carrito
      </button>
    </ContainerButtonPurchase>
  );
};

export default ButtonPurchase;
