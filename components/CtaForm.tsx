"use client";
import { useState } from "react";

export default function CtaForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } finally {
      setLoading(false);
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 2500);
    }
  }

  return (
    <section id="cta" className="py-10">
      <div className="bg-ink text-white rounded-3xl grid md:grid-cols-[1.1fr_.9fr] gap-8 items-center p-7 md:p-14 overflow-hidden">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Начнём подбор?</h2>
          <p className="text-[#cfcabf] max-w-sm mb-6">Опишите задачу — подберём оборудование и решение под ваш объект.</p>
          <div className="flex gap-2.5">
            <a href="#" className="btn-p">Получить консультацию</a>
            <a href="#cat" className="border border-white text-white rounded-full px-5 py-2.5 font-semibold text-sm">Перейти в каталог</a>
          </div>
        </div>

        <div className="bg-white text-ink rounded-2xl p-7 shadow-2xl relative min-h-[280px]">
          {!sent ? (
            <form onSubmit={onSubmit} className="flex flex-col gap-3.5">
              <b>Оставить заявку</b>
              <input name="name" required placeholder="Ваше имя" className="border border-line rounded-xl px-3.5 py-3.5 text-sm bg-bg text-[#2a2620] placeholder:text-[#a39d8d] focus:outline-none focus:ring-4 focus:ring-ac2 focus:border-ac focus:-translate-y-0.5 transition" />
              <input name="phone" required placeholder="Телефон / WhatsApp" className="border border-line rounded-xl px-3.5 py-3.5 text-sm bg-bg text-[#2a2620] placeholder:text-[#a39d8d] focus:outline-none focus:ring-4 focus:ring-ac2 focus:border-ac focus:-translate-y-0.5 transition" />
              <textarea name="message" rows={3} placeholder="Что нужно подобрать?" className="border border-line rounded-xl px-3.5 py-3.5 text-sm bg-bg text-[#2a2620] placeholder:text-[#a39d8d] resize-none focus:outline-none focus:ring-4 focus:ring-ac2 focus:border-ac focus:-translate-y-0.5 transition" />
              <button disabled={loading} className="bg-gradient-to-br from-ac to-[#ff8c52] text-white rounded-xl py-4 font-bold flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 active:scale-[.97] transition disabled:opacity-60">
                {loading ? "Отправка…" : "Отправить заявку"}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-3 text-center py-8 animate-pop">
              <svg viewBox="0 0 52 52" className="w-14 h-14">
                <circle cx="26" cy="26" r="24" stroke="#ff6a2b" strokeWidth="3" fill="none" />
                <path d="M15 27l7 7 15-15" stroke="#ff6a2b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <b>Заявка принята</b>
              <span className="text-mut text-[13px]">Мы свяжемся с вами в ближайшее время.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
