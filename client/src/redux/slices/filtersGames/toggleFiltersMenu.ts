import { createSlice } from "@reduxjs/toolkit";

interface ToggleFiltersMenu {
  isActiveMenu: boolean;
}

const initialState: ToggleFiltersMenu = {
  isActiveMenu: false,
};

const toggleFiltersMenu = createSlice({
  name: "toggleFilterMenu",
  initialState: initialState,
  reducers: {
    toggleFiltersMenuAction: (state) => {
      return { ...state, isActiveMenu: !state.isActiveMenu };
    },
  },
});

export const { toggleFiltersMenuAction } = toggleFiltersMenu.actions;
export default toggleFiltersMenu.reducer;
