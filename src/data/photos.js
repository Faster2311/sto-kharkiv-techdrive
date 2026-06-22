// Кожне фото підібране окремо для секції — без перекриття між секціями.
// Підписи портфоліо описують те, що дійсно видно на кадрі (не вигадані марки).
import hero from "../assets/photos/pixabay_8138904.jpg";

import problemBg from "../assets/photos/pixabay_2237497.jpg";

import svcDiagnostic from "../assets/photos/pixabay_4958277.jpg";
import svcOil from "../assets/photos/pixabay_3964367.jpg";
import svcEngine from "../assets/photos/pixabay_2773263.jpg";
import svcBody from "../assets/photos/pixabay_5956464.jpg";
import svcTire from "../assets/photos/pixabay_2875247.jpg";

import portfolio1 from "../assets/photos/pixabay_2015636.jpg";
import portfolio2 from "../assets/photos/pixabay_1749633.jpg";
import portfolio3 from "../assets/photos/pixabay_5956469.jpg";
import portfolio4 from "../assets/photos/pixabay_1751753.jpg";
import portfolio5 from "../assets/photos/pixabay_2861853.jpg";
import portfolio6 from "../assets/photos/pixabay_3691962.jpg";
import portfolio7 from "../assets/photos/pixabay_2469429.jpg";
import portfolio8 from "../assets/photos/pixabay_4503692.jpg";

import ctaBg from "../assets/photos/pixabay_2954372.jpg";

import about1 from "../assets/photos/pixabay_346231.jpg";
import about2 from "../assets/photos/pixabay_346254.jpg";
import about3 from "../assets/photos/pixabay_4417046.jpg";

export const PHOTOS = {
  hero,
  problemBg,
  ctaBg,
  services: {
    diagnostic: svcDiagnostic,
    oil: svcOil,
    engine: svcEngine,
    body: svcBody,
    tire: svcTire,
  },
  portfolio: [
    {
      src: portfolio1,
      caption: "Передогляд перед ремонтом: повний кузовний об'їзд",
      tag: "ТО",
    },
    {
      src: portfolio2,
      caption: "Робота з гальмівною системою у боксі",
      tag: "Гальма",
    },
    {
      src: portfolio3,
      caption: "Перефарбування кузова у фарбувальній камері",
      tag: "Кузов",
    },
    {
      src: portfolio4,
      caption: "Авто на підйомнику для огляду ходової",
      tag: "Ходова",
    },
    {
      src: portfolio5,
      caption: "Заміна колеса і перевірка ступиці",
      tag: "Шиномонтаж",
    },
    {
      src: portfolio6,
      caption: "Робота під капотом: обслуговування двигуна",
      tag: "Двигун",
    },
    {
      src: portfolio7,
      caption: "Підйомник у боксі — підготовка до діагностики",
      tag: "Ходова",
    },
    {
      src: portfolio8,
      caption: "Ferrari у нашому боксі на плановому обслуговуванні",
      tag: "Двигун",
    },
  ],
  about: [about1, about2, about3],
};
