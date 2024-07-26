const router = require('express').Router();

let doc = {}

const tags = ['Example']

doc['/v1/example'] = {
    get: {
        tags: tags,
        operationId: 'example',
        summary: 'example GET call',
        responses: {
            200: {description: 'Success'}
        }
    }
}

router.get('/v1/example', (req, res, next) => {
    res.json({result: 'success'})
})

router.swaggerPaths = doc
router.swaggerDefintions = {}
module.exports = router
