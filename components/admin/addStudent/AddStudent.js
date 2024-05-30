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
    </div>
  );
};
