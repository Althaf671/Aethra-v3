

import Hero from "@/components/homeComponents/hero";
import "../styles/stylesHome/main.scss"
import WhyUs from "@/components/homeComponents/whyUs";
import Navbar from "@/components/layout/navbar/navbar";
import Testimonial from "@/components/homeComponents/testimonial";
import { Catalog } from "@/components/homeComponents/catalog";
import Pricing from "@/components/homeComponents/pricing";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <WhyUs />
        <Testimonial />
        <Catalog />
        <Pricing />
      </main>
    </>
  );
}
