const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test7', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', console.error);
mongoose.connection.on('open', function() {
    console.log('Database connection established ...');
    // create a user document Leila, and store it in the database
    // documents: instances of a model
    // models: constructed with schemas
    // schemas: blueprints for models
    // 1. create a schema
    // 2. create a model based on this schema
    // 3. create a document (instance of the model)
    const userSchema = new mongoose.Schema({
        name: String,
        age: {
            type: Number
        }
    });
    const User = mongoose.model('User', userSchema);
    const Leila = new User({
        name: 'Leila',
        age: 27
    });
    Leila.save().then(() => {
        console.log(Leila);
    }).catch((error) => {
        console.log('Error', error);
    });
});