import type { ProductKey } from "@/data/products";

const PATHS: Record<ProductKey, string> = {
  gen: '<rect x="30" y="40" width="60" height="46" fill="#f2ede0"/><rect x="38" y="48" width="26" height="24" fill="#1b1206"/><circle cx="72" cy="60" r="8" fill="#ff6a2b"/><rect x="30" y="86" width="60" height="8" fill="#1b1206"/>',
  weld: '<rect x="22" y="34" width="76" height="52" rx="4" fill="#1b1206"/><rect x="30" y="42" width="30" height="36" fill="#ff6a2b"/><circle cx="78" cy="54" r="9" fill="#f2ede0"/>',
  drill: '<rect x="20" y="46" width="56" height="20" rx="6" fill="#ff6a2b"/><path d="M40 66h18l-5 26H46z" fill="#1b1206"/><rect x="30" y="92" width="26" height="12" rx="2" fill="#1b1206"/>',
  heater: '<rect x="34" y="14" width="42" height="76" rx="8" fill="#f2ede0"/><rect x="34" y="70" width="42" height="12" fill="#1b1206"/><circle cx="55" cy="52" r="5" fill="#ff6a2b"/>',
  purif: '<rect x="36" y="16" width="38" height="76" rx="5" fill="#1b1206"/><ellipse cx="55" cy="18" rx="16" ry="4" fill="#ff6a2b"/>',
  reel: '<circle cx="55" cy="54" r="34" fill="#1b1206"/><circle cx="55" cy="54" r="26" fill="none" stroke="#ff6a2b" stroke-width="12" stroke-dasharray="2 1.4"/><circle cx="55" cy="54" r="9" fill="#f2ede0"/>',
  pipe: '<path d="M20 78h40V44h30" stroke="#8a8577" stroke-width="9" fill="none"/><circle cx="60" cy="40" r="8" fill="#ff6a2b"/>',
};

export default function ProductIcon({ icon, className }: { icon: ProductKey; className?: string }) {
  return (
    <svg viewBox="0 0 110 110" className={className} dangerouslySetInnerHTML={{ __html: PATHS[icon] }} />
  );
}
