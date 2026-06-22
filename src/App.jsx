import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import {
  Counters,
  Problem,
  Advantages,
  Services,
  How,
  Portfolio,
  Reviews,
  Faq,
} from "./sections/Middle";
import CtaForm from "./sections/CtaForm";
import Contacts from "./sections/Contacts";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col bg-ink-950 text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Counters />
        <Problem />
        <Advantages />
        <Services />
        <How />
        <Portfolio />
        <Reviews />
        <Faq />
        <CtaForm />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
