import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function deleteButton() {
    props.setWholeNote(
      props.wholeNote.filter(function (value, index) {
        return index !== props.id;
      })
    );
  }

  return (
    <section className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteButton}><DeleteIcon /></button>
    </section>
  );
}

export default Note;