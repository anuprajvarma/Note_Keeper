import { getDocs, collection, query, limit, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Textarea from "react-expanding-textarea";
import { AiOutlinePushpin, AiOutlineDelete } from "react-icons/ai";
import { BsFillPinAngleFill } from "react-icons/bs";

import { db } from "../firebase/firebase.untile";
import { DeletNote } from "../firebase/funtions";
import { UnpinnedNote } from "../firebase/funtions";
import { Modal } from "./Modal";
import { PinnedNote } from "../firebase/funtions";

export const Notes = () => {
  const [notesId, setNotesid] = useState();
  const [notedoc, setResults] = useState([]);
  const [pinnedDoc, setPinned] = useState([]);
  const [title, setTitle] = useState();
  const [tagline, setTaglin] = useState();
  const [body, setBody] = useState();
  const [modal, setModal] = useState(false);
  const getdata = query(
    collection(db, "users"),
    orderBy("timestamp"),
    limit(20)
  );

  const get = query(
    collection(db, "pinnedNotes"),
    orderBy("timestamp"),
    limit(20)
  );
  const func = async () => {
    const getPostFromfirebase = [];
    try {
      const res = await getDocs(getdata);
      res.forEach((doc) => {
        getPostFromfirebase.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setResults(getPostFromfirebase);
      // Updatedata({ setPinned });
    } catch (err) {
      console.log(err);
    }
  };

  const pinned = async () => {
    const getpos = [];
    const ref = await getDocs(get);
    ref.forEach((doc) => {
      getpos.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    setPinned(getpos);
  };

  useEffect(() => {
    func();
  }, [notedoc]);

  useEffect(() => {
    pinned();
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

  const updateHandle = (i) => {
    setNotesid(i.id);
    setTitle(i.title);
    setTaglin(i.tagline);
    setBody(i.body);
    setModal(true);
  };

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
                <div onClick={() => updateHandle(i)}>
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
          notedoc
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
                  <div onClick={() => updateHandle(i)}>
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
    </>
  );
};
