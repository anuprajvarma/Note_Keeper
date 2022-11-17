import { getDocs, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";

import { db } from "../firebase/firebase.untile";

export const Notes = () => {
  const [notedoc, setResults] = useState([]);

  useEffect(() => {
    const getPostFromfirebase = [];
    const func = async () => {
      try {
        const res = await getDocs(collection(db, "users"));
        console.log(res);
        res.forEach((doc) => {
          getPostFromfirebase.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setResults(getPostFromfirebase);
      } catch (err) {
        console.log(err);
      }
    };
    func();
  }, [notedoc]);

  const deleteBtn = () => {};

  return (
    <div className="notes-container">
      {notedoc.map((i) => {
        return (
          <div key={i.timestamp} className="notes">
            <div className="editbutton">
              <BsFillPencilFill />
            </div>
            <div className="title">{i.title}</div>
            <div className="tagline">{i.tagline}</div>
            <div className="des">{i.body}</div>
            <button className="DeleteButton" onClick={() => deleteBtn(i.id)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
