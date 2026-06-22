import { BUSINESS } from "../data/client";
import SectionHeading from "../components/SectionHeading";
import Icon from "../components/Icon";

const ITEMS = [
  {
    icon: "pin",
    label: "Адреса",
    primary: BUSINESS.address,
    sub: "5 хвилин від м. 'Палац спорту'. Безкоштовний паркінг біля боксу.",
  },
  {
    icon: "phone",
    label: "Телефон",
    primary: BUSINESS.phoneDisplay,
    href: `tel:${BUSINESS.phone}`,
    sub: "Найшвидший спосіб — простий дзвінок.",
  },
  {
    icon: "tg",
    label: "Месенджери",
    primary: BUSINESS.telegramHandle,
    href: BUSINESS.telegram,
    external: true,
    sub: "Також Viber та Instagram.",
    extra: [
      { label: "Viber", href: BUSINESS.viber },
      { label: "Instagram", href: BUSINESS.instagram, external: true },
    ],
  },
  {
    icon: "clock",
    label: "Графік",
    primary: BUSINESS.workHoursShort,
    sub: "Святкові дні — за окремим оголошенням у Telegram-каналі.",
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 lg:py-28">
      <div className="container-pad grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            kicker="Контакти"
            title="Як нас знайти у Харкові"
            lead="Бокс на вул. Гагаріна, 112. Заїзд з боку центрального проїзду — на воротах табличка TechDrive."
          />
          <ul className="mt-10 space-y-5 text-sm">
            {ITEMS.map((it) => (
              <li key={it.label} className="reveal flex items-start gap-4">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-md bg-navy-500/25 text-flame-300">
                  <Icon name={it.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-mist-400">
                    {it.label}
                  </p>
                  {it.href ? (
                    <a
                      href={it.href}
                      target={it.external ? "_blank" : undefined}
                      rel={it.external ? "noopener noreferrer" : undefined}
                      className="mt-1 block font-display text-base font-semibold text-white transition hover:text-flame-300"
                    >
                      {it.primary}
                    </a>
                  ) : (
                    <p className="mt-1 font-display text-base font-semibold text-white">
                      {it.primary}
                    </p>
                  )}
                  {it.extra && (
                    <p className="mt-1 flex flex-wrap gap-x-3 text-sm text-mist-300">
                      {it.extra.map((e, i) => (
                        <span key={e.label}>
                          {i > 0 && <span className="mr-3 text-mist-400">·</span>}
                          <a
                            href={e.href}
                            target={e.external ? "_blank" : undefined}
                            rel={e.external ? "noopener noreferrer" : undefined}
                            className="text-mist-300 transition hover:text-flame-300"
                          >
                            {e.label}
                          </a>
                        </span>
                      ))}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-mist-400">{it.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal overflow-hidden rounded-xl border border-white/10 bg-ink-900">
          <iframe
            title="TechDrive на мапі Харкова"
            src={BUSINESS.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] w-full"
          />
        </div>
      </div>
    </section>
  );
}
