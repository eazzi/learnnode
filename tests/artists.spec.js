
//database connection
var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/nodelearn');

//unit under test
var Artist = require('./../models/artists');

//Assertion library
var expect = require('chai').expect;

describe('Artist model', function(){

  beforeEach(function(done){
    Artist.remove(done);

  });

  afterEach(function(done){
    Artist.remove(done);

  })

  it('Should save a new artist', function(done){
    Artist.create({
      name: 'My Band',
      slug: 'my-band'
    }, function(err, artist){
        expect(err).to.not.exist;
        expect(artist._id).to.exist;
        expect(artist.name).to.equal('My Band');
        expect(artist.slug).to.equal('my-band');
        //console.log(err, artist);
        done();
    });

  });

  it('Should require a name', function(done){
    Artist.create({
      slug: 'my-band'
    }, function(err, artist){
        expect(err).to.exist;
        expect(String(err)).to.match(/is required/);
        done();
    });

  });

});
