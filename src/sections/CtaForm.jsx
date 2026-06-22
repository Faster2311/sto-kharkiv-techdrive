import { useState } from "react";
import { BUSINESS } from "../data/client";
import { CTA } from "../data/content";
import { PHOTOS } from "../data/photos";
import Icon from "../components/Icon";

export default function CtaForm() {
  const [state, setState] = useState({
    name: "",
    phone: "",
    msg: "",
    hp: "",
    sent: false,
    error: "",
  });

  const submit = (e) => {
    e.preventDefault();
    if (state.hp) return;
    const cleanName = state.name.replace(/[<>\\]/g, "").trim();
    const cleanPhone = state.phone.replace(/[^\d+()\s-]/g, "").trim();
    if (cleanName.length < 2) {
      setState((s) => ({ ...s, error: "Вкажіть, як до вас звертатися" }));
      return;
    }
    if (cleanPhone.replace(/\D/g, "").length < 9) {
      setState((s) => ({ ...s, error: "Перевірте телефон — потрібно щонайменше 9 цифр" }));
      return;
    }
    window.__formSubmits = (window.__formSubmits || []).filter(
      (t) => Date.now() - t < 10 * 60 * 1000
    );
    if (window.__formSubmits.length >= 3) {
      setState((s) => ({
        ...s,
        error: "Забагато спроб. Спробуйте за пару хвилин або зателефонуйте.",
      }));
      return;
    }
    window.__formSubmits.push(Date.now());
    setState({ name: "", phone: "", msg: "", hp: "", sent: true, error: "" });
  };

  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden py-20 lg:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={PHOTOS.ctaBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-950/90 to-navy-900/40" />
      </div>

      <div className="container-pad grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <span className="chip">
            <Icon name="flame" className="h-3.5 w-3.5" />
            {BUSINESS.usp.badge}
          </span>
          <h2 className="reveal mt-5 font-display text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl">
            {CTA.title}
          </h2>
          <p className="reveal mt-5 max-w-lg text-base text-mist-300 sm:text-lg">
            {CTA.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${BUSINESS.phone}`} className="btn-flame">
              <Icon name="phone" className="h-4 w-4" />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Icon name="tg" className="h-4 w-4" />
              Telegram
            </a>
          </div>

          <ul className="reveal mt-10 space-y-2 text-sm text-mist-300">
            {[
              "Передзвонимо протягом 10 хвилин у робочий час",
              "Без 'передзвоніть нам пізніше'",
              "Не передаємо номер третім особам",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <Icon
                  name="check"
                  className="mt-1 h-4 w-4 flex-none text-flame-400"
                  strokeWidth={2.2}
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={submit} className="reveal panel space-y-4 p-7 lg:p-8" noValidate>
          <header>
            <h3 className="font-display text-xl font-bold text-white">
              Залиште номер
            </h3>
            <p className="mt-1 text-sm text-mist-300">
              Передзвонимо за 10 хвилин у робочий час.
            </p>
          </header>

          {state.sent ? (
            <div className="rounded-md border border-flame-500/40 bg-flame-500/10 p-5 text-sm text-flame-200">
              Дякуємо! Майстер передзвонить впродовж 10 хвилин. Якщо терміново —
              телефонуйте{" "}
              <a
                href={`tel:${BUSINESS.phone}`}
                className="font-semibold text-white underline"
              >
                {BUSINESS.phoneDisplay}
              </a>
              .
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-mist-400">
                    Ваше ім'я
                  </span>
                  <input
                    type="text"
                    required
                    minLength={2}
                    maxLength={40}
                    autoComplete="name"
                    value={state.name}
                    onChange={(e) =>
                      setState((s) => ({ ...s, name: e.target.value, error: "" }))
                    }
                    className="mt-1 w-full rounded-md border border-white/10 bg-ink-950/80 px-4 py-3 text-sm text-white placeholder:text-mist-400 focus:border-flame-500 focus:outline-none"
                    placeholder="Як до вас звертатися"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-mist-400">
                    Телефон
                  </span>
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={state.phone}
                    onChange={(e) =>
                      setState((s) => ({ ...s, phone: e.target.value, error: "" }))
                    }
                    className="mt-1 w-full rounded-md border border-white/10 bg-ink-950/80 px-4 py-3 text-sm text-white placeholder:text-mist-400 focus:border-flame-500 focus:outline-none"
                    placeholder="+380 ..."
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-mist-400">
                  Коротко про машину
                </span>
                <textarea
                  rows={3}
                  maxLength={400}
                  value={state.msg}
                  onChange={(e) =>
                    setState((s) => ({ ...s, msg: e.target.value, error: "" }))
                  }
                  className="mt-1 w-full resize-none rounded-md border border-white/10 bg-ink-950/80 px-4 py-3 text-sm text-white placeholder:text-mist-400 focus:border-flame-500 focus:outline-none"
                  placeholder="Skoda Octavia 2014, 1.6 TDI. Стукіт у передній підвісці."
                />
              </label>
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={state.hp}
                onChange={(e) => setState((s) => ({ ...s, hp: e.target.value }))}
                className="hidden"
                aria-hidden="true"
              />
              {state.error && <p className="text-xs text-flame-300">{state.error}</p>}
              <button type="submit" className="btn-flame w-full">
                Передзвоніть мені
              </button>
              <p className="text-[11px] text-mist-400">
                Натискаючи кнопку, ви погоджуєтесь, що ми передзвонимо за вказаним номером.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
