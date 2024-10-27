import { FaFlag, FaUser } from "react-icons/fa";
import PropTypes from "prop-types";

const SinglePlayer = ({ player, onPlayerSelect }) => {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    player;

  return (
    <div className="p-4 m-2 mx-auto">
      <div className="card bg-base-100 w-full sm:w-96 shadow-2xl border">
        <figure className="px-6 pt-6 sm:px-10 sm:pt-10">
          <img
            // SinglePlayer Image
            src={image}
            alt="Player"
            className="rounded-xl h-40 sm:h-56 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center mb-4">
            <FaUser className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            {/* SinglePlayer Name  */}
            <span className="font-semibold text-sm sm:text-base">{name}</span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <FaFlag className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              {/* SinglePlayer Country */}
              <span className="text-sm sm:text-base">{country}</span>
            </div>
            <button className="border border-gray-300 p-2 sm:p-3 rounded-lg text-xs sm:text-sm">
              {/* SinglePlayer Role */}
              {role}
            </button>
          </div>
          <hr />

          <p className="text-left mb-2 text-sm sm:text-base font-semibold">
            Rating
          </p>

          <div className="flex justify-between mb-2">
            {/* SinglePlayer Type */}
            <span className="text-xs sm:text-sm">{battingType}</span>
            <span className="text-xs sm:text-sm">{bowlingType}</span>
          </div>

          <div className="flex justify-between items-center">
            {/* SinglePlayer biddingPrice */}
            <span className="text-sm sm:text-base">Price: ${biddingPrice}</span>
            <button
              className="btn btn-outline text-xs sm:text-sm"
              onClick={() => onPlayerSelect(player)}
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePlayer.propTypes = {
  player: PropTypes.shape({
    playerId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    battingType: PropTypes.string,
    bowlingType: PropTypes.string,
    biddingPrice: PropTypes.number.isRequired,
  }).isRequired,
  onPlayerSelect: PropTypes.func.isRequired,
};

export default SinglePlayer;
