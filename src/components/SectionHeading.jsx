export default function SectionHeading({ kicker, title, lead, align = "left" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {kicker && (
        <div
          className={`mb-5 inline-flex items-center gap-3 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          <span className="h-px w-8 bg-flame-500" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-flame-300">
            {kicker}
          </span>
        </div>
      )}
      <h2 className="reveal font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {lead && (
        <p className="reveal mt-5 text-base text-mist-300 sm:text-lg">{lead}</p>
      )}
    </div>
  );
}
