import Navbar from "./components/Layout/Header";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Benefits from "./components/Benefits";
import How from "./components/How";
import Contact from "./components/Contact";
import Footer from "./components/Layout/Foooter";

const App = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Offers />
      <Benefits />
      <How />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
