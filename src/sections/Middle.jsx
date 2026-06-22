import { useState } from "react";
import {
  COUNTERS,
  PROBLEM,
  ADVANTAGES,
  SERVICES,
  HOW,
  PORTFOLIO,
  REVIEWS,
  FAQ,
} from "../data/content";
import { PHOTOS } from "../data/photos";
import { BUSINESS } from "../data/client";
import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";

export function Counters() {
  return (
    <section className="border-y border-white/5 bg-ink-900/60">
      <div className="container-pad grid grid-cols-2 gap-y-8 py-12 lg:grid-cols-4 lg:gap-x-8 lg:py-16">
        {COUNTERS.map((c) => (
          <div key={c.label} className="reveal flex flex-col gap-2">
            <span className="font-display text-3xl font-bold text-flame-400 sm:text-4xl">
              {c.number}
            </span>
            <span className="text-sm leading-snug text-mist-300">
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={PHOTOS.problemBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/90 to-ink-950" />
      </div>
      <div className="container-pad">
        <SectionHeading
          kicker={PROBLEM.kicker}
          title={PROBLEM.title}
          lead={PROBLEM.lead}
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {PROBLEM.items.map((p, i) => (
            <li
              key={p.title}
              className="reveal panel relative overflow-hidden p-6"
            >
              <span className="absolute -right-2 -top-2 font-display text-7xl font-extrabold text-flame-500/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-300">
                {p.description}
              </p>
            </li>
          ))}
        </ul>
        <div className="reveal mt-10 flex max-w-3xl items-start gap-4">
          <span className="mt-1 grid h-9 w-9 flex-none place-items-center rounded-md bg-flame-500/15 text-flame-400">
            <Icon name="flame" className="h-5 w-5" />
          </span>
          <p className="text-base leading-relaxed text-mist-300">
            {PROBLEM.outro}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Advantages() {
  return (
    <section id="advantages" className="py-20 lg:py-28">
      <div className="container-pad">
        <SectionHeading
          kicker={ADVANTAGES.kicker}
          title={ADVANTAGES.title}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.items.map((it) => (
            <div
              key={it.title}
              className="reveal group panel relative overflow-hidden p-7 transition hover:border-flame-500/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-md bg-navy-500/20 text-flame-300 transition group-hover:bg-flame-500/15">
                <Icon name={it.icon} className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-white">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-300">
                {it.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/5 bg-ink-900/50 py-20 lg:py-28"
    >
      <div className="container-pad">
        <SectionHeading
          kicker={SERVICES.kicker}
          title={SERVICES.title}
          lead={SERVICES.lead}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.items.map((s) => (
            <article
              key={s.name}
              className="reveal panel group flex flex-col overflow-hidden transition hover:border-flame-500/40"
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <img
                  src={s.photo}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                {s.tag && (
                  <span className="absolute left-4 top-4 rounded-sm border border-flame-500/50 bg-ink-950/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-flame-300 backdrop-blur">
                    {s.tag}
                  </span>
                )}
                <div className="absolute right-4 top-4 flex flex-col items-end">
                  <span className="font-display text-lg font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    {s.price}
                  </span>
                  {s.priceNote && (
                    <span className="rounded-sm bg-flame-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      {s.priceNote}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-base font-bold text-white">
                  {s.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-300">
                  {s.description}
                </p>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-flame-300 transition hover:text-flame-400"
                >
                  Записати на цю послугу
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function How() {
  return (
    <section id="how" className="py-20 lg:py-28">
      <div className="container-pad">
        <SectionHeading kicker={HOW.kicker} title={HOW.title} />
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOW.steps.map((s, i) => (
            <li key={s.n} className="reveal relative">
              <div className="panel h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-flame-300">
                    Крок {s.n}
                  </span>
                  {i < HOW.steps.length - 1 && (
                    <Icon
                      name="arrow"
                      className="h-4 w-4 text-navy-400 lg:hidden"
                    />
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-300">
                  {s.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="border-t border-white/5 bg-ink-900/50 py-20 lg:py-28"
    >
      <div className="container-pad">
        <SectionHeading
          kicker={PORTFOLIO.kicker}
          title={PORTFOLIO.title}
          lead={PORTFOLIO.lead}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PHOTOS.portfolio.map((p) => (
            <figure
              key={p.caption}
              className="reveal group relative overflow-hidden rounded-md border border-white/5"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="chip mb-3">{p.tag}</span>
                <p className="font-display text-sm font-bold leading-snug text-white">
                  {p.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="container-pad">
        <SectionHeading
          kicker={REVIEWS.kicker}
          title={REVIEWS.title}
          lead="Без редактури. Імена та машини — реальні клієнти, які повертаються до нас на наступне ТО."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.items.map((r) => (
            <article
              key={r.name + r.car}
              className="reveal panel flex flex-col gap-4 p-7"
            >
              <div className="flex items-center gap-1 text-flame-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    name="star"
                    className="h-4 w-4 fill-flame-500 text-flame-500"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-mist-300">«{r.text}»</p>
              <footer className="mt-auto flex items-center gap-3 border-t border-white/5 pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-navy-500/30 font-display font-bold text-flame-300">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-mist-400">
                    {r.car} · {r.area}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section
      id="faq"
      className="border-t border-white/5 bg-ink-900/50 py-20 lg:py-28"
    >
      <div className="container-pad">
        <SectionHeading
          kicker={FAQ.kicker}
          title={FAQ.title}
          lead="Відповіді на питання, які найчастіше отримуємо у телефоні і Telegram."
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/5 overflow-hidden rounded-md border border-white/5 bg-ink-900/80">
          {FAQ.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="reveal">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-white">
                    {it.q}
                  </span>
                  <span
                    className={`mt-1 grid h-7 w-7 flex-none place-items-center rounded-sm border border-flame-500/40 text-flame-300 transition ${
                      isOpen ? "rotate-45 bg-flame-500 text-white" : ""
                    }`}
                  >
                    <Icon name="plus" className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-mist-300">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
