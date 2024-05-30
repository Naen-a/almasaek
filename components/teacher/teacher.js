"use client";
import { setGradeHundle } from "@/app/api/gradeHundle/setGradeHundle";
import { getStudentsBY } from "@/app/api/students/getStudentsBY";
import { ru } from "date-fns/locale/ru";
import Link from "next/link";
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
registerLocale("ru", ru);

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

export const EditStudent = () => {
  const [group, setGroup] = useState("РПО 4-1");
  const [students, setStudents] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedINN, setSelectedINN] = useState(null);
  const [selectSub, setSelectSub] = useState(null);
  const [numberValue, setNumberValue] = useState(50);

  const getStudents = async (group) => {
    const result = await getStudentsBY(group);

    setSelectedINN(null);
    setStudents(result);
  };

  const selectSubject = (iin) => {
    setSelectedINN(iin);
  };

  const setGrade = () => {
    if (numberValue < 50 || numberValue > 100) {
      toast.error("Выберите правильную оценку");
      return;
    }

    const currentGrade = {
      date: startDate.toISOString(),
      grade: numberValue,
      subject: selectSub,
      iin: selectedINN,
    };

    const loading = toast.loading("Загрузка...");

    setGradeHundle(currentGrade).then((res) => {
      if (res === 201) {
        toast.dismiss(loading);

        toast.success("Оценка поставлено");

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  };

  return (
    <div className="space-y-12 pb-10">
      <div>
        <Toaster />
      </div>

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
            Управление оценками
          </a>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <span className="font-semibold text-2xl">Группы</span>

        <div className="flex gap-10 mt-7 ">
          <div
            onClick={() => getStudents("РПО 4-1")}
            className="aspect-square w-64 h-64 bg-orange-300 shadow-xl flex items-center justify-center text-black font-semibold transition-all hover:scale-x-110 cursor-pointer"
          >
            РПО 4-1
          </div>
          <div
            onClick={() => getStudents("РПО 4-2")}
            className="aspect-square w-64 h-64 bg-orange-300 shadow-xl flex items-center justify-center text-black font-semibold transition-all hover:scale-x-110 cursor-pointer"
          >
            РПО 4-2
          </div>
          <div
            onClick={() => getStudents("РПО 4-3")}
            className="aspect-square w-64 h-64 bg-orange-300 shadow-xl flex items-center justify-center text-black font-semibold transition-all hover:scale-x-110 cursor-pointer"
          >
            РПО 4-3
          </div>
          <div
            onClick={() => getStudents("РПО 4-4")}
            className="aspect-square w-64 h-64 bg-orange-300 shadow-xl flex items-center justify-center text-black font-semibold transition-all hover:scale-x-110 cursor-pointer"
          >
            РПО 4-4
          </div>
        </div>

        {students.length > 0 && (
          <div className="mt-12">
            <span className="text-2xl font-semibold">Студенты</span>

            <ul className="mt-3 space-y-1.5">
              {students.map((item, index) => (
                <li
                  onClick={() => selectSubject(item.iin)}
                  className="cursor-pointer underline underline-offset-4"
                  key={index}
                >
                  {item.firstName} {item.secondName}
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedINN && (
          <div className="mt-12">
            <span className="text-2xl font-semibold">Предметы</span>

            <ul className="mt-3 space-y-1.5">
              {subjects.map((item, index) => (
                <li
                  onClick={() => setSelectSub(item?.name)}
                  className="cursor-pointer underline underline-offset-4"
                  key={index}
                >
                  {item?.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedINN && selectSub && (
          <div className="mt-12 space-y-4">
            <span className="text-2xl font-semibold">Оценка</span>

            <div>
              Дата:{" "}
              <DatePicker
                className="underline underline-offset-2"
                locale={ru}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="">
              Оценка (50-100):{" "}
              <input
                value={numberValue}
                onChange={(e) => setNumberValue(e.target.value)}
                type="number"
                min="50"
                max="100"
              />
            </div>

            <button
              onClick={setGrade}
              className="p-2 py-4 bg-cobalt text-white"
            >
              Поставить оценку
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
