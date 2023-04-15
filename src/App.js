import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Product from "./pages/Products/Product";
import ListProduct from "./pages/ListProduct/ListProduct";
import ListUser from "./pages/ListUser/ListUser";
import AddProduct from "./pages/AddProduct/AddProduct";
import { Detail } from "./pages/Detail";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";

import PaymentInfo from "./pages/PaymentInfo/PaymentInfo";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path=":a?" element={<Product />} />
          <Route path=":id/:similar" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/register" element={<Register />} />
          <Route path="/cart/:payment" element={<PaymentInfo />} />

         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
