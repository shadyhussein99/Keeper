import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [wholeNote, setWholeNote] = useState([]);

  return (
    <main>
      <Header />
      <CreateArea setWholeNote={setWholeNote} />
      {wholeNote.map((value, index) => {
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
    </main>
  );
}

export default App;