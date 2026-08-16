
// DOM ELEMENTS
const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note-btn");
const notesList = document.getElementById("notes-list");
const noteCount = document.getElementById("note-count");
const clearAllBtn = document.getElementById("clear-all-btn");
const toast = document.getElementById("toast");


// DATA
let notes = JSON.parse(localStorage.getItem("studyNotes")) || [];


// SAVE NOTES
function saveNotes() {
    localStorage.setItem("studyNotes", JSON.stringify(notes));
}


// UPDATE COUNTER
function updateCounter() {
    noteCount.textContent = `📝 Notes (${notes.length})`;
}


// TOAST
function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 1500);

}


// RENDER NOTES
function renderNotes() {

    notesList.innerHTML = "";

    if (notes.length === 0) {

        notesList.innerHTML = `
            <li class="empty-message">
                No notes yet.
            </li>
        `;

        updateCounter();
        return;
    }

    notes.forEach(note => {

        const li = document.createElement("li");

        li.className = "note";

        li.innerHTML = `

            <span
                class="note-text"
                data-id="${note.id}"
                title="Click to copy">

                ${note.text}

            </span>

            <button
                class="delete-btn"
                data-id="${note.id}"
                title="Delete">

                ❌

            </button>

        `;

        notesList.appendChild(li);

    });

    updateCounter();

}


// ADD NOTE
function addNote() {

    const text = noteInput.value.trim();

    if (text === "") {

        showToast("Please enter a note.");

        return;

    }

    const newNote = {

        id: Date.now(),

        text: text

    };

    notes.unshift(newNote);

    saveNotes();

    renderNotes();

    noteInput.value = "";

    noteInput.focus();

    showToast("Note added!");

}


// BUTTON CLICK
addNoteBtn.addEventListener("click", addNote);


// ENTER KEY
noteInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter" && !e.shiftKey) {

        e.preventDefault();

        addNote();

    }

});


// DELETE NOTE
notesList.addEventListener("click", function (e) {

    if (!e.target.classList.contains("delete-btn"))
        return;

    const id = Number(e.target.dataset.id);

    notes = notes.filter(note => note.id !== id);

    saveNotes();

    renderNotes();

    showToast("Note deleted.");

});


// COPY NOTE
notesList.addEventListener("click", function (e) {

    if (!e.target.classList.contains("note-text"))
        return;

    navigator.clipboard.writeText(e.target.textContent.trim());

    showToast("Copied!");

});


// CLEAR ALL
clearAllBtn.addEventListener("click", function () {

    if (notes.length === 0) {

        showToast("No notes to delete.");

        return;

    }

    const confirmDelete = confirm("Delete all notes?");

    if (!confirmDelete)
        return;

    notes = [];

    saveNotes();

    renderNotes();

    showToast("All notes deleted.");

});


// INITIALIZE
renderNotes();