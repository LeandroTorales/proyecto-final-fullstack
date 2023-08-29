import { createSlice } from "@reduxjs/toolkit";

interface ChangeFilterOrderGames {
  filterName: string;
  inputValueSearch: string;
  filterParameter: string;
}

const initialState: ChangeFilterOrderGames = {
  filterName: "altoBajo",
  inputValueSearch: "",
  filterParameter: "",
};

const changeFilterOrderGamesSlice = createSlice({
  name: "changeFilterOrderGames",
  initialState: initialState,
  reducers: {
    changeFilterOrder: (state, action) => {
      return { ...state, filterName: action.payload };
    },
    inputValueSearch: (state, action) => {
      return { ...state, inputValueSearch: action.payload };
    },
    changeFilterParameter: (state, action) => {
      return { ...state, filterParameter: action.payload };
    },
  },
});

export const { changeFilterOrder, inputValueSearch, changeFilterParameter } =
  changeFilterOrderGamesSlice.actions;
export default changeFilterOrderGamesSlice.reducer;
