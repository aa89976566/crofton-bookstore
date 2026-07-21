"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { categories, type Book } from "@/data/books";

export type ReserveItem = {
  book: Book;
  qty: number;
};

export type CategoryFilter = (typeof categories)[number];

type ShopContextValue = {
  items: ReserveItem[];
  count: number;
  add: (book: Book) => void;
  remove: (id: string) => void;
  clear: () => void;
  reserveOpen: boolean;
  openReserve: () => void;
  closeReserve: () => void;
  toggleReserve: () => void;
  activeBook: Book | null;
  openBook: (book: Book) => void;
  closeBook: () => void;
  query: string;
  setQuery: (q: string) => void;
  category: CategoryFilter;
  setCategory: (c: CategoryFilter) => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ReserveItem[]>([]);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [activeBook, setActiveBook] = useState<Book | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");

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
    setReserveOpen(true);
    setActiveBook(null);
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.book.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<ShopContextValue>(
    () => ({
      items,
      count: items.reduce((sum, item) => sum + item.qty, 0),
      add,
      remove,
      clear,
      reserveOpen,
      openReserve: () => setReserveOpen(true),
      closeReserve: () => setReserveOpen(false),
      toggleReserve: () => setReserveOpen((v) => !v),
      activeBook,
      openBook: (book) => {
        setActiveBook(book);
        setReserveOpen(false);
      },
      closeBook: () => setActiveBook(null),
      query,
      setQuery,
      category,
      setCategory,
    }),
    [items, add, remove, clear, reserveOpen, activeBook, query, category],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}
