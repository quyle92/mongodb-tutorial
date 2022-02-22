const mongoose = require('mongoose');

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/testaroo');

mongoose.connection.once('open', function(){
    console.log('Connected to MongoDB');
}).on('error', function (error){
    console.log('Error: ' + error)
})