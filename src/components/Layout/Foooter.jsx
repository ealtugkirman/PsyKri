import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black px-8 font-second   py-8">
      <div className="container flex md:flex-row space-y-6  md:space-y-0 flex-col justify-evenly mx-auto">
        {/* left */}
        <div className="mr-80">
          <h1 className="font-second underline text-xl text-white">
            Socials
          </h1>
          <div className="flex text-3xl space-x-4  text-white mt-2">
            <a
              href="https://www.linkedin.com/company/tecvity"
              target="_blank"
              rel="noopener noreferrer"
              className="  p-2">
              <FaLinkedin className="hover:text-green-600" />
            </a>
            <a
              href="https://twitter.com/tecvity"
              target="_blank"
              rel="noopener noreferrer"
              className="  p-2">
              <FaTwitter className="hover:text-green-600" />
            </a>
            <a
              href="https://www.instagram.com/tecvity/"
              target="_blank"
              rel="noopener noreferrer"
              className="  p-2">
              <FaInstagram className="hover:text-green-600" />
            </a>
            <a
              href="https://www.youtube.com/channel/your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="  p-2">
              <FaYoutube className="hover:text-green-600" />
            </a>
          </div>
        </div>
        {/* right */}
        <div className="text-left  md:text-center">
          <div>
            <p className="font-second underline text-xl pb-2 text-white">
              Get Contact With us
            </p>
          </div>
          <div className="space-y-2">
            <a
              href="mailto:info@psykri.com"
              className="font-second text-xl text-white">
              info@psykri.com
            </a>{" "}
            {/* <a href="https://ealtugk.dev" className="font-second text-sm text-white"></a> */}
            <p className="font-second text-sm text-white">
              Ankara, Turkey. <br /> 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
