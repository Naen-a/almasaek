"use client";
import { getAddStudent } from "@/app/api/addstudent/getAddStudent";
import { ru } from "date-fns/locale/ru";
import Link from "next/link";
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
registerLocale("ru", ru);

export const AddStudent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [iin, setIin] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [thirdName, setThirdName] = useState("");
  const [gender, setGender] = useState(true);
  const [adress, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("РПО 4-1");

  const addStudent = async () => {
    if (
      !iin ||
      !firstName ||
      !secondName ||
      !adress ||
      !number ||
      !email ||
      !group
    ) {
      toast("Заполните все поля пожалуйста");
      return;
    }

    const result = await getAddStudent({
      iin,
      firstName,
      secondName,
      adress,
      number,
      email,
      group,
      gender,
      thirdName,
    });

    if (result === 201) {
      toast.success("Студент создан");

      setStartDate(new Date());
      setIin("");
      setFirstName("");
      setSecondName("");
      setThirdName("");
      setGender(true);
      setAdress("");
      setNumber("");
      setEmail("");
      setGroup("РПО 4-1");
    }

    if (result === 500) {
      toast.error("Произашла ошибка, обратитесь к Алмазяну");
    }

    console.log(result);
  };

  return (
    <div className="space-y-12 pb-10">
      <div>
        <Toaster />
      </div>

      <div className="py-10 bg-cobalt">
        <div className="container mx-auto space-x-3 text-white max-w-6xl">
          <Link
            href="/"
            className="cursor-pointer hover:underline hover:underline-offset-4"
          >
            Главная
          </Link>
          <span className="inline-block">→</span>
          <Link
            href="/admin/student/add"
            className="cursor-pointer font-semibold hover:underline hover:underline-offset-4"
          >
            Добавить студента
          </Link>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl p-10 rounded-2xl bg-zinc-300 space-y-12 flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Добавить студента</h1>

        <div className="w-full px-14 space-y-3">
          <div className="flex flex-col space-y-1">
            <span className="text-lg font-medium">ИИН студента</span>
            <input
              value={iin}
              onChange={(e) => setIin(e.target.value)}
              placeholder="Введите ИИН студента"
              className="w-full p-2"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-lg font-medium">Фамилия</span>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Введите фамилию студента"
              className="w-full p-2"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-lg font-medium">Имя</span>
            <input
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
              placeholder="Введите имя студента"
              className="w-full p-2"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-lg font-medium">
              Отчество (необязательно)
            </span>
            <input
              value={thirdName}
              onChange={(e) => setThirdName(e.target.value)}
              placeholder="Введите фамилию студента"
              className="w-full p-2"
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <span className="text-lg font-medium">Дата рождения</span>
            <div>
              <DatePicker
                className="w-full"
                locale="ru"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />{" "}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-lg font-medium">Пол</span>

            <div className="flex space-x-3">
              <div>
                <input
                  onChange={(e) => setGender(true)}
                  checked={gender}
                  type="checkbox"
                />
                <label>Мужской</label>
              </div>

              <div>
                <input
                  onChange={(e) => setGender(false)}
                  checked={!gender}
                  type="checkbox"
                />
                <label>Женский</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-lg font-medium">Адрес</span>
            <input
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              placeholder="Введите адрес студента"
              className="w-full p-2"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-lg font-medium">Контактный телефон</span>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Введите контактный телефон студента"
              className="w-full p-2"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-lg font-medium">E-mail</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите e-mail студента"
              className="w-full p-2"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-lg font-medium">Группа</span>
            <select value={group} onChange={(e) => setGroup(e.target.value)}>
              <option value="РПО 4-1">РПО 4-1</option>
              <option value="РПО 4-2">РПО 4-2</option>
              <option value="РПО 4-3">РПО 4-3</option>
              <option value="РПО 4-4">РПО 4-4</option>
            </select>
          </div>
        </div>

        <button
          onClick={addStudent}
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
      </div>
    </div>
  );
};
