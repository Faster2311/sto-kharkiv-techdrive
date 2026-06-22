import { useEffect, useState } from "react";
import { BUSINESS } from "../data/client";
import { NAV } from "../data/content";
import Icon from "./Icon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-pad flex h-16 items-center justify-between lg:h-20">
        <a href="#top" onClick={go("top")} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-flame-500 font-display text-lg font-extrabold text-white shadow-flame">
            TD
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold tracking-wide text-white">
              TechDrive
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-flame-300/80">
              Харків · Гагаріна 112
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={go(n.id)}
              className="text-sm font-medium text-mist-300 transition hover:text-flame-300"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="font-display text-sm font-semibold text-white hover:text-flame-300 transition"
          >
            {BUSINESS.phoneDial}
          </a>
          <a href="#cta" onClick={go("cta")} className="btn-flame !px-5 !py-2.5 text-sm">
            <Icon name="phone" className="h-4 w-4" />
            Записатись
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white lg:hidden"
          aria-label="Меню"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl">
          <nav className="container-pad flex flex-col gap-1 py-5">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={go(n.id)}
                className="rounded-md px-4 py-3 text-base font-medium text-white hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`tel:${BUSINESS.phone}`}
              className="btn-flame mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              <Icon name="phone" className="h-4 w-4" />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full"
              onClick={() => setOpen(false)}
            >
              <Icon name="tg" className="h-4 w-4" />
              Telegram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
