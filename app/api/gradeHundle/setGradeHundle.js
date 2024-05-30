import firebase_app from "@/db/firebaseConfig";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firestore = getFirestore(firebase_app);

export async function setGradeHundle(currentGrade) {
  try {
    const docRef = await addDoc(collection(firestore, "grades"), currentGrade);
    console.log("Document written with ID: ", docRef.id);

    return 201;
  } catch (error) {
    console.error("Error adding document: ", error);
    return 500;
  }
}
