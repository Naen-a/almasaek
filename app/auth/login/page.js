"use client";

import { getLogin } from "@/app/api/login/getLogin";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function () {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onLogin = async () => {
    if (!login || !password) {
      toast.error("Введите данные");
      return;
    }

    const loading = toast.loading("Загрузка");
    const user = await getLogin(login, password);

    if (user?.status === 200) {
      toast.dismiss(loading);
      toast.success("Вы успешно вошли");

      Cookies.set(
        "user",
        JSON.stringify({ user: user?.user, token: user?.token }),
      );

      setTimeout(() => {
        toast.success("Перенаправляю");
      }, 1000);

      setTimeout(() => {
        router.push("/");
      }, 2000);

      return;
    }

    if (user?.status === 401) {
      toast.dismiss(loading);
      toast.error("Неправильный логин или пароль");
    }
  };

  return (
    <div className="bg-azure h-screen flex items-center justify-center">
      <div>
        <Toaster />
      </div>

      <div className="flex -translate-x-14 items-center gap-x-24">
        <Image
          className="select-none"
          src="/bigLogo.png"
          width={500}
          height={500}
          alt="companyLogo"
        />

        <div className="shadow-lg shadow-shuttlegray flex h-min w-full flex-col justify-center items-center bg-white py-5 px-10 space-y-6">
          <span className="font-semibold text-shuttlegray">Вход</span>

          <div className="space-y-3">
            <p className="text-shuttlegray text-left font-medium w-full">
              Логин:
            </p>
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              type="text"
              placeholder="Введите логин"
              className="bg-shuttlegray/20 text-shuttlegray outline-shuttlegray py-1.5 pr-44 pl-1.5 placeholder:text-shuttlegray"
            />
            <p className="text-shuttlegray text-left font-medium w-full">
              Пароль:
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              className="bg-shuttlegray/20 text-shuttlegray outline-shuttlegray py-1.5 pr-44 pl-1.5 placeholder:text-shuttlegray"
            />
          </div>

          <button
            onClick={onLogin}
            className="w-full bg-azure text-white py-1.5 hover:bg-shipcove transition-colors"
          >
            Войти
          </button>
          <span className="text-sm text-shuttlegray font-medium">
            Нету аккаунта?{" "}
            <Link
              href="/auth/register"
              className="text-azure font-semibold cursor-pointer hover:text-shipcove transition-colors"
            >
              Регистрация
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
