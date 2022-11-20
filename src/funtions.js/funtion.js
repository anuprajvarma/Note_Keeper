import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase.untile";

const getdata = query(collection(db, "users"), orderBy("timestamp"), limit(20));
const get = query(
  collection(db, "pinnedNotes"),
  orderBy("timestamp"),
  limit(20)
);

const func = async ({ setResults }) => {
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

const pinned = async ({ setPinned }) => {
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

export { func, pinned };
