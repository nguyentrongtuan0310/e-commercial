import configs from '../config';
import { HeaderOnly } from '../layout/HeaderOnly';
import Cart from '../pages/Cart/Cart';
import { Detail } from '../pages/Detail';
import { Home } from '../pages/Home';
import Laptop from '../pages/Laptop/Laptop';
import PaymentInfo from '../pages/PaymentInfo/PaymentInfo';
import Register from '../pages/Register/Register';
import { Sound } from '../pages/Sound';
import Tablet from '../pages/Tablet/Tablet';
import Watch from '../pages/Watch/Watch';
import { Phone } from '../pages/Phone';
const publicRoutes = [
    { component: Home, path: configs.routes.home },
    { component: Phone, path: configs.routes.phone },
    { component: Cart, path: configs.routes.cart, layout: HeaderOnly },
    { component: Tablet, path: configs.routes.tablet },
    { component: Laptop, path: configs.routes.laptop },
    { component: Watch, path: configs.routes.watch },
    { component: Sound, path: configs.routes.sound },
    { component: Detail, path: configs.routes.detail },
    { component: Detail, path: configs.routes.all },
    { component: PaymentInfo, path: configs.routes.payment, layout: HeaderOnly },
    { component: Register, path: configs.routes.register, layout: HeaderOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
