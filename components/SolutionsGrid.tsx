const COLORS = ["#ff6a2b", "#2b6a4f", "#2a3a6a", "#8a3a10", "#3a3a3a", "#c94c2b"];
const SOLUTIONS = [
  ["Для стройки", "Материалы и инструмент на объект"],
  ["Для монтажа", "Сантехника и электрика"],
  ["Для производства", "Генераторы и сварка"],
  ["Для дома", "Отопление и вода"],
  ["Для сервиса", "Запчасти и расходники"],
  ["Для опта", "Поставки под проект"],
];

export default function SolutionsGrid() {
  return (
    <section id="biz" className="py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-5">Решения для бизнеса и строительства</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {SOLUTIONS.map(([title, desc], i) => (
          <a key={title} href="#cta" className="col-span-1 md:col-span-2 rounded-2xl min-h-[130px] md:min-h-[170px] p-4.5 text-white flex flex-col justify-end font-extrabold text-lg leading-tight hover:brightness-110 transition"
            style={{ background: COLORS[i % COLORS.length] }}>
            <span className="text-[11px] font-bold uppercase opacity-85 mb-1.5">Решение</span>
            {title}
            <span className="font-medium text-[12.5px] opacity-85 mt-1.5">{desc}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
