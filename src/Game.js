import './Game.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const [activeLane, setActiveLane] = useState(null); // null, 0, 1, or 2
  const [quota, setQuota] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const navigate = useNavigate();

  //win
  useEffect(() => {
    if (quota >= 3) {
      alert("Shift complete! Roads are safe.");
      navigate("/");
    }
  }, [quota, navigate]);

  // triggers random swerve function
  useEffect(() => {
    if (activeLane === null && !isGameOver) {
      const wait = Math.random() * 3000 + 2000;
      const timer = setTimeout(() => {
        setActiveLane(Math.floor(Math.random() * 3)); // generates lane 0, 1, or 2 for car
      }, wait);
      return () => clearTimeout(timer);
    }
  }, [activeLane, isGameOver]);

  //if cars don't get clicked in 5 sec, then crash happens
  useEffect(() => {
    if (activeLane !== null) {
      const crashTimer = setTimeout(() => {
        setIsGameOver(true);
      }, 5000);
      return () => clearTimeout(crashTimer);
    }
  }, [activeLane]);

  const handleCatch = () => {
    setQuota(q => q + 1);
    setActiveLane(null); // Clear the car
    // if time permits we add pull over cutscene
  };

  return (
    <div className="cockpit-view">
      <div className="windshield">
        {/* Render the reckless car only if activeLane is set */}
        {activeLane !== null && (
          <div 
            className={`reckless-car lane-${activeLane}`} 
            onClick={handleCatch}
          >
            🚗💨
          </div>
        )}
      </div>

      {/*dashboard ui*/}
      <div className="dashboard">
        <div className="donut">🍩</div>
        <div className="steering-wheel">🎡</div>
        <div className="quota-display">QUOTA: {quota}/3</div>
      </div>

      {isGameOver && <div className="game-over">💥 CRASHED!</div>}
    </div>
  );
};

export default Game;