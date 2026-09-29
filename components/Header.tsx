"use client";
import { useMemo, useState } from "react";
import { products } from "@/data/products";

export default function Header() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return products.filter((p) => (p.category + " " + p.name).toLowerCase().includes(s)).slice(0, 6);
  }, [q]);

  return (
    <>
      <div className="bg-ac2 text-[#8a3a10] text-[13px] py-[7px]">
        <div className="wrap flex gap-4">
          <span>Для покупателей</span>
          <span>Для бизнеса</span>
        </div>
      </div>
      <header className="sticky top-0 z-40 bg-bg border-b border-line">
        <div className="wrap flex items-center gap-7 h-16">
          <a href="#" className="font-extrabold text-[19px] flex items-center gap-2">
            <i className="w-4 h-4 rounded-[4px] bg-ac inline-block" />
            GBM GROUP
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium flex-1">
            <a href="#cat">Каталог</a>
            <a href="#biz">Для бизнеса</a>
            <a href="#why">О компании</a>
            <a href="#cta">Доставка</a>
            <a href="#foot">Контакты</a>
          </nav>
          <div className="flex-1 md:flex-none relative max-w-xs w-full">
            <input
              value={q}
              onChange={(e) => { setQ(e.target.value); setOpen(true); }}
              onFocus={() => setOpen(true)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              placeholder="Поиск по каталогу"
              className="w-full border border-line rounded-full px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ac2"
            />
            {open && q && (
              <div className="absolute mt-2 left-0 right-0 bg-white border border-line rounded-2xl shadow-xl overflow-hidden z-50">
                {results.length ? (
                  results.map((r) => (
                    <a key={r.id} href="#cat" className="flex justify-between px-4 py-3 text-sm hover:bg-ac2/40 border-b border-line last:border-0">
                      <span>{r.name}</span>
                      <b>{r.price.toLocaleString("ru")} ₸</b>
                    </a>
                  ))
                ) : (
                  <p className="px-4 py-3 text-sm text-mut">Ничего не найдено</p>
                )}
              </div>
            )}
          </div>
          <div className="hidden md:flex gap-2">
            <a href="#foot" className="btn">Контакты</a>
            <a href="#cta" className="btn-p">Заказать звонок</a>
          </div>
        </div>
      </header>
    </>
  );
}
