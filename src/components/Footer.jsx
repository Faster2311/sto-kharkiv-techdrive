import { BUSINESS } from "../data/client";
import { NAV } from "../data/content";
import Icon from "./Icon";

export default function Footer() {
  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="container-pad py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <a href="#top" onClick={go("top")} className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-flame-500 font-display text-lg font-extrabold text-white">
                TD
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold text-white">
                  TechDrive
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-flame-300/80">
                  Харків · з 2015
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm text-mist-300">
              Автосервіс на Гагаріна, 112 у Харкові. Чесна діагностика і ремонт без 'давайте поміняємо все'. Діагностика 0 ₴, якщо беремось за ремонт.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-mist-300 transition hover:border-flame-500 hover:text-flame-300"
                aria-label="Телефон"
              >
                <Icon name="phone" className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-mist-300 transition hover:border-flame-500 hover:text-flame-300"
                aria-label="Telegram"
              >
                <Icon name="tg" className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-mist-300 transition hover:border-flame-500 hover:text-flame-300"
                aria-label="Instagram"
              >
                <Icon name="ig" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-flame-300">
              Розділи
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-mist-300">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={go(n.id)}
                    className="transition hover:text-flame-300"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-flame-300">
              Адреса
            </h4>
            <p className="mt-5 text-sm text-mist-300">
              {BUSINESS.address}
              <br />
              {BUSINESS.workHoursShort}
            </p>
            <p className="mt-4 text-sm text-mist-300">
              Заїзд з боку центрального проїзду. Безкоштовний паркінг біля боксу.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-flame-300">
              Зв'язок
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-mist-300">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="font-display text-base font-semibold text-white transition hover:text-flame-300"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-flame-300"
                >
                  Telegram: {BUSINESS.telegramHandle}
                </a>
              </li>
              <li>
                <a href={BUSINESS.viber} className="transition hover:text-flame-300">
                  Viber: {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-flame-300"
                >
                  Instagram: {BUSINESS.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-mist-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TechDrive, Харків. Усі права захищено.</p>
          <p>Діагностика 0 ₴ при подальшому ремонті у нашому боксі.</p>
        </div>
      </div>
    </footer>
  );
}
