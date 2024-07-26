const {upsertItem} = require("../service/upsertJson");
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

router.put('/v1/json', (req, res, next) => {
    const response = upsertItem(req.body)
    res.json(response)
})

router.swaggerPaths = doc
router.swaggerDefintions = {}
module.exports = router
