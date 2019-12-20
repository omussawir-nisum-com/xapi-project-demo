//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let Employee = require('../app/service/employeeService');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let index = require('../index');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Employees', () => {
  describe('/GET employee', () => {
      it('it should GET 200 status', (done) => {
        chai.request(index)
            .get('/employee')
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
      });
  });
});