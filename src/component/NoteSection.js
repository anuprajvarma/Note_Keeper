import React, { useState } from "react";

import { AddNotes } from "../firebase/funtions";

export const NoteSection = () => {
  const [notes, SetNotes] = useState({
    title: "",
    tagline: "",
    body: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    SetNotes({
      ...notes,
      [name]: value,
    });
  };

  const handle = (e) => {
    e.preventDefault();
    AddNotes({ notes, SetNotes });
  };

  return (
    <>
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
        <input
          className="input"
          type="text"
          name="body"
          placeholder="Body"
          onChange={handleInput}
          value={notes.body}
          autoComplete="off"
        ></input>
        <input className="submit-button" type="submit"></input>
      </form>
    </>
  );
};
