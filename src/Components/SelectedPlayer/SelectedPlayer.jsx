import { FaFlag, FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const SelectedPlayer = ({ player, onPlayerRemove }) => {
  const { playerId, name, image, role, biddingPrice } = player;

  return (
    <div className="w-full p-2 container mx-auto">
      <div className="flex items-center bg-base-100 shadow-lg border border-gray-300  w-full h-24 rounded-lg overflow-hidden">
        {/* Left: Player Image (Small and Rounded) */}
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src={image}
            alt="Player"
            className=" ml-8 h-full w-full object-cover rounded-xl "
          />
        </div>

        {/* Center: Player Details */}
        <div className="flex-1 px-6 flex flex-col justify-center">
          {/* Name */}
          <div className="flex items-center mb-1">
            <span className="font-semibold text-base">{name}</span>
          </div>

          {/* player role */}
          <div className="flex items-center mb-1">
            <span className="text-sm">{role}</span>
          </div>

          {/* Price */}
          <div className="flex items-center mb-1">
            <span className="font-semibold text-xl">$</span>
            <span className="text-base">{biddingPrice}</span>
          </div>
        </div>

        {/* Right: Remove Button */}
        <div className="w-1/12 flex justify-center items-center sm:pr-7 pr-2">
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => onPlayerRemove(playerId)}
          >
            <FaTrashAlt className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

SelectedPlayer.propTypes = {
  player: PropTypes.shape({
    playerId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    biddingPrice: PropTypes.number.isRequired,
  }).isRequired,
  onPlayerRemove: PropTypes.func.isRequired,
};

export default SelectedPlayer;
