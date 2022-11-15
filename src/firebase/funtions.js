import { db } from "./firebase.untile";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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

export { AddNotes };
