import firebase_app from "@/db/firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firestore = getFirestore(firebase_app);

export async function getUser(iin) {
  console.log(iin, "here");
  const q = await query(
    collection(firestore, "users"),
    where("iin", "==", iin || ""),
    where("isLogged", "==", true),
  );

  // dodelat sdes bez parolya :)

  const snap = await getDocs(q);

  const data = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}
