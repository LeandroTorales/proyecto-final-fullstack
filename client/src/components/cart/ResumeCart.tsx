import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import { useEffect, useState } from "react";
import { ProductsInCart } from "../../redux/slices/products/utils/addProductToCart";
import ButtonPurchase from "./ButtonPurchase";

const ContainerResumeCartMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 250px;
  padding: 10px;
  gap: 20px;
`;

const ContainerInformationResume = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  font-size: 1.1rem;
  flex-direction: column;
  align-items: flex-start;
  select {
    width: 220px;
    height: 35px;
    font-weight: 600;
    font-size: 1.1rem;
  }
  p {
    font-weight: 700;
  }
  span {
    font-weight: 600;
  }
  span:last-of-type {
    font-weight: 700;
  }
`;

const ResumeCart = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(2500);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsInCart = useSelector((state: RootStateType) => state.productsSlice.productsInCart);

  const priceSubtotalOfCart = (): any => {
    return productsInCart.reduce((prev: number, cur: ProductsInCart) => {
      return prev + cur.price * cur.quantity;
    }, 0);
  };

  const quantityOfProductsTotal = (): number => {
    return productsInCart.reduce((prev: number, cur: ProductsInCart) => {
      return prev + cur.quantity;
    }, 0);
  };

  const handleSelectShippingCost = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    if (priceSubtotalOfCart() <= 150000) {
      return setShippingCost(value);
    }
    return 0;
  };

  const handleShippingCostFree = (): number => {
    if (priceSubtotalOfCart() <= 150000) {
      return shippingCost;
    }
    return 0;
  };

  useEffect(() => {
    setSubtotal(priceSubtotalOfCart());
    setTotalProducts(quantityOfProductsTotal());
    setShippingCost(handleShippingCostFree());
  }, [productsInCart]);

  return (
    <ContainerResumeCartMain>
      <h2>Resumen</h2>
      <ContainerInformationResume>
        <p>Cantidad de productos: {totalProducts}</p>
        <span>subtotal: ${subtotal.toFixed(2)}</span>
        <span>Costo de envío: ${shippingCost.toFixed(2)}</span>
        <select
          name="selectShipping"
          id="select--id"
          autoComplete="off"
          multiple={false}
          onChange={handleSelectShippingCost}
        >
          <option value={priceSubtotalOfCart() <= 150000 ? 2500 : 0}>
            Estandar - ${priceSubtotalOfCart() <= 150000 ? (2500).toFixed(2) : (0).toFixed(2)}
          </option>
          <option value={priceSubtotalOfCart() <= 150000 ? 3000 : 0}>
            Express - ${priceSubtotalOfCart() <= 150000 ? (3000).toFixed(2) : (0).toFixed(2)}
          </option>
          <option value={0}>Punto de retiro - ${(0).toFixed(2)}</option>
        </select>
        <span>Total: ${(subtotal + shippingCost).toFixed(2)} ARS</span>
      </ContainerInformationResume>
      <ButtonPurchase />
    </ContainerResumeCartMain>
  );
};

export default ResumeCart;
