// DEPENDENCIES
const fs = require('fs');
const chalk = require('chalk');

// HELPER FUNCTIONS
const getNotes = function() {
    return "Your notes...";
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

// NOTE FUNCTIONS
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })
    
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter(note => note.title !== title);

    notes.length > notesToKeep.length ? console.log(chalk.green.inverse("Note removed!")) : console.log(chalk.red.inverse("No note found"))

    saveNotes(notesToKeep);
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};