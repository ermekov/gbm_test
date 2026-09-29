const POINTS = [
  ["Широкий ассортимент", "Электротехника, сантехника, инструмент и стройматериалы в одном каталоге."],
  ["Опт и розница", "Работаем и с частными покупателями, и с проектами."],
  ["Консультация по подбору", "Помогаем выбрать модель под задачу."],
];

export default function WhySection() {
  return (
    <section id="why" className="py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-5">Почему GBM GROUP</h2>
      <div className="grid md:grid-cols-3 gap-3.5">
        {POINTS.map(([t, d]) => (
          <div key={t} className="bg-card border border-line rounded-2xl p-5">
            <b>{t}</b>
            <p className="text-mut text-sm mt-2">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
