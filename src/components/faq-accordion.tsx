"use client";

/**
 * Savollar akkordeoni.
 *
 * Dizayndagidek bir vaqtning o'zida bir nechta savol ochiq tura oladi —
 * ochilgan savollar to'plam sifatida saqlanadi. Belgining 45° burilishi
 * `aria-expanded="true"` selektori orqali CSS'da.
 */
import { useState } from "react";

import { FAQ_ITEMS } from "@/content/faq";
import { Plus } from "./icons";

export function FaqAccordion() {
  const [open, setOpen] = useState<ReadonlySet<string>>(new Set());

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (!next.delete(id)) next.add(id);
      return next;
    });

  return (
    <div className="acc">
      {FAQ_ITEMS.map((item) => {
        const btnId = `faq-q-${item.id}`;
        const panelId = `faq-a-${item.id}`;
        const expanded = open.has(item.id);

        return (
          <div className="acc-i" key={item.id}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                className="acc-q"
                id={btnId}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span>{item.q}</span>
                <span className="pm" aria-hidden="true">
                  <Plus />
                </span>
              </button>
            </h3>
            <div className="acc-a" id={panelId} role="region" aria-labelledby={btnId} hidden={!expanded}>
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
