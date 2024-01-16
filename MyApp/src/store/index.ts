import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./reducers/loading";


const store = configureStore({
  reducer: {loading:loadingReducer},
});
export default store;