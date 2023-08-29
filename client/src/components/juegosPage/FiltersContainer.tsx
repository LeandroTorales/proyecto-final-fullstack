import { useDispatch } from "react-redux";
import styled from "styled-components";
import { dispatchType } from "../../redux/store";
import { changeFilterParameter } from "../../redux/slices/filtersGames/changeFilterOrderGamesSlice";

const FiltersContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 13px 0px;
  h3 {
    font-size: 1.3rem;
  }
  button {
    font-size: 1.1rem;
    background-color: transparent;
    border: none;
    color: white;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const FiltersContainer = () => {
  const dispatch = useDispatch<dispatchType>();
  const handleFilterParameter = (filter: string): void => {
    const filterParameter = filter.toLowerCase();
    dispatch(changeFilterParameter(filterParameter));
  };

  return (
    <>
      <FiltersContainerStyled>
        <h3>Filtrar por categoría</h3>
        <button onClick={() => handleFilterParameter("deportes")}>Deportes</button>
        <button onClick={() => handleFilterParameter("accion")}>Acción</button>
        <button onClick={() => handleFilterParameter("miedo")}>Miedo</button>
        <button onClick={() => handleFilterParameter("aventuras")}>Aventuras</button>
        <button onClick={() => handleFilterParameter("estrategias")}>Estrategia</button>
        <button onClick={() => handleFilterParameter("rol")}>Rol</button>
        <button onClick={() => handleFilterParameter("plataformas")}>Plataformas</button>
        <button onClick={() => handleFilterParameter("puzzle")}>Puzzle</button>
      </FiltersContainerStyled>
    </>
  );
};

export default FiltersContainer;
