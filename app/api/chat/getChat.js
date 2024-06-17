import firebase_app from "@/db/firebaseConfig";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";

const firestore = getFirestore(firebase_app);

export async function getChat(ids, idsReversed, author, to) {
  const q = await query(
    collection(firestore, "chats"),
    where("ids", "==", ids),
  );

  const qReversed = await query(
    collection(firestore, "chats"),
    where("ids", "==", idsReversed),
  );

  const qq = await query(
    collection(firestore, "users"),
    where("iin", "==", to),
  );

  const snap = await getDocs(q);
  const snapReversed = await getDocs(qReversed);
  const snapTo = await getDocs(qq);

  const data = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const dataReversed = snapReversed.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const dataTo = snapTo.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    return data;
  }

  if (dataReversed.length > 0) {
    return dataReversed;
  }

  const docRef = doc(firestore, "chats", ids);

  await setDoc(docRef, {
    ids: ids,
    to: dataTo,
    author,
    history: [],
  });

  return 201;
}
