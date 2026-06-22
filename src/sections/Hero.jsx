import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BUSINESS } from "../data/client";
import { HERO } from "../data/content";
import { PHOTOS } from "../data/photos";
import Icon from "../components/Icon";

// CSS @keyframes drive the staggered entrance reliably across React renders.
// GSAP handles the gentle wash-in on the section frame — second GSAP animation
// is the scroll reveal in useReveal().
const delay = (i) => ({ animationDelay: `${0.06 * i}s` });

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    if (!root.current) return;
    gsap.fromTo(
      root.current,
      { filter: "brightness(0.6)" },
      { filter: "brightness(1)", duration: 1.4, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative isolate overflow-hidden bg-ink-950 pt-24 lg:pt-28"
    >
      <div className="absolute inset-0 diag-line" />
      <div className="absolute -top-32 -right-20 h-[55vh] w-[55vh] rounded-full bg-flame-500/15 blur-[120px]" />
      <div className="absolute -bottom-40 -left-20 h-[40vh] w-[40vh] rounded-full bg-navy-500/30 blur-[120px]" />

      <div className="container-pad relative grid gap-12 pb-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-24">
        <div>
          <div
            className="enter inline-flex items-center gap-2 rounded-sm border border-flame-500/40 bg-flame-500/10 px-4 py-2"
            style={delay(0)}
          >
            <Icon name="flame" className="h-4 w-4 text-flame-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-flame-300">
              {HERO.badge}
            </span>
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.1rem,5.4vw,4rem)] font-bold leading-[1.04] tracking-[-0.02em]">
            <span className="block overflow-hidden">
              <span className="enter block" style={delay(1)}>
                {HERO.title[0]}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="enter block" style={delay(2)}>
                <span className="text-flame-400">{HERO.title[1]}</span>
              </span>
            </span>
          </h1>

          <p className="enter mt-7 max-w-xl text-lg text-mist-300" style={delay(3)}>
            {HERO.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="enter btn-flame"
              style={delay(4)}
            >
              <Icon name="phone" className="h-4 w-4" />
              Подзвонити майстру
            </a>
            <a
              href={BUSINESS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="enter btn-ghost"
              style={delay(5)}
            >
              <Icon name="tg" className="h-4 w-4" />
              Написати у Telegram
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-5 border-t border-white/5 pt-6">
            {HERO.metrics.map((m, i) => (
              <div key={m.label} className="enter" style={delay(6 + i)}>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-mist-400">
                  {m.label}
                </dt>
                <dd className="mt-1 font-display text-xl font-bold text-flame-400 sm:text-2xl">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="enter-image relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 shadow-panel">
            <img
              src={PHOTOS.hero}
              alt="Механік TechDrive у боксі: робота з двигуном"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />

            <div className="absolute inset-x-5 bottom-5 flex flex-col gap-3 sm:inset-x-6 sm:bottom-6">
              <div
                className="enter flex items-center gap-3 self-start rounded-sm border border-flame-500/40 bg-ink-950/75 px-3 py-2 backdrop-blur"
                style={delay(10)}
              >
                <Icon name="pin" className="h-4 w-4 text-flame-400" />
                <span className="text-xs font-medium text-white">
                  вул. Гагаріна 112, Харків
                </span>
              </div>
              <div
                className="enter flex items-center gap-3 self-start rounded-sm border border-flame-500/40 bg-ink-950/75 px-3 py-2 backdrop-blur"
                style={delay(11)}
              >
                <Icon name="clock" className="h-4 w-4 text-flame-400" />
                <span className="text-xs font-medium text-white">
                  Пн–Сб 08:00–20:00
                </span>
              </div>
            </div>
          </div>

          <div
            className="enter absolute -left-4 top-12 hidden rounded-md border border-white/10 bg-ink-900/95 p-4 shadow-panel backdrop-blur sm:block"
            style={delay(12)}
          >
            <p className="text-xs text-mist-400">Перевага TechDrive</p>
            <p className="mt-1 font-display text-base font-bold text-flame-400">
              0 ₴
            </p>
            <p className="text-[11px] leading-tight text-mist-300">
              діагностика
              <br />
              при ремонті
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
