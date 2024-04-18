import firebase_app from "@/db/firebaseConfig";
import Cryptr from "cryptr";
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

export async function getCheckUser(iin, login, password) {
  const q = await query(
    collection(firestore, "users"),
    where("iin", "==", iin || ""),
    where("isLogged", "==", false),
    where("role", "==", "student"),
  );

  const snap = await getDocs(q);

  const data = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length) {
    const cryptr = new Cryptr(process.env.NEXT_PUBLIC_HASH_KEY);
    const encrypted = cryptr.encrypt(password);
    const docRef = doc(firestore, "users", data[0].id);

    await updateDoc(docRef, {
      login,
      password: encrypted,
      isLogged: true,
    });

    return {
      status: 200,
    };
  }

  return data;
}
