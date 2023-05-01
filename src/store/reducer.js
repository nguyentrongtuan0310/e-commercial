import { combineReducers } from 'redux';

import CartSlice from '../pages/Cart/CartSlice';
import PaymentSlice from '../pages/PaymentInfo/PaymentSlice';
import productSlice from '../features/productSlice';
import ModalAppSlice from '../components/ModalApp/ModalAppSLice';
import DrawerSlice from '../components/Drawer/DrawerSlice';

const rootReducer = combineReducers({
    products: productSlice,
    cart: CartSlice,
    payment: PaymentSlice,
    modal: ModalAppSlice,
    drawer: DrawerSlice,
});
export default rootReducer;
