import { Product } from "@/data/products";
import ProductIcon from "./ProductIcon";

function Card({ p }: { p: Product }) {
  return (
    <article className="bg-card border border-line rounded-2xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-square bg-[#f3ede1] relative">
        {p.hit && (
          <span className="absolute left-2.5 top-2.5 bg-ac2 text-[#8a3a10] text-[11px] font-bold px-2.5 py-1 rounded-full">
            {p.oldPrice ? "-15%" : "Хит"}
          </span>
        )}
        <ProductIcon icon={p.icon} className="w-full h-full p-4" />
      </div>
      <div className="p-3.5 pb-4">
        <div className="text-[12px] text-mut flex items-center gap-1 mb-1">★ {p.rating}</div>
        <p className="text-sm font-semibold leading-snug mb-1.5 min-h-[36px]">{p.name}</p>
        <div className="font-extrabold text-base">
          {p.price.toLocaleString("ru")} ₸
          {!p.inStock && <span className="ml-2 text-[11px] font-medium text-mut align-middle">Под заказ</span>}
        </div>
      </div>
    </article>
  );
}

export default function ProductGrid({ title, items, strip }: { title: string; items: Product[]; strip?: boolean }) {
  return (
    <section className="py-10">
      <div className="flex justify-between items-end mb-5">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h2>
        <a href="#" className="text-sm font-semibold text-ac">Смотреть все →</a>
      </div>
      <div className={strip ? "flex gap-3.5 overflow-x-auto scrollbar-none" : "grid grid-cols-2 md:grid-cols-6 gap-3.5"}>
        {items.map((p) => (
          <div key={p.id} className={strip ? "flex-none w-[200px]" : undefined}>
            <Card p={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
