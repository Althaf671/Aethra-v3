import Hero from "@/components/homeComponents/hero";
import "../styles/main.scss"
import WhyUs from "@/components/homeComponents/whyUs";
import Navbar from "@/components/layout/navbar/navbar";
import Testimonial from "@/components/homeComponents/testimonial";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <WhyUs />
        <Testimonial />
      </main>
    </>
  );
}
