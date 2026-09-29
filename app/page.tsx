import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryRow from "@/components/CategoryRow";
import ProductGrid from "@/components/ProductGrid";
import BrandMarquee from "@/components/BrandMarquee";
import CompareBlock from "@/components/CompareBlock";
import InspirationBlock from "@/components/InspirationBlock";
import SolutionsGrid from "@/components/SolutionsGrid";
import WhySection from "@/components/WhySection";
import CtaForm from "@/components/CtaForm";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function Home() {
  const popular = products.filter((p) => p.hit).concat(products).slice(0, 6);
  const more = products.slice(6);

  return (
    <main>
      <Header />
      <div className="wrap">
        <Hero />
        <CategoryRow />
        <ProductGrid title="Популярные товары" items={popular} />
        <ProductGrid title="Всё для дома и ремонта" items={more} strip />
        <BrandMarquee />
        <CompareBlock />
        <InspirationBlock />
        <SolutionsGrid />
        <WhySection />
        <CtaForm />
      </div>
      <Footer />
    </main>
  );
}
