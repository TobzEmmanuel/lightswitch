import React, { useState } from 'react';
import './index.css';

const LightSwitch: React.FC = () => {
    const [isLightOn, setIsLightOn] = useState<boolean>(true);
  
    const toggleLight = () => {
      setIsLightOn(!isLightOn);
    };
  
    if (isLightOn) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
  
    return (
      <div>
        <button className='btn' onClick={toggleLight}>
          TURN {isLightOn ? 'OFF' : 'ON'} LIGHT
        </button>
      </div>
    );
  };
  
  export default LightSwitch;
