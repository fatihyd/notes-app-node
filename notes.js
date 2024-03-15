const fs = require('fs');
const chalk = require('chalk');

function addNote(title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => {
        return note.title === title;
    })

    if (!duplicateNote) {
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

function listNotes() {
    const notes = loadNotes();

    notes.forEach(note => {
        console.log(
            chalk.blue.bold(note.title)
            + "\n" + note.body
        );
    });
}

function readNote(title) {
    const notes = loadNotes();
    const noteToFind = notes.find((note) => {
        return note.title === title;
    });

    if (noteToFind) {
        console.log(
            chalk.blue.bold(noteToFind.title) +
            "\n" + noteToFind.body
        );
    } else {
        console.log(chalk.red.inverse("No such note found!"));
    }
}

module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}