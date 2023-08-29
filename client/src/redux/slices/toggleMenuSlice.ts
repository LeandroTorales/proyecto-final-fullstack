import { createSlice } from "@reduxjs/toolkit";

interface InterfaceToggleMenuSlice {
  activeMenu: boolean;
}

const initialState: InterfaceToggleMenuSlice = {
  activeMenu: false,
};

const toggleMenuSlice = createSlice({
  name: "toggleMenu",
  initialState: initialState,
  reducers: {
    toggleMenu: (state) => {
      return { ...state, activeMenu: !state.activeMenu };
    },
  },
});

export const { toggleMenu } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;
