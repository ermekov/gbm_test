export type ProductKey =
  | "gen"
  | "weld"
  | "drill"
  | "heater"
  | "purif"
  | "reel"
  | "pipe";

export type Product = {
  id: string;
  category: string;
  name: string;
  rating: number;
  price: number;
  oldPrice?: number;
  icon: ProductKey;
  hit?: boolean;
  inStock: boolean;
};

// DEMO DATA. Замените на реальный каталог / API на Этапе 2.
export const products: Product[] = [
  { id: "p1", category: "Генераторы", name: "Бензиновый генератор 5 кВт", rating: 4.7, price: 289000, icon: "gen", hit: true, inStock: true },
  { id: "p2", category: "Сварочное оборудование", name: "Инверторный аппарат 200А", rating: 4.6, price: 64000, icon: "weld", inStock: true },
  { id: "p3", category: "Электроинструмент", name: "Аккум. шуруповёрт 18В", rating: 4.8, price: 42000, icon: "drill", hit: true, inStock: true },
  { id: "p4", category: "Водонагреватели", name: "Накопительный 80л", rating: 4.5, price: 78000, icon: "heater", inStock: false },
  { id: "p5", category: "Воздухоочистители", name: "Очиститель воздуха HEPA", rating: 4.6, price: 95000, icon: "purif", hit: true, inStock: true },
  { id: "p6", category: "Электротехника", name: "Кабель ВВГнг 3×2,5, 100м", rating: 4.7, price: 48000, icon: "reel", inStock: true },
  { id: "p7", category: "Сантехника", name: "Шаровой кран 1/2″, латунь", rating: 4.4, price: 2400, icon: "pipe", inStock: true },
  { id: "p8", category: "Электротехника", name: "Автомат 16А, С", rating: 4.6, price: 3200, icon: "reel", hit: true, inStock: true },
  { id: "p9", category: "Электроинструмент", name: "Перфоратор SDS+", rating: 4.7, price: 58000, icon: "drill", hit: true, inStock: true },
  { id: "p10", category: "Газовые котлы", name: "Настенный котёл 24кВт", rating: 4.5, price: 245000, icon: "heater", inStock: false },
  { id: "p11", category: "Генераторы", name: "Дизельный генератор 8кВт", rating: 4.6, price: 540000, icon: "gen", hit: true, inStock: true },
  { id: "p12", category: "Сантехника", name: "Смеситель для кухни", rating: 4.5, price: 18500, icon: "pipe", hit: true, inStock: true },
];

export const categories = [
  "Электротехника",
  "Сантехника",
  "Санфаянс",
  "Электроинструмент",
  "Сварочное оборудование",
  "Газовые котлы",
  "Водонагреватели",
  "Генераторы",
  "Воздухоочистители",
  "Строительные товары",
];

export const brands = [
  { name: "Bosch", file: "bosch.png" },
  { name: "DeWalt", file: "dewalt.png" },
  { name: "Makita", file: "makita.png" },
  { name: "Интерскол", file: "interskol.png" },
  { name: "Ресанта", file: "resanta.png" },
  { name: "Vitals", file: "vitals.png" },
];
