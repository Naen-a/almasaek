"use client";

import { getUser } from "@/app/api/getUser/getUser";
import { getGrades } from "@/app/api/grades/getGrades";
import Header from "@/components/header/header";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const subjects = [
  {
    name: "Деректер базасы",
  },
  {
    name: "Алгоритм негіздері",
  },

  { name: "Микросхема" },

  { name: "ООП" },
];

export default function Page({ params }) {
  const [currentProfile, setCurrentProfile] = useState(null);
  const [userState, setUserState] = useState("");
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    if (Cookies.get("user")) {
      setUserState(JSON.parse(Cookies.get("user")));
    } else {
      // Логика перенарпавления
      if (window.location.href.includes("http://localhost:3000/details")) {
        return;
      }

      router.push("/");
    }

    getUser(params?.profile).then((res) => {
      setCurrentProfile(res[0]);

      getGrades(res[0].iin).then((res) => {
        setGrades(res);
      });
    });
  }, []);

  return (
    <div>
      <Header />

      {currentProfile && (
        <>
          <div className="py-24 bg-cobalt">
            <div className="container mx-auto space-x-3 text-white max-w-6xl">
              <Link
                href="/"
                className="cursor-pointer hover:underline hover:underline-offset-4"
              >
                Главная
              </Link>
              <span className="inline-block">→</span>
              <a className="cursor-pointer font-semibold hover:underline hover:underline-offset-4">
                {userState?.user?.id === currentProfile?.id
                  ? "Профиль"
                  : `Профиль студента ${currentProfile?.firstName}`}
              </a>
            </div>
          </div>

          <div className="space-x-2 text-azure container mx-auto pt-14 text-center">
            <div className="flex flex-col items-center justify-center -m-32">
              <div className="relative w-56 h-56 border  bg-white border-shuttlegray rounded-full overflow-hidden">
                <Image src="/male.png" fill />
              </div>
              <div className="mt-4 space-y-1.5">
                <div>
                  <span className="text-xl text-shuttlegray font-medium">
                    {currentProfile?.firstName} {currentProfile?.secondName}
                  </span>
                </div>

                <div>
                  <span className="text-base text-shuttlegray font-medium">
                    {currentProfile?.role === "student" ? "Студент" : "Учитель"}
                  </span>
                </div>

                <div>
                  <span className="text-base text-shuttlegray font-medium">
                    {currentProfile?.group}
                  </span>
                </div>

                <div>
                  <span className="text-base text-shuttlegray font-medium">
                    {currentProfile?.email}
                  </span>
                </div>
              </div>
            </div>

            <div className=" mt-40 text-left text-black space-y-3">
              <span className="text-xl font-semibold">Оценки</span>

              <div>
                <span className="text-lg">{subjects[0].name}</span>

                <ul>
                  {grades.map((item, index) => {
                    if (item?.subject === subjects[0].name) {
                      const dd = new Date(item.date).toLocaleDateString();

                      return (
                        <li key={index}>
                          {dd} {item.grade}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>

              <div>
                <span className="text-lg">{subjects[1].name}</span>

                <ul>
                  {grades.map((item, index) => {
                    if (item?.subject === subjects[1].name) {
                      const dd = new Date(item.date).toLocaleDateString();

                      return (
                        <li key={index}>
                          {dd} {item.grade}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>

              <div>
                <span className="text-lg">{subjects[2].name}</span>

                <ul>
                  {grades.map((item, index) => {
                    if (item?.subject === subjects[2].name) {
                      const dd = new Date(item.date).toLocaleDateString();

                      return (
                        <li key={index}>
                          {dd} {item.grade}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>

              <div>
                <span className="text-lg">{subjects[3].name}</span>

                <ul>
                  {grades.map((item, index) => {
                    if (item?.subject === subjects[3].name) {
                      const dd = new Date(item.date).toLocaleDateString();

                      return (
                        <li key={index}>
                          {dd} {item.grade}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
