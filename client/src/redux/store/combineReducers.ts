import { Reducer, combineReducers } from "redux";
import toggleMenuSlice from "../slices/toggleMenuSlice";
import changeFilterOrderGamesSlice from "../slices/filtersGames/changeFilterOrderGamesSlice";
import toggleFiltersMenu from "../slices/filtersGames/toggleFiltersMenu";
import paginationGamesSlice from "../slices/paginationGames/paginationGamesSlice";
import productsSlice from "../slices/products/products";

interface InterfaceRootState {
  toggleMenuSlice: ReturnType<typeof toggleMenuSlice>;
  changeFilterOrderGamesSlice: ReturnType<typeof changeFilterOrderGamesSlice>;
  toggleFiltersMenu: ReturnType<typeof toggleFiltersMenu>;
  paginationGamesSlice: ReturnType<typeof paginationGamesSlice>;
  productsSlice: ReturnType<typeof productsSlice>;
}

export const reducers: Reducer<InterfaceRootState> = combineReducers({
  toggleMenuSlice: toggleMenuSlice,
  changeFilterOrderGamesSlice: changeFilterOrderGamesSlice,
  toggleFiltersMenu: toggleFiltersMenu,
  paginationGamesSlice: paginationGamesSlice,
  productsSlice: productsSlice,
});
