import React, { useEffect, useState } from "react";
import { getDocs, collection, query, limit, orderBy } from "firebase/firestore";
import Textarea from "react-expanding-textarea";
import { AiOutlinePushpin, AiOutlineDelete } from "react-icons/ai";

import { db } from "../firebase/firebase.untile";

export const PinnedSection = ({ notedoc }) => {
  const [pinnedDoc, setPinned] = useState([]);

  useEffect(() => {
    const getPinnedFromFirebase = [];
    const func = async () => {
      try {
        const ref = await getDocs(
          query(collection(db, "pinnedNotes"), orderBy("timestamp"), limit(20))
        );
        ref.forEach((doc) => {
          getPinnedFromFirebase.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setPinned(getPinnedFromFirebase);
        console.log("count");
      } catch (err) {
        console.log(err);
      }
    };
    func();
  }, []);

  //   const pinnedHandle = ({ i }) => {
  //     var noteid = i.id;
  //     var title = i.title;
  //     var tagline = i.tagline;
  //     var body = i.body;
  //     PinnedNote({ noteid, title, tagline, body });
  //   };
  return (
    <>
      <div className="notes-container">
        {pinnedDoc.reverse().map((i) => {
          return (
            <div key={i.timestamp} className="notes">
              <div>
                <AiOutlinePushpin
                  className="pinnBtn"
                  //   onClick={() => pinnedHandle({ i })}
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
                  //   onClick={() => deleteBtn({ i })}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
