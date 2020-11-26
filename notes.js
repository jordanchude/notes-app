// DEPENDENCIES
const fs = require('fs');

// HELPER FUNCTIONS
const getNotes = function() {
    return "Your notes...";
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

// NOTE FUNCTIONS
const addNote = function (title, body) {
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
        console.log('New note added!');
    } else {
        console.log('Note title taken');
    }
};

const removeNote = function (title) {
    const notes = loadNotes();

    const noteToRemove = notes.filter(function (note) {
        return note.title === title;
    });

    const noteIndex = notes.findIndex(note => note.title === title);

    if (noteToRemove.length > 0) {
        notes.splice(noteIndex, 1);
        console.log(`Note with title "${title}" removed`);
    } else {
        console.log(`Note with title "${title}" does not exist`);
    }
    saveNotes(notes);
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};