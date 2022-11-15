import React from "react";

import { UpdateNotes } from "../firebase/functions";

export const Modal = ({
  id,
  uid,
  title,
  description,
  setModal,
  setDes,
  setTitle,
}) => {
  const titleHandle = (e) => {
    setTitle(e.target.value);
  };

  const desHandle = (e) => {
    setDes(e.target.value);
  };

  const updatehandle = ({ title, tagline, body }) => {
    UpdateNotes({ uid, id, title, body });
    setModal(false);
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <input
          type="text"
          className="titleInput"
          placeholder="Title"
          value={title}
          onChange={titleHandle}
        />
        <input
          type="text"
          className="titleInput"
          placeholder="Describe"
          value={description}
          onChange={desHandle}
        />
        <button
          className="updateBtn"
          onClick={() => updatehandle({ title, description })}
        >
          Update
        </button>
      </div>
    </div>
  );
};
