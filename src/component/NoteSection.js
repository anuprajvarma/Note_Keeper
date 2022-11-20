import React, { useState } from "react";
import Textarea from "react-expanding-textarea";

import { AddNotes } from "../funtions.js/firebaseFuntions";

export const NoteSection = () => {
  const [notes, SetNotes] = useState({
    title: "",
    tagline: "",
    body: "",
  });

  const [bool, setBool] = useState(true);

  const handleInput = (e) => {
    const { name, value } = e.target;
    SetNotes({
      ...notes,
      [name]: value,
    });
  };

  const handle = (e) => {
    e.preventDefault();
    console.log(notes);
    AddNotes({ notes, SetNotes });
    setBool(!bool);
  };

  return (
    <>
      {bool ? (
        <form className="note-section" onSubmit={handle}>
          <Textarea
            className="input"
            type="text"
            name="body"
            placeholder="Take Notes........"
            onChange={handleInput}
            onClick={() => setBool(!bool)}
            value={notes.body}
            autoComplete="off"
          ></Textarea>
        </form>
      ) : (
        <form className="note-section" onSubmit={handle}>
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInput}
            value={notes.title}
            autoComplete="off"
          ></input>
          <input
            className="input"
            type="text"
            name="tagline"
            placeholder="Tagline"
            onChange={handleInput}
            value={notes.tagline}
            autoComplete="off"
          ></input>
          <Textarea
            className="input"
            type="text"
            name="body"
            placeholder="Body"
            onChange={handleInput}
            value={notes.body}
            autoComplete="off"
          ></Textarea>
          <button className="closeBtn">Close</button>
        </form>
      )}
    </>
  );
};
