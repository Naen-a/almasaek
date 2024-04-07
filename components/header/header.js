"use client";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [userState, setUserState] = useState("");
  const router = useRouter();

  useEffect(() => {
    setUserState(Cookies.get("login"));
  }, []);

  const onLogin = () => {
    router.push("/auth/login");
  };

  return (
    <div className="border-b border-gray-500 py-5">
      <div className="container mx-auto justify-between flex items-center">
        <Image src="/logo.png" width={80} height={80} alt="Logo" />

        {userState ? (
          <h1>{userState}</h1>
        ) : (
          <div className="space-x-6 font-semibold text-sm cursor-pointer">
            <Link
              href="/auth/register"
              className="text-cobalt transition-colors hover:text-shipcove"
            >
              Регистрация
            </Link>
            <button
              onClick={onLogin}
              className="text-white bg-cobalt px-7 py-1.5 rounded-md transition-all hover:bg-shipcove"
            >
              Вход
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
