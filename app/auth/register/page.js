"use client";

import { getCheckUser } from "@/app/api/checkuser/getCheckUser";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function () {
  const [inn, setInn] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = async () => {
    if (!inn || !login || !password) {
      toast.dismiss(loading);
      toast.error("Введите данные");
      return;
    }

    const loading = toast.loading("Загрузка");
    const user = await getCheckUser(inn, login, password);

    if (user?.status === 200) {
      toast.dismiss(loading);
      toast.success("Аккаунт создан");
      setTimeout(() => {
        toast.success("Залогинтесь чтобы войти в аккаунт");
      }, 1000);

      return;
    }

    if (!user.length) {
      toast.dismiss(loading);
      toast.error("Инн нету в базе или инн уже зарегистрирован");
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
          <span className="font-semibold text-shuttlegray">Регистрация</span>

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
            <p className="text-shuttlegray text-left font-medium w-full">
              Инн:
            </p>
            <input
              value={inn}
              onChange={(e) => setInn(e.target.value)}
              placeholder="Введите ИНН"
              className="bg-shuttlegray/20 text-shuttlegray outline-shuttlegray py-1.5 pr-44 pl-1.5 placeholder:text-shuttlegray"
            />
          </div>

          <button
            onClick={onRegister}
            className="w-full bg-azure text-white py-1.5 hover:bg-shipcove transition-colors"
          >
            Регистрация
          </button>
          <span className="text-sm text-shuttlegray font-medium">
            Уже имеется аккаунт?{" "}
            <Link
              href="/auth/login"
              className="text-azure font-semibold cursor-pointer hover:text-shipcove transition-colors"
            >
              Войти
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
