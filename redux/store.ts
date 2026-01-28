// Main store file...!

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/redux/reducers/reducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;