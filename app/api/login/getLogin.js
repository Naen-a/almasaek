import firebase_app from "@/db/firebaseConfig";

import Cryptr from "cryptr";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firestore = getFirestore(firebase_app);

export async function getLogin(login, password) {
  const cryptr = new Cryptr(process.env.NEXT_PUBLIC_HASH_KEY);

  const q = await query(
    collection(firestore, "users"),
    where("login", "==", login || ""),
  );

  const snap = await getDocs(q);

  const data = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length) {
    const decryptedPass = cryptr.decrypt(data[0].password);

    if (decryptedPass === password) {
      return { status: 200, login: data[0].login };
    }
  }

  return { status: 401 };
}
