const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Saving records', function() {

    it('saving to DB', function (done) {
        var char = new MarioChar({
            name: "Mario"
        });

        char.save().then(function () {
            assert(!char.isNew);
            done();
        }).catch(done);
    });

});

