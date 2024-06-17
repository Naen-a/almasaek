import firebase_app from "@/db/firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firestore = getFirestore(firebase_app);

export async function getSearchUser(email) {
  const q = await query(
    collection(firestore, "users"),
    where("email", "==", email || ""),
  );

  const snap = await getDocs(q);

  const data = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(data, "data");
  return data;
}
