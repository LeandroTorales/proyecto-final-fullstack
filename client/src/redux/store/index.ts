import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./combineReducers";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootStateType = ReturnType<typeof store.getState>; //Cuando se invoque el selector poner de tipado el RootStateType
export type dispatchType = typeof store.dispatch; // Cuando se invoque el dispatch poner el tipado del useDispatch el dispatchType

export const persistor = persistStore(store);
export default store;
