import './Game.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import car from './car.png';
import steering from './steeringwheel.png';
import road from './road.jpeg';

const Game = () => {
  const [activeLane, setActiveLane] = useState(null); 
  const [quota, setQuota] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const navigate = useNavigate();

  // Handle Game Over Alert
  useEffect(() => {
    if (isGameOver) {
      alert("💥 CRASHED!");
      window.location.reload(); // Restarts the game
    }
  }, [isGameOver]);

  // Win condition
  useEffect(() => {
    if (quota >= 3) {
      alert("Shift complete! Roads are safe.");
      navigate("/");
    }
  }, [quota, navigate]);

  // Trigger random swerve
  useEffect(() => {
    if (activeLane === null && !isGameOver) {
      const wait = Math.random() * 2000 + 1000;
      const timer = setTimeout(() => {
        setActiveLane(Math.floor(Math.random() * 3)); 
      }, wait);
      return () => clearTimeout(timer);
    }
  }, [activeLane, isGameOver]);

  // Crash timer
  useEffect(() => {
    if (activeLane !== null && !isGameOver) {
      const crashTimer = setTimeout(() => {
        setIsGameOver(true);
      }, 5000);
      return () => clearTimeout(crashTimer);
    }
  }, [activeLane, isGameOver]);

  const handleCatch = () => {
    setQuota(q => q + 1);
    setActiveLane(null); 
  };

  return (
    <div className="cockpit-view" style={{ backgroundImage: `url(${road})` }}>
      <div>
        {activeLane !== null && (
          <div 
            className={`reckless-car lane-${activeLane}`} 
            onClick={handleCatch}
          >
            <img src={car} alt="car" className="car-image" />
          </div>
        )}
      </div>

      <div className="dashboard">
        <div className="steering-wheel">
          <img src={steering} alt="steering wheel" />
        </div>
        <div className="quota-display">QUOTA: {quota}/3</div>
      </div>
    </div>
  );
};

export default Game;
