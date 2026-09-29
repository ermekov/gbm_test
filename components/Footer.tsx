export default function Footer() {
  return (
    <footer id="foot" className="bg-dark text-[#cfcabf] py-14 rounded-t-3xl mt-5">
      <div className="wrap grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="font-extrabold text-white flex items-center gap-2 text-lg">
            <i className="w-4 h-4 rounded bg-ac inline-block" /> GBM GROUP
          </div>
          <p className="mt-3 max-w-xs text-sm">Электротехника, сантехника, инструмент и оборудование — опт и розница.</p>
        </div>
        <div>
          <h4 className="text-white text-sm mb-3">Каталог</h4>
          <a href="#cat" className="block text-sm mb-2 hover:text-white">Все категории</a>
          <a href="#biz" className="block text-sm mb-2 hover:text-white">Для бизнеса</a>
        </div>
        <div>
          <h4 className="text-white text-sm mb-3">Компания</h4>
          <a href="#why" className="block text-sm mb-2 hover:text-white">О нас</a>
          <a href="#cta" className="block text-sm mb-2 hover:text-white">Доставка</a>
        </div>
        <div>
          <h4 className="text-white text-sm mb-3">Контакты</h4>
          <p className="text-sm mb-2">[ТЕЛЕФОН]</p>
          <p className="text-sm mb-2">[WHATSAPP]</p>
          <p className="text-sm mb-2">[АДРЕС]</p>
        </div>
      </div>
      <div className="wrap mt-9 pt-4 border-t border-[#2a2a2a] text-xs flex justify-between flex-wrap gap-2">
        <span>© ТОО «GBM GROUP»</span>
        <span>Прототип, Этап 2 (в разработке). Демо-данные.</span>
      </div>
    </footer>
  );
}
