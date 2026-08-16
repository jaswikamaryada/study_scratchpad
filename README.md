# Study Scratchpad 📝

Study Scratchpad is a Chrome extension I built to quickly write down important points while studying online.

When I am watching a YouTube lecture, reading an online book, or going through a webpage, I don't always want to stop my learning flow and open a notebook. With this extension, I can quickly note down the important points and continue studying. Later, I can copy the notes to my notebook and remove them from the extension.

## Features

- Add study notes quickly
- Notes are saved locally in the browser
- Notes remain available after closing and reopening Chrome
- Click on a note to copy it
- Delete individual notes
- Clear all notes
- Press Enter to quickly add a note
- Shows the number of saved notes
- Simple and distraction-free interface

## Technologies Used

- HTML
- CSS
- JavaScript
- Chrome Extension Manifest V3
- LocalStorage

## Project Structure

```text
study_scratchpad/
│
├── manifest.json
├── chrome_extnsn.html
├── chrome_extnsn.css
├── chrome_extensn.js
├── my_photo.jpg
└── README.md
```

## How It Works

The extension provides a small popup where I can enter and manage my study notes.

The notes are stored using the browser's LocalStorage, which allows them to remain available even after the extension or Chrome is closed.

The main flow is:

```text
Enter a note
     ↓
Save the note
     ↓
Store it locally
     ↓
Display it in the notes list
```

When the extension is opened again, the previously saved notes are loaded and displayed.

Users can also click on a note to copy it, delete individual notes, or clear all the notes when they are finished using them.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/jaswikamaryada/study_scratchpad.git
```

Then move into the project folder:

```bash
cd study_scratchpad
```

You can also download the repository as a ZIP file from GitHub and extract it.

### 2. Open Chrome Extensions

Open Google Chrome and go to:

```text
chrome://extensions
```

### 3. Enable Developer Mode

Turn on **Developer mode** from the top-right corner.

### 4. Load the Extension

Click **Load unpacked**.

Select the `study_scratchpad` folder.

Make sure the folder contains the `manifest.json` file.

The extension should now be loaded into Chrome.

### 5. Pin the Extension

Click the Extensions icon in Chrome and pin **Study Scratchpad** so that it can be accessed easily from the browser toolbar.

## How to Use

1. Open the Study Scratchpad extension.
2. Enter an important point in the input box.
3. Click **Add Note** or press Enter.
4. The note will appear in the notes list.
5. Click a note to copy it to the clipboard.
6. Use the delete button to remove a particular note.
7. Use **Clear All** when you want to remove all saved notes.

## What I Learned

Through this project, I practiced and improved my understanding of:

- JavaScript
- DOM manipulation
- Event listeners
- Functions
- Arrays and objects
- LocalStorage
- JSON data handling
- Dynamic HTML rendering
- Chrome Extension Manifest V3
- Git and GitHub

## Future Improvements

Some features I would like to add in the future are:

- Edit existing notes
- Add timestamps
- Add categories or tags
- Search notes
- Add dark mode
- Export notes as a text file

## Author

**Jaswika Maryada**

B.Tech Computer Science and Engineering  
Indian Institute of Technology Dharwad

GitHub: https://github.com/jaswikamaryada
