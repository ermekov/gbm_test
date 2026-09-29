export default function Hero() {
  return (
    <div className="rounded-xl3 overflow-hidden mt-5 bg-gradient-to-br from-ac via-[#ff8c52] to-[#ffb37c]">
      <div className="wrap grid md:grid-cols-[1.1fr_1fr] items-center gap-10 py-14 md:py-[72px]">
        <div>
          <h1 className="text-[34px] md:text-[58px] leading-[1.05] font-extrabold tracking-tight text-[#1b1206] mb-4">
            Мы подбираем.<br />Вы строите.
          </h1>
          <p className="text-[17px] max-w-md text-[#3a2410] mb-6">
            GBM GROUP сравнивает и подбирает электротехнику, сантехнику, инструмент и оборудование из наличия склада —
            опт и розница в одном каталоге.
          </p>
          <form action="#cat" className="flex bg-white rounded-full p-1.5 max-w-md shadow-xl">
            <input placeholder="Найти товар или категорию" className="flex-1 border-0 bg-transparent px-4 text-[15px] focus:outline-none" />
            <button aria-label="Искать" className="w-11 h-11 rounded-full bg-ink text-white grid place-items-center flex-none">→</button>
          </form>
        </div>
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 400 400" className="w-full max-w-[380px] md:max-w-[440px]">
            <ellipse cx="200" cy="330" rx="140" ry="18" fill="#00000022" />
            <rect x="110" y="140" width="180" height="110" rx="8" fill="#fff2e6" />
            <rect x="130" y="158" width="80" height="70" fill="#1b1206" opacity=".85" />
            <circle cx="250" cy="193" r="26" fill="#ffb37c" stroke="#1b1206" strokeWidth="4" />
            <circle cx="250" cy="193" r="9" fill="#1b1206" />
            <rect x="110" y="250" width="180" height="18" fill="#1b1206" />
            <circle cx="140" cy="290" r="22" fill="#1b1206" />
            <circle cx="140" cy="290" r="9" fill="#ffb37c" />
            <circle cx="260" cy="290" r="22" fill="#1b1206" />
            <circle cx="260" cy="290" r="9" fill="#ffb37c" />
          </svg>
        </div>
      </div>
    </div>
  );
}
