import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [coinCount, setCoinCount] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Function to increment the coin count and show a toast notification
  const increaseCoin = () => {
    setCoinCount(coinCount + 6000000);
    toast.success("Coin added successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  // Validation: Check if the player is already selected
  const handlePlayerSelect = (player) => {
    const alreadySelectedPlayer = selectedPlayers.find(
      (selectedPlayer) => selectedPlayer.playerId === player.playerId
    );

    if (alreadySelectedPlayer) {
      toast.error("Player has already been selected!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    // Validation: Check if the selected player count is already 6
    if (selectedPlayers.length >= 6) {
      toast.error("You can only select up to 6 players!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    // Check if user has enough coins to select this player
    if (coinCount >= player.biddingPrice) {
      setCoinCount(coinCount - player.biddingPrice);
      setSelectedPlayers([...selectedPlayers, player]);
      toast.success(`${player.name} selected successfully!`, {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.error("Not enough coins to select this player.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  // Function to remove a player from the selected list and add back coins
  const handlePlayerRemove = (playerId) => {
    const playerToRemove = selectedPlayers.find(
      (player) => player.playerId === playerId
    );

    if (playerToRemove) {
      setCoinCount(coinCount + playerToRemove.biddingPrice);
      const updatedPlayers = selectedPlayers.filter(
        (player) => player.playerId !== playerId
      );
      setSelectedPlayers(updatedPlayers);
      toast.info("Player removed successfully! Coins refunded.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      <ToastContainer />

      {/* Navbar */}
      <Navbar coinCount={coinCount} />

      {/* Banner */}
      <Banner increaseCoin={increaseCoin} />

      {/* Available Players */}
      <AvailablePlayers
        onPlayerSelect={handlePlayerSelect}
        selectedPlayers={selectedPlayers}
        onPlayerRemove={handlePlayerRemove}
      />
      {/* Footer  */}
      <Footer></Footer>
    </div>
  );
};

export default App;
