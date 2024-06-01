import React, { useState } from "react";
import Note from "./Note";
import InputArea from "./InputArea";

function CreateArea() {
  const [notes, setNotes] = useState([]);

  function addNote(data) {
    setNotes((prevNotes) => {
      return [...prevNotes, data];
    });
  }

  function deleteItem(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <InputArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          onDelete={deleteItem}
          key={index}
          id={index}
          title={note.Title}
          textArea={note.TextArea}
        />
      ))}
    </div>
  );
}

export default CreateArea;
