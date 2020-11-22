// DEPENDENCIES
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note');
    }
})

// Remove a new note
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function () {
        console.log('Removing the note');
    }
})

// Read new note
yargs.command({
    command: 'read',
    describe: 'Reading the note',
    handler: function () {
        console.log('Reading the note');
    }
})

// List all notes
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function () {
        console.log('Listing all notes');
    }
})

// add, remove, read, list

console.log(yargs.argv);