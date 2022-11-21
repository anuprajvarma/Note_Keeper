import React, { useEffect, useState } from "react";
import Textarea from "react-expanding-textarea";
import { AiOutlinePushpin, AiOutlineDelete } from "react-icons/ai";
import { BsFillPinAngleFill } from "react-icons/bs";

import { DeletNote } from "../funtions.js/firebaseFuntions";
import { UnpinnedNote } from "../funtions.js/firebaseFuntions";
import { Modal } from "./Modal";
import { func } from "../funtions.js/funtion";
import { pinned } from "../funtions.js/funtion";
import { PinnedNote } from "../funtions.js/firebaseFuntions";

export const Notes = () => {
  const [notesId, setNotesid] = useState();
  const [notedoc, setResults] = useState([]);
  const [pinnedDoc, setPinned] = useState([]);
  const [title, setTitle] = useState();
  const [tagline, setTaglin] = useState();
  const [body, setBody] = useState();
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostperPage] = useState(6);

  useEffect(() => {
    func({ setResults });
  }, [notedoc]);

  useEffect(() => {
    pinned({ setPinned });
  }, [pinnedDoc]);

  const deleteBtn = ({ i }) => {
    var noteid = i.id;
    DeletNote({ noteid });
  };

  const pinnedHandle = ({ i }) => {
    var noteid = i.id;
    var title = i.title;
    var tagline = i.tagline;
    var body = i.body;
    PinnedNote({ noteid, title, tagline, body });
  };

  const UnpinnedHandle = ({ i }) => {
    var noteid = i.id;
    var title = i.title;
    var tagline = i.tagline;
    var body = i.body;
    UnpinnedNote({ noteid, title, tagline, body });
  };

  const updateUnpinnedHandle = (i) => {
    setNotesid(i.id);
    setTitle(i.title);
    setTaglin(i.tagline);
    setBody(i.body);
    setModal(true);
  };

  const PrePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const NextPage = () => {
    if (currentPost.length === 6) {
      setCurrentPage(currentPage + 1);
    }
  };

  const lastPostIndex = currentPage * postperPage;
  const firstPostIndex = lastPostIndex - postperPage;
  const currentPost = notedoc.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="notes-container">
        {pinnedDoc
          .slice(0)
          .reverse()
          .map((i) => {
            return (
              <div key={i.timestamp} className="notes">
                <div>
                  <BsFillPinAngleFill
                    className="pinnBtn"
                    onClick={() => UnpinnedHandle({ i })}
                  />
                </div>
                <div>
                  <div className="title">{i.title}</div>
                  <div className="tagline">{i.tagline}</div>
                  <Textarea className="input" value={i.body} />
                </div>
                <div>
                  <AiOutlineDelete
                    className="DeleteButton"
                    onClick={() => deleteBtn({ i })}
                  />
                </div>
              </div>
            );
          })}
      </div>
      <div className="notes-container">
        {modal ? (
          <Modal
            notesId={notesId}
            title={title}
            tagline={tagline}
            body={body}
            setTitle={setTitle}
            setTaglin={setTaglin}
            setBody={setBody}
            setModal={setModal}
            setNotesid={setNotesid}
          />
        ) : (
          currentPost
            .slice(0)
            .reverse()
            .map((i) => {
              return (
                <div key={i.timestamp} className="notes">
                  <div>
                    <AiOutlinePushpin
                      className="pinnBtn"
                      onClick={() => pinnedHandle({ i })}
                    />
                  </div>
                  <div onClick={() => updateUnpinnedHandle(i)}>
                    <div className="title">{i.title}</div>
                    <div className="tagline">{i.tagline}</div>
                    <Textarea className="input" value={i.body} />
                  </div>
                  <div>
                    <AiOutlineDelete
                      className="DeleteButton"
                      onClick={() => deleteBtn({ i })}
                    />
                  </div>
                </div>
              );
            })
        )}
      </div>
      <div className="PgnDiv">
        <button className="PgnBtn" onClick={PrePage}>
          Pre Page
        </button>
        <p>{currentPage}</p>
        <button className="PgnBtn" onClick={NextPage}>
          Next Page
        </button>
      </div>
    </>
  );
};
