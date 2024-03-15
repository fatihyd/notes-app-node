const chalk = require('chalk');
const yargs = require('yargs');
const { addNote, getNotes, removeNote } = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'Note body',
            type: 'string',
            demandOption: true
        }
    },
    handler: function (argv) {
        addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removes a new note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        },
    },
    handler: function (argv) {
        removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: function () {
        console.log('listing all notes...');
    }
});

yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function () {
        console.log('reading a note...');
    }
});

yargs.parse();
