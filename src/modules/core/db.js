import mongoose from 'mongoose';

function dbConnect() {
  mongoose.connect('mongodb://localhost/express-with-Vic', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, //
    useFindAndModify: false, //needs to be added according to the mongoose documentation
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('CONNECTED');
  });
}

export default dbConnect;

//Mongoose - provides a straight forward, schema -based solutions to model your app data
//It includes built-in type-casting, validation, query building, business logic hooks and more
