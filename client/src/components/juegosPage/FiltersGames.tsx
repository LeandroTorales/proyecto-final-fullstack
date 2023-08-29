import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType, dispatchType } from "../../redux/store/index";
import { toggleFiltersMenuAction } from "../../redux/slices/filtersGames/toggleFiltersMenu";
import "./styles.css";
import { inputValueSearch } from "../../redux/slices/filtersGames/changeFilterOrderGamesSlice";
import { useEffect } from "react";
import FiltersContainer from "./FiltersContainer";

const ContainerFilters = styled.div`
  width: 25%;
  min-height: 100%;
  background-color: #000000c9;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 10px;
  gap: 20px;

  .searchContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    form {
      display: flex;
      border: 1px solid white;
      align-items: center;
      justify-content: center;
      button {
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 5px;
      }
      button:active {
        background-color: #f0f0f0;
        svg {
          color: black;
        }
      }
    }
    input {
      border: none;
      padding: 10px;
      color: white;
      font-size: 1rem;
      background-color: transparent;
      border-right: 2px solid black;
    }
  }

  @media (max-width: 1100px) {
    .searchContainer form input {
      width: 90%;
    }
  }

  input:focus {
    box-shadow: none;
    outline: none;
  }
  input[type="search"]::-webkit-clear-button {
    display: none;
  }

  .container--closeFiltersX {
    display: none;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
  }

  .XCloseFilters {
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    outline: black;
  }

  @media (max-width: 850px) {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: -2000px;
    z-index: 9999;
    transition: all 0.5s;
    overflow-y: scroll;
    .container--closeFiltersX {
      display: flex;
    }
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  .active {
    background-color: brown;
  }
`;

const LineDivisory = styled.div`
  width: 100%;
  min-height: 2px;
  background-color: grey;
  display: none;
  @media (max-width: 850px) {
    display: flex;
  }
`;

const FiltersGames = () => {
  const dispatch = useDispatch<dispatchType>();
  const toggleFilterMenu = useSelector(
    (state: RootStateType) => state.toggleFiltersMenu.isActiveMenu
  );

  const inputValueState = useSelector(
    (state: RootStateType) => state.changeFilterOrderGamesSlice.inputValueSearch
  );

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(inputValueSearch(e.target.value));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(inputValueSearch(inputValueState));
    setTimeout(() => {
      dispatch(toggleFiltersMenuAction());
    }, 1000);
  };
  useEffect(() => {
    console.log(inputValueState);

  }, [inputValueState]);

  return (
    <>
      <ContainerFilters id={`${toggleFilterMenu ? "activeMenu" : ""}`}>
        <div className="container--closeFiltersX">
          <span onClick={() => dispatch(toggleFiltersMenuAction())} className="XCloseFilters">
            X
          </span>
        </div>
        <LineDivisory />
        <div className="searchContainer">
          <form role="search" method="get" onSubmit={handleSubmit}>
            <input
              type="search"
              id="text--searchId"
              placeholder="Buscar juegos"
              autoComplete="off"
              onChange={handleInputValue}
            />
            <button type="submit">
              <ImSearch />
            </button>
          </form>
        </div>
        <LineDivisory />
        <FiltersContainer />
      </ContainerFilters>
    </>
  );
};

export default FiltersGames;
