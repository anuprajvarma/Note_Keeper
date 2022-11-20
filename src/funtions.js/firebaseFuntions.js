import { db } from "../firebase/firebase.untile";
import {
  collection,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
  deleteDoc,
  orderBy,
  limit,
  getDocs,
  query,
} from "firebase/firestore";

const AddNotes = async ({ notes, SetNotes }) => {
  if (notes.title !== "" || notes.body !== "") {
    const res = await addDoc(collection(db, "users"), {
      title: notes.title,
      tagline: notes.tagline,
      body: notes.body,
      timestamp: serverTimestamp(),
    });
    SetNotes({ title: "", tagline: "", body: "" });
  }
};

const DeletNote = ({ noteid }) => {
  try {
    const ref = deleteDoc(doc(db, "users", `${noteid}`));
    const res = deleteDoc(doc(db, "pinnedNotes", `${noteid}`));
    // setNotesid("");
  } catch (errr) {
    console.log(errr);
  }
};

const UpdateNotes = async ({ notesId, title, tagline, body }) => {
  try {
    const ref = await setDoc(doc(db, "users", `${notesId}`), {
      title: title,
      timestamp: serverTimestamp(),
      tagline: tagline,
      body: body,
    });
  } catch (error) {
    console.log(error);
  }
};

const PinnedNote = async ({ noteid, title, tagline, body }) => {
  try {
    if (title !== "" || body !== "") {
      const res = await addDoc(collection(db, "pinnedNotes"), {
        title: title,
        tagline: tagline,
        body: body,
        timestamp: serverTimestamp(),
      });
    }
    const ref = deleteDoc(doc(db, "users", `${noteid}`));
    // setNotesid("");
  } catch (errr) {
    console.log(errr);
  }
};

const UnpinnedNote = async ({ noteid, title, tagline, body }) => {
  try {
    const res = await addDoc(collection(db, "users"), {
      title: title,
      tagline: tagline,
      body: body,
      timestamp: serverTimestamp(),
    });
    const ref = deleteDoc(doc(db, "pinnedNotes", `${noteid}`));
  } catch (errr) {
    console.log(errr);
  }
};

export { AddNotes, UpdateNotes, DeletNote, PinnedNote, UnpinnedNote };
