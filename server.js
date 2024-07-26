const express = require('express');
const compression = require('compression');
const path = require('path');
const pingPage = require('@monsantoit/ping-page')
const bodyParser = require('body-parser')


const swaggerMiddleware = require('./src/middleware/swagger')
const api = require('./src/api')
const pkg = require('./package.json')
const appBaseUrl = ''
const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(compression());
app.get(`/ping|${appBaseUrl}/ping`, pingPage(pkg)); // for accessing through ocelot

let localUser = null
if ( process.env.NODE_ENV !== 'production') {
    app.use(require('./src/middleware/cors'))
    localUser = process.env.USER
}

app.use('/', (req, res, next) => {
    req.userId = req.headers['user-id'] || localUser
    req.clientId = req.headers['client-id']
    next()
})

app.use(`${appBaseUrl}/`, api)

swaggerMiddleware(app, appBaseUrl)
app.use('/*', (err, req, res, next) => {
    console.error(err); // handle uncaught errors
    next();
});

const setupServer = () => {
    const port = parseInt(process.env.PORT || 3542, 10);
    const hostname = process.env.NODE_ENV === 'production' ? undefined : '127.0.0.1' // unlike default, only reachable from this machine
    const server = app.listen(port, hostname, () => {
        const address = server.address();
        const url = `http://${address.host || 'localhost'}:${port}`;
        console.info(`Listening at ${url}${appBaseUrl}/`);
        console.info(`Swagger at ${url}${appBaseUrl}/v1/docs`)
    });

    return server
}

const start = async () => {
    return setupServer()
}

module.exports = {start}
