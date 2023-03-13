import config from "../config"
import chitietsp from "../pages/Chitietsp";
import Home from "../pages/Home";
const publicRoutes = [
    { path: config.routes.home, component:  Home},
    { path: config.routes.chi, component:  chitietsp},


];


const privateRoutes = [];
export { publicRoutes, privateRoutes };