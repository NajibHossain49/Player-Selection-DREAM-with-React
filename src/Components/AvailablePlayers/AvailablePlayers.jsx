import { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import PropTypes from "prop-types";

const AvailablePlayers = ({
  onPlayerSelect,
  selectedPlayers,
  onPlayerRemove,
}) => {
  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [showSelectedPlayers, setShowSelectedPlayers] = useState(false);

  useEffect(() => {
    fetch("UpdatedData.json")
      .then((res) => res.json())
      .then((data) => setAvailablePlayers(data));
  }, []);

  return (
    <div className="container mx-auto relative items-center p-4 mt-14 mb-14 w-full rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0 lg:mx-20">
        {/* Selected Player Count or Available Player Count Display */}
        {showSelectedPlayers ? (
          <div className="text-xl font-semibold text-gray-700">
            Selected Players ({selectedPlayers.length}/6)
          </div>
        ) : (
          <h1 className="text-2xl">
            Available Players: {availablePlayers.length}
          </h1>
        )}

        {/* Toggle Buttons for Available and Selected Players */}
        <div className="flex space-x-2">
          <button
            className={`btn ${
              !showSelectedPlayers
                ? "bg-[#E7FE29] border border-gray-400 text-black"
                : "btn-outline"
            }`}
            onClick={() => setShowSelectedPlayers(false)}
          >
            Available
          </button>

          <button
            className={`btn ${
              showSelectedPlayers
                ? "bg-[#E7FE29] border border-gray-400 text-black"
                : "btn-outline"
            }`}
            onClick={() => setShowSelectedPlayers(true)}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start">
        {!showSelectedPlayers
          ? availablePlayers.map((player, index) => (
              // SinglePlayer Component Called
              <SinglePlayer
                key={index}
                player={player}
                onPlayerSelect={onPlayerSelect}
              />
            ))
          : selectedPlayers.map((player, index) => (
              // SelectedPlayer Component Called
              <SelectedPlayer
                key={index}
                player={player}
                onPlayerRemove={onPlayerRemove}
              />
            ))}
      </div>

      {/* Add More Players Button - positioned at the bottom-left for large devices */}
      {showSelectedPlayers && (
        <div className="absolute bottom left-4 hidden lg:block lg:ml-2">
          <button
            className="btn border border-gray-400 bg-[#E7FE29]"
            onClick={() => setShowSelectedPlayers(false)}
          >
            Add More Players
          </button>
        </div>
      )}
    </div>
  );
};

AvailablePlayers.propTypes = {
  onPlayerSelect: PropTypes.func.isRequired,
  selectedPlayers: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      biddingPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  onPlayerRemove: PropTypes.func.isRequired,
};

export default AvailablePlayers;
