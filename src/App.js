

import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Admin from './pages/Admin/Admin';
import Product from './pages/Products/Product';
import ListProduct from './pages/ListProduct/ListProduct';
import ListUser from './pages/ListUser/ListUser';
import AddProduct from './pages/AddProduct/AddProduct';
import { Detail } from './pages/Detail';
import Cart from './pages/Cart/Cart';
import Register from './pages/Auth/Register/Register';
import Login from './pages/Auth/Login/login';
import PaymentInfo from './pages/PaymentInfo/PaymentInfo';
function App() {
 
  return (
    <div >
    
        <Router>
              <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/register' element={<Register />} />
                <Route path='/home' element={<Product />} />
                <Route path='/home/:id' element={<Detail />} />
                <Route path='/cart' element={<Cart/>}>
                

                </Route>
                <Route path='/cart/:payment' element={<PaymentInfo />} />


                    <Route path='/' element={<Admin />}> 
                        <Route path='user' element={<ListUser />} />
                        <Route path='product' element={<ListProduct />} />                 
                  </Route>
                        <Route path='/add/:id?' element={<AddProduct />}/>
              </Routes>
                 
        </Router>
      
    </div>
  );
}

export default App;
