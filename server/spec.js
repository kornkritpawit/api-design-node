var app = require('./server');
var request = require('supertest'); //calling our server
var expect = require('chai').expect; //calling assertino

// TODO: make tests for the other CRUD routes
// DELETE, UPDATE, POST, PUT, GET ONE
// to run the test type mocha server/specs.js
require('colors');

describe('[LIONS]'.yellow, function(){

  it('should get all lions', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)  //regeex
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('array');
        done();
      })
  });
  it('should create a lion', function(done) {
    request(app)
      .post('/lions')
      .send({
        name: 'Mufasa',
        age: 100,
        pride: 'Evil lions',
        gender:'male'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      // .expect(201)
      .expect(400)
      .end(function(err, resp) {
        var mufasa = resp.body;
        var lion = {
        name: 'Mufasa',
        id: '1',
        age: 100,
        pride: 'Evil lions',
        gender:'male'
      }
        expect(mufasa.name).to.equal('Mufasa');
        expect(mufasa).to.eql(lion);
        expect(resp.body).to.be.an('object');
        done();
      })
  });

  it('should delete a lion', function(done) {
    request(app)
      .post('/lions')
      .send({
        name: 'test lion',
        age: 100,
        pride: 'test lion',
        gender:'female'
      })
      .set('Accept', 'application/json')
      .end(function(err, resp) {
        var lion = resp.body;
        request(app)
          .delete('/lions/' + lion.id)
          .end(function(err, resp) {
            expect(resp.body).to.eql(lion);
            done();
          });
      })
  });

  it('should update a lion', function(done) {
    request(app)
      .post('/lions')
      .send({
        name: 'test lion',
        age: 100,
        pride: 'test lion',
        gender:'female'
      })
      .set('Accept', 'application/json')
      .end(function(err, resp) {
        var lion = resp.body;
        request(app)
          .put('/lions/' + lion.id)
          .send({
            name: 'new name'
          })
          .end(function(err, resp) {
            expect(resp.body.name).to.equal('new name');
            done();
          });
      })
  });
});


