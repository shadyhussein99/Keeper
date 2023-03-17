import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [wholeNote, setWholeNote] = useState([]);

  return (
    <div>
      <Header />
      <CreateArea setWholeNote={setWholeNote} />
      {wholeNote.map(function (value, index) {
        return (
          <Note
            key={index}
            id={index}
            wholeNote={wholeNote}
            title={value.noteTitle}
            content={value.noteContent}
            setWholeNote={setWholeNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;