import firebase_app from "@/db/firebaseConfig";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const firestore = getFirestore(firebase_app);

export async function getSaveChat(ids, idsReversed, history) {
  const q = await query(
    collection(firestore, "chats"),
    where("ids", "==", ids),
  );

  const qReversed = await query(
    collection(firestore, "chats"),
    where("ids", "==", idsReversed),
  );

  const snap = await getDocs(q);
  const snapReversed = await getDocs(qReversed);

  const data = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const dataReversed = snapReversed.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    const docRef = doc(firestore, "chats", data[0].id);

    await updateDoc(docRef, {
      history: history,
    });
  }

  if (dataReversed.length > 0) {
    const docRef = doc(firestore, "chats", dataReversed[0].id);

    await updateDoc(docRef, {
      history: history,
    });
  }

  return 201;
}
