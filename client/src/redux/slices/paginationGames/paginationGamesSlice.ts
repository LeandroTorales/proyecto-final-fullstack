import { createSlice } from "@reduxjs/toolkit";

interface PaginationGames {
  page: number;
}

const initialState: PaginationGames = {
  page: 1,
};

const paginationGamesSlice = createSlice({
  name: "paginationGamesSlice",
  initialState: initialState,
  reducers: {
    addPageAction: (state) => {
      return { ...state, page: state.page + 1 };
    },
    collapsePageAction: (state) => {
      return { ...state, page: initialState.page };
    },
  },
});

export const { addPageAction, collapsePageAction } = paginationGamesSlice.actions;
export default paginationGamesSlice.reducer;
