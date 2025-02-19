
const UserRouter = require('./UserRouter')



const routes = (app) => {
    const routers = {
        '/api/user': UserRouter,

    };
    for (const [path, router] of Object.entries(routers)) {
        if (typeof router === 'function' || (typeof router === 'object' && router.stack)) {
            console.log(`Mounting router for ${path}`);
            app.use(path, router);
        } else {
            console.error(`Invalid middleware for ${path}:`, router);
        }
    }


}
module.exports = routes