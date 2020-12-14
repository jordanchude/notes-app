// DEPENDENCIES
const fs = require('fs');
const chalk = require('chalk');

// HELPER FUNCTIONS
const getNotes = () => {
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
    const duplicateNote = notes.find((note) => note.title === title);
    
    if (!duplicateNote) {
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

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green("Your notes"));
    notes.forEach(note => console.log(note.title));
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.green.inverse(`Your note: ${note.title}`));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("No note found"));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};