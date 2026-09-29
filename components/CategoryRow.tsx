import { categories } from "@/data/products";

const ICONS: Record<string, string> = {
  "Электротехника": "M4 20h16M8 20V10l4-6 4 6v10 M11 13h2",
  "Сантехника": "M4 12h10v8H4zM14 8h6M17 5v6",
  "Санфаянс": "M5 7h14v12a2 2 0 01-2 2H7a2 2 0 01-2-2zM9 7V4h6v3",
  "Электроинструмент": "M14 6l4 4-9 9-5 1 1-5zM12.5 7.5l4 4",
  "Сварочное оборудование": "M6 18L18 6M14 6h4v4M4 20l3-3",
  "Газовые котлы": "M6 4h12v16H6zM10 9h4M9 13h6",
  "Водонагреватели": "M7 3h10v18H7zM12 8v6M9 6h6",
  "Генераторы": "M4 8h16v9H4zM8 20v-3M16 20v-3M9 11h3l-1 3h3",
  "Воздухоочистители": "M12 12m-8 0a8 8 0 1016 0a8 8 0 10-16 0 M12 12m-3 0a3 3 0 106 0a3 3 0 10-6 0",
  "Строительные товары": "M4 20h16M6 20V10l6-6 6 6v10 M9 14h6",
};

export default function CategoryRow() {
  return (
    // grid вместо flex: все 10 колонок строго одинаковой ширины,
    // поэтому иконки и промежутки между ними всегда равны, независимо от длины названия
    <div id="cat" className="grid grid-cols-5 sm:grid-cols-10 gap-x-2 gap-y-6 py-6">
      {categories.map((c) => (
        <a
          key={c}
          href="#"
          className="flex flex-col items-center gap-2 text-[12px] font-medium text-mut text-center"
        >
          <span className="w-[52px] h-[52px] rounded-2xl bg-white border border-line grid place-items-center hover:bg-ac2 hover:border-ac transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1b1206" strokeWidth="2">
              <path d={ICONS[c] ?? ICONS["Строительные товары"]} />
            </svg>
          </span>
          <span className="break-words leading-tight">{c}</span>
        </a>
      ))}
    </div>
  );
}
