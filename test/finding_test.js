const assert = require('assert');
const MarioChar = require('../models/mariochar');



describe('Reading Details of char', () => {

    var char;
    // this will run before running every test
    beforeEach((done) => {
        // Creating a new Instance of char Model
        char = new MarioChar({ name: 'Shriyam' });
        char.save()
            .then(() => { console.log('done creating'); done(); }).catch(done);
    })

    it('Finds char with the name', (done) => {
        MarioChar.findOne({ name: 'Shriyam' })
            .then((char) => {
                // assert(char.name !== 'Shriyam');
                assert(char.name === 'Shriyam');
                done();
            }).catch(done);
    })

    it('Finds char with ID', (done) => {
        MarioChar.findOne({ _id: char._id })
            .then((rs) => {
                assert(rs._id.str === char._id.str);
                done();
            }).catch(done);
    })
})
