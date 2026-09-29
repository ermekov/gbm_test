import Image from "next/image";
import { brands } from "@/data/products";

export default function BrandMarquee() {
  const list = [...brands, ...brands];
  return (
    <section className="py-10">
      <div className="flex justify-between items-end mb-5">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Бренды в наличии</h2>
        <a href="#" className="text-sm font-semibold text-ac">Все бренды →</a>
      </div>
      <div className="relative rounded-2xl bg-white border border-line overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {list.map((b, i) => (
            <a key={b.name + i} href="#" aria-label={b.name} className="flex-none w-[190px] h-[140px] flex items-center justify-center p-6 border-r border-line group">
              <Image
                src={`/brands/${b.file}`}
                alt={b.name}
                width={140}
                height={90}
                className="max-w-full max-h-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
