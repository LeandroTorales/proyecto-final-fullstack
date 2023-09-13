import { createSlice } from "@reduxjs/toolkit";

interface InterfaceAuthSlice {
  toggleForm: boolean;
  currentUser: { nombre: string; email: string } | undefined;
  ordersOfUser: [];
}

const initialState: InterfaceAuthSlice = {
  toggleForm: false,
  currentUser: undefined,
  ordersOfUser: [],
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    toggleFormAction: (state) => {
      return { ...state, toggleForm: !state.toggleForm };
    },
    setDataUserAction: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
    logoutAction: (state) => {
      return { ...state, currentUser: initialState.currentUser };
    },
    ordersOfUserAction: (state, action) => {
      return { ...state, ordersOfUser: action.payload };
    },
  },
});

export const { toggleFormAction, setDataUserAction, logoutAction, ordersOfUserAction } =
  authSlice.actions;
export default authSlice.reducer;
