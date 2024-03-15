const fs = require('fs');
const chalk = require('chalk');

function addNote(title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green.inverse("New note added successfully!"));
    } else {
        console.log(chalk.red.inverse("Note title taken!"));
    }
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

function getNotes() {

}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

function removeNote(title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title;
    });

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse("No such note found!"));
    } else {
        console.log(chalk.green.inverse("Note removed!"));
        saveNotes(notesToKeep);
    }
}

module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote
}