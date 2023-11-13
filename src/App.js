import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/topbar"
import "./app.css"
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <div className="App">
       <Topbar/>
       <div className="others">
          <Sidebar/> 
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<UserList/>}/>
            <Route path="/user/:userId" element={<User/>}/>
             <Route path="/newuser" element={<NewUser/>}/>
             <Route path="/product" element={<ProductList/>}/>
             <Route path="/product/:productId" element={<Product/>}/>
             <Route path="/newProduct" element={<NewProduct/>}/>
           </Routes>
       </div>
    </div>
  );
}

export default App;
