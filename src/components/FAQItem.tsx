import { useId, useState } from "react";
import Icon from "./Icon";
import type { FaqItem } from "../data/faq";

export default function FAQItem({ faq, defaultOpen = false }: { faq: FaqItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="rounded-2xl border border-green-600/10 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        <span className="font-display text-base font-semibold text-green-900 sm:text-lg">
          {faq.question}
        </span>
        <Icon
          name="chevronDown"
          className={`size-5 shrink-0 text-gold-600 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div id={panelId} className="px-5 pb-5 text-sm leading-relaxed text-ink-soft sm:px-6 sm:text-base">
          {faq.answer}
        </div>
      )}
    </div>
  );
}
