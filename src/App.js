import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./Login";
import Portal from "./Portal";
import Dashboard from './Dashboard';
import Createuser from './Createuser';
import User from './User';
import Product from './Product';
import Viewuser from './Viewuser';
import Useredit from './Useredit';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Login/>}/>
      <Route path ="/portal" element={<Portal/>}>
      <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="users" element={<User/>}/>
          <Route path="user/create" element={<Createuser/>}/>
          <Route path="/portal/products" element={<Product/>}/>
          <Route path="user/view/:userId" element={<Viewuser/>}/>
          <Route path="user/edit/:userId" element={<Useredit/>}/>
          </Route>
    </Routes>

    </BrowserRouter>
   
  );
}

export default App;
