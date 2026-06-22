// Кожне фото підібране окремо для секції — без перекриття між секціями
import hero from "../assets/photos/pixabay_8138904.jpg";

import problemBg from "../assets/photos/pixabay_2237497.jpg";

import svcDiagnostic from "../assets/photos/pixabay_4958277.jpg";
import svcOil from "../assets/photos/pixabay_3964367.jpg";
import svcEngine from "../assets/photos/pixabay_2773263.jpg";
import svcBody from "../assets/photos/pixabay_5956464.jpg";
import svcTire from "../assets/photos/pixabay_2875247.jpg";

import portfolio1 from "../assets/photos/pixabay_2015636.jpg";
import portfolio2 from "../assets/photos/pixabay_2918112.jpg";
import portfolio3 from "../assets/photos/pixabay_5956469.jpg";
import portfolio4 from "../assets/photos/pixabay_1638594.jpg";
import portfolio5 from "../assets/photos/pixabay_2783384.jpg";
import portfolio6 from "../assets/photos/pixabay_7647805.jpg";
import portfolio7 from "../assets/photos/pixabay_2829141.jpg";
import portfolio8 from "../assets/photos/pixabay_1130653.jpg";

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
      caption: "Mercedes E-class · повне ТО після 100 000 км",
      tag: "ТО",
    },
    {
      src: portfolio2,
      caption: "BMW M-серії · діагностика двигуна + чип-тюнінг",
      tag: "Двигун",
    },
    {
      src: portfolio3,
      caption: "Volkswagen Passat · кузовні + перефарбування",
      tag: "Кузов",
    },
    {
      src: portfolio4,
      caption: "ВАЗ-2107 · реставрація і повторний фарб",
      tag: "Кузов",
    },
    {
      src: portfolio5,
      caption: "Ford Mustang · ремонт коробки і вихлопу",
      tag: "Двигун",
    },
    {
      src: portfolio6,
      caption: "Renault Megane · заміна ременя ГРМ і помпи",
      tag: "Двигун",
    },
    {
      src: portfolio7,
      caption: "Lexus NX · гальмівні диски і колодки",
      tag: "Гальма",
    },
    {
      src: portfolio8,
      caption: "Skoda Octavia · сезонна заміна гуми і розвал",
      tag: "Шиномонтаж",
    },
  ],
  about: [about1, about2, about3],
};
