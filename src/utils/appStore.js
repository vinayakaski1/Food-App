import { configureStore } from ("@reduxjs/toolkit");
import reducer   from "./cartSlice";

const appStore = configureStore({
  reducer
})


export default appStore