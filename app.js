// so far we used lodash, nodemon, yargs, 

console.log('Starting app.js');

const fs = require('fs');

const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

var command = process.argv[2];
var argv = yargs.argv;

console.log('Command = ',command);
console.log('Command = ',process.argv);
console.log('Yargs = ',argv);

if (command==='add') {
  console.log('adding new  note');
  notes.addNote(argv.title,argv.body);
} else if (command==='list') {
  console.log('listing all  notes');
} else if (command==='read') {
  console.log('reading all  notes');
} else if (command==='remove') {
  console.log('removing all  notes');

} else {
    console.log('not recognised');
}
