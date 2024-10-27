import BannerImage from "../../assets/bg-shadow.png";
import Logo from "../../assets/banner-main.png";
import PropTypes from "prop-types";

const Banner = ({ increaseCoin }) => {
  return (
    <section
      className="bg-slate-600 relative bg-cover bg-center w-full lg:w-[1320px] h-[400px] lg:h-[600px] mx-auto rounded-2xl overflow-hidden mt-5"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white px-4">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="mb-4 w-28 lg:w-auto" 
        />
        {/* Banner Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        {/* Banner Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 lg:mb-6 max-w-lg lg:max-w-3xl">
          Beyond Boundaries Beyond Limits
        </p>
        {/* Button */}
        <button
          className="bg-[#E7FE29] text-black font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-xl"
          onClick={increaseCoin}
        >
          Claim Free Credit
        </button>
      </div>
    </section>
  );
};

Banner.propTypes = {
  increaseCoin: PropTypes.func.isRequired, 
};

export default Banner;
