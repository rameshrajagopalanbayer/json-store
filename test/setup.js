const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

// example of using the should DSL without having to import it anywhere
// see chai docs
global.should = chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);
global.sinon = sinon;

