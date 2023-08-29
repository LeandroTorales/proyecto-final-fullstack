import React from "react";
import styled from "styled-components";
import { dispatchType } from "../../redux/store";
import {
  addPageAction,
  collapsePageAction,
} from "../../redux/slices/paginationGames/paginationGamesSlice";
import { scrollToTop } from "../../utils/scrollToTop";

const ContainerPagination = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 30px;
  button {
    padding: 5px 40px;
    font-size: 1.2rem;
    font-weight: 700;
    background-color: #ffca9b;
    color: black;
    cursor: pointer;
    transition: all 0.1s;
  }
  button:hover {
    background-color: white;
    color: black;
  }
`;

interface Props {
  page: number;
  maxOfGames: number;
  dispatch: dispatchType;
}

const Pagination = ({ page, dispatch, maxOfGames }: Props) => {
  const handlePagination = (): void => {
    dispatch(addPageAction());
  };

  const handlePaginationMenosPage = (): void => {
    dispatch(collapsePageAction());
    scrollToTop();
  };

  return (
    <>
      {page === maxOfGames ? (
        <ContainerPagination>
          <button onClick={handlePaginationMenosPage}>Ver menos</button>
        </ContainerPagination>
      ) : (
        <ContainerPagination>
          <button onClick={handlePagination}>Ver más juegos</button>
        </ContainerPagination>
      )}
    </>
  );
};

export default Pagination;
