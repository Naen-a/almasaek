import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({ subsets: ["cyrillic", "latin"] });

export const metadata = {
  title: "АЭК Колледж студенттерыне веб портал",
  description: "Описание сайта для индексаций гугла",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>{children}</body>
    </html>
  );
}
