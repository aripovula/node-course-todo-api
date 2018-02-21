//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) return console.log('Unable to connect to MongoDb');
  console.log('Connected to MongoDb');

  const db = client.db('TodoApp');

// searching based on other values
  db.collection('Todos').find({text: 'Something to do',completed: false}).toArray().then((docs) => {
    console.log('Todos:');
    console.log(JSON.stringify(docs,undefined,4));
  }, (error) => {
    console.log('Unable to fetch');
  });

// searching based on id
  db.collection('Todos').find({
    _id: new ObjectID('5a8d399a3dc63d904584ef6e')
  }).toArray().then((docs) => {
    console.log('Todos:');
    console.log(JSON.stringify(docs,undefined,4));
  }, (error) => {
    console.log('Unable to fetch');
  });

  db.collection('Todos').find().count().then((count) => {

    console.log(`to dos count: ${count}`);
  }, (error) => {
    console.log('Unable to fetch');
  });


  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (error, result) => {
  //   if (error) return console.log('Unable to insert to MongoDb', error);
  //   console.log(JSON.stringify(result.ops, undefined, 4));
  // });

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
