import React, { useState } from 'react';
import DataOverview from '../components/data/dataOverview';
import DataSidebar from '../components/data/dataSidebar';


function Datapage() {
  const [selectedPlant, setSelectedPlant] = useState('Thyme');
  const [selectedTimeframe, setSelectedTimeframe] = useState('7 Days');

  const handlePlantChange = (event) => {
    setSelectedPlant(event.target.value);
  };

  const handleTimeframeChange = (event) => {
    setSelectedTimeframe(event.target.value);
  };

  return (
    <div className="Dataapp">
      <div className="Datacontent">
        <DataSidebar 
          selectedPlant={selectedPlant} 
          onPlantChange={handlePlantChange}
          selectedTimeframe={selectedTimeframe}
          onTimeframeChange={handleTimeframeChange}
        />
        <DataOverview selectedPlant={selectedPlant} selectedTimeframe={selectedTimeframe} />
      </div>
    </div>
  );
}




export default Datapage;

