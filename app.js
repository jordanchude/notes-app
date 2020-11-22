// NPM PACKAGES
const validator = require('validator');

// EXPORTED FILES
const getNotes = require('./notes');

const msg = getNotes();

console.log(msg);
console.log(validator.isURL('https://mead.io'));