var mongoose = require('mongoose');
mongoose.connect("mongodb://energy:energybois123@ds131763.mlab.com:31763/energydatabase", {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));