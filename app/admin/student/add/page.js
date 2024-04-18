import { AddStudent } from "@/components/admin/addStudent/AddStudent";
import Header from "@/components/header/header";
import jsonwebtoken from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function () {
  try {
    const cookie = cookies();
    const data = JSON.parse(cookie.get("user").value);

    const verify = jsonwebtoken.verify(
      data?.token,
      process.env.NEXT_PUBLIC_HASH_KEY,
    );

    if (verify?.role !== "admin") {
      throw new Error("Нету доступа");
    }
  } catch (error) {
    redirect("/");
  }

  return (
    <div>
      <Header />
      <AddStudent />
    </div>
  );
}
