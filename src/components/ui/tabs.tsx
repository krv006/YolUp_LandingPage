import { useCallback, useRef, type KeyboardEvent, type ReactNode } from "react";
import { panelId, tabId } from "@/lib/tab-ids";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  /** Ota-komponent `useId()` bilan beradi — panel bilan bir xil bo'lishi shart. */
  baseId: string;
  items: readonly TabItem[];
  value: string;
  onChange: (id: string) => void;
  /** Skrin-riderlar uchun ro'yxat nomi. */
  label: string;
  className?: string;
}

/**
 * WAI-ARIA tabs naqshi: roving tabindex + strelka tugmalari bilan boshqarish.
 * Radix o'rniga qo'lda yozildi — landing uchun bitta kichik komponent yetadi
 * va bundle'ga qo'shimcha kutubxona qo'shilmaydi.
 */
export function Tabs({ baseId, items, value, onChange, label, className }: TabsProps) {
  const listRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
      if (!keys.includes(event.key)) return;
      event.preventDefault();

      const currentIndex = items.findIndex((item) => item.id === value);
      let nextIndex = currentIndex;
      if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % items.length;
      if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + items.length) % items.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = items.length - 1;

      const next = items[nextIndex];
      if (!next) return;
      onChange(next.id);
      listRef.current
        ?.querySelector<HTMLButtonElement>(`[data-tab-id="${next.id}"]`)
        ?.focus();
    },
    [items, onChange, value]
  );

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={label}
      onKeyDown={handleKeyDown}
      className={cn(
        "inline-flex max-w-full flex-wrap justify-center gap-1 rounded-full border border-line bg-surface p-1.5",
        className
      )}
    >
      {items.map((item) => {
        const selected = item.id === value;
        return (
          <button
            key={item.id}
            id={tabId(baseId, item.id)}
            data-tab-id={item.id}
            role="tab"
            type="button"
            aria-selected={selected}
            aria-controls={panelId(baseId, item.id)}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(item.id)}
            className={cn(
              "rounded-full px-4 py-2 text-[0.9375rem] font-semibold transition-colors duration-200 sm:px-5",
              selected ? "bg-brand text-white shadow-brand" : "text-fg hover:text-ink"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export function TabPanel({
  baseId,
  tab,
  className,
  children,
}: {
  baseId: string;
  tab: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      role="tabpanel"
      id={panelId(baseId, tab)}
      aria-labelledby={tabId(baseId, tab)}
      tabIndex={0}
      className={cn("focus-visible:outline-offset-4", className)}
    >
      {children}
    </div>
  );
}
