import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="top">
        <Header />
        <Hero />
        <Services />
        <About />
        <Works />
        <Reviews />
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default App;