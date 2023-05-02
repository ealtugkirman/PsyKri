import Logo from "../../assets/logo.svg";
import { useRef, useEffect } from "react";

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
      <nav className="flex items-center mx-8 font-first  justify-between text-black">
        <img src={Logo} alt="seo" />
        <div className="hidden   md:flex md:space-x-8">
          <div className="group">
            <a href="#">OUR OFFERRINGS</a>
            <div className="mx-2 group-hover:border-b group-hover:border-black"></div>
          </div>
          <div className="group">
            <a href="#">SERVICES</a>
            <div className="mx-2 group-hover:border-b group-hover:border-black"></div>
          </div>
          <div className="group">
            <a href="#">ABOUT</a>
            <div className="mx-2 group-hover:border-b group-hover:border-black"></div>
          </div>
          <div className="group">
            <a href="#">CONTACT</a>
            <div className="mx-2 group-hover:border-b group-hover:border-black"></div>
          </div>
        </div>
        <div>
          <button
          className="hidden md:flex text-red-500 hover:underline animate-pulse ">ENROLL WAITLIST</button>
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
        className="absolute z-30 top-0 bottom-0 left-0 flex-col text-center hidden md:hidden w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">
        <img
          src={Logo}
          className="w-1/2 mb-10 flex justify-center mx-auto"
          alt=""
        />
        <a href="#" className="hover:text-pink-500">
          About
        </a>
        <a href="#" className="hover:text-pink-500">
          Careers
        </a>
        <a href="#" className="hover:text-pink-500">
          Events
        </a>
        <a href="#" className="hover:text-pink-500">
          Products
        </a>
        <a href="#" className="hover:text-pink-500">
          Support
        </a>
      </div>
    </div>
  );
}

export default Navbar;
