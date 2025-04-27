
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Teachers from "../components/Teachers";
import Approach from "../components/Approach";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Teachers />
        <Approach />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
