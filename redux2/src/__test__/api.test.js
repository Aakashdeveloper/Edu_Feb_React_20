let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing my api', () => {
    it('should return status as 200',(done) => {
        chai
            .request('http://localhost:8900')
            .get('/')
            .then((res) => {
                expect(res).to.have.status(200)
                done()
            })
            .catch((err) => {
                throw err
            })
    })
    it('should return status as 200',(done) => {
        chai
            .request('http://localhost:8900')
            .get('/articles')
            .then((res) => {
                expect(res).to.have.status(200)
                done()
            })
            .catch((err) => {
                throw err
            })
    })
})


