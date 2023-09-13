import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootStateType } from "../../redux/store";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { dispatchType } from "../../redux/store/index";
import { productsInCartAction } from "../../redux/slices/products/products";
import { ProductsType } from "../../data/products";
import { handleProductStock } from "./utils/handleProductStock";

const ContainerMain = styled.div`
  height: 100vh;
  padding-top: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  img {
    height: 300px;
    width: auto;
    border: 2px solid black;
  }
  @media (max-width: 850px) {
    img {
      height: 200px;
    }
  }
`;

const ContainerInfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  gap: 30px;
  text-align: center;
  h2 {
    font-size: clamp(16px, 10vw, 35px);
    font-weight: 700;
  }
`;

const PriceWithoutDiscount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5rem;
  span:nth-child(1) {
    text-decoration: line-through;
    text-decoration-color: red;
  }
  span:nth-child(2),
  span:nth-child(3) {
    font-size: 1.6rem;
    font-weight: 700;
    text-decoration: underline;
  }
`;

const StockContainerCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 1px solid white;
  input {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: white;
    border: none;
    text-align: center;
    cursor: pointer;
  }

  input[type="button"] {
    font-weight: 700;
    font-size: 1.6rem;
    width: 40px;
    padding: 5px 0px;
  }

  input[type="button"]:hover {
    background-color: #c2c2c2;
  }

  input[type="button"]:first-of-type {
    border-right: 1px solid white;
  }

  input[type="button"]:last-of-type {
    border-left: 1px solid white;
  }

  input:focus {
    box-shadow: none;
    outline: none;
  }
`;

const ContainerButtonPurchaseProduct = styled.div`
  .buttonAddToCart:hover {
    background-color: #247728;
    color: white;
  }
  .activeAnimation {
    background-color: #2dd61e;
    padding: 5px 50px;
  }

  .activeAnimation:hover {
    background-color: #2dd61e;
    padding: 5px 50px;
  }
`;

const ButtonPurchaseProduct = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  background-color: white;
  font-weight: 700;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid black;
  transition: all 0.2s;
  font-size: 0.8rem;
  svg {
    color: black;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

const ProductoAgotado = styled.div`
  padding: 10px 20px;
  background: #dddddd;
  font-weight: 800;
  color: black;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  border: 2px solid black;
  transition: all 0.5s;
  a {
    background: #b4b6ff;
    box-shadow: #b4b6ff;
    padding: 10px 15px;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    border-radius: 10px;
    border: 2px solid black;
    box-shadow: 0px 0px 15px 6px rgba(11, 38, 161, 0.74);
    -webkit-box-shadow: 0px 0px 15px 6px rgba(11, 38, 161, 0.74);
    -moz-box-shadow: 0px 0px 15px 6px rgba(11, 38, 161, 0.74);
  }
  a:hover {
    box-shadow: 0px 0px 15px 8px rgb(0 41 137);
    -webkit-box-shadow: 0px 0px 15px 8px rgb(0 41 137);
    -moz-box-shadow: 0px 0px 15px 8px rgb(0 41 137);
  }
`;

const GameDetailPanel = () => {
  const [numberInput, setNumberInput] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [animation, setAnimation] = useState(false);

  const { juegoIdParam } = useParams();
  const conversionJuegoIdParamToNumber = Number(juegoIdParam);

  const products = useSelector((state: RootStateType) => state.productsSlice.products);

  const productsInCart = useSelector((state: RootStateType) => state.productsSlice.productsInCart);

  const dispatch = useDispatch<dispatchType>();
  const findJuegoWitdIdParam = () => {
    return products.filter((prod: ProductsType) => prod.id === conversionJuegoIdParamToNumber);
  };
  const product = findJuegoWitdIdParam()[0];

  const handleInputValue = (e: React.MouseEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    if (
      value === "+" &&
      numberInput >= handleProductStock(productsInCart, { ...product, quantity: numberInput })
    )
      return;
    if (value === "+") return setNumberInput(numberInput + 1);
    if (value === "-" && numberInput <= 1) return;
    if (value === "-") return setNumberInput(numberInput - 1);
  };

  const handleAddProductToCart = (): void => {
    setAnimation(true);
    setDisabled(true);
    dispatch(
      productsInCartAction({
        ...product,
        quantity: numberInput,
        price: product.price * (1 - product.discount / 100),
      })
    );
    setTimeout(() => {
      setAnimation(false);
      setDisabled(false);
      setNumberInput(1);
    }, 2000);
  };

  useEffect(() => {
    findJuegoWitdIdParam();
  }, [juegoIdParam]);

  return (
    <>
      <ContainerMain>
        <ContainerImg>
          <img src={product.imgGame} alt="Imagen juego portada" />
        </ContainerImg>
        <ContainerInfoProduct>
          <h2>{product.nameGame}</h2>
          <PriceWithoutDiscount>
            <span>
              ${product.price.toFixed(2)} {product.divisa}
            </span>
            <span>{product.discount}% OFF</span>
            <span>
              ${(product.price * (1 - product.discount / 100)).toFixed(2)} {product.divisa} c/u
            </span>
          </PriceWithoutDiscount>

          {handleProductStock(productsInCart, { ...product, quantity: numberInput }) === 0 ? (
            <ProductoAgotado>
              <p>Este producto se ha agotado 😢</p>
              <Link to={"/juegos"}>Volver a juegos</Link>
            </ProductoAgotado>
          ) : (
            <>
              <StockContainerCounter>
                <input type="button" value="-" onClick={handleInputValue} />
                <input
                  type="number"
                  name="quantity"
                  max={handleProductStock(productsInCart, { ...product, quantity: numberInput })}
                  min={1}
                  value={numberInput}
                  step={1}
                  readOnly
                  autoComplete="off"
                />
                <input type="button" value="+" onClick={handleInputValue} />
              </StockContainerCounter>

              <ContainerButtonPurchaseProduct>
                <ButtonPurchaseProduct
                  className={`buttonAddToCart ${animation ? "activeAnimation" : ""}`}
                  onClick={handleAddProductToCart}
                  disabled={disabled}
                >
                  {animation ? <BsFillCheckCircleFill /> : "Agregar al carrito"}
                </ButtonPurchaseProduct>
              </ContainerButtonPurchaseProduct>
            </>
          )}
        </ContainerInfoProduct>
      </ContainerMain>
    </>
  );
};

export default GameDetailPanel;
