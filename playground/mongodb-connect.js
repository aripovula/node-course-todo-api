const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) return console.log('Unable to connect to MongoDb');
  console.log('Connected to MongoDb');

  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Homework to do',
    completed: false
  }, (error, result) => {
    if (error) return console.log('Unable to insert to MongoDb', error);
    console.log(JSON.stringify(result.ops, undefined, 4));
  });

  // db.collection('Users').insertOne({
  //   name: 'James',
  //   age: 22,
  //   location: 'Aceland'
  // }, (error, result) => {
  //   if (error) return console.log('Unable to insert to MongoDb', error);
  //   console.log(JSON.stringify(result.ops, undefined, 4));
  // });


  client.close();
});
