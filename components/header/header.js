"use client";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [userState, setUserState] = useState("");
  const router = useRouter();
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    if (Cookies.get("user")) {
      setUserState(JSON.parse(Cookies.get("user")));
    } else {
      router.push("/");
    }
  }, []);

  console.log(userState, "userState here");

  const onLogin = () => {
    router.push("/auth/login");
  };

  const adminStudentAdd = () => {
    router.push("/admin/student/add");
  };

  const openMenu = () => {
    setMenu(!menu);
  };

  const onExit = () => {
    Cookies.remove("user");
    setUserState("");
    router.push("/");
  };

  return (
    <div className="border-b border-gray-500 py-5">
      <div className="container mx-auto justify-between flex items-center">
        <Image src="/logo.png" width={80} height={80} alt="Logo" />

        {userState?.user?.role === "student" && (
          <div className="flex items-center space-x-6 relative">
            <button
              onClick={openMenu}
              className="text-white bg-cobalt px-4 py-1.5 rounded-md transition-all hover:bg-shipcove flex items-center space-x-3"
            >
              <svg
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_57_425" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.34154 6.37322C4.2451 5.80098 3.49998 4.67899 3.49998 3.38851C3.49998 1.51709 5.06699 0 6.99999 0C8.93299 0 10.5 1.51709 10.5 3.38851C10.5 4.67899 9.75488 5.80098 8.65844 6.37322C11.7239 7.44868 14 11.4385 14 16.1959C14 16.4666 13.9926 16.7347 13.9782 17H0.0217924C0.00733471 16.7347 -3.05176e-05 16.4666 -3.05176e-05 16.1959C-3.05176e-05 11.4385 2.27604 7.44867 5.34154 6.37322Z"
                  />
                </mask>
                <path
                  d="M5.34154 6.37322L5.80422 5.48669L7.84833 6.55353L5.67259 7.31683L5.34154 6.37322ZM8.65844 6.37322L8.32739 7.31683L6.15165 6.55353L8.19576 5.4867L8.65844 6.37322ZM13.9782 17L14.9767 17.0544L14.9252 18H13.9782V17ZM0.0217924 17V18H-0.92519L-0.976726 17.0544L0.0217924 17ZM4.49998 3.38851C4.49998 4.28003 5.01392 5.07423 5.80422 5.48669L4.87886 7.25974C3.47629 6.52773 2.49998 5.07795 2.49998 3.38851H4.49998ZM6.99999 1C5.58851 1 4.49998 2.09964 4.49998 3.38851H2.49998C2.49998 0.934535 4.54547 -1 6.99999 -1V1ZM9.5 3.38851C9.5 2.09964 8.41147 1 6.99999 1V-1C9.45452 -1 11.5 0.934535 11.5 3.38851H9.5ZM8.19576 5.4867C8.98606 5.07423 9.5 4.28003 9.5 3.38851H11.5C11.5 5.07796 10.5237 6.52773 9.12112 7.25974L8.19576 5.4867ZM8.98948 5.42961C12.6153 6.70166 15 11.2122 15 16.1959H13C13 11.6647 10.8325 8.1957 8.32739 7.31683L8.98948 5.42961ZM15 16.1959C15 16.4847 14.9921 16.771 14.9767 17.0544L12.9797 16.9456C12.9931 16.6984 13 16.4484 13 16.1959H15ZM13.9782 18H0.0217924V16H13.9782V18ZM-0.976726 17.0544C-0.992171 16.771 -1.00003 16.4847 -1.00003 16.1959H0.999969C0.999969 16.4484 1.00684 16.6984 1.02031 16.9456L-0.976726 17.0544ZM-1.00003 16.1959C-1.00003 11.2122 1.38463 6.70165 5.0105 5.4296L5.67259 7.31683C3.16745 8.1957 0.999969 11.6647 0.999969 16.1959H-1.00003Z"
                  fill="white"
                  mask="url(#path-1-inside-1_57_425)"
                />
              </svg>

              <span className="font-semibold">Меню</span>
            </button>

            <div
              className={`absolute top-12 -left-40 bg-white border-cobalt border px-5 py-2 w-64 ${menu && "hidden"}`}
            >
              <div className="py-1 relative">
                <span className="font-semibold">{userState?.user?.login}</span>
              </div>
              <div className="py-1">
                <span>Профиль</span>
              </div>
              <div className="py-1">
                <span>Книжка успеваемости</span>
              </div>
              <div className="py-1">
                <span>Оценки</span>
              </div>

              <div className="py-1">
                <span>Уведомление</span>
              </div>

              <div className="py-1">
                <span>Выйти</span>
              </div>
            </div>
          </div>
        )}

        {userState?.user?.role === "admin" && (
          <div className="flex items-center space-x-6">
            <button
              onClick={adminStudentAdd}
              className="text-white bg-cobalt px-7 py-1.5 rounded-md transition-all hover:bg-shipcove flex items-center space-x-3"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.80437 5.2704C10.1314 5.59746 10.1314 6.12774 9.80437 6.4548L6.45434 9.80483C6.12727 10.1319 5.597 10.1319 5.26993 9.80483L3.59492 8.12981C3.26784 7.80275 3.26784 7.27247 3.59492 6.94541C3.92198 6.61833 4.45226 6.61833 4.77932 6.94541L5.86214 8.02821L8.61996 5.2704C8.94703 4.94332 9.4773 4.94332 9.80437 5.2704Z"
                  fill="white"
                />
                <path
                  d="M9.80437 13.6456C10.1314 13.9727 10.1314 14.503 9.80437 14.8301L6.45434 18.1802C6.12727 18.5071 5.597 18.5071 5.26993 18.1802L3.59492 16.5051C3.26784 16.178 3.26784 15.6477 3.59492 15.3206C3.92198 14.9936 4.45226 14.9936 4.77932 15.3206L5.86214 16.4035L8.61996 13.6456C8.94703 13.3186 9.4773 13.3186 9.80437 13.6456Z"
                  fill="white"
                />
                <path
                  d="M11.7246 7.5377C11.7246 7.07516 12.0996 6.7002 12.5621 6.7002H17.5872C18.0496 6.7002 18.4247 7.07516 18.4247 7.5377C18.4247 8.00024 18.0496 8.37521 17.5872 8.37521H12.5621C12.0996 8.37521 11.7246 8.00024 11.7246 7.5377Z"
                  fill="white"
                />
                <path
                  d="M4.18772 0C1.87491 0 0 1.87491 0 4.18772V19.2635C0 21.5763 1.87491 23.4512 4.18772 23.4512H11.0551C10.7838 22.9206 10.5625 22.3601 10.3973 21.7761H4.18772C2.80003 21.7761 1.67509 20.6512 1.67509 19.2635V4.18772C1.67509 2.80003 2.80003 1.67509 4.18772 1.67509H19.2635C20.6512 1.67509 21.7761 2.80003 21.7761 4.18772V10.3973C22.3601 10.5625 22.9206 10.7838 23.4512 11.0551V4.18772C23.4512 1.87491 21.5763 0 19.2635 0H4.18772Z"
                  fill="white"
                />
                <path
                  d="M19.2622 26.8005C23.4251 26.8005 26.7997 23.4259 26.7997 19.263C26.7997 15.1001 23.4251 11.7254 19.2622 11.7254C15.0993 11.7254 11.7246 15.1001 11.7246 19.263C11.7246 23.4259 15.0993 26.8005 19.2622 26.8005ZM19.2622 15.0754C19.7246 15.0754 20.0997 15.4505 20.0997 15.9129V18.4255H22.6122C23.0747 18.4255 23.4497 18.8005 23.4497 19.263C23.4497 19.7254 23.0747 20.1005 22.6122 20.1005H20.0997V22.613C20.0997 23.0755 19.7246 23.4505 19.2622 23.4505C18.7997 23.4505 18.4247 23.0755 18.4247 22.613V20.1005H15.9121C15.4497 20.1005 15.0746 19.7254 15.0746 19.263C15.0746 18.8005 15.4497 18.4255 15.9121 18.4255H18.4247V15.9129C18.4247 15.4505 18.7997 15.0754 19.2622 15.0754Z"
                  fill="white"
                />
              </svg>
              <span className="inline-block">Добавить студента</span>
            </button>

            <button
              onClick={onExit}
              className="text-white bg-cobalt px-7 py-1.5 rounded-md transition-all hover:bg-shipcove"
            >
              Выйти
            </button>
          </div>
        )}

        {!userState && (
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
