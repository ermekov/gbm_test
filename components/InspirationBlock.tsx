export default function InspirationBlock() {
  const cells = [
    "col-start-2 col-span-2 row-span-2 bg-ac",
    "col-start-4 col-span-2 row-span-1 bg-[#2a2a2a]",
    "col-start-1 col-span-1 row-span-1 bg-[#3a3a3a]",
    "col-start-1 col-span-1 row-start-2 row-span-2 bg-[#ffb37c]",
    "col-start-4 col-span-2 row-start-2 row-span-2 bg-[#4a4a4a]",
    "col-start-2 col-span-2 row-start-3 row-span-1 bg-[#ff8c52]",
    "col-start-6 col-span-1 row-span-3 bg-[#242424]",
  ];
  return (
    <section className="py-10">
      <div className="bg-dark text-white rounded-3xl p-7 md:p-12">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Идеи и решения для вашего объекта</h2>
            <p className="text-[#cfcabf] max-w-md mb-6">
              Подборки оборудования под конкретные задачи — от частного дома до производства.
            </p>
            <a href="#biz" className="btn-p inline-block">Смотреть решения</a>
          </div>
          <div className="grid grid-cols-6 grid-rows-3 gap-2.5 max-w-[520px] md:justify-self-end h-[280px]">
            {cells.map((c, i) => <div key={i} className={`rounded-xl ${c}`} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
