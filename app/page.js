import Header from "@/components/header/header";
import Image from "next/image";

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

      <div className="mx-auto container">Sdes bydet slaider</div>

      <div className="mx-auto container flex items-center py-16 space-y-12 flex-col font-semibold text-cobalt">
        <span className="text-2xl">Наши сервисы</span>

        <div className="flex gap-40">
          <div className="space-y-2">
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

            <a className="inline-block text-azure underline underline-offset-2 cursor-pointer hover:text-cobalt">
              Читать дальше
            </a>
          </div>

          <div className="space-y-2">
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

            <a className="inline-block text-azure underline underline-offset-2 cursor-pointer hover:text-cobalt">
              Читать дальше
            </a>
          </div>

          <div className="space-y-2">
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

            <a className="inline-block text-azure underline underline-offset-2 cursor-pointer hover:text-cobalt">
              Читать дальше
            </a>
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
            className="object-cover"
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
                src="/featuresimage.png"
                layout="fill"
                className="object-cover"
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
                className="object-cover"
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
    </div>
  );
}
