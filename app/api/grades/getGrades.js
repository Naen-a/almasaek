import firebase_app from "@/db/firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firestore = getFirestore(firebase_app);

export async function getGrades(iin) {
  const q = await query(
    collection(firestore, "grades"),
    where("iin", "==", iin || ""),
  );

  const snap = await getDocs(q);

  const data = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}
