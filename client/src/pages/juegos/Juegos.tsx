import styled from "styled-components";
import ContainerGames from "../../components/juegosPage/ContainerGames";
import FiltersGames from "../../components/juegosPage/FiltersGames";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterOrder } from "../../redux/slices/filtersGames/changeFilterOrderGamesSlice";
import { RootStateType, dispatchType } from "../../redux/store";
import { VscSettings } from "react-icons/vsc";
import { toggleFiltersMenuAction } from "../../redux/slices/filtersGames/toggleFiltersMenu";
import { products } from "../../data/products";
import { numberOfProductsByPage } from "../../constants/constants";

const ContainerMain = styled.div`
  min-height: 100vh;
  padding-top: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const ContainerCounterItems = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px;
  .text--showItemsCount {
    width: 80%;
    font-size: 1.3rem;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  select {
    padding: 10px;
    font-size: 1.2rem;
    gap: 30px;
    display: flex;
  }

  .container--filtersOpenSvg {
    display: none;

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-size: 1.2rem;
      background-color: transparent;
      color: white;
      border: none;
    }
    button svg {
      color: white;
    }
    button p {
      text-transform: uppercase;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    height: 10%;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .text--showItemsCount {
      width: 100%;
      text-align: center;
    }
    .container--filtersOpenSvg {
      display: flex;
    }
  }
`;

const WrapperGamesYFilters = styled.div`
  min-height: 95vh;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 850px) {
    height: 90%;
  }
`;

const Juegos = () => {
  const page = useSelector((state: RootStateType) => state.paginationGamesSlice.page);
  const dispatch = useDispatch<dispatchType>();
  const numberOfProducts = products.length;

  return (
    <>
      <ContainerMain>
        <ContainerCounterItems>
          <div className="container--filtersOpenSvg">
            <button type="button" onClick={() => dispatch(toggleFiltersMenuAction())}>
              <VscSettings />
              <p>Filtrar</p>
            </button>
          </div>
          <p className="text--showItemsCount">
            Mostrando 1-{page * numberOfProductsByPage} de {numberOfProducts} resultados
          </p>
          <form method="get">
            <select onChange={(e) => dispatch(changeFilterOrder(e.target.value))}>
              <option value="altoBajo">Ordenar por precio: alto a bajo</option>
              <option value="bajoAlto">Ordenar por precio: bajo a alto</option>
              <option value="ascendente">Ordenar por: ascendente</option>
              <option value="descendente">Ordenar por: descendente</option>
            </select>
          </form>
        </ContainerCounterItems>
        <WrapperGamesYFilters>
          <ContainerGames />
          <FiltersGames />
        </WrapperGamesYFilters>
      </ContainerMain>
    </>
  );
};

export default Juegos;
