import Login from 'pages/Login';
import ProductDetails from 'pages/ProductDetails';
import Register from 'pages/Register';
import config from '../config';
// import chitietsp from "../pages/Chitietsp";
import Home from '../pages/Home';
import Cart from 'pages/Cart/Cart';
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.productdetails, component: ProductDetails },
    { path: config.routes.register, component: Register },
    { path: config.routes.login, component: Login },
    { path: config.routes.cart, component: Cart },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
