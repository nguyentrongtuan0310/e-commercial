import { combineReducers } from "redux";
import count from "../feature/Count/countSlice";
import  loginSlice  from "../pages/Auth/Login/loginSlice";
import CartSlice  from "../pages/Cart/CartSlice";
import  PaymentSlice  from "../pages/PaymentInfo/PaymentSlice";
import  productSlice  from "../pages/Products/components/productSlice";
const rootReducer = combineReducers({
    count ,
    products: productSlice,
    cart: CartSlice,
    login: loginSlice,
    payment: PaymentSlice,
})
export default rootReducer