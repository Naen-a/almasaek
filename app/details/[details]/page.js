"use client";

import Header from "@/components/header/header";
import Image from "next/image";
import Link from "next/link";

const textObject = {
  specialist: {
    link: {
      text: "Выбор специальности",
      link: "/details/specialist",
    },
    h1: "Выбор специальности",
    heroh1: `Алматинский Экономический Колледж предлагает разнообразные специальности, соответствующие современным требованиям рынка труда. Наш учебный центр предоставляет студентам возможность приобрести не только теоретические знания, но и практические навыки, необходимые для успешной карьеры в выбранной области.`,
    heroHere: `Среди наших специальностей вы найдете:`,
    heroLi: [
      "1. Программист: Изучение современных языков программирования, разработка программного обеспечения, а также анализ и тестирование программных продуктов.",

      "2. Дизайнер: Обучение основам дизайна, работа с графическими редакторами, создание дизайн-концепций для различных медиа-платформ.",

      "3. Повар: Приобретение навыков кулинарного искусства, овладение техниками приготовления разнообразных блюд, а также освоение санитарно-гигиенических стандартов.",

      " 4. Экономист: Изучение основ экономической теории, финансов, управления предприятием, а также анализ рынков и принятие экономически обоснованных решений.",
    ],
    HeroLast: `Выбирая Алматинский Экономический Колледж, вы открываете для себя возможность получить качественное образование и стать востребованным специалистом в выбранной сфере.`,
    src: "/bigHero1.png",
  },

  socials: {
    link: {
      text: "Наши социальные партнеры",
      link: "/details/socials",
    },
    h1: "Выбор специальности",
    heroh1: `Алматинский Экономический Колледж гордится своими социальными партнерами, которые играют важную роль в обеспечении качественного образования и профессиональной подготовки наших студентов. Наши социальные партнеры представляют собой разнообразные организации и компании, с которыми мы сотрудничаем для создания оптимальных условий обучения и трудоустройства.
    `,
    heroHere: `Наши социальные партнеры включают:
    `,
    heroLi: [
      "1. Крупные предприятия и компании: Мы сотрудничаем с ведущими компаниями и предприятиями в различных отраслях, что позволяет нашим студентам получать доступ к стажировкам, практикам и возможностям трудоустройства во время обучения и после его завершения.",

      "2. Профессиональные ассоциации и общественные организации: Мы активно взаимодействуем с профессиональными ассоциациями и общественными организациями, которые способствуют профессиональному развитию студентов, предоставляют дополнительные образовательные ресурсы и помогают им наращивать свои профессиональные сети.",

      "3. Учебные заведения и научные центры: Наш колледж поддерживает партнерские отношения с университетами, колледжами и научными центрами, что способствует обмену знаний и опытом, а также обеспечивает доступ к передовым научным и образовательным ресурсам.",
    ],
    HeroLast: `Благодаря нашим социаль ным партнерам мы можем предложить студентам обширные возможности для развития и успешного старта в своей профессиональной карьере.`,
    src: "/bigHero2.png",
  },

  "student-account": {
    link: {
      text: "Студенческий аккаунт",
      link: "/details/student-account",
    },
    h1: "Студенческий аккаунт",
    heroh1: `Студенческий аккаунт в Алматинском Экономическом Колледже является важным инструментом, обеспечивающим студентам доступ к различным ресурсам и сервисам, необходимым для успешного обучения и учебной деятельности.
    `,
    heroHere: `Вот некоторые из его основных возможностей:
    `,
    heroLi: [
      "1. Управление учебным процессом: Студенческий аккаунт позволяет студентам регистрироваться на курсы, просматривать своё расписание занятий, оценки и академическую информацию, а также подавать заявления на академические и финансовые вопросы.",

      "2. Информационные ресурсы колледжа: Студенческий аккаунт также обеспечивает доступ к информационным ресурсам колледжа, включая новости, анонсы мероприятий, обновления программ и полезные ресурсы для студентов.",

      "3. Мониторинг успеваемости: Студенческий аккаунт также позволяет студентам отслеживать свою успеваемость, просматривать оценки за выполненные работы и экзамены. Это обеспечивает студентам возможность своевременно оценить свой прогресс в учебе, а также принимать необходимые меры для улучшения академических результатов при необходимости. Этот инструмент помогает студентам быть в курсе своих академических достижений и своевременно реагировать на любые проблемы с успеваемостью, обеспечивая тем самым более эффективное управление учебным процессом.",
    ],
    HeroLast: `Студенческий аккаунт предоставляет студентам удобный и централизованный доступ ко многим аспектам и ресурсам учебного процесса, что способствует их академическому успеху и удобству обучения.`,
    src: "/bigHero3.png",
  },
};

