import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Wave from './components/Wave';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Wave from="dark" />
        <Stats />
        <Wave from="light" flip />
        <Services />
        <Wave from="dark" />
        <Process />
        <Wave from="light" flip />
        <Reviews />
        <Wave from="dark" />
        <FAQ />
        <Wave from="light" flip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
