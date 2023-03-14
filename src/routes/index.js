import config from "../config"
import ProductDetails from "../pages/ProductDetails";
import Home from "../pages/Home";
const publicRoutes = [
    { path: config.routes.home, component:  Home},
    { path: config.routes.product_details, component:  ProductDetails},


];


const privateRoutes = [];
export { publicRoutes, privateRoutes };