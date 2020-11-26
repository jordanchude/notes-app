// DEPENDENCIES
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    // command for terminal
    command: 'add',
    // description of command
    describe: 'Add a new note',
    // An object that defines the options the command supports
    builder: {
        title: {
            describe: 'Note title',
            // require title in order for the command to run correctly
            demandOption: true,
            // interpret command as string
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Remove a new note
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// Read new note
yargs.command({
    command: 'read',
    describe: 'Reading the note',
    handler() {
        console.log('Reading the note');
    }
})

// List all notes
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler() {
        console.log('Listing all notes');
    }
})

// add, remove, read, list

// parsing argument with all configuring details provided
yargs.parse()
// console.log(yargs.argv);