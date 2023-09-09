import { createSlice } from "@reduxjs/toolkit";

interface InterfaceAuthSlice {
  toggleForm: boolean;
}

const initialState: InterfaceAuthSlice = {
  toggleForm: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    toggleFormAction: (state) => {
      return { ...state, toggleForm: !state.toggleForm };
    },
  },
});

export const { toggleFormAction } = authSlice.actions;
export default authSlice.reducer;
