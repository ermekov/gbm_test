export default function CompareBlock() {
  const rows = [
    ["⚡ Генератор 5 кВт", "В наличии"],
    ["🔧 Инвертор 200А", "В наличии"],
    ["🚿 Водонагреватель 80л", "Под заказ"],
  ];
  return (
    <section className="py-10">
      <div className="bg-[#f1ece1] rounded-3xl grid md:grid-cols-2 gap-10 items-center p-7 md:p-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight max-w-xs mb-3">
            Ищите меньше, покупайте точнее.
          </h2>
          <p className="text-[#5c5748] mb-6 max-w-sm">
            Опишите задачу — подберём модель, сравним наличие и цену на складе.
          </p>
          <a href="#cta" className="btn-p inline-block">Подобрать оборудование</a>
        </div>
        <div className="bg-white border border-line rounded-2xl p-4">
          {rows.map(([label, status]) => (
            <div key={label} className="flex justify-between items-center py-3 text-sm border-b border-line last:border-0">
              <span>{label}</span>
              <span className="bg-ink text-white text-[13px] font-semibold px-3.5 py-1.5 rounded-full">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
