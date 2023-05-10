import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import wave from "../../assets/wave.json";
import { Link } from "react-scroll";

function Navbar() {
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    btn.addEventListener("click", navToggle);

    return () => {
      btn.removeEventListener("click", navToggle);
    };
  }, []);

  function navToggle() {
    btnRef.current.classList.toggle("open");
    menuRef.current.classList.toggle("hidden");
    menuRef.current.classList.toggle("flex");
  }

  return (
    <div className="max-w-8xl bg-white  py-3 md:py-4 border-b-2 border-black">
      <nav className="flex items-center mr-8 font-first  justify-between text-black">
        <div className="flex md:-ml-12   lg:-ml-36 lg:-mr-32 flex-row justify-center items-center">
          <Lottie className="w-1/12" animationData={wave} />
          <h1 className="text-4xl font-second">Psy-Kri.ai</h1>
        </div>
        <div className="hidden   md:flex md:space-x-8">
          <div className="group">
            <Link to="offers">OUR OFFERRINGS</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-black"></div>
          </div>
          <div className="group">
            <Link to="benefit">ABOUT</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-black"></div>
          </div>
          <div className="group">
            <Link to="how">HOW IT WORKS</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-black"></div>
          </div>
          <div className="group">
            <Link to="contact">CONTACT</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-black"></div>
          </div>
        </div>
        <div>
          <button className="hidden md:flex text-red-500 hover:underline animate-pulse ">
            ENROLL WAITLIST
          </button>
        </div>
        <div className="md:hidden">
          <button
            id="menu-btn"
            ref={btnRef}
            type="button"
            className="z-40 block hamburger md:hidden focus:outline-none">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
      <div
        id="menu"
        ref={menuRef}
        className="absolute font-second z-30 font-bold top-0 bottom-0 left-0 flex-col text-center hidden md:hidden w-full min-h-screen py-1 pt-40 space-y-6 text-xl text-white bg-black">
        <div className="absolute w-1/2 top-20 right-0">
          <Lottie className="" animationData={wave} />
        </div>
        <Link to="offers"  clLinkssName="hover:text-pink-500">
          OUR OFFERINGS
        </Link>
        <Link to="benefit"  className="hover:text-pink-500">
          ABOUT
        </Link>
        <Link to="how"  className="hover:text-pink-500">
          HOW IT WORKS
        </Link>
        <Link to=""  className="hover:text-pink-500">
          CONTACT
        </Link>
        <h1 className="text-5xl font-second text-center pt-48 ">Pys-Kri.ai</h1>
      </div>
    </div>
  );
}

export default Navbar;
