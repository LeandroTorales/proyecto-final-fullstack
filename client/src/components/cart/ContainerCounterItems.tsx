import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import styled from "styled-components";

const ContainerCounterItemsStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  span span {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const ContainerCounterItems = () => {
  const products = useSelector((state: RootStateType) => state.productsSlice.productsInCart);

  return (
    <ContainerCounterItemsStyled>
      <h2>Carrito</h2>
      <span>
        Total de productos: <span>{products.length}</span>
      </span>
    </ContainerCounterItemsStyled>
  );
};

export default ContainerCounterItems;
