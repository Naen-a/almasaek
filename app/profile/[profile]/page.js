"use client";

import { getUser } from "@/app/api/getUser/getUser";
import { getGrades } from "@/app/api/grades/getGrades";
import Header from "@/components/header/header";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Академическая прогрессия студента АЭК",
    },
  },
};

const labels = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

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

let dataSet = {
  labels,
  datasets: [
    {
      label: subjects[0]?.name,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: subjects[1]?.name,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: subjects[2]?.name,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: subjects[3]?.name,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: "rgb(128, 0, 128)",
      backgroundColor: "rgba(128, 0, 128, 0.5)",
    },
  ],
};

export default function Page({ params }) {
  const [currentProfile, setCurrentProfile] = useState(null);
  const [userState, setUserState] = useState("");
  const [grades, setGrades] = useState([]);
  const [dataSetState, setDataSetState] = useState({
    labels,
    datasets: [
      {
        label: subjects[0]?.name,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: subjects[1]?.name,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: subjects[2]?.name,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: subjects[3]?.name,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "rgb(128, 0, 128)",
        backgroundColor: "rgba(128, 0, 128, 0.5)",
      },
    ],
  });

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

        // Создаем объект для хранения оценок по месяцам и предметам
        let gradesByMonthAndSubject = {};

        // Проходим по массиву data и собираем оценки
        res.forEach((item) => {
          // Извлекаем месяц из даты
          let monthIndex = new Date(item.date).getMonth();
          // Извлекаем название предмета
          let subjectName = item.subject;
          // Если объект для данного месяца еще не создан, создаем его
          if (!gradesByMonthAndSubject[monthIndex]) {
            gradesByMonthAndSubject[monthIndex] = {};
          }
          // Если массив данных для данного предмета еще не создан, создаем его
          if (!gradesByMonthAndSubject[monthIndex][subjectName]) {
            gradesByMonthAndSubject[monthIndex][subjectName] = [];
          }
          // Добавляем оценку в массив данных
          gradesByMonthAndSubject[monthIndex][subjectName].push(item.grade);
        });

        // Обновляем dataSet с учетом собранных оценок
        Object.keys(gradesByMonthAndSubject).forEach((monthIndex) => {
          // Преобразуем индекс месяца в число
          monthIndex = parseInt(monthIndex);
          // Проходим по каждому предмету в dataSet.datasets и добавляем данные
          subjects.forEach((subject, index) => {
            let subjectName = subject.name;
            // Находим соответствующий массив данных по предмету и месяцу
            let dataToUpdate = dataSet.datasets[index].data;
            // Если в собранных данных есть оценки для этого предмета и месяца, добавляем их
            if (
              gradesByMonthAndSubject[monthIndex] &&
              gradesByMonthAndSubject[monthIndex][subjectName]
            ) {
              let grades = gradesByMonthAndSubject[monthIndex][subjectName];
              // Суммируем оценки и находим среднее значение
              let sum = grades.reduce(
                (accumulator, currentValue) =>
                  accumulator + parseFloat(currentValue),
                0,
              );
              let average = sum / grades.length;
              // Обновляем значение в dataSet
              dataToUpdate[monthIndex] = average;
            }
          });
        });

        // Выводим обновленный dataSet
        setDataSetState(dataSet);
      });
    });
  }, []);

  console.log(grades);

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

          <div className="space-x-2 text-azure container mx-auto pt-14 text-center mb-32">
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
              <span className="text-2xl font-semibold">
                График успеваемости
              </span>

              <Line options={options} data={dataSetState} />
            </div>

            <div className=" mt-24 text-left text-black space-y-3">
              <span className="text-2xl font-semibold">Оценки</span>

              <div className="flex gap-14 justify-between">
                <div className="shadow-lg grow space-y-2 p-10 border border-gray-200">
                  <span className="text-lg font-semibold">
                    {subjects[0].name}
                  </span>

                  <ul>
                    {grades
                      .sort((a, b) => {
                        // Преобразуем строки с датами в объекты Date для сравнения
                        const dateA = new Date(a.date);
                        const dateB = new Date(b.date);

                        // Сравниваем даты (для убывающего порядка используем отрицательное значение)
                        return dateB - dateA;
                      })
                      .map((item, index) => {
                        if (item?.subject === subjects[0].name) {
                          const dd = new Date(item.date).toLocaleDateString();

                          return (
                            <li
                              className="flex justify-between underline underline-offset-4 items-center"
                              key={index}
                            >
                              <span className="text-cobalt">{item.grade}</span>{" "}
                              <span>{dd}</span>
                            </li>
                          );
                        }
                      })}
                  </ul>
                </div>

                <div className="shadow-lg grow space-y-2 p-10 border border-gray-200">
                  <span className="text-lg font-semibold">
                    {subjects[1].name}
                  </span>

                  <ul>
                    {grades
                      .sort((a, b) => {
                        // Преобразуем строки с датами в объекты Date для сравнения
                        const dateA = new Date(a.date);
                        const dateB = new Date(b.date);

                        // Сравниваем даты (для убывающего порядка используем отрицательное значение)
                        return dateB - dateA;
                      })
                      .map((item, index) => {
                        if (item?.subject === subjects[1].name) {
                          const dd = new Date(item.date).toLocaleDateString();

                          return (
                            <li
                              className="flex justify-between underline underline-offset-4 items-center"
                              key={index}
                            >
                              <span className="text-cobalt">{item.grade}</span>{" "}
                              <span>{dd}</span>
                            </li>
                          );
                        }
                      })}
                  </ul>
                </div>

                <div className="shadow-lg grow space-y-2 p-10 border border-gray-200">
                  <span className="text-lg font-semibold">
                    {subjects[2].name}
                  </span>

                  <ul>
                    {grades
                      .sort((a, b) => {
                        // Преобразуем строки с датами в объекты Date для сравнения
                        const dateA = new Date(a.date);
                        const dateB = new Date(b.date);

                        // Сравниваем даты (для убывающего порядка используем отрицательное значение)
                        return dateB - dateA;
                      })
                      .map((item, index) => {
                        if (item?.subject === subjects[2].name) {
                          const dd = new Date(item.date).toLocaleDateString();

                          return (
                            <li
                              className="flex justify-between underline underline-offset-4 items-center"
                              key={index}
                            >
                              <span className="text-cobalt">{item.grade}</span>{" "}
                              <span>{dd}</span>
                            </li>
                          );
                        }
                      })}
                  </ul>
                </div>

                <div className="shadow-lg grow space-y-2 p-10 border border-gray-200">
                  <span className="text-lg font-semibold">
                    {subjects[3].name}
                  </span>

                  <ul>
                    {grades
                      .sort((a, b) => {
                        // Преобразуем строки с датами в объекты Date для сравнения
                        const dateA = new Date(a.date);
                        const dateB = new Date(b.date);

                        // Сравниваем даты (для убывающего порядка используем отрицательное значение)
                        return dateB - dateA;
                      })
                      .map((item, index) => {
                        if (item?.subject === subjects[3].name) {
                          const dd = new Date(item.date).toLocaleDateString();

                          return (
                            <li
                              className="flex justify-between underline underline-offset-4 items-center"
                              key={index}
                            >
                              <span className="text-cobalt">{item.grade}</span>{" "}
                              <span>{dd}</span>
                            </li>
                          );
                        }
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
