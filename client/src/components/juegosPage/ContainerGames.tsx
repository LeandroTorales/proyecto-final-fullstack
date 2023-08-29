import styled from "styled-components";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType, dispatchType } from "../../redux/store/index";
import { numberOfProductsByPage } from "../../constants/constants";
import { useEffect } from "react";
import { changeOrderOfProducts } from "../../redux/slices/products/products";
import { changeFilterParameter } from "../../redux/slices/filtersGames/changeFilterOrderGamesSlice";
import LinkToViewMoreProduct from "./redirectViewMoreProduct/LinkToViewMoreProduct";
import { ProductsType } from "../../data/products";

const ContainerGamesStyled = styled.div`
  min-height: 100%;
  width: 75%;
  background: -webkit-linear-gradient(to right, #051024, #001d51);
  background: linear-gradient(to right, #051024, #001d51);
  display: flex;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-between;

  .container--products {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 90%;
    width: 100%;
    gap: 20px;
  }

  .container--main__product {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    flex-direction: column;
    width: 275px;
    height: 275px;
    padding: 10px 20px;
    cursor: pointer;
    img {
      width: 100px;
      height: auto;
    }
    p {
      font-size: 1.1rem;
      text-align: center;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    div span {
      font-size: 0.9rem;
      font-weight: 600;
    }
    div span:nth-child(1) {
      text-decoration: line-through;
      text-decoration-thickness: 2px;
      text-decoration-color: #000000;
    }
  }

  .hoverDisplay {
    display: none;
  }

  .button--verMas {
    display: none;
  }

  div div:hover {
    .hoverDisplay {
      background-color: #00000052;
      width: 275px;
      height: 275px;
      position: absolute;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .button--verMas {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      padding: 10px 20px;
      border-radius: 10px;
      border: 3px solid black;
      font-weight: 700;
      transition: all 0.1s;
      cursor: pointer;
    }
    .button--verMas:hover {
      color: #d10101;
    }
  }

  .active {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const ContainerCleanFilters = styled.div`
  width: 100%;
  display: none;

  button {
    padding: 5px 10px;
    background: white;
    font-weight: 700;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 20px;
  }
  button:hover {
    background-color: black;
    color: white;
  }
`;

const ContainerGames = () => {
  const page = useSelector((state: RootStateType) => state.paginationGamesSlice.page);

  const nameFilter = useSelector(
    (state: RootStateType) => state.changeFilterOrderGamesSlice.filterName
  );

  const filterParameter = useSelector(
    (state: RootStateType) => state.changeFilterOrderGamesSlice.filterParameter
  );

  const products = useSelector((state: RootStateType) => state.productsSlice.products);
  const copyCart = [...products];

  const dispatch = useDispatch<dispatchType>();

  const maxOfGames = products.length / numberOfProductsByPage;

  const ordenarProductos = (): void => {
    const productsOrdenados = [...products];
    switch (nameFilter) {
      case "altoBajo":
        productsOrdenados.sort((a, b) => b.price - a.price);
        break;
      case "bajoAlto":
        productsOrdenados.sort((a, b) => a.price - b.price);
        break;
      case "ascendente":
        productsOrdenados.sort((a, b) => a.nameGame.localeCompare(b.nameGame));
        break;
      case "descendente":
        productsOrdenados.sort((a, b) => b.nameGame.localeCompare(a.nameGame));
        break;
      default:
        break;
    }
    dispatch(changeOrderOfProducts(productsOrdenados));
  };

  useEffect(() => {
    ordenarProductos();
  }, [nameFilter]);

  return (
    <>
      <ContainerGamesStyled>
        <ContainerCleanFilters className={`${filterParameter.length !== 0 ? "active" : ""}`}>
          <button onClick={() => dispatch(changeFilterParameter(""))}>Limpiar filtros</button>
        </ContainerCleanFilters>
        <div className="container--products">
          {filterParameter.length !== 0
            ? copyCart
                .filter((prod: ProductsType) => prod.categories.includes(filterParameter))
                .slice(0, (page - 1) * numberOfProductsByPage + numberOfProductsByPage)
                .map((prod: ProductsType, index: any) => (
                  <div key={index} className="container--main__product">
                    <img src={prod.imgGame} alt={`Imagen de juego ${prod.nameGame}`} />
                    <p>{prod.nameGame}</p>
                    <div>
                      <span>
                        ${prod.price} {prod.divisa}
                      </span>
                      <span>${(prod.price - prod.price * (prod.discount / 100)).toFixed(2)}</span>
                      <span>{prod.discount}% OFF</span>
                    </div>
                    <div
                      className="hoverDisplay"
                      onClick={() => dispatch(changeFilterParameter(""))}
                    >
                      <LinkToViewMoreProduct idProduct={prod.id}>
                        <button type="button" className="button--verMas">
                          Ver más
                        </button>
                      </LinkToViewMoreProduct>
                    </div>
                  </div>
                ))
            : copyCart
                .slice(0, (page - 1) * numberOfProductsByPage + numberOfProductsByPage)
                .map((prod: ProductsType, index: any) => (
                  <div key={index} className="container--main__product">
                    <img src={prod.imgGame} alt={`Imagen de juego ${prod.nameGame}`} />
                    <p>{prod.nameGame}</p>
                    <div>
                      <span>
                        ${prod.price} {prod.divisa}
                      </span>
                      <span>${(prod.price - prod.price * (prod.discount / 100)).toFixed(2)}</span>
                      <span>{prod.discount}% OFF</span>
                    </div>
                    <div
                      className="hoverDisplay"
                      onClick={() => dispatch(changeFilterParameter(""))}
                    >
                      <LinkToViewMoreProduct idProduct={prod.id}>
                        <button type="button" className="button--verMas">
                          Ver más
                        </button>
                      </LinkToViewMoreProduct>
                    </div>
                  </div>
                ))}
        </div>
        <Pagination page={page} dispatch={dispatch} maxOfGames={maxOfGames} />
      </ContainerGamesStyled>
    </>
  );
};

export default ContainerGames;
