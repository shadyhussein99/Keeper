import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  var [titleText, setTitleText] = useState("");
  var [contentText, setContentText] = useState("");
  var [expand, setExpand] = useState(false)

  function titleChange(event) {
    setTitleText(event.target.value);
  }
  function contentChange(event) {
    setContentText(event.target.value);
  }
  function addButton(event) {
    event.preventDefault();
    props.setWholeNote(function (prevValue) {
      return [...prevValue, { noteTitle: titleText, noteContent: contentText }];
    });
    setTitleText("");
    setContentText("");
    setExpand(false)
  }
  function contentClick() {
    setExpand(true)
  }

  return (
    <div>
      <form className="create-note">
        {expand && <input
          onChange={titleChange}
          value={titleText}
          placeholder="Title"
        />}
        <textarea
          onClick={contentClick}
          onChange={contentChange}
          value={contentText}
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
        />
        <Zoom in={expand}>
          <Fab onClick={addButton}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;