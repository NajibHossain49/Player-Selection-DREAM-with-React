import Logo from "../../assets/logo-footer.png";
import BannerImage from "../../assets/bg-shadow.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-6 mt-44 bg-[#06091A] w-full rounded-lg">
      {/* New Section Above Footer */}
      <div
        className="w-full sm:w-3/4 md:w-1/2 h-64 sm:h-80 bg-gray-300 mx-auto py-6 rounded-lg flex flex-col items-center justify-center relative -top-24 shadow-lg"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center px-4 sm:px-0">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Get the latest updates and news right in your inbox!
          </p>

          {/* Email Input and Subscribe Button */}
          <form className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-xs sm:max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border rounded-md w-full focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="p-2 bg-[linear-gradient(90deg,_hsla(16,_100%,_76%,_1)_0%,_hsla(49,_100%,_81%,_1)_100%)] text-black rounded-md font-semibold w-full sm:w-1/3 text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Logo */}
      <div className="mb-6 mt-4">
        <img src={Logo} alt="Logo" className="h-20 sm:h-28 md:h-36" />
      </div>

      {/* Footer Columns */}
      <div className="flex flex-col md:flex-row justify-center w-full gap-6 md:gap-10 text-center md:text-left">
        {/* About Us */}
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-200">
            About Us
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-200">
            Quick Links
          </h2>
          <ul className="text-gray-400 space-y-1 pl-4 sm:pl-0 list-none sm:list-disc text-sm sm:text-base">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-200">
            Subscribe
          </h2>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Subscribe to our newsletter for the <br /> latest updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border rounded-md w-full focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="p-2 bg-[linear-gradient(90deg,_hsla(16,_100%,_76%,_1)_0%,_hsla(49,_100%,_81%,_1)_100%)] text-black font-semibold rounded-md w-full sm:w-1/3 text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 pt-8 text-xs sm:text-sm mt-4 px-4">
        © 2024 NAJIB-HOSSAIN. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
