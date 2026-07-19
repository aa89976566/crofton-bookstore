"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Book } from "@/data/books";

export type ReserveItem = {
  book: Book;
  qty: number;
};

type ReserveContextValue = {
  items: ReserveItem[];
  count: number;
  add: (book: Book) => void;
  remove: (id: string) => void;
  clear: () => void;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const ReserveContext = createContext<ReserveContextValue | null>(null);

export function ReserveProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ReserveItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const add = useCallback((book: Book) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === book.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { book, qty: 1 }];
    });
    setIsOpen(true);
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.book.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<ReserveContextValue>(
    () => ({
      items,
      count: items.reduce((sum, item) => sum + item.qty, 0),
      add,
      remove,
      clear,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((v) => !v),
    }),
    [items, add, remove, clear, isOpen],
  );

  return (
    <ReserveContext.Provider value={value}>{children}</ReserveContext.Provider>
  );
}

export function useReserve() {
  const ctx = useContext(ReserveContext);
  if (!ctx) throw new Error("useReserve must be used within ReserveProvider");
  return ctx;
}
