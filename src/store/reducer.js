import { combineReducers } from "redux";
import count from "../feature/Count/countSlice";

import CartSlice from "../pages/Cart/CartSlice";
import PaymentSlice from "../pages/PaymentInfo/PaymentSlice";
import productSlice from "../pages/Products/components/productSlice";
import ModalAppSlice from "../components/ModalApp/ModalAppSLice";

const rootReducer = combineReducers({
  count,
  products: productSlice,
  cart: CartSlice,

  payment: PaymentSlice,
  modal: ModalAppSlice,
});
export default rootReducer;
