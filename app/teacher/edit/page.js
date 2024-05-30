import Header from "@/components/header/header";
import { EditStudent } from "@/components/teacher/teacher";
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

    if (verify?.role !== "teacher") {
      throw new Error("Нету доступа");
    }
  } catch (error) {
    redirect("/");
  }

  return (
    <div>
      <Header />
      <EditStudent />
    </div>
  );
}
