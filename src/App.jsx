import Navbar from "./components/Navbar/Header";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Benefits from "./components/Benefits";

const App = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Offers />
      <Benefits />
    </div>
    // <div className="text-center flex my-auto mx-auto justify-center font-bold bg-red-500 h-screen items-center" >
    //   <p className=""> if you can read this you are too close </p>
    // </div>
  );
};

export default App;
