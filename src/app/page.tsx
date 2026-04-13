import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import ProductCategories from '@/components/sections/product-categories';
import FeaturedPortfolio from '@/components/sections/featured-portfolio';
import Testimonials from '@/components/sections/testimonials';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <ProductCategories />
        <FeaturedPortfolio />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