export default function Page({ params }) {
  return (
    <div>
      <Header />

      <div className="space-x-2 text-azure container mx-auto pt-14">
        <Link
          href="/"
          className="cursor-pointer hover:underline hover:underline-offset-2"
        >
          Главная
        </Link>
        <span>/</span>
        <Link
          href={textObject[params.details].link.link}
          className="font-semibold cursor-pointer hover:underline hover:underline-offset-2"
        >
          {textObject[params.details].link.text}
        </Link>
      </div>

      <div className="container mx-auto flex-col items-center flex justify-center p-16 text-3xl font-semibold text-cobalt space-y-12">
        <h1>Наши сервисы</h1>

        <div className="w-[900px] h-[500px] relative">
          <Image
            alt="section-image-1"
            src={textObject[params.details].src}
            layout="fill"
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="container text-base font-medium text-shipcove mx-auto max-w-4xl space-y-6">
          <h1 className="text-xl text-center text-cobalt">
            {textObject[params.details].h1}
          </h1>

          <p className="text-base">{textObject[params.details].heroh1}</p>

          <span className="inline-block">
            {textObject[params.details].heroHere}
          </span>

          <ul className="space-y-6">
            {textObject[params.details].heroLi.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto flex justify-center py-16 flex-col items-center space-y-6">
        <span className="text-2xl text-cobalt font-semibold">
          Подпишись на новостную рассылку
        </span>
        <p className="font-semibold text-shuttlegray">
          Введите свой адрес электронной почты, чтобы подписаться на нашу
          рассылку новостей!
        </p>
        <input
          type="text"
          placeholder="Email address"
          className="py-2 px-3 outline-shuttlegray border border-shuttlegray rounded-md text-shuttlegray w-1/3"
        />

        <button className="text-white bg-cobalt px-7 py-1.5 rounded-md transition-all hover:bg-shipcove">
          Отправить
        </button>
      </div>

      <div className="mx-auto container items-center flex gap-10 py-5">
        <a className="cursor-pointer">
          <svg
            width="42"
            height="42"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41 20.6247C41 9.23486 31.821 0 20.5 0C9.17902 0 0 9.23486 0 20.6247C0 30.9182 7.49543 39.4512 17.2971 41V26.5879H12.0907V20.6247H17.2971V16.0798C17.2971 10.9113 20.3587 8.0544 25.0405 8.0544C27.2834 8.0544 29.63 8.45756 29.63 8.45756V13.5332H27.0441C24.4985 13.5332 23.7029 15.1227 23.7029 16.7556V20.6247H29.3878L28.4797 26.5879H23.7029V41C33.5046 39.4541 41 30.9211 41 20.6247Z"
              fill="#1977F3"
            />
            <path
              d="M28.8851 26.4246L29.7653 20.4965H24.2551V16.6501C24.2551 15.0296 25.0235 13.4467 27.4936 13.4467H30V8.40079C30 8.40079 27.7255 8 25.5516 8C21.0138 8 18.0464 10.8372 18.0464 15.9782V20.4965H13V26.4246H18.0464V40.752C19.0579 40.9164 20.0945 41 21.1507 41C22.2069 41 23.2436 40.9135 24.2551 40.752V26.4246H28.8851Z"
              fill="#FEFEFE"
            />
          </svg>
        </a>
        <a className="cursor-pointer">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.6953 41.3907C32.1251 41.3907 41.3907 32.1251 41.3907 20.6953C41.3907 9.26562 32.1251 0 20.6953 0C9.26562 0 0 9.26562 0 20.6953C0 32.1251 9.26562 41.3907 20.6953 41.3907Z"
              fill="#2DAAE1"
            />
            <path
              d="M33.9649 12.4628C32.9887 12.896 31.9402 13.1888 30.8379 13.3204C31.9629 12.6467 32.8248 11.5791 33.2318 10.3085C32.1631 10.9433 30.9934 11.3902 29.7737 11.6297C28.7811 10.5717 27.3657 9.91113 25.7997 9.91113C22.794 9.91113 20.3563 12.3478 20.3563 15.3554C20.3563 15.7815 20.4043 16.1972 20.4965 16.5964C15.9717 16.369 11.9602 14.2016 9.27508 10.9082C8.80622 11.7125 8.53785 12.6477 8.53785 13.6455C8.53785 15.5341 9.49911 17.2004 10.9597 18.1765C10.0951 18.1497 9.24938 17.9163 8.49337 17.4958V17.5646C8.49337 20.2027 10.3697 22.4023 12.8605 22.9026C12.4029 23.028 11.9227 23.0935 11.426 23.0935C11.0748 23.0935 10.734 23.0602 10.4011 22.9976C11.094 25.1598 13.1046 26.7337 15.4863 26.7782C13.623 28.2388 11.2752 29.1095 8.7252 29.1095C8.28599 29.1095 7.85192 29.0833 7.42578 29.0319C9.83551 30.5771 12.6967 31.4791 15.7713 31.4791C25.7849 31.4791 31.2614 23.1833 31.2614 15.989C31.2614 15.7528 31.2562 15.5184 31.2448 15.2848C32.3118 14.5131 33.2329 13.5575 33.9649 12.4628Z"
              fill="white"
            />
          </svg>
        </a>
        <a className="cursor-pointer">
          <svg
            width="50"
            height="50"
            viewBox="0 0 60 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.9109 6.46318C57.2352 3.91916 55.2447 1.91565 52.7167 1.23571C48.1357 0 29.7645 0 29.7645 0C29.7645 0 11.3936 0 6.81231 1.23571C4.28432 1.91565 2.29332 3.91916 1.61813 6.46318C0.390686 11.0743 0.390686 20.6953 0.390686 20.6953C0.390686 20.6953 0.390686 30.3159 1.61813 34.9275C2.29332 37.4718 4.28432 39.4748 6.81206 40.1555C11.3934 41.3907 29.7643 41.3907 29.7643 41.3907C29.7643 41.3907 48.1354 41.3907 52.7165 40.1555C55.2445 39.475 57.235 37.4718 57.9107 34.9278C59.1384 30.3161 59.1384 20.6956 59.1384 20.6956C59.1384 20.6956 59.1384 11.0746 57.9107 6.46343"
              fill="#FF0000"
            />
            <path
              d="M23.7562 29.4306L39.1107 20.696L23.7562 11.9604V29.4306Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
