import Login from "pages/Login";
import ProductDetails from "pages/ProductDetails";
import Register from "pages/Register";
import config from "../config"
// import chitietsp from "../pages/Chitietsp";
import Home from "../pages/Home";
const publicRoutes = [
    { path: config.routes.home, component:  Home},
    { path: config.routes.productDetail, component:  ProductDetails},
    { path: config.routes.register, component:  Register},
    { path: config.routes.Login, component:  Login},


];


const privateRoutes = [];
export { publicRoutes, privateRoutes };