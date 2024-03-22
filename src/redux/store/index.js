import reducerWeather from "../reducers";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: reducerWeather
});
export default store;
