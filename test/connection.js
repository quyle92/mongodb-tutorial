const mongoose = require('mongoose');

before(function(done){

    //Connect to MongoDB
    mongoose.connect('mongodb://localhost:27017/testaroo');

    mongoose.connection.once('open', function(){
        console.log('Connected to MongoDB');
        done();
    }).on('error', function (error){
        console.log('Error: ' + error)
    });

});

// runs before each test
beforeEach((done) => {
    mongoose.connection.collections.mariochars.drop(() => {
        console.log('done dropping');
        done();
    });
});