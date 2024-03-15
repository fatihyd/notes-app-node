# Notes App

This is a simple command-line notes application built with Node.js. It allows users to manage their notes by adding, removing, listing, and reading them.

## Installation

   Clone the repository and navigate to the project directory.

   ```bash
   git clone https://github.com/fatihyd/notes-app-node.git
   cd notes-app-node
   ```

   Ensure you have Node.js installed. Then, install the required dependencies using npm or yarn.

   ```bash
   npm install
   ```

## Usage

### Add a Note:
```bash
node app.js add --title="<Note Title>" --body="<Note Body>"
```

### Remove a Note:
```bash
node app.js remove --title="<Note Title>"
```

### List All Notes:
```bash
node app.js list
```

### Read a Note:
```bash
node app.js read --title="<Note Title>"
```
