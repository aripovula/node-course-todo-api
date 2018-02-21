//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) return console.log('Unable to connect to MongoDb');
  console.log('Connected to MongoDb');

  const db = client.db('TodoApp');



  db.collection('Todos').findOneAndDelete({_id: new ObjectID('5a8d5a9279aa0f94173ca5b2')}).then((result) => {

    console.log(`resulT: ${result}`);
  }, (error) => {
    console.log('Unable to delete');
  });




  client.close();
});
