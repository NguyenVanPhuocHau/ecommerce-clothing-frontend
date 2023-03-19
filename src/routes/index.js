import ProductDetails from "pages/ProductDetails";
import config from "../config"
// import chitietsp from "../pages/Chitietsp";
import Home from "../pages/Home";
const publicRoutes = [
    { path: config.routes.home, component:  Home},
    { path: config.routes.productDetail, component:  ProductDetails},


];


const privateRoutes = [];
export { publicRoutes, privateRoutes };