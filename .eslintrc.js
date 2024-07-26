module.exports = {
    extends: [
        "eslint:recommended"
    ],
    "env": {
        "mocha": true,
        "node": true,
        "browser": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            
        }
    },
    "plugins": [
        
    ],
    "globals": {
        "should": true,
        "sinon": true
    },
    rules: {
        "no-mixed-spaces-and-tabs": "off",
        "no-unused-vars": "off",
        "no-console": "off"
    }
}
