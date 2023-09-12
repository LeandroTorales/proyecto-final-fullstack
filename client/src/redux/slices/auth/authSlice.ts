import { createSlice } from "@reduxjs/toolkit";

interface InterfaceAuthSlice {
  toggleForm: boolean;
  currentUser: { nombre: string; email: string } | undefined;
}

const initialState: InterfaceAuthSlice = {
  toggleForm: false,
  currentUser: undefined,
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
  },
});

export const { toggleFormAction, setDataUserAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;
