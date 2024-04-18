import Header from "@/components/header/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex justify-between container mx-auto py-16">
        <div className="space-y-9">
          <h1 className="text-4xl font-semibold text-cobalt max-w-lg">
            Расширение прав и возможностей следующего поколения экономических
            лидеров
          </h1>

          <div className="max-w-lg text-azure space-y-5">
            <p>
              Алматинский экономический колледж (АЭК) – государственное
              образовательное учреждение с более чем 80-летним опытом подготовки
              квалифицированных специалистов по экономическим и технологическим
              специальностям, питанию и информационным технологиям.
            </p>
            <button className="text-white bg-cobalt px-7 py-1.5 rounded-md transition-all hover:bg-shipcove">
              Подробнее
            </button>
          </div>
        </div>

        <Image alt="Hero image" src="/heroImage.png" width="800" height="800" />
      </div>

      <div className="mx-auto container flex items-center py-16 space-y-12 flex-col font-semibold text-cobalt">
        <span className="text-2xl">Наши сервисы</span>

        <div className="flex gap-40">
          <div className="space-y-4">
            <div className="w-[400px] h-[300px] relative">
              <Image
                alt="section-image-1"
                src="/sectionimage1.png"
                layout="fill"
                className="object-cover"
              />
            </div>

            <span className="inline-block text-azure text-lg">
              Выбор специальности
            </span>
            <p className="text-shipcove text-sm font-medium">
              Мы предоставляем рекомендации и поддержку, чтобы помочь вам
              выбрать правильную программу, которая соответствует вашим
              интересам, навыкам и карьерным целям.
            </p>

            <Link
              href="/details/specialist"
              className="inline-block text-azure underline underline-offset-2 cursor-pointer hover:text-cobalt"
            >
              Читать дальше
            </Link>
          </div>

          <div className="space-y-4">
            <div className="w-[400px] h-[300px] relative">
              <Image
                alt="section-image-2"
                src="/sectionimage2.png"
                layout="fill"
                className="object-cover"
              />
            </div>

            <span className="inline-block text-azure text-lg">
              Наши социальные партнеры
            </span>
            <p className="text-shipcove text-sm font-medium">
              Мы сотрудничаем с местными предприятиями, профессиональными
              ассоциациями и отраслевыми экспертами, чтобы предоставить нашим
              студентам практический опыт обучения и возможности для налаживания
              связей.
            </p>

            <Link
              href="/details/socials"
              className="inline-block text-azure underline underline-offset-2 cursor-pointer hover:text-cobalt"
            >
              Читать дальше
            </Link>
          </div>

          <div className="space-y-4">
            <div className="w-[400px] h-[300px] relative">
              <Image
                alt="section-image-3"
                src="/sectionimage3.png"
                layout="fill"
                className="object-cover"
              />
            </div>

            <span className="inline-block text-azure text-lg">
              Выбор специальности
            </span>
            <p className="text-shipcove text-sm font-medium">
              Мы предоставляем рекомендации и поддержку, чтобы помочь вам
              выбрать правильную программу, которая соответствует вашим
              интересам, навыкам и карьерным целям.
            </p>

            <Link
              href="/details/student-account"
              className="inline-block text-azure underline underline-offset-2 cursor-pointer hover:text-cobalt"
            >
              Читать дальше
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-16">
        <div className="w-full h-0.5 bg-cobalt"></div>
        <span className="inline-block text-azure min-w-max p-2">
          Особенности и преимущества
        </span>
        <div className="w-full h-0.5 bg-cobalt"></div>
      </div>

      <div className="container flex  justify-between mx-auto py-16">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Особенности</h2>

          <ul className="text-azure space-y-2 list-outside marker:text-shuttlegray list-disc">
            <li>Комплексная учебная программа</li>
            <li>Опытный факультет</li>
            <li>Современные удобства</li>
            <li>Практическая подготовка</li>
            <li>Разнообразные специальности</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Преимущества</h2>

          <ul className="text-azure space-y-2 list-outside marker:text-shuttlegray list-disc">
            <li> Востребованные навыки</li>
            <li>Продвижение по службе</li>
            <li>Доступная стоимость обучения</li>
            <li>Гибкое планирование</li>
            <li>Сильная сеть выпускников</li>
          </ul>
        </div>

        <div className="w-[500px] h-[300px] relative">
          <Image
            alt="features-section-image"
            src="/featuresimage.png"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto py-16 space-y-3">
        <span className="text-2xl text-cobalt font-semibold">Наша команда</span>
        <p className="text-azure font-medium">
          Познакомьтесь с нашей преданной и знающей командой в Алматинском
          экономическом колледже
        </p>

        <div className="flex gap-10 py-5">
          <div className="flex flex-shrink-0">
            <div className="w-[300px] h-[300px] relative">
              <Image
                alt="features-section-image"
                src="/director.png"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="max-w-md space-y-3 space-x-6">
              <span className="inline-block text-lg text-cobalt font-semibold"></span>
              <span className="inline-block text-lg text-cobalt font-semibold">
                Касымбек Жаксыбай Нурлыбаевич
              </span>
              <span className="inline-block text-azure font-medium">
                Директор колледжа
              </span>
              <p className="text-shipcove">
                <span className="font-medium text-cobalt">
                  Касымбек Жаксыбай Нурлыбаевич
                </span>{" "}
                – высококвалифицированный директор со страстью к образованию и
                стремлением к инновациям. Он ведет АЭК к успеху на протяжении
                многих лет.
              </p>
            </div>
          </div>

          <div className="flex flex-shrink-0">
            <div className="w-[300px] h-[300px] relative">
              <Image
                alt="features-section-image2"
                src="/featuresimage2.png"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="max-w-md space-y-3 space-x-6">
              <span className="inline-block text-lg text-cobalt font-semibold"></span>
              <span className="inline-block text-lg text-cobalt font-semibold">
                Даулетбаева Жадыра Тлеубаевна
              </span>
              <span className="inline-block text-azure font-medium">
                Заместитель директора по учебной работе (УР)
              </span>
              <p className="text-shipcove">
                <span className="font-medium text-cobalt">
                  Даулетбаева Жадыра Тлеубаевна
                </span>{" "}
                – выдающийся профессионал в области учебной работы и педагогики.
                Её талант и приверженность образованию делают её одним из
                ключевых фигурантов в развитии колледжа АЭК.
              </p>
            </div>
          </div>
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
