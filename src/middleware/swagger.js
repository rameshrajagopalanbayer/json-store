const swagger = require('swagger-tools')
const swaggerConfig = require('../../swagger.json')
const api = require('../api')
const port = parseInt(process.env.PORT || 3542, 10);

swaggerConfig.host = process.env.HOST_NAME || `localhost:${port}`
swaggerConfig.paths = api.swaggerPaths
swaggerConfig.definitions = api.swaggerDefintions

module.exports = (app, appBaseUrl) => swagger.initializeMiddleware(swaggerConfig, (middleware) => {
    app.use(middleware.swaggerUi({
        apiDocs: `${appBaseUrl}/v1/api-docs`,
        swaggerUi: `${appBaseUrl}/v1/docs`
    }));
})
