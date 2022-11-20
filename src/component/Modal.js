import React from "react";
import Textarea from "react-expanding-textarea";

import { UpdateNotes } from "../funtions.js/firebaseFuntions";

export const Modal = ({
  notesId,
  title,
  tagline,
  body,
  tag,
  setTaglin,
  setTitle,
  setBody,
  setModal,
  setNotesid,
}) => {
  const titleHandle = (e) => {
    setTitle(e.target.value);
  };

  const TaglineHadnle = (e) => {
    setTaglin(e.target.value);
  };

  const bodyHandle = (e) => {
    setBody(e.target.value);
  };

  const updatehandle = ({ notesId, title, tagline, body }) => {
    UpdateNotes({ notesId, title, tagline, body });
    setModal(false);
    setNotesid("");
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <Textarea
          type="text"
          className="titleInput"
          placeholder="Title"
          value={title}
          onChange={titleHandle}
        />
        <Textarea
          type="text"
          className="titleInput"
          placeholder="Taglie"
          value={tagline}
          onChange={TaglineHadnle}
        />
        <Textarea
          type="text"
          className="titleInput"
          placeholder="Body"
          value={body}
          onChange={bodyHandle}
        />
        <button
          className="updateBtn"
          onClick={() => updatehandle({ notesId, title, tagline, body })}
        >
          Close
        </button>
      </div>
    </div>
  );
};
