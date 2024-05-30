import firebase_app from "@/db/firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firestore = getFirestore(firebase_app);

export async function getStudentsBY(group) {
  const q = await query(
    collection(firestore, "users"),

    where("isLogged", "==", true),
    where("role", "==", "student"),
    where("group", "==", group),
  );

  const snap = await getDocs(q);

  const data = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}
