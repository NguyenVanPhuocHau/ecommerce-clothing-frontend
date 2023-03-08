

const publicRoutes = [
    { path: '/', component: Home },
    

];
const paths = [];
publicRoutes.forEach((element, index) => {
    paths[index] = element.path;
});

const privateRoutes = [];

export { publicRoutes, privateRoutes, paths };
